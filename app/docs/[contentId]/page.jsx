import { ContentDisplay } from "@/components/ContentDisplay";
import { getDocumentContent } from "@/lib/doc";

const DocContentPage = async ({ params }) => {
  const { contentId } = await params;

  // const documentContent = await getDocumentContent(contentId);
  // console.log("contentId", documentContent);
  return (
    <div>
      {" "}
      <ContentDisplay id={contentId} />
    </div>
  );
};

export default DocContentPage;
