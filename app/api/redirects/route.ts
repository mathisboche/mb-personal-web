import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
const FILE = path.join(process.cwd(), 'redirects.json')

// GET : liste complète
export async function GET() {
  const raw = await fs.readFile(FILE, 'utf-8')
  return NextResponse.json(JSON.parse(raw))
}

// POST : ajoute ou remplace une règle
export async function POST(req: NextRequest) {
  const body = await req.json()  // {source, destination}
  const raw = await fs.readFile(FILE, 'utf-8')
  const rules = JSON.parse(raw)

  // on écrase si la source existe déjà
  const filtered = rules.filter((r: any) => r.source !== body.source)
  filtered.push(body)

  await fs.writeFile(FILE, JSON.stringify(filtered, null, 2))
  return NextResponse.json({ ok: true })
}

// DELETE : supprime
export async function DELETE(req: NextRequest) {
  const url = new URL(req.url)
  const source = url.searchParams.get('source')
  if (!source) return NextResponse.json({ error: 'source required' }, { status: 400 })

  const raw = await fs.readFile(FILE, 'utf-8')
  const rules = JSON.parse(raw).filter((r: any) => r.source !== source)
  await fs.writeFile(FILE, JSON.stringify(rules, null, 2))
  return NextResponse.json({ ok: true })
}
