import Ajv from "ajv";
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

const schema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    avatar: { type: "string" },
    email: { type: "string" },
    first_name: { type: "string" },
    last_name: { type: "string" },
  },
  required: ["id", "avatar", "email", "first_name", "last_name"],
  additionalProperties: false,
};

export default ajv.compile(schema);
