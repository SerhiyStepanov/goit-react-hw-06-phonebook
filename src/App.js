import ContactForm from "./Components/Form";
import Filter from "./Components/Filter";
import Stats from "./Components/Stats";
import ContactList from "./Components/ContactList";
import s from "./App.module.css";

export default function App() {
  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <Stats />
      <ContactList />
    </div>
  );
}
