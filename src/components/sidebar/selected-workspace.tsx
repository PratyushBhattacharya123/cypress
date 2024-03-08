"use client";

import { workspace } from "@/lib/supabase/supabase.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";
import Logo from "../../../public/cypresslogo.svg";
import Link from "next/link";
import Image from "next/image";

interface SelectedWorkspaceProps {
  workspace: workspace;
  onClick?: (option: workspace) => void;
}

const SelectedWorkspace: React.FC<SelectedWorkspaceProps> = ({
  workspace,
  onClick,
}) => {
  const supabase = createClientComponentClient();
  const [workspaceLogo, setWorkspaceLogo] = useState(Logo);

  useEffect(() => {
    if (workspace.logo) {
      const path = supabase.storage
        .from("workspace-logos")
        .getPublicUrl(workspace.logo)?.data.publicUrl;
      setWorkspaceLogo(path);
    }
  }, [workspace]);

  return (
    <Link
      href={`/dashboard/${workspace.id}`}
      onClick={() => {
        if (onClick) onClick(workspace);
      }}
      className="flex rounded-md hover:bg-muted transition-all flex-row p-2 gap-4 justify-center items-center cursor-pointer my-2"
    >
      <Image
        src={workspaceLogo}
        alt="Workspace Logo"
        width={26}
        height={26}
        objectFit="cover"
        className="ml-4"
      />
      <div className="flex flex-col">
        <p className="text-lg w-[170px] overflow-hidden overflow-ellipsis whitespace-nowrap">
          {workspace.title}
        </p>
      </div>
    </Link>
  );
};

export default SelectedWorkspace;
