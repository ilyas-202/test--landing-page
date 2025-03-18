import Button from "@/app/components/ui/button"
import styles from "./telegram-reviews.module.css"
import Image from "next/image"

export function TelegramReviews() {
  return (
    <div className={styles.telegramSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>ОТЗЫВЫ В ТЕЛЕГРАМ</h2>

            <p className={styles.description}>
              В этом месте ученики оставляют отзывы со своих личных телеграм-аккаунтов. Всё прозрачно!
            </p>

            <p className={styles.description}>
              Ты также можешь оставить свой отзыв после нашего сотрудничества
            </p>

            <Button className={styles.button}>
              СМОТРЕТЬ ВСЕ ОТЗЫВЫ 
              <Image className={styles.tg} src="/mingcute_telegram-fill (3).png" width={24} height={24} alt="tg" />
            </Button>
          </div>

          <div className={styles.mockupContainer}>
            <div className={styles.phoneFrame}>
              <div className={styles.notch} />

              <div className={styles.screen}>
                <div className={styles.header}>

                  <div className={styles.back}>
                    <p>Назад</p>
                  </div>

                  <div className={styles.midle}>
                    <p className={styles.headerTitle}>Suleyman | Отзывы</p>
                    <p className={styles.onlineStatus}>5 участников</p>
                  </div>

                  <div className={styles.logo}>
                    <p>Logo</p>
                  </div>
                </div>

                <div className={styles.messages}>
                  <div className={styles.message}>
                    <p className={styles.name}>Anton</p>
                    <p className={styles.messageText}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur eligendi, ad obcaecati nesciunt porro illo incidunt natus laborum dolores similique tempora rem quia blanditiis magni quaerat ex omnis facilis.
                    </p>

                    <p className={styles.messageText}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus iste, soluta voluptate minima, quis quae unde hic impedit est harum, asperiores eius itaque temporibus tempore ullam. Enim, voluptatibus? Consequatur, quaerat.
                    </p>

                  </div>
                </div>
              </div>
            </div>

            <div className={styles.glowEffect} />
          </div>
        </div>

      </div>
    </div>
  )
}