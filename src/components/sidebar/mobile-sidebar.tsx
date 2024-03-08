"use client";

import { LogOut, Menu } from "lucide-react";
import React, { useState } from "react";
import CypressPageIcon from "../icons/cypressPageIcon";
import clsx from "clsx";
import LogoutButton from "../global/logout-button";
import TooltipComponent from "../global/tooltip-component";

interface MobileSidebarProps {
  children: React.ReactNode;
}

export const nativeNavigations = [
  {
    title: "Sidebar",
    id: "sidebar",
    customIcon: Menu,
  },
  {
    title: "Pages",
    id: "pages",
    customIcon: CypressPageIcon,
  },
] as const;

const MobileSidebar: React.FC<MobileSidebarProps> = ({ children }) => {
  const [selectedNav, setSelectedNav] = useState("");

  return (
    <>
      {selectedNav === "sidebar" && <>{children}</>}
      <nav className="bg-black/10 backdrop-blur-lg sm:hidden fixed z-50 bottom-0 right-0 left-0 cursor-pointer">
        <ul className="flex justify-between items-center p-4">
          {nativeNavigations.map((item) => (
            <li
              className="flex items-center flex-col justify-center"
              key={item.id}
              onClick={() => {
                setSelectedNav(item.id);
              }}
            >
              <item.customIcon />
              <small
                className={clsx("", {
                  "text-muted-foreground": selectedNav !== item.id,
                })}
              >
                {item.title}
              </small>
            </li>
          ))}
          <li>
            <div className="flex items-center gap-[2px]">
              <span className="text-muted-foreground text-sm">Logout</span>
              <LogoutButton>
                <div className="flex flex-col items-center justify-center">
                  <LogOut size={20} />
                </div>
              </LogoutButton>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileSidebar;
