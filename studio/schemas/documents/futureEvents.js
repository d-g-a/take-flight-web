export default {
  name: "future-events",
  type: "document",
  title: "Future Events",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Name of the event",
      description: "e.g. TAKE FLIGHT TOUR",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Some frontends will require a slug to be set to be able to show the person",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "eventDate",
      type: "date",
      title: "Date of the event",
    },
    {
      name: "dates",
      type: "string",
      title: "Date of the event",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "url",
      type: "string",
      title: "Tickets URL",
      description: "Please provide the url for the ticket page",
    },
    {
      name: "image_1",
      type: "mainImage",
      title: "Image 1",
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
    {
      name: "image_4",
      type: "mainImage",
      title: "Image 4",
    },
    {
      name: "image_5",
      type: "mainImage",
      title: "Image 5",
    },
  ],
};
