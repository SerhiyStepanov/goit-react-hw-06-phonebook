import { useEffect, useState } from "react";
// import shortid from "shortid";
import ContactForm from "./Components/Form";
import Filter from "./Components/Filter";
import Stats from "./Components/Stats";
import ContactList from "./Components/ContactList";
import s from "./App.module.css";

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem("contacts")) ?? [];
  // });
  // const [filters, setFilters] = useState("");

  // function addContact(data) {
  //   const repeatName = contacts.some((el) => el.name === data.name);
  //   if (repeatName) {
  //     alert(`${data.name} is alreadi in contacts`);
  //     return;
  //   }

  //   if (data.name === "") {
  //     alert("Enter  name please");
  //     return;
  //   }

  //   const contact = {
  //     id: shortid.generate(),
  //     name: data.name,
  //     number: data.number,
  //   };

  //   setContacts((state) => [...state, contact]);
  // }

  // const deleteContact = (contactId) => {
  //   setContacts(contacts.filter((contact) => contact.id !== contactId));
  // };

  // const filterContacts = (e) => {
  //   setFilters(e.target.value);
  // };

  // const visibleContacts = () => {
  //   const normalizedFilter = filters.toLowerCase();
  //   return contacts.filter((contact) => {
  //     return contact.name.toLowerCase().includes(normalizedFilter);
  //   });
  // };

  // const visibleContactsView = visibleContacts();

  // useEffect(() => {
  //   window.localStorage.setItem("contacts", JSON.stringify(contacts));
  // });

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>

      <ContactForm
      // onSubmit={addContact}
      />

      <h2 style={{ color: "rgb(150, 150, 250)" }}>Contacts</h2>
      <Filter
      // value={filters} onChange={filterContacts}
      />
      <Stats />
      <ContactList
      // contacts={visibleContactsView}
      // onDeleteContact={deleteContact}
      />
    </div>
  );
}
