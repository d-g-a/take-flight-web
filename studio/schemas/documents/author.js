export default {
  name: "author",
  type: "document",
  title: "Teachers",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "handle",
      type: "string",
      title: "Instagram handle",
      description: "Please write the IG handle without @"
    },
    {
      name: "nationality",
      type: "string",
      title: "Nationality",
    },
    {
      name: "image",
      type: "mainImage",
      title: "Image",
    },
  ],
};
