import styles from './FormBox.module.scss';
import Button from '@/components/Button';

function FormBox() {
  return (
    <section id="form-box" className={styles.formBox}>
      <div className={styles.container}>
        <p className="title">
          Comece seus 10 dias de teste grátis do RD Station Marketing!
        </p>
        <p className="sub">
          Não precisa cadastrar cartão de crédito. 😉
        </p>

        <hr />

        <form>
          <p className="form-label">Diga, qual seu nome?</p>
          <input
            id="field-name"
            className="form-general"
            type="text"
            name="name"
            placeholder="Insira seu nome"
          />

          <p className="form-label">Seu email de trabalho</p>
          <input
            id="field-email"
            className="form-general"
            type="text"
            name="email"
            placeholder="Insira seu e-mail"
          />

          <p className="form-label">Seu email de trabalho</p>
          <input
            id="field-phone"
            className="form-general"
            type="text"
            name="phone"
            placeholder="Insira seu número de telefone com DDD"
          />

          <p className="form-label">Seu cargo de ocupação</p>
          <select className="form-general" name="job" id="field-job">
            <option value="">Selecione seu cargo</option>
            <option>Sócio(a) / CEO / Proprietário(a)</option>
            <option>Diretor(a) de Vendas</option>
            <option>Diretor(a) de Marketing</option>
            <option>Diretor(a) Outras Áreas</option>
            <option>Gerente de Marketing</option>
            <option>Gerente de Vendas</option>
            <option>Coordenador(a)/Supervisor(a) de Marketing</option>
            <option>Coordenador(a)/Supervisor(a) de Vendas</option>
            <option>Analista/Assistente de Marketing</option>
            <option>Analista/Assistente de Vendas</option>
            <option>Vendedor(a) / Executivo(a) de Contas</option>
            <option>Estudante</option>
            <option>Outros Cargo</option>
          </select>

          <p className="form-label">Crie uma senha</p>
          <input className="form-general" type="password" name="" id="" />

          <p className="form-label">Confirme sua senha</p>
          <input className="form-general" type="password" name="" id="" />

          <p className="form-label">Qual o site da sua empresa?</p>

          <div className="radio-wrapper">
            <input className="form-radio" type="radio" name="site" id="site" />
            <label htmlFor="site">Meu site é</label>
          </div>

          <input className="form-general" type="text" name="" id="" placeholder="Insira o endereço do seu site" />

          <div className="radio-wrapper">
            <input className="form-radio" type="radio" name="site" id="no-site" />
            <label htmlFor="site">Ainda não tenho site</label>
          </div>

          <ul className="legal">
            <li>
              Ao criar minha conta estou de acordo com os
              {' '}
              <a
                href="http://"
                target="_blank"
                className={`${styles.a} ${styles.highlight}`}
                rel="noreferrer"
              >
                termos de uso
              </a>
              {' '}
              do software e
              {' '}
              <a
                href="http://"
                target="_blank"
                className={`${styles.a} ${styles.highlight}`}
                rel="noreferrer"
              >
                política de privacidade.
              </a>
            </li>
            <li>Ao preencher o formulário, concordo em receber comunicações de acordo com meus interesses.</li>
            <li>*Você pode alterar suas permissões de comunicação a qualquer tempo.</li>
          </ul>

          <Button highlight className="w-full">criar minha conta</Button>
        </form>
      </div>
    </section>
  );
}

export default FormBox;
