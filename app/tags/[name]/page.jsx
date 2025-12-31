import { ContentDisplay } from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/lib/doc-utils";

const TagPage = async ({ params }) => {
  const { name } = await params;

  const docs = getDocuments();
  const matchedDocs = getDocumentsByTag(docs, name);

  console.log("mathced Author", matchedDocs);

  return <ContentDisplay id={matchedDocs[0].id} />;
};

export default TagPage;
