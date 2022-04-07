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
        name: "authors",
        title: "Past Teachers",
        type: "array",
        of: [
          {
            type: "authorReference",
          },
        ],
      },
    ],
    orderings: [
      {
        title: 'Title, New',
        name: 'titleDesc',
        by: [
          {field: 'title', direction: 'desc'}
        ]
      },
      {
        title: 'Title, Old',
        name: 'titleAsc',
        by: [
          {field: 'title', direction: 'asc'}
        ]
      },
      // {
      //   title: 'Release Date, Old',
      //   name: 'releaseDateAsc',
      //   by: [
      //     {field: 'releaseDate', direction: 'asc'}
      //   ]
      // },
      // {
      //   title: 'Popularity',
      //   name: 'popularityDesc',
      //   by: [
      //     {field: 'popularity', direction: 'desc'}
      //   ]
      // }
    ]
  };
  