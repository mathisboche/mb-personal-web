// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import redirects from './redirects.json'

export const config = {
  matcher: ['/(.*)']  // on veut tout intercepter
}

export function middleware(req: NextRequest) {
  /* -------- Zone protégée ---------------- */
  const PROTECTED = ['/admin', '/api/redirects']
  if (PROTECTED.some(p => req.nextUrl.pathname.startsWith(p))) {
    const auth = req.headers.get('authorization') ?? ''
    const [scheme, token] = auth.split(' ')
    if (scheme !== 'Bearer' || token !== process.env.ADMIN_TOKEN) {
      return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
    }
  }

  /* -------- Redirections ----------------- */
  const rule = redirects.find(r => r.source === req.nextUrl.pathname)
  if (rule) {
    return NextResponse.redirect(rule.destination, 308)
  }

  return NextResponse.next()
}
