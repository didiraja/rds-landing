import Image from 'next/image';
import styles from './Slide.module.scss';

function Slide() {
  return (
    <div className={styles.slide}>

      <Image
        src="/icon/arrow-up.svg"
        alt="Seta subindo"
        className={styles.icon}
        width={48}
        height={48}
        priority
      />

      <p className={styles.title}>
        Torne sua operação de Marketing Digital mais produtiva
      </p>

      <p className={styles.content}>
        Chega de usar várias ferramentas separadas e perder as informações no caminho! Somos o que chamam de ferramenta tudo-em-um: reunimos os principais recursos de Marketing Digital em um só lugar para sua operação ser mais eficaz.
      </p>
    </div>
  );
}

// function Slider() {}

export default Slide;
