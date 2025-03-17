import styles from "./additional.module.css";
import Image from "next/image";
import Button from "./ui/button";

const services = [
  {
    title: "МОК-СОБЕСЕДОВАНИЕ",
    price: "5 000 ₽",
    duration: "Длительность - 1,5 часа",
    description:
      "Тренировочное собеседование с разбором ошибок и усилением сильных сторон себя в ответах. Отработаем ответы на вопросы и уверенность в себе на реальном интервью.",
  },
  {
    title: "РАЗБОР ТВОЕГО РЕЗЮМЕ/САМОПРЕЗЕНТАЦИИ",
    price: "5 000 ₽",
    duration: "Длительность - 1 час",
    description:
      "Ты получишь много откликов? Ты можешь меньше рассказать про свой опыт? Это конкретная и честная обратная связь и консультация. В формате онлайн-созвона с твоим резюме и на основе пожеланий лучшую стратегию самопрезентации.",
  },
  {
    title: "ПЕРСОНАЛЬНАЯ КАРЬЕРНАЯ КОНСУЛЬТАЦИЯ",
    price: "4 000 ₽",
    duration: "Длительность - 1 час",
    description:
      "Мы определим твой текущий уровень, разберем твои цели и наметим чёткий план действий. Отвечу на все твои вопросы.",
  },
];

export function AdditionalServices() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h2>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <div className={styles.priceCont}>
                <div className={styles.price}>{service.price}</div>
                <div className={styles.line}></div>
                <div className={styles.duration}>{service.duration}</div>
              </div>
              <p className={styles.description}>{service.description}</p>
              <Button className={styles.contactButton}>
                <p className={styles.btnText}>ЗАПИСАТЬСЯ</p>
                <Image className={styles.image} src="/mingcute_telegram-fill.png" width={24} height={24} alt="" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}