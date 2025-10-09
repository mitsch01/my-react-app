import { useEffect, useState } from 'react'
import { fetchAPI } from '../lib/api'

export default function About() {
  const [page, setPage] = useState(null)
  useEffect(() => { fetchAPI('/pages?filters[slug][$eq]=about').then(data => setPage(data[0])).catch(console.error) }, [])
  return (
    <div className="py-12 px-4">
      <h2 className="text-2xl font-semibold mb-4">About</h2>
      <div className="prose max-w-none">{page ? page.attributes.content : 'Loading…'}</div>
    </div>
  )
}