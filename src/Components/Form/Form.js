import { useState } from "react";
import { connect } from "react-redux";
import actions from "../redux/actions";
import { IoIosPhonePortrait } from "react-icons/io";
import shortid from "shortid";
import s from "./Form.module.css";

function ContactForm(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const inputNameId = shortid.generate();
  const inputNumberId = shortid.generate();

  const onInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (name === "" || number === "") {
      alert("Enter name and number please");
      return;
    }
    props.onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div className={s.container}>
          <label htmlFor={inputNameId} className={s.label}>
            Name <span className={s.spanName}>name</span>
          </label>
          <input
            type="text"
            name="name"
            id={inputNameId}
            value={name}
            onChange={onInputChange}
            className={s.input}
            placeholder="Enter name"
            autoComplete="Off"
          />
        </div>

        <div className={s.container}>
          <label htmlFor={inputNumberId} className={s.label}>
            Number
            <span className={s.ioIosPhonePortrait}>
              <IoIosPhonePortrait />
            </span>
          </label>
          <input
            type="tel"
            name="number"
            id={inputNumberId}
            value={number}
            onChange={onInputChange}
            className={s.input}
            placeholder="Enter number"
          />
        </div>

        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(actions.addContact(data)),
});

export default connect(null, mapDispatchToProps)(ContactForm);