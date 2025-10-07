export default function FilterBar({tags = [], current='all', onChange}){
  return (
    <div className="container py-6">
      <div className="flex gap-3 flex-wrap">
        <button onClick={()=>onChange('all')} className={`px-3 py-1 border ${current==='all' ? 'bg-accent/50' : ''}`}>All</button>
        {tags.map(tag => (
          <button key={tag} onClick={()=>onChange(tag)} className={`px-3 py-1 border ${current===tag ? 'bg-accent/50' : ''}`}>{tag}</button>
        ))}
      </div>
    </div>
  )
}