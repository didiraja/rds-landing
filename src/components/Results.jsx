import Image from 'next/image';
import styles from './Results.module.scss';

function Results() {
  return (
    <section id="results" className={styles.results}>
      <div className={styles.container}>
        <p className={styles.contentTitle}>
          Resultados previsíveis e mais clientes para sua empresa
        </p>

        <p className={styles.contentSub}>
          Torne sua atuação no Marketing Digital mais eficaz
        </p>

        <ul>
          <li>
            <p>
              <strong>Ferramentas intuitivas</strong>
              {' '}
              e com modelos prontos,
              vídeos explicativos e passo a passo guiado
            </p>
          </li>
          <li>
            <p>
              <strong>Implementação com especialistas</strong>
              {' '}
              focada em
              planejamento e prática (nos planos Marketing Pro e Enterprise)
            </p>
          </li>
          <li>
            <p>
              <strong>Time de especialistas em Sucesso do Cliente</strong>
              {' '}
              para
              apoiar na otimização da estratégia em cada fase da sua jornada
              (nos planos Marketing Pro e Enterprise)
            </p>
          </li>
          <li>
            <p>
              <strong>Suporte técnico</strong>
              {' '}
              em português, espanhol e inglês
              para tirar dúvidas,
              <strong>com 97% de satisfação</strong>
              {' '}
              entre
              nossos clientes
            </p>
          </li>
          <li>
            <p>
              <strong>Muito conteúdo educativo</strong>
              , eventos, cursos da
              {' '}
              <a
                href="http://"
                target="_blank"
                className={`${styles.a} ${styles.highlight}`}
                rel="noreferrer"
              >
                RD University
              </a>
              {' '}
              e comunidades para você continuar evoluindo
            </p>
          </li>
        </ul>

        <Image
          src="/img-results.jpg"
          alt="Mulher escrevendo na lousa"
          className="py-5 w-full"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
}

export default Results;
