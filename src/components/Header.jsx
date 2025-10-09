import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header>
      <div className="flex items-center justify-between py-6 px-8">
        <Link to="/" className="text-xl font-semibold">Amrei Fiedler</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <button className="md:hidden text-3xl" onClick={()=>setOpen(!open)} aria-label="menu">☰</button>
      </div>
      {open && (
        <div className="md:hidden p-4 border-t">
          <Link to="/portfolio" className="block py-2">Portfolio</Link>
          <Link to="/workshops" className="block py-2">Workshops</Link>
          <Link to="/about" className="block py-2">About</Link>
          <Link to="/contact" className="block py-2">Contact</Link>
        </div>
      )}
    </header>
  )
}