import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.contactWrap}>
      <ul className={css.contactList}>
        <li className={css.contactItem}>
          <FaUser className={css.itemIcon} />
          <p className={css.itemText}>{name}</p>
        </li>
        <li className={css.contactItem}>
          <FaPhone className={css.itemIcon} />{" "}
          <p className={css.itemText}>{number}</p>
        </li>
      </ul>
      <button
        className={css.contactBtn}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
