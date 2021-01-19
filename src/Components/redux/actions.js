import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";
// import types from "./types";

const addContact = createAction("contact/add", (data) => {
  return {
    payload: {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    },
  };
});

// const addContact = (data) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name: data.name,
//     number: data.number,
//   },
// });

const deleteContact = createAction("contact/delete");

// const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

const filterContacts = createAction("contact/filter");

// const filterContacts = (value) => ({
//   type: types.FILTER,
//   payload: value,
// });

export default { addContact, deleteContact, filterContacts };
