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
      name: "eventDate",
      type: "date",
      title: "Date of the event",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "description",
      type: "string",
      title: "Tickets URL",
      description: "Please provide the url for the ticket page",
    },
  ],
};
