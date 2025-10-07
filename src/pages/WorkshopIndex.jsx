import { useEffect, useState } from 'react'
import { fetchAPI } from '../lib/api'
import GalleryGrid from '../components/GalleryGrid'

export default function WorkshopIndex(){
  const [items, setItems] = useState([])
  useEffect(()=>{ fetchAPI('/workshops').then(setItems).catch(console.error) }, [])
  return (
    <div className="container py-12">
      <h2 className="text-2xl font-semibold mb-6">Workshops</h2>
      <GalleryGrid items={items} />
    </div>
  )
}