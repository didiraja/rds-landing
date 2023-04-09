import Button from './Button';
import styles from './Integrations.module.scss';

const integrations = [
  {
    icon: 'rd-station-crm',
    label: 'RD Station CRM',
  },
  {
    icon: 'salesforce',
    label: 'Salesforce',
  },
  {
    icon: 'google',
    label: 'Google',
  },
  {
    icon: 'facebook',
    label: 'Facebook',
  },
  {
    icon: 'linkedin',
    label: 'Linkedin',
  },
  {
    icon: 'wordpress',
    label: 'Wordpress',
  },
  {
    icon: 'hotmart',
    label: 'Hotmart',
  },
  {
    icon: 'pagseguro',
    label: 'PagSeguro',
  },
  {
    icon: 'shopify',
    label: 'Shopify',
  },
  {
    icon: 'zapier',
    label: 'Zapier',
  },
];

function Integrations() {
  return (
    <section className={styles.integrations}>
      <div className={styles.container}>
        <p className="title">
          Torne sua operação de Marketing ainda mais poderosa
        </p>

        <p className="content">
          O RD Station Marketing se conecta as principais ferramentas
          nacionais e internacionais
        </p>

        <div className="brands-wrapper mx-auto">
          {integrations
            ? integrations.map((brand) => (
              <div className="brand inline-block">
                <img
                  className="brand-icon mx-auto"
                  src={`/brands/${brand.icon}.svg`}
                  alt={brand.label}
                />
                <p className="label text-center">{brand.label}</p>
              </div>
            ))
            : null}
        </div>

        <Button className="button block mx-auto">
          criar conta gratuita
        </Button>
      </div>
    </section>
  );
}

export default Integrations;
