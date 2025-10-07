import { useEffect, useState } from 'react'
import { fetchAPI } from '../lib/api'
import GalleryGrid from '../components/GalleryGrid'

export default function PortfolioIndex(){
  const [projects, setProjects] = useState([])
  useEffect(()=>{ fetchAPI('/projects').then(setProjects).catch(console.error) }, [])
  return (
    <section>
      <div className="container py-12">
        <h2 className="text-2xl font-semibold mb-6">Portfolio</h2>
        <GalleryGrid items={projects} />
      </div>
    </section>
  )
}