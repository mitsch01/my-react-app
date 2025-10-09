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

  const testItems = [
    {
      id: 1,
      attributes: {
        title: 'Autumn Fields',
        slug: 'autumn-fields',
        cover: {
          data: {
            attributes: {
              url: 'https://picsum.photos/400/300?random=1',
              formats: { small: { url: 'https://picsum.photos/300/200?random=1' } },
            },
          },
        },
      },
    },
    {
      id: 2,
      attributes: {
        title: 'Calm Ocean',
        slug: 'calm-ocean',
        cover: {
          data: {
            attributes: {
              url: 'https://picsum.photos/400/300?random=2',
              formats: { small: { url: 'https://picsum.photos/300/200?random=2' } },
            },
          },
        },
      },
    },
    {
      id: 3,
      attributes: {
        title: 'City Sketch',
        slug: 'city-sketch',
        cover: {
          data: {
            attributes: {
              url: 'https://picsum.photos/400/300?random=3',
              formats: { small: { url: 'https://picsum.photos/300/200?random=3' } },
            },
          },
        },
      },
    },
    {
      id: 4,
      attributes: {
        title: 'Evening Glow',
        slug: 'evening-glow',
        cover: {
          data: {
            attributes: {
              url: 'https://picsum.photos/400/300?random=4',
              formats: { small: { url: 'https://picsum.photos/300/200?random=4' } },
            },
          },
        },
      },
    },
    {
      id: 5,
      attributes: {
        title: 'Forest Path',
        slug: 'forest-path',
        cover: {
          data: {
            attributes: {
              url: 'https://picsum.photos/400/300?random=5',
              formats: { small: { url: 'https://picsum.photos/300/200?random=5' } },
            },
          },
        },
      },
    },
    {
      id: 6,
      attributes: {
        title: 'Mountain Light',
        slug: 'mountain-light',
        cover: {
          data: {
            attributes: {
              url: 'https://picsum.photos/400/300?random=6',
              formats: { small: { url: 'https://picsum.photos/300/200?random=6' } },
            },
          },
        },
      },
    },
    {
      id: 7,
      attributes: {
        title: 'Quiet Morning',
        slug: 'quiet-morning',
        cover: {
          data: {
            attributes: {
              url: 'https://picsum.photos/400/300?random=7',
              formats: { small: { url: 'https://picsum.photos/300/200?random=7' } },
            },
          },
        },
      },
    },
    {
      id: 8,
      attributes: {
        title: 'Golden Hour',
        slug: 'golden-hour',
        cover: {
          data: {
            attributes: {
              url: 'https://picsum.photos/400/300?random=8',
              formats: { small: { url: 'https://picsum.photos/300/200?random=8' } },
            },
          },
        },
      },
    },
    {
      id: 9,
      attributes: {
        title: 'Riverside Calm',
        slug: 'riverside-calm',
        cover: {
          data: {
            attributes: {
              url: 'https://picsum.photos/400/300?random=9',
              formats: { small: { url: 'https://picsum.photos/300/200?random=9' } },
            },
          },
        },
      },
    },
    {
      id: 10,
      attributes: {
        title: 'Desert Hues',
        slug: 'desert-hues',
        cover: {
          data: {
            attributes: {
              url: 'https://picsum.photos/400/300?random=10',
              formats: { small: { url: 'https://picsum.photos/300/200?random=10' } },
            },
          },
        },
      },
    },
    {
      id: 11,
      attributes: {
        title: 'Midnight Sky',
        slug: 'midnight-sky',
        cover: {
          data: {
            attributes: {
              url: 'https://picsum.photos/400/300?random=11',
              formats: { small: { url: 'https://picsum.photos/300/200?random=11' } },
            },
          },
        },
      },
    },
    {
      id: 12,
      attributes: {
        title: 'Winter Silence',
        slug: 'winter-silence',
        cover: {
          data: {
            attributes: {
              url: 'https://picsum.photos/400/300?random=12',
              formats: { small: { url: 'https://picsum.photos/300/200?random=12' } },
            },
          },
        },
      },
    },
  ]

  return (
    <div>
      <HeroSection title="Illustrationen & Workshops" subtitle='"Du kannst alles drehen! Außer die Welt, die dreht sich von ganz allein!" (Buchkinder Leipzig)'/>
      <FilterBar tags={tags} current={filter} onChange={setFilter} />
      {/* <GalleryGrid items={filtered} /> */}
      <GalleryGrid items={testItems} />

    </div>
  )
}