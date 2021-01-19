import { connect } from "react-redux";
import s from "./Stats.module.css";

const Stats = ({ total }) => {
  return (
    <div>
      <p className={s.text}>
        Total contact : <span className={s.span}>{total}</span>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  total: state.contacts.items.length,
});

export default connect(mapStateToProps)(Stats);
