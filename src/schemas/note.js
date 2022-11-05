import { MdNote } from "react-icons/md";

export default {
  name: "note",
  title: "Notes",
  type: "document",
  icon: MdNote,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "domain",
      title: "Domain",
      type: "string",
    },
    {
      name: "preset",
      title: "Preset",
      type: "string",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
    },
    {
      name: "dateFrom",
      title: "Date from",
      type: "string",
    },
    {
      name: "dateTo",
      title: "Date to",
      type: "string",
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
      subtitle: "belongsTo.email",
    },
  },
};
