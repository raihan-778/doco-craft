import { ContentDisplay } from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/lib/doc-utils";

const AuthorPage = async ({ params }) => {
  const { name } = await params;

  const docs = getDocuments();
  const matchedDocs = getDocumentsByAuthor(docs, name);

  console.log("mathced Author", matchedDocs);

  return <ContentDisplay id={matchedDocs[0].id} />;
};

export default AuthorPage;
