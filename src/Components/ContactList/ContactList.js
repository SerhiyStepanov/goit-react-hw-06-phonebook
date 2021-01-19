import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/actions";
import s from "./ContactList.module.css";

const getVisibleContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter((item) => {
    return item.name.toLowerCase().includes(normalizedFilter);
  });
};

export default function ContactList() {
  const items = useSelector((state) =>
    getVisibleContacts(state.contacts.items, state.contacts.filter)
  );
  const dispatch = useDispatch();

  const onDeleteContact = (contactId) =>
    dispatch(actions.deleteContact(contactId));
  return (
    <ul className={s.contactList}>
      {items.map(({ name, number, id }) => (
        <li key={id} className={s.list}>
          <p className={s.text}>
            {name} : {number}
          </p>
          <button
            className={s.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
