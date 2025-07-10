'use client'

import { useEffect, useState } from 'react'
import {
  ArrowLeft, Plus, Save, Trash2, Copy, Languages
} from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'               // npm i sonner
import clsx from 'clsx'                      // npm i clsx

type Rule = { source: string; destination: string }

const API = '/api/redirects'
const token = process.env.NEXT_PUBLIC_ADMIN_TOKEN!

export default function Admin() {
  /* ------------------------------------------------------------------ */
  /* Langue (simple) --------------------------------------------------- */
  const [lang, setLang] = useState<'fr' | 'en'>(
    typeof window !== 'undefined' && navigator.language.startsWith('fr')
      ? 'fr' : 'en'
  )
  const t = translations[lang]

  /* ------------------------------------------------------------------ */
  /* Data -------------------------------------------------------------- */
  const [rules, setRules] = useState<Rule[]>([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState<Rule>({ source: '', destination: '' })
  const [editing, setEditing] = useState(false)

  /* ---- Fetch ------------------------------------------------------- */
  useEffect(() => {
    fetch(API, { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.json())
      .then(data => { setRules(data); setLoading(false) })
      .catch(() => toast.error('API error'))
  }, [token])

  /* ---- Handlers ---------------------------------------------------- */
  const reset = () => { setForm({ source: '', destination: '' }); setEditing(false) }

  const handleSave = async () => {
    if (!form.source || !form.destination) return
    await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(form)
    })
    toast.success(editing ? t.updated : t.added)
    setRules(r =>
      [...r.filter(x => x.source !== form.source), form].sort((a, b) =>
        a.source.localeCompare(b.source)
      )
    )
    reset()
  }

  const handleDelete = async (src: string) => {
    await fetch(`${API}?source=${encodeURIComponent(src)}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
    toast.success(t.deleted)
    setRules(r => r.filter(x => x.source !== src))
  }

  const handleCopy = (src: string) => {
    navigator.clipboard.writeText(`${window.location.origin}${src}`)
    toast.success(t.copied)
  }

  /* ------------------------------------------------------------------ */
  /* UI ---------------------------------------------------------------- */
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-neutral-100 selection:bg-orange-500/80 selection:text-neutral-900">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-gradient-to-br from-[#0b1e40] via-[#141327] to-black" />
      <div className="pointer-events-none absolute -z-10 top-[-10%] left-[60%] h-[35rem] w-[35rem] rounded-full bg-orange-500 mix-blend-soft-light blur-3xl opacity-10 animate-spin-slow" />
      <div className="pointer-events-none fixed -z-10 -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-indigo-600 mix-blend-soft-light blur-3xl opacity-10 animate-spin-reverse" />

      {/* Nav */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-3 text-sm font-medium">
        {(['fr', 'en'] as const).map(code => (
          <button
            key={code}
            onClick={() => setLang(code)}
            className={clsx(
              'transition-colors',
              lang === code
                ? 'text-orange-400'
                : 'text-neutral-400 hover:text-orange-400'
            )}
          >
            {code.toUpperCase()}
          </button>
        ))}
      </div>

      <Link
        href="/"
        className="fixed top-4 left-4 flex items-center gap-1 text-orange-400 hover:underline"
      >
        <ArrowLeft size={18} /> {t.backHome}
      </Link>

      {/* Card */}
      <section className="mx-auto mt-28 w-[95vw] max-w-4xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-2xl">
        <h1 className="font-display text-3xl sm:text-4xl text-orange-400 mb-6">
          {t.title}
        </h1>

        {/* Form */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            placeholder="/slug"
            className="flex-1 rounded-xl bg-white/10 p-3 outline-none placeholder:text-neutral-400"
            value={form.source}
            onChange={e => setForm({ ...form, source: e.target.value.trim().startsWith('/') ? e.target.value.trim() : '/' + e.target.value.trim() })}
          />
          <input
            placeholder="https://destination.url"
            className="flex-[3] rounded-xl bg-white/10 p-3 outline-none placeholder:text-neutral-400"
            value={form.destination}
            onChange={e => setForm({ ...form, destination: e.target.value })}
          />
          <button
            onClick={handleSave}
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-2 font-semibold transition hover:brightness-110"
          >
            {editing ? <Save size={18} /> : <Plus size={18} />}
            {editing ? t.updateBtn : t.addBtn}
          </button>
        </div>

        {/* Table */}
        {loading ? (
          <p className="text-neutral-400">{t.loading}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="text-orange-400 border-b border-white/10">
                <tr>
                  <th className="py-2">Source</th>
                  <th className="py-2">Destination</th>
                  <th className="py-2 w-32" />
                </tr>
              </thead>
              <tbody>
                {rules.map(r => (
                  <tr key={r.source} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-2 font-mono">{r.source}</td>
                    <td className="py-2 truncate">{r.destination}</td>
                    <td className="py-2 flex gap-3">
                      <button
                        onClick={() => {
                          setForm(r); setEditing(true)
                        }}
                        title={t.edit}
                        className="hover:text-orange-400"
                      >
                        <Save size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(r.source)}
                        title={t.delete}
                        className="hover:text-red-400"
                      >
                        <Trash2 size={16} />
                      </button>
                      <button
                        onClick={() => handleCopy(r.source)}
                        title={t.copy}
                        className="hover:text-orange-400"
                      >
                        <Copy size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  )
}

/* -------------------------------------------------------------------- */
/* Traductions minimalistes ------------------------------------------- */
const translations = {
  fr: {
    title: 'Gestion des liens courts',
    addBtn: 'Ajouter',
    updateBtn: 'Mettre à jour',
    added: 'Lien ajouté !',
    updated: 'Lien mis à jour !',
    deleted: 'Lien supprimé',
    copied: 'Lien copié',
    loading: 'Chargement…',
    edit: 'Éditer',
    delete: 'Supprimer',
    copy: 'Copier URL',
    backHome: 'Accueil'
  },
  en: {
    title: 'Short-link manager',
    addBtn: 'Add',
    updateBtn: 'Update',
    added: 'Link added!',
    updated: 'Link updated!',
    deleted: 'Link deleted',
    copied: 'URL copied',
    loading: 'Loading…',
    edit: 'Edit',
    delete: 'Delete',
    copy: 'Copy URL',
    backHome: 'Home'
  }
} as const
