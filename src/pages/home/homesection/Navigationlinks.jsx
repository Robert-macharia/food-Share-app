import NavLink from '../../../components/navlinks/NavLink'
import { FiHome, FiInfo, FiUsers, FiMail, FiLogIn } from 'react-icons/fi'

const Navigationlinks = () => {
  return (
    <nav className="hidden md:flex items-center gap-3">
          <NavLink to="/home" icon={<FiHome />} text="Home" light />
          <NavLink to="/how-it-works" icon={<FiInfo />} text="How It Works" light />
          <NavLink to="/about" icon={<FiUsers />} text="About Us" light />
          <NavLink to="/contact" icon={<FiMail />} text="Contact" light />

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <NavLink to="/auth/login" icon={<FiLogIn />} text="Login" light />
          </div>
        </div>
        
    </nav>
  )
}

export default Navigationlinks
