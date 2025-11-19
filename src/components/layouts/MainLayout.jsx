import { Outlet } from 'react-router-dom'
import TopNav from '../navlinks/TopNav'

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-[#f6f5e8] text-gray-800">
            <TopNav />
            <main className="pt-10">
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout
