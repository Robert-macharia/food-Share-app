import { NavLink as RouterNavLink } from 'react-router-dom'

const NavLink = ({ to = '#', icon, text, light =true, onClick }) => {
  const base = 'flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition'

  const lightClasses = (isActive) =>
    isActive
      ? 'bg-white text-emerald-700 font-semibold'
      : 'text-white hover:bg-white/10 hover:text-white/95'

  const darkClasses = (isActive) =>
    isActive
      ? 'bg-emerald-50 text-emerald-700 font-semibold'
      : 'text-gray-700 hover:text-emerald-700 hover:bg-emerald-50'

  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => `${base} ${light ? lightClasses(isActive) : darkClasses(isActive)}`}
    >
      {icon && <span className="text-lg leading-none">{icon}</span>}
      <span>{text}</span>
    </RouterNavLink>
  )
}

export default NavLink
