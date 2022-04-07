export default {
    name: "experience-text",
    type: "document",
    title: "Experience text",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Name of the event",
        description: "e.g. TAKE FLIGHT TOUR",
      },
      {
        name: "description",
        type: "text",
        title: "Description",
      },
      {
        name: "image_1",
        type: "mainImage",
        title: "Image 1",
        description: "Images for the intro",
      },
    ],
  };
  