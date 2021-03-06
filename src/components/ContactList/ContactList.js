import Button from "../Button/Button";
import styles from "./ContactList.module.css";

export default function ContactList({ arr, nameBtn, onSubmit }) {
  return (
    <ul className={styles.list}>
      {arr.map((item) => (
        <li className={styles.item} key={item.id}>
          <span className={styles.itemName}>{item.name}:</span>
          <span className={styles.itemPhone}> {item.number}</span>
          <Button
            name={nameBtn}
            clickOnBtn={(evt) => {
              evt.preventDefault();
              onSubmit(evt.currentTarget.id);
            }}
            id={item.id}
          />
        </li>
      ))}
    </ul>
  );
}
