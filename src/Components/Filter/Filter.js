import React from "react";
import shortid from "shortid";
import { connect } from "react-redux";
import actions from "../redux/actions";
import s from "./Filter.module.css";
// import { FiSearch } from "react-icons/fi";
// import { ReactComponent } from "*.svg";

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

const getVisibleContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter((item) => {
    return item.name.toLowerCase().includes(normalizedFilter);
  });
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;

  const visibleContacts = getVisibleContacts(items, filter);

  return {
    items: visibleContacts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(actions.filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
