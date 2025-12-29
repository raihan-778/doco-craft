import fs from "fs";
import matter from "gray-matter";
// import path from 'path';
// import matter from 'gray-matter';
// import html from 'remark-html';
// import remark from 'remark';

const postsDirectory = Path.join(process.cwd(), "docs");

const getDocuments = () => {
  console.log(postsDirectory);

  const fileNames = fs.readdirSync(postsDirectory);
  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    const fullPath = Path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    return 0;
  });
};

export const getDocumentContent = async (id) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
};

export { getDocuments };
