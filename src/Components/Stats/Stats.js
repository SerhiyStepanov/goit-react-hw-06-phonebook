import { useSelector } from "react-redux";
import s from "./Stats.module.css";

export default function Stats() {
  const total = useSelector((state) => state.contacts.items.length);
  return (
    <div>
      <p className={s.text}>
        Total contact : <span className={s.span}>{total}</span>
      </p>
    </div>
  );
}
