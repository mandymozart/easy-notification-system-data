export default {
  name: "note",
  title: "Notes",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "text",
    },
    {
      name: "domain",
      title: "Domain",
      type: "string",
      description:
        "Simple domain reference. Currently only demo and one client is available. Extend here in the future",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "optional",
    },
    {
      name: "preset",
      title: "Preset",
      type: "string",
      initialValue: "default",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Unstyled", value: "unstyled" },
        ],
      },
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "draft",
      options: {
        list: [
          { title: "Published", value: "published" },
          { title: "Draft", value: "draft" },
          { title: "Archived", value: "archived" },
        ],
      },
    },
    {
      name: "dateFrom",
      title: "Active from",
      type: "date",
      description: "Leave empty to always display",
    },
    {
      name: "dateTo",
      title: "Active till",
      type: "date",
    },
    {
      name: "belongsTo",
      title: "User",
      type: "reference",
      to: [{ type: "webUser" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "domain",
    },
  },
};
