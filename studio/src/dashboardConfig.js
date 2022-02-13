export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62098821abc9c06da84c5913",
                  title: "Sanity Studio",
                  name: "take-flight-web-studio",
                  apiId: "dc8a957a-c68f-4cef-a8c6-5d4b5661bfd1",
                },
                {
                  buildHookId: "620988201146d74562c989dc",
                  title: "Blog Website",
                  name: "take-flight-web",
                  apiId: "2af7c657-951f-4345-b01b-67aaf1e8198b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/dieglitter/take-flight-web",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://take-flight-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
