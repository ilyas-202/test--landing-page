import styles from "./addBenefits.module.css";
import Image from "next/image";

export function AddBenefits() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h2>

        <div className={styles.grid}>
          <div className={styles.cont}>
            <Image className={styles.url} src="/chat_a6u5z2ea17ae 1.png" width={60} height={60} alt="" />
            <p className={styles.text}>ОТДЕЛЬНЫЙ ЧАТ ДЛЯ МЕНЯ</p>
            <p className={styles.desc}>Возможность оперативно получать ответы на вопросы и советы от ментора в любое время.</p>
          </div>
          <div className={styles.cont}>
            <Image className={styles.url} src="/book_with_bookmark_gp0ir0g2b7ma 1.png" width={60} height={60} alt="" />
            <p className={styles.text}>БАЗА ЗНАНИЙ</p>
            <p className={styles.desc}>Доступ к собранным материалам, учебным пособиям и полезным ресурсам для вашего развития.</p>
          </div>
          <div className={styles.cont}>
            <Image className={styles.url} src="/group_6buxgnow9trf 1.png" width={92} height={60} alt="" />
            <p className={styles.text}>ЗАКРЫТОЕ СООБЩЕСТВО</p>
            <p className={styles.desc}>Сообщество таких же участников, как вы, для обмена опытом, поддержки и совместного роста.</p>
          </div>

        </div>
      </div>
    </div>
  );
}