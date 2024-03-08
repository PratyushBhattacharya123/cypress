export const dynamic = "force-dynamic";

import QuillEditor from "@/components/quill-editor/quill-editor";
import { getFolderDetails } from "@/lib/supabase/queries";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    folderId: string;
  };
};

const Folder = async ({ params: { folderId } }: Props) => {
  const { data, error } = await getFolderDetails(folderId);
  if (error || !data.length) redirect(`/dashboard`);

  return (
    <div className="relative">
      <QuillEditor
        dirType="folder"
        currentFileId={folderId}
        dirDetails={data[0] || {}}
      />
    </div>
  );
};

export default Folder;
