'use client'
import { useEffect, useState } from 'react'

type Rule = { source: string; destination: string }

export default function Admin() {
  const [rules, setRules] = useState<Rule[]>([])
  const [form, setForm] = useState({ source: '', destination: '' })
  const token = process.env.NEXT_PUBLIC_ADMIN_TOKEN!  // côté client

  // Charge les règles
  useEffect(() => {
    fetch('/api/redirects', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(r => r.json())
      .then(setRules)
  }, [])

  const save = async () => {
    await fetch('/api/redirects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(form)
    })
    setRules(r => [...r.filter(f => f.source !== form.source), form])
    setForm({ source: '', destination: '' })
  }

  const delRule = async (source: string) => {
    await fetch('/api/redirects?source=' + encodeURIComponent(source), {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
    setRules(r => r.filter(f => f.source !== source))
  }

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="font-display text-3xl mb-6">Gestion des liens courts</h1>

      {/* Formulaire */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <input
          placeholder="/slug"
          className="flex-1 rounded-lg bg-white/10 p-3"
          value={form.source}
          onChange={e => setForm({ ...form, source: e.target.value })}
        />
        <input
          placeholder="https://destination.url"
          className="flex-[3] rounded-lg bg-white/10 p-3"
          value={form.destination}
          onChange={e => setForm({ ...form, destination: e.target.value })}
        />
        <button
          onClick={save}
          className="rounded-lg bg-orange-500 px-4 py-2 font-semibold"
        >
          Enregistrer
        </button>
      </div>

      {/* Liste */}
      <table className="w-full text-left">
        <thead className="text-orange-400 border-b border-white/10">
          <tr>
            <th className="py-2">Source</th>
            <th className="py-2">Destination</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {rules.map(r => (
            <tr key={r.source} className="border-b border-white/5">
              <td className="py-2 font-mono">{r.source}</td>
              <td className="py-2 truncate">{r.destination}</td>
              <td className="py-2">
                <button
                  onClick={() => delRule(r.source)}
                  className="text-red-400 hover:underline"
                >
                  Suppr
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
