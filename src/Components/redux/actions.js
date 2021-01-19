import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const addContact = createAction("contact/add", (data) => {
  return {
    payload: {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    },
  };
});

const deleteContact = createAction("contact/delete");

const filterContacts = createAction("contact/filter");

const actions = { addContact, deleteContact, filterContacts };
export default actions;
