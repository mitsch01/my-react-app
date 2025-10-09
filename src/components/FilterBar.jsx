export default function FilterBar({ tags = [], current = 'all', onChange }) {
  return (
    <div className=" py-6 px-4">
      <div className="flex gap-3 flex-wrap">
        <button onClick={() => onChange('all')} className={`px-3 py-1 border ${current === 'all' ? 'bg-accent/50' : ''}`}>All</button>
        <button onClick={() => onChange('books')} className={`px-3 py-1 border ${current === 'books' ? 'bg-accent/50' : ''}`}>Books</button>
        <button onClick={() => onChange('workshops')} className={`px-3 py-1 border ${current === 'workshops' ? 'bg-accent/50' : ''}`}>Workshops</button>
        <button onClick={() => onChange('projects')} className={`px-3 py-1 border ${current === 'projects' ? 'bg-accent/50' : ''}`}>Projects</button>
        {tags.map(tag => (
          <button key={tag} onClick={() => onChange(tag)} className={`px-3 py-1 border ${current === tag ? 'bg-accent/50' : ''}`}>{tag}</button>
        ))}
      </div>
    </div>
  )
}