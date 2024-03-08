import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import CypressHomeIcon from "../icons/cypressHomeIcon";
import CypressSettingsIcon from "../icons/cypressSettingsIcon";
import CypressTrashIcon from "../icons/cypressTrashIcon";
import Settings from "../settings/settings";
import Trash from "../trash/trash";

interface NativeNavigationProps {
  myWorkspaceId: string;
  className?: string;
  getSelectedElement?: (selection: string) => void;
}

const NativeNavigation: React.FC<NativeNavigationProps> = ({
  myWorkspaceId,
  className,
  getSelectedElement,
}) => {
  return (
    <div className={twMerge("my-2", className)}>
      <ul className="flex flex-col gap-3">
        <li>
          <Link
            href={`/dashboard/${myWorkspaceId}`}
            className="group/native flex text-Neutrals/neutrals-7 transition-all gap-2"
          >
            <CypressHomeIcon />
            <span className="hover:text-neutral-200 transition-all">
              My Workspace
            </span>
          </Link>
        </li>
        <Settings>
          <li className="group/native flex text-Neutrals/neutrals-7 transition-all gap-2 cursor-pointer">
            <CypressSettingsIcon />
            <span className="hover:text-neutral-200 transition-all">
              Settings
            </span>
          </li>
        </Settings>
        <Trash>
          <li className="group/native flex text-Neutrals/neutrals-7 transition-all gap-2">
            <CypressTrashIcon />
            <span className="hover:text-neutral-200 transition-all">Trash</span>
          </li>
        </Trash>
      </ul>
    </div>
  );
};

export default NativeNavigation;
