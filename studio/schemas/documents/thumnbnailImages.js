export default {
    name: "thumbnail_images",
    type: "document",
    title: "SubContent",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
        description: "Reference title",
      },
      {
        name: "quote_1",
        type: "string",
        title: "Quote 1",
      },
      {
        name: "image_1",
        type: "mainImage",
        title: "Image 1",
        description: "Images for the intro",
      },
      {
        name: "image_2",
        type: "mainImage",
        title: "Image 2",
      },
      {
        name: "image_3",
        type: "mainImage",
        title: "Image 3",
      },
    ],
  };
  