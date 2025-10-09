export default function RelatedWorkSlider({ items = [] }) {
  return (
    <div className=" py-8">
      <h3 className="text-lg font-semibold mb-4">Related Work</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(it => {
          const img = it.attributes?.cover?.data?.attributes?.formats?.small?.url || it.attributes?.cover?.data?.attributes?.url
          return (
            <a key={it.id} href={`/portfolio/${it.attributes.slug}`} className="block rounded overflow-hidden bg-gray-50">
              <img src={img} alt={it.attributes.title} className="w-full h-36 object-cover" />
            </a>
          )
        })}
      </div>
    </div>
  )
}