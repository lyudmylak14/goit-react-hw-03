import css from './Contact.module.css';
import { PiPhoneCallFill } from "react-icons/pi";
import { BsPeopleFill } from "react-icons/bs";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <p className={css.text}><BsPeopleFill className={css.icon} /> {name}</p>
      <p className={css.text}><PiPhoneCallFill className={css.icon} />{number} </p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
