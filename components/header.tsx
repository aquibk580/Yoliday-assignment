"use client";

import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
 
  return (
    <div className="flex flex-col space-y-4 p-4 md:flex-row md:items-center md:justify-between md:space-y-0">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Yoliday</h1>
        <div className="flex items-center gap-4 md:hidden">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-[#E84C3D]" />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex md:items-center md:gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-[#E84C3D]" />
          </Button>
          <div className="flex items-center gap-2">
            <img
              src="/user.jpg"
              alt="Profile"
              className="h-10 w-10 rounded-full "
            />
            <div className="hidden md:block">
              <div className="text-sm font-medium">Yoliday</div>
              <div className="text-xs text-gray-500">Manager</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
