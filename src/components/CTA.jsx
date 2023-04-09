import Button from './Button';
import styles from './CTA.module.scss';

function Benefits() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <p className="title">
          Por que mais de 25.000 empresas escolheram o RD Station?
        </p>
        <p className="content">
          Combinamos nossos produtos de Marketing e Vendas com pessoas que
          se importam com seus resultados e um ecossistema que apoia o seu
          negócio do planejamento à prática.
        </p>

        <Button highlight className="w-full">
          criar conta gratuita
        </Button>
      </div>
    </section>
  );
}

export default Benefits;
