'use client'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

const Navbar = () => {
  const currentRoute = usePathname()
  const groupMenus = [
    [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'My Posts',
        path: '/my-posts',
      },
    ],
    [
      {
        name: 'Login',
        path: '/login',
      },
      {
        name: 'Sign up',
        path: '/sign-up',
      },
    ],
  ]

  return (
    <nav className="py-4 flex justify-between">
      {groupMenus.map((groupMenu, i) => (
        <div className="space-x-2" key={i}>
          {groupMenu.map((menu, i) => (
            <Link
              key={i}
              href={menu.path}
              className={menu.path == currentRoute ? 'font-bold' : ''}
            >
              {menu.name}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  )
}

export default Navbar
