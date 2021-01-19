import React from "react";
import shortid from "shortid";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/actions";
import s from "./Filter.module.css";

export default function Filter() {
  const value = useSelector((state) => state.contacts.Filter);
  const dispatch = useDispatch();

  const onChange = (event) =>
    dispatch(actions.filterContacts(event.target.value));
  const inputFilterId = shortid.generate();
  return (
    <div className={s.container}>
      <label htmlFor={inputFilterId} className={s.label}>
        Find contacts of name
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        id={inputFilterId}
        className={s.input}
        placeholder="Enter name please"
      />
    </div>
  );
}
