import { useEffect, useState } from "react";
import shortid from "shortid";
import ContactForm from "./Components/Form";
import Filter from "./Components/Filter";
import ContactList from "./Components/ContactList";
import "./App.css";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? [];
  });
  const [filters, setFilters] = useState("");

  function addContact(data) {
    const repeatName = contacts.some((el) => el.name === data.name);
    if (repeatName) {
      alert(`${data.name} is alreadi in contacts`);
      return;
    }

    if (data.name === "") {
      alert("Enter  name please");
      return;
    }

    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    setContacts((state) => [...state, contact]);
  }

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const filterContacts = (e) => {
    setFilters(e.target.value);
  };

  const visibleContacts = () => {
    const normalizedFilter = filters.toLowerCase();
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  const visibleContactsView = visibleContacts();

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  });

  return (
    <div style={{ marginLeft: "16px" }}>
      <h1>Phonebook</h1>

      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filters} onChange={filterContacts} />
      <ContactList
        contacts={visibleContactsView}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
