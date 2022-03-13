export default {
    name: "teachers",
    type: "document",
    title: "Teachers",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
      },
      {
        name: "description",
        type: "text",
        title: "Description",

      },
      {
        name: "authors",
        title: "Authors",
        type: "array",
        of: [
          {
            type: "authorReference",
          },
        ],
      },
    ],
  };
  