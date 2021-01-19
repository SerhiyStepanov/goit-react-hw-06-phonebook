import React from "react";
import shortid from "shortid";
import { connect } from "react-redux";
import actions from "../redux/actions";
import s from "./Filter.module.css";

function Filter({ value, onChange }) {
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

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(actions.filterContacts(event.target.value)),
});

export default connect(null, mapDispatchToProps)(Filter);
