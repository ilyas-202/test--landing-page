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
                  <div className={styles.headerTitle}>Suleyman O'Brien</div>
                  <div className={styles.onlineStatus}>online</div>
                </div>

                <div className={styles.messages}>
                  <div className={styles.message}>
                    Привет всем! Хочу поделиться опытом работы с ментором. Очень помог с подготовкой...
                  </div>
                  <div className={styles.message}>
                    За 2 месяца удалось пройти путь от базовых знаний до уверенного выполнения тестовых...
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