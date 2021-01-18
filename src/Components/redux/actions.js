import shortid from "shortid";
import types from "./types";

const addContact = (data) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name: data.name,
    number: data.number,
  },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const filterContacts = (value) => ({
  type: types.FILTER,
  payload: value,
});

export default { addContact, deleteContact, filterContacts };
