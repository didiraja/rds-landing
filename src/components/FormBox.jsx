import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import Button from '@/components/Button';
import styles from './FormBox.module.scss';
import { MASKS } from '@/services';

const select = [
  'Sócio(a) / CEO / Proprietário(a)',
  'Diretor(a) de Vendas',
  'Diretor(a) de Marketing',
  'Diretor(a) Outras Áreas',
  'Gerente de Marketing',
  'Gerente de Vendas',
  'Coordenador(a)/Supervisor(a) de Marketing',
  'Coordenador(a)/Supervisor(a) de Vendas',
  'Analista/Assistente de Marketing',
  'Analista/Assistente de Vendas',
  'Vendedor(a) / Executivo(a) de Contas',
  'Estudante',
  'Outros Cargo',
];

function FormBox() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('FORM OBJ', data);

    fetch('https://rdstation-signup-psel.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((daty) => console.log(daty))
      .catch((error) => console.error(error));
  };

  const [phoneMask, setPhoneMask] = useState(MASKS.LANDLINE);

  function getNumbersFromString(str) {
    const numbers = str.replace(/[^\d]/g, ''); // removes all non-numeric characters
    return numbers.length > 0 ? numbers : '0'; // returns the numbers string, or '0' if empty
  }

  function beforeMaskedStateChange(newState, oldState) {
    const onlyNumbersNew = getNumbersFromString(newState.value);
    const onlyNumbersOld = getNumbersFromString(oldState.value);

    if (onlyNumbersOld.length >= 10) {
      setPhoneMask(MASKS.CELLPHONE);

      return newState;
    }

    if (onlyNumbersNew.length < 10) {
      setPhoneMask(MASKS.LANDLINE);
    }

    return newState;
  }

  const validatePasswordConfirmation = (value) => {
    const { password } = getValues();
    if (password !== value) {
      return 'As senhas precisam ser iguais';
    }
    return true;
  };

  return (
    <section id="form" className={styles.formSection}>
      <div className="container relative mx-auto">
        <div className={`${styles.formBox} ${styles.formPosition}`}>
          <p className="title">
            Comece seus 10 dias de teste grátis do RD Station Marketing!
          </p>
          <p className="sub">Não precisa cadastrar cartão de crédito. 😉</p>

          <hr />

          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="form-label">Diga, qual seu nome?</p>
            <input
              className="form-general"
              type="text"
              {...register('name', {
                required: true,
                minLength: {
                  value: 3,
                  message: 'Mínimo de 3 caracteres',
                },
              })}
              placeholder="Insira seu nome"
            />
            {errors.name && (
              <div className={styles.errorLabel}>
                {errors.name.message ? (
                  <p>{errors.name.message}</p>
                ) : (
                  <p>Nome é obrigatório</p>
                )}
              </div>
            )}

            <p className="form-label">Seu email de trabalho</p>
            <input
              className="form-general"
              type="email"
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'e-mail inválido',
                },
              })}
              placeholder="Insira seu e-mail"
            />
            {errors.email && (
              <div className={styles.errorLabel}>
                {errors.email.message ? (
                  <p>{errors.email.message}</p>
                ) : (
                  <p>E-mail é obrigatório</p>
                )}
              </div>
            )}

            <p className="form-label">Seu telefone</p>
            <InputMask
              className="form-general"
              {...register('phone', {
                required: true,
              })}
              placeholder="Insira seu número de telefone com DDD"
              mask={phoneMask}
              beforeMaskedValueChange={beforeMaskedStateChange}
            />
            {errors.phone && (
              <div className={styles.errorLabel}>
                {errors.phone.message ? (
                  <p>{errors.phone.message}</p>
                ) : (
                  <p>Telefone é obrigatório</p>
                )}
              </div>
            )}

            <p className="form-label">Seu cargo de ocupação</p>
            <select
              className="form-select"
              {...register('job', {
                required: true,
              })}
            >
              <option value="">Selecione seu cargo</option>
              {select
                ? select.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))
                : null}
            </select>

            {errors.job && (
              <div className={styles.errorLabel}>
                {errors.job.message ? (
                  <p>{errors.job.message}</p>
                ) : (
                  <p>Ocupação é obrigatório</p>
                )}
              </div>
            )}

            <p className="form-label">Crie uma senha</p>
            <input
              className="form-general"
              type="text"
              placeholder="Insira a senha desejada"
              maxLength="20"
              {...register('password', {
                required: 'Senha é obrigatório',
                minLength: {
                  value: 8,
                  message: 'Senha precisa ter pelo menos 8 caracteres',
                },
                maxLength: {
                  value: 20,
                  message: 'Senha precisa ter no máximo 20 caracteres',
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])/,
                  message:
                    'Senha precisa ter pelo menos 1 caractere MAIÚSCULO E 1 caractere MINÚSCULO',
                },
              })}
            />
            {errors.password && (
              <div className={styles.errorLabel}>
                {errors.password.message ? (
                  <p>{errors.password.message}</p>
                ) : (
                  <p>Senha é obrigatório</p>
                )}
              </div>
            )}

            <p className="form-label">Confirme uma senha</p>
            <input
              className="form-general"
              type="text"
              placeholder="Confirme sua senha"
              maxLength="20"
              {...register('confirmPassword', {
                required: 'As Senhas precisam ser iguais',
                validate: validatePasswordConfirmation,
              })}
            />
            {errors.confirmPassword && (
              <div className={styles.errorLabel}>
                {errors.confirmPassword.message ? (
                  <p>{errors.confirmPassword.message}</p>
                ) : (
                  <p>As senhas precisam ser iguais</p>
                )}
              </div>
            )}

            <p className="form-label">Qual o site da sua empresa?</p>

            <div className="radio-wrapper">
              <input
                className="form-radio"
                type="radio"
                {...register('site', {
                  required: true,
                })}
              />
              <label htmlFor="site">Meu site é</label>
            </div>

            <input
              className="form-general"
              type="text"
              {...register('siteUrl', {
                pattern: {
                  value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
                  message: 'url inválida (inclua http/https)',
                },
              })}
              placeholder="Insira o endereço do seu site"
            />
            {errors.siteUrl && (
              <div className={styles.errorLabel}>
                {errors.siteUrl.message ? (
                  <p>{errors.siteUrl.message}</p>
                ) : (
                  <p>Informe o endereço do site</p>
                )}
              </div>
            )}

            <div className="radio-wrapper">
              <input
                className="form-radio"
                type="radio"
                {...register('site', {})}
              />
              <label htmlFor="site">Ainda não tenho site</label>
            </div>

            {errors.site && (
              <div className={styles.errorLabel}>
                {errors.site.message ? (
                  <p>{errors.site.message}</p>
                ) : (
                  <p>Informe sobre o site da sua empresa</p>
                )}
              </div>
            )}

            <ul className="legal">
              <li>
                Ao criar minha conta estou de acordo com os
                <a
                  href="https://legal.rdstation.com/pt-BR/rdstation-services-agreement/"
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
                  href="https://legal.rdstation.com/pt/privacy-policy/"
                  target="_blank"
                  className={`${styles.a} ${styles.highlight}`}
                  rel="noreferrer"
                >
                  política de privacidade.
                </a>
              </li>
              <li>
                Ao preencher o formulário, concordo em receber comunicações de
                acordo com meus interesses.
              </li>
              <li>
                *Você pode alterar suas permissões de comunicação a qualquer
                tempo.
              </li>
            </ul>

            <Button highlight className="w-full">
              criar minha conta
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormBox;
