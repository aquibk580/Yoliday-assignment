import { Home, BookCopy, FileInputIcon as Input, User } from "lucide-react"
import Link from "next/link"

const navigation = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Portfolio", href: "/", icon: BookCopy },
  { name: "Input", href: "#", icon: Input },
  { name: "Profile", href: "#", icon: User },
]

export function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
      <div className="grid grid-cols-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex flex-col items-center justify-center p-4 text-gray-600 hover:text-[#E84C3D]"
          >
            <item.icon className="h-6 w-6" />
            <span className="mt-1 text-xs">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

