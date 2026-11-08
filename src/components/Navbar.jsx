import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/tools', label: 'Tools' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false) 

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-line">
      <div className="flex items-center justify-between h-[68px] px-5 md:px-10">
        <Link to="/" aria-label="Endloops home">
          <img src={logo} alt="Endloops" className="h-9" />
        </Link>

        <button
          className="md:hidden border-2 border-line rounded-lg px-3 py-1 text-xl"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <nav
          className={
            (open ? 'flex' : 'hidden') +
            ' md:flex absolute md:static top-full inset-x-0 flex-col md:flex-row items-start md:items-center gap-5 md:gap-8 bg-white md:bg-transparent p-5 md:p-0 border-b md:border-0 border-line font-semibold'
          }
        >
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => 'hover:text-g ' + (isActive ? 'text-g' : '')}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-main">
            Request a demo
          </Link>
        </nav>
      </div>
    </header>
  )
}