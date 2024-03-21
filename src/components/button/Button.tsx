import styles from "./Button.module.css";

type ButtonType = {
  children: string;
};
export default function Button({ children }: ButtonType) {
  return <button className={styles.button}>{children}</button>;
}
