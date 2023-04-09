import styles from './Together.module.scss';

function Together() {
  return (
    <section id="together" className={`${styles.together}`}>

      <div className={`${styles.container}`}>

        <p className={styles.contentTitle}>Estaremos juntos desde o primeiro passo!</p>

        <p className={styles.contentText}>
          Se você ainda não sabe como extrair o máximo das ações digitais, não tem problema. O
          {' '}
          <strong>RD Station Marketing</strong>
          {' '}
          é mais que uma ferramenta, nos importamos com os seus resultados.
        </p>

        <p className={styles.contentText}>
          <strong>Estaremos com você do planejamento até a prática!</strong>
        </p>
      </div>
    </section>
  );
}

export default Together;
