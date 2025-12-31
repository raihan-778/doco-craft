import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import Tag from "./Tag";

export const ContentDisplay = async ({ id }) => {
  const contentToDisplay = await getDocumentContent(id);

  //   console.log("content to Displsy", contentToDisplay);

  return (
    <article className="prose dark:prose-invert">
      <h1>{contentToDisplay.title}</h1>
      <div>
        <span>Published On: {contentToDisplay.date}</span> by{" "}
        <Link
          className="link-green"
          href={`/authors/${contentToDisplay.author}`}
        >
          {contentToDisplay.author}
        </Link>{" "}
        under the{" "}
        <Link href={`/categories/${contentToDisplay.category}`}>
          {contentToDisplay.category}
        </Link>{" "}
        category.
      </div>
      <div>
        {contentToDisplay.tags &&
          contentToDisplay.tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>
      <div
        className="lead"
        dangerouslySetInnerHTML={{ __html: contentToDisplay.contentHtml }}
      />
    </article>
  );
};
