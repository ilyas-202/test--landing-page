"use client"
import styles from "./decisiontree.module.css"
import Image from "next/image"


export function DecisionTree() {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>ОТВЕТЬ ЧЕСТНО НА НЕСКОЛЬКО ВОПРОСОВ</h2>

        <div className={styles.tree}>

          <div className={styles.rombCont}>
            <div className={styles.romb}>
              <p>Ты хочешь найти первую работу или увеличить свою зарплату?</p>
            </div>

            <div className={styles.romb}>
              <p>У тебя нет чёткого плана как достичь своей цели, не понимаешь, что нужно сделать, чтобы устроиться на работу?</p>
            </div>

            <div className={styles.romb}>
              <p>Надоело учиться, потом бросать и снова возвращаться, быть в этом замкнутом круге?</p>
            </div>

            <div className={styles.romb}>
              <p>Есть проблемы с резюме, позиционированием себя, прохождением собеседований?</p>
            </div>

            <div className={styles.romb}>
              <p>Ты думаешь что ментор всё выполнит за тебя и тебе не придётся работать и преодолевать себя?</p>
            </div>

          </div>

          <div className={styles.outcomes}>
            <div className={styles.success}>
              <Image className={styles.url} src="/party_uwgcmli1zjeu 1.png" width={80} height={80} alt="" />
              <p className={styles.urlText}>Поздравляю, мы сработаемся!</p>
            </div>

            <div className={styles.failure}>
              <div>Тебе не подойдут мои услуги</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}