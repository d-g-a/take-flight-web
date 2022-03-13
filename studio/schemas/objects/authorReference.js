export default {
  name: "authorReference",
  type: "object",
  title: "Author reference",
  fields: [
    {
      name: "author",
      type: "reference",
      to: [
        {
          type: "author",
        },
      ],
    },
  ],
};
