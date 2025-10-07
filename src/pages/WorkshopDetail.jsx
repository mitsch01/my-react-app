import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../lib/api'

export default function WorkshopDetail(){
  const { slug } = useParams()
  const [item, setItem] = useState(null)
  useEffect(()=>{ fetchAPI(`/workshops?filters[slug][$eq]=${slug}`).then(data=>setItem(data[0])).catch(console.error) },[slug])
  if(!item) return <div className="container py-12">Loading…</div>
  const images = item.attributes.images?.data || []
  return (
    <div className="container py-12 grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map(img => <img key={img.id} src={img.attributes.formats?.large?.url || img.attributes.url} className="w-full h-64 object-cover rounded" />)}
        </div>
      </div>
      <aside>
        <h1 className="text-2xl font-semibold">{item.attributes.title}</h1>
        <div className="mt-4 text-gray-700">{item.attributes.description}</div>
      </aside>
    </div>
  )
}