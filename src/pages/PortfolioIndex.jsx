import { useEffect, useState } from 'react'
import { fetchAPI } from '../lib/api'
import GalleryGrid from '../components/GalleryGrid'

export default function PortfolioIndex() {
  // const [projects, setProjects] = useState([])
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
              formats: {
                small: {
                  url: 'https://picsum.photos/300/200?random=1'
                }
              }
            }
          }
        }
      }
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
              formats: {
                small: {
                  url: 'https://picsum.photos/300/200?random=2'
                }
              }
            }
          }
        }
      }
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
              formats: {
                small: {
                  url: 'https://picsum.photos/300/200?random=3'
                }
              }
            }
          }
        }
      }
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
              formats: {
                small: {
                  url: 'https://picsum.photos/300/200?random=4'
                }
              }
            }
          }
        }
      }
    }
  ]

  // useEffect(() => { fetchAPI('/projects').then(setProjects).catch(console.error) }, [])
  return (
    <section>
      <div className="py-12 px-4">
        <h2 className="text-2xl font-semibold mb-6">Portfolio</h2>
        {/* <GalleryGrid items={projects} /> */}
        <GalleryGrid items={testItems} />
      </div>
    </section>
  )
}