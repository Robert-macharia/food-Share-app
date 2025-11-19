import React, { useEffect, useState, useRef } from 'react'
import NavLink from './NavLink'
import { Link } from 'react-router-dom'
import Navigationlinks from '../../pages/home/homesection/Navigationlinks'

const TopNav = () => {
    const [visible, setVisible] = useState(true)
    const [lastY, setLastY] = useState(0)
    const [mobileOpen, setMobileOpen] = useState(false)
    const menuRef = useRef(null)



    useEffect(() => {
        let rafId = null
        const onScroll = () => {
            const currentY = window.scrollY || window.pageYOffset
            if (rafId) return
            rafId = window.requestAnimationFrame(() => {
                if (currentY > lastY && currentY > 60) {
                    setVisible(false)
                } else {
                    setVisible(true)
                }
                setLastY(currentY)
                rafId = null
            })
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', onScroll)
            if (rafId) window.cancelAnimationFrame(rafId)
        }
    }, [lastY])

    // close mobile menu on outside click
    useEffect(() => {
        const onDocClick = (e) => {
            if (mobileOpen && menuRef.current && !menuRef.current.contains(e.target)) {
                setMobileOpen(false)
            }
        }
        document.addEventListener('click', onDocClick)
        return () => document.removeEventListener('click', onDocClick)
    }, [mobileOpen])

    return (
        <header
            className={'fixed  inset-x-0 top-0 z-50 transform transition-transform duration-300 ease-out ' + (visible ? 'translate-y-0' : '-translate-y-full')}>
            <div className="bg-[#1f7a4b] bg-opacity-95 backdrop-blur-sm shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                    <Link to="/home" className="text-white font-extrabold text-lg rounded-md">FoodShare</Link>

                    <Navigationlinks />
                    {/* Mobile */}
                    
                    <div className="md:hidden relative" ref={menuRef}>
                        <button
                            onClick={() => setMobileOpen((s) => !s)}
                            aria-expanded={mobileOpen}
                            aria-label="Toggle menu"
                            className="bg-white/90 text-[#1f7a4a] p-2 rounded-md"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                {mobileOpen ? (
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                ) : (
                                    <path fillRule="evenodd" d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2z" clipRule="evenodd" />
                                )}
                            </svg>
                        </button>

                        {mobileOpen && (
                            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="flex flex-col p-3 gap-3">
                                    <NavLink to="/home" text="Home" light={false} onClick={() => setMobileOpen(false)} />
                                    <NavLink to="/about" text="About" light={false} onClick={() => setMobileOpen(false)} />
                                    <NavLink to="/how-it-works" text="How It Works" light={false} onClick={() => setMobileOpen(false)} />
                                    <NavLink to="/contact" text="Contact" light={false} onClick={() => setMobileOpen(false)} />
                                    <NavLink to="/share-food" text="Share Food" light={false} onClick={() => setMobileOpen(false)} />
                                    <NavLink to="/auth/login" text="Login" light={false} onClick={() => setMobileOpen(false)} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default TopNav
