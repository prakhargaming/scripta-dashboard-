import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-gradient-to-b from-blue-500 to-teal-500 flex flex-col items-center py-4 space-y-6">
      <SidebarIcon icon="🏠" href="/" />
      <SidebarIcon icon="📊" href="/stats" />
      <SidebarIcon icon="📄" href="/documents" />
      <SidebarIcon icon="👤" href="/profile" />
      <SidebarIcon icon="⚙️" href="/settings" />
    </div>
  );
};

const SidebarIcon = ({ icon, href }: { icon: string; href: string }) => {
  return (
    <Link href={href}>
      <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-opacity-20 transition-all duration-200">
        {icon}
      </div>
    </Link>
  );
};

export default Sidebar;