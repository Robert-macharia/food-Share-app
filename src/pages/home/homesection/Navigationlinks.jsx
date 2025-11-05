import NavLink from '../../../components/navlinks/NavLink'
import { FiHome, FiInfo, FiUsers, FiMail, FiLogIn } from 'react-icons/fi'

const Navigationlinks = () => {
  return (
    <nav className="absolute top-4 left-0 right-0 z-30">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">♦</div>
          <span className="text-white font-semibold">Foodshare</span>
        </div>

        <div className="hidden md:flex items-center gap-3">

          <NavLink to="/home" icon={<FiHome />} text="Home" light />
          <NavLink to="/how-it-works" icon={<FiInfo />} text="How It Works" light />
          <NavLink to="/about" icon={<FiUsers />} text="About Us" light />
          <NavLink to="/contact" icon={<FiMail />} text="Contact" light />
          
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <NavLink to="/auth/login" icon={<FiLogIn />} text="Login" light />
          </div>
          <button className="md:hidden bg-white/80 text-emerald-700 px-3 py-1 rounded-full">Menu</button>
        </div>
      </div>
    </nav>
  )
}

export default Navigationlinks
