import { Link } from 'react-router-dom'
export default function GalleryGrid({items = []}){
  return (
    <div className="container py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(item=>{
          const img = item.attributes?.cover?.data?.attributes?.formats?.small?.url || item.attributes?.cover?.data?.attributes?.url
          return (
            <Link key={item.id} to={`/portfolio/${item.attributes.slug}`} className="block rounded overflow-hidden bg-gray-50">
              <img src={img} alt={item.attributes.title} className="w-full h-48 object-cover" />
              <div className="p-3 text-sm">{item.attributes.title}</div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}