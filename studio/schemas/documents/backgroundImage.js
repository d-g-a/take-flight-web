export default {
  name: "background-image",
  type: "document",
  title: "Landing Background Image",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "background_image",
      type: "mainImage",
      title: "Background Image",
      description: "This image will be visible in tablet and mobile views only"
    },
  ],
};
