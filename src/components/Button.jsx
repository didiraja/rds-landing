import styles from './Button.module.scss';

function Button({
  children, className, primary = true, secondary, highlight = false, /* onClick, */
}) {
  return (
  // <div className={styles.wrapper}>
    <button
      type="submit"
      className={`${className || ''} ${(secondary || !primary) ? styles.secondary : styles.primary} ${highlight ? styles.highlight : ''}`}
      // onClick={() => onClick()}
    >
      {children}
    </button>
  // </div>
  );
}

export default Button;
