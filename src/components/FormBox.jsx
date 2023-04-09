import styles from './FormBox.module.scss';
import Button from '@/components/Button';

const select = ['Sócio(a) / CEO / Proprietário(a)', 'Diretor(a) de Vendas', 'Diretor(a) de Marketing', 'Diretor(a) Outras Áreas', 'Gerente de Marketing', 'Gerente de Vendas', 'Coordenador(a)/Supervisor(a) de Marketing', 'Coordenador(a)/Supervisor(a) de Vendas', 'Analista/Assistente de Marketing', 'Analista/Assistente de Vendas', 'Vendedor(a) / Executivo(a) de Contas', 'Estudante', 'Outros Cargo'];

function FormBox() {
  return (
    <div className={styles.container}>
      <section id="form-box" className={styles.formBox}>
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
            required
            id="field-name"
            className="form-general"
            type="text"
            name="name"
            placeholder="Insira seu nome"
          />

          <p className="form-label">Seu email de trabalho</p>
          <input
            required
            id="field-email"
            className="form-general"
            type="email"
            name="email"
            placeholder="Insira seu e-mail"
          />

          <p className="form-label">Seu telefone</p>
          <input
            required
            id="field-phone"
            className="form-general"
            type="text"
            name="phone"
            placeholder="Insira seu número de telefone com DDD"
          />

          <p className="form-label">Seu cargo de ocupação</p>
          <select required className="form-select" name="job" id="field-job">
            <option value="">Selecione seu cargo</option>
            {select ? select.map((item) => <option value={item}>{item}</option>) : null}
          </select>

          <p className="form-label">Crie uma senha</p>
          <input className="form-general" type="password" name="" id="" />

          <p className="form-label">Confirme sua senha</p>
          <input required className="form-general" type="password" name="" id="" />

          <p className="form-label">Qual o site da sua empresa?</p>

          <div className="radio-wrapper">
            <input required className="form-radio" type="radio" name="site" id="site" />
            <label htmlFor="site">Meu site é</label>
          </div>

          <input
            required
            className="form-general"
            type="text"
            name=""
            id=""
            placeholder="Insira o endereço do seu site"
          />

          <div className="radio-wrapper">
            <input required className="form-radio" type="radio" name="site" id="no-site" />
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
      </section>
    </div>
  );
}

export default FormBox;
