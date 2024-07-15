// components/Layout.tsx
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-screen bg-gray-900 text-white">
    <div className="flex flex-col flex-grow">
      <main className="flex-grow p-6">{children}</main>
    </div>
  </div>
)

export default Layout