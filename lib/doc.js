// import fs from "fs";
// import matter from "gray-matter";

// import path from "path";
// import { remark } from "remark";

// import html from "remark-html";

// const postsDirectory = path.join(process.cwd(), "docs");

// const getAllDocument = () => {
//   if (!fs.existsSync(postsDirectory)) {
//     return [];
//   }
//   console.log(postsDirectory);

//   const fileNames = fs.readdirSync(postsDirectory);
//   const allDocuments = fileNames.map((fileName) => {
//     const id = fileName.replace(".md", "");
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf8");
//     const matterResult = matter(fileContents);

//     return {
//       id,
//       ...matterResult.data,
//     };
//   });

//   return allDocuments.sort((a, b) => {
//     if (a.order < b.order) {
//       return -1;
//     }
//     if (a.order > b.order) {
//       return 1;
//     }
//     return 0;
//   });
// };

// const getDocumentContent = async (id) => {
//   const fullPath = path.join(postsDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   const matterResult = matter(fileContents);
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   console.log("matter result", matterResult.data, "contentHtml", contentHtml);

//   return { id, contentHtml, ...matterResult.data };
// };

// export { getAllDocument, getDocumentContent };

import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
  console.log(postsDirectory);
  const fileNames = fs.readdirSync(postsDirectory);

  const allDocumnets = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");

    const fullPath = path.join(postsDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allDocumnets.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    return 0;
  });
}

export async function getDocumentContent(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
