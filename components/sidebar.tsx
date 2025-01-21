import {
  LayoutDashboard,
  BookCopy,
  FileInputIcon as Input,
  User,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Portfolio", href: "/", icon: BookCopy },
  { name: "Inputs", href: "#", icon: Input },
  { name: "Profile", href: "#", icon: User },
];

export function Sidebar() {
  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <div className="flex min-h-0 flex-1 flex-col bg-[#DF5532] space-y-16">
        <div className="flex h-16 flex-shrink-0 items-center px-4">
          <span className="text-xl font-semibold text-white flex flex-row justify-center items-center gap-2 px-3  ">
            <img src="./logo.png" alt="logo" />
            Yoliday
          </span>
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto">
          <nav className="flex-1 space-y-4 px-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center px-6  py-2 text-sm font-medium text-white hover:bg-[#FFAD98] rounded-l-lg"
                )}
              >
                <item.icon className="mr-3 h-6 w-6 flex-shrink-0" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
