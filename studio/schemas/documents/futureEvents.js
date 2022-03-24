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
      name: "eventAlias",
      type: "string",
      title: "Event Alias",
      description: "For the marquee text",
    },
    {
      name: "location",
      type: "string",
      title: "Location",
    },
    {
      name: "city",
      type: "string",
      title: "City",
    },
    {
      name: "dates",
      type: "string",
      title: "Date of the event",
    },
    {
      name: "thumbnail",
      type: "text",
      title: "Thumbnail Text",
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
      description: "First image also works as the thumbnail image",
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
    {
      name: "image_6",
      type: "mainImage",
      title: "Image 6",
    },
  ],
};
