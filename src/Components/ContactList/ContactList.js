import { connect } from "react-redux";
import actions from "../redux/actions";
import s from "./ContactList.module.css";

function ContactList({ items, onDeleteContact }) {
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

const mapStateToProps = (state) => ({
  items: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (contactId) => dispatch(actions.deleteContact(contactId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
