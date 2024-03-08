export const dynamic = "force-dynamic";

import QuillEditor from "@/components/quill-editor/quill-editor";
import { getFileDetails } from "@/lib/supabase/queries";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    folderId: string;
    fileId: string;
  };
};

const File = async ({ params: { folderId, fileId } }: Props) => {
  const { data, error } = await getFileDetails(fileId);
  if (error || !data.length) redirect(`/dashboard/${folderId}`);

  return (
    <div className="relative">
      <QuillEditor
        dirType="file"
        currentFileId={fileId}
        dirDetails={data[0] || {}}
      />
    </div>
  );
};

export default File;
