import HeroSection from '../components/HeroSection'
import FilterBar from '../components/FilterBar'
import GalleryGrid from '../components/GalleryGrid'
import { useEffect, useState } from 'react'
import { fetchAPI } from '../lib/api'

export default function Home(){
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState('all')
  const [tags, setTags] = useState([])

  useEffect(()=>{
    fetchAPI('/projects').then(data => {
      setProjects(data)
      const t = Array.from(new Set(data.map(d=>d.attributes.category)))
      setTags(t)
    }).catch(console.error)
  },[])

  const filtered = filter === 'all' ? projects : projects.filter(p => p.attributes.category === filter)

  return (
    <div>
      <HeroSection title="Illustrationen & Projekte" subtitle="Geschichten, Workshops und Auftragsarbeiten" />
      <h1 className="text-4xl text-pink-500 font-bold text-center">Hello World</h1>
      <div className="bg-green-500 p-10 text-white">Tailwind test</div>
      <FilterBar tags={tags} current={filter} onChange={setFilter} />
      <GalleryGrid items={filtered} />
    </div>
  )
}