import { MdPerson } from "react-icons/md";
import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

export default {
  name: "webUser",
  title: "Website Users",
  type: "document",
  icon: MdPerson,
  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
    },
    {
      name: "domain",
      title: "Domain",
      type: "string",
    },
  ],
};
