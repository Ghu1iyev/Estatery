import Header from "./Header"
import Sidebar from "./Sidebar"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex">
        <Sidebar />
        <div className="w-full">
        <Header />
        <main className=""><Outlet /></main>
        </div>
    </div>
  )
}

export default Layout
