'use client';

import {
  UserGroupIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Groups',
    href: '/dashboard/groups',
    icon: UserGroupIcon,
  }
]

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
               'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-gray-300 hover:test-black md:flex-none md:justify-start md:p-2 md:px-3',
               {
                 'bg-gray-300 test-black': pathname === link.href,
               },
             )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  )
}
