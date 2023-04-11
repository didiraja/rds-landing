import styles from './Together.module.scss';

function Together() {
  return (
    <section id="together" className={`${styles.together}`}>

      <div className="wrapper">

        <div className="container mx-auto">

          <p className="title">Estaremos juntos desde o primeiro passo!</p>

          <p className="content">
            Se você ainda não sabe como extrair o máximo das ações digitais, não tem problema. O
            {' '}
            <strong>RD Station Marketing</strong>
            {' '}
            é mais que uma ferramenta, nos importamos com os seus resultados.
          </p>

          <br />

          <p className="content">
            <strong>Estaremos com você do planejamento até a prática!</strong>
          </p>
        </div>

      </div>

    </section>
  );
}

export default Together;
