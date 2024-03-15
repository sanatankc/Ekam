import { defineConfig } from "tinacms";
// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "73cb9138-5acb-4a5a-8f26-13c24465ba00", // Get this from tina.io
  token: "32c41415ead66de5cec889a856131f532684e39c", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "blogs",
        label: "Blogs",
        path: "src/content/blogs",
        fields: [
          { type: "string", name: "category", label: "Category" },
          { type: "datetime", name: "publishedDate", label: "Published Date" },
          { type: "string", name: "title", label: "Title" },
          { type: 'image', name: 'thumbnail', label: 'Thumbnail' },
          { type: "rich-text", name: "caption", label: "Caption" },
          { type: "rich-text", name: "blog", label: "Blog" },
        ]
      },
    ],
  },
});
