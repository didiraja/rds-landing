import { useMediaQuery } from 'usehooks-ts';
import Button from './Button';
import styles from './Integrations.module.scss';
import { MEDIA_QUERIES } from '@/services';

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
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  return (
    <section className={styles.integrations}>
      <div className="container mx-auto">

        <div className="content-wrapper">
          <p className="title">
            Torne sua operação de Marketing ainda mais poderosa
          </p>

          <p className="content">
            O RD Station Marketing se conecta as principais ferramentas
            nacionais e internacionais
          </p>

          {
            isDesktop ? (
              <Button className="button">
                criar conta gratuita
              </Button>
            ) : null
          }

        </div>

        <div className="brands-wrapper mx-auto">
          {integrations
            ? integrations.map((brand) => (
              <div key={brand.label} className="brand">
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

        {
            !isDesktop ? (
              <Button className="button mx-auto w-[90%]">
                criar conta gratuita
              </Button>
            ) : null
          }
      </div>
    </section>
  );
}

export default Integrations;
