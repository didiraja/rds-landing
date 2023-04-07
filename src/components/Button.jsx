import styles from './Button.module.scss';

function Button({
  children, className, primary = true, highlight = false, onClick,
}) {
  return (
  // <div className={styles.wrapper}>
    <button
      type="submit"
      className={`${className} ${primary ? styles.primary : styles.secondary} ${highlight ? styles.highlight : ''}`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  // </div>
  );
}

export default Button;
