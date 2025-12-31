import { ContentDisplay } from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/lib/doc-utils";

const CategoryPage = async ({ params }) => {
  const { name } = await params;

  const docs = getDocuments();
  const matchedDocs = getDocumentsByCategory(docs, name);

  console.log("mathced Author", matchedDocs);

  return <ContentDisplay id={matchedDocs[0].id} />;
};

export default CategoryPage;
