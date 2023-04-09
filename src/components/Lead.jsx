import styles from './Lead.module.scss';

function Lead() {
  return (
    <section id="lead" className={styles.lead}>
      <div className={styles.container}>
        <div className={styles.titleBlock}>
          <p className="title">
            Gere mais
            {' '}
            <span className={styles.highlight}>oportunidades</span>
            {' '}
            para seu negócio
          </p>
        </div>

        <p className="description">
          O RD Station Marketing é um software para sua empresa fazer campanhas melhores, nutrir Leads, gerar oportunidades comerciais qualificadas e alcançar mais resultados.
        </p>
      </div>
    </section>
  );
}

export default Lead;
