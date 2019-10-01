export const FORM_FIELDS_MAIN = [
  {
    type: "email",
    label: "Email :",
    name: "email",
    placeholder: "ex : julien@yahoo.fr",
    isRequired: true,
  },
  {
    type: "hidden",
    name: "general",
    value: true,
    isRequired: true,
  },
];

export const FORM_FIELDS_FOOTER = [
  {
    type: "email",
    name: "email",
    placeholder: "ex : julien@yahoo.fr",
    isRequired: true,
  },
  {
    type: "hidden",
    name: "general",
    value: true,
    isRequired: true,
  },
];

export default {
  FORM_FIELDS_FOOTER,
  FORM_FIELDS_MAIN,
};
