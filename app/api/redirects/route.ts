import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const FILE = path.join(process.cwd(), 'redirects.json')

/* ---- Types ---------------------------------------------------------------- */
type Rule = { source: string; destination: string }

/* ---- Helpers -------------------------------------------------------------- */
async function readRules(): Promise<Rule[]> {
  const raw = await fs.readFile(FILE, 'utf-8')
  return JSON.parse(raw) as Rule[]
}

async function writeRules(rules: Rule[]) {
  await fs.writeFile(FILE, JSON.stringify(rules, null, 2))
}

/* ---- Handlers ------------------------------------------------------------- */
export async function GET() {
  return NextResponse.json(await readRules())
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Rule
  const rules = await readRules()
  const filtered = rules.filter(r => r.source !== body.source)
  filtered.push(body)
  await writeRules(filtered)
  return NextResponse.json({ ok: true })
}

export async function DELETE(req: NextRequest) {
  const source = new URL(req.url).searchParams.get('source')
  if (!source) return NextResponse.json({ error: 'source required' }, { status: 400 })
  const rules = (await readRules()).filter(r => r.source !== source)
  await writeRules(rules)
  return NextResponse.json({ ok: true })
}
