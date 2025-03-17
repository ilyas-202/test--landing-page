import Button from "@/app/components/ui/button"
import Image from "next/image"
import styles from "./tariff.module.css"


export function Tariff() {
  return (
    <div className={styles.tariffContainer}>
      <div className="container mx-auto px-4">
        <div className={styles.titleCont}>
          <h2 className={styles.title}>СКОЛЬКО СТОИТ МЕНТОРСТВО</h2>
          <p className={styles.text}>ТРУДОУСТРОЙСТВО ПОД КЛЮЧ</p>
        </div>

        <div className={styles.gridContainer}>
            <div className={styles.card}>
              <div className={styles.expCont}>
                <Image className={styles.expImg} src="/на опыте 1.png" width={60} height={60} alt=""/>
                <div className={styles.exp}>
                  <p>НА ОПЫТЕ</p>
                </div>
              </div>

              <h3 className={styles.cardTitle}>ЕСЛИ У ТЕБЯ ЕСТЬ ЗНАНИЯ ВЕРСТКИ И JAVASCRIPT'A</h3>

              <div className={styles.payment}>
                <div className={styles.priceCont}>
                  <p className={styles.price}>0 ₽</p>
                  <p className={styles.priceText}>предоплата</p>
                </div>

                <div className={styles.line}></div>

                <p className={styles.postpaid}>100% постоплата от оффера</p>
              </div>

              <Button className={styles.button}>
                <p className={styles.btnText}>СВЯЗАТЬСЯ СО МНОЙ</p>
                <Image className={styles.image} src="/mingcute_telegram-fill.png" width={24} height={24} alt="" />
              </Button>
            </div>

            <div className={styles.card}>
              <div className={styles.expCont}>
                <Image className={styles.expImg} src="/новичок 1.png" width={60} height={60} alt=""/>
                <div className={styles.exp}>
                  <p>НОВИЧЕК</p>
                </div>
              </div>
              <h3 className={styles.cardTitle}>ЕСЛИ ТЫ НАЧИНАЕШЬ С ПОЛНОГО НУЛЯ</h3>

              <div className={styles.payment}>
                <div className={styles.priceCont}>
                  <p className={styles.price}>20 000 ₽</p>
                  <p className={styles.priceText}>предоплата</p>
                </div>

                <div className={styles.line}></div>

                <p className={styles.postpaid}>100% постоплата от оффера</p>
              </div>

              <Button className={styles.button}>
                <p className={styles.btnText}>СВЯЗАТЬСЯ СО МНОЙ</p>
                <Image className={styles.image} src="/mingcute_telegram-fill.png" width={24} height={24} alt="" />
              </Button>
            </div>
        </div>
        <div className={styles.infoContainer}>
          <h4 className={styles.infoTitle}>100% ПОСТОПЛАТА ОТ ОФФЕРА - ЧТО ЭТО?</h4>
          <div className={styles.infoTextCont}>
            <p className={styles.infoText}>Постоплата мотивирует ментора на высокую подготовку, и ментор помогает по рабочим вопросам первые 2 месяца.</p>
            <div className={styles.vLine}></div>
            <p className={styles.infoText}>Например, устроились на работу с окладом 150 000 ₽ — 150 000 ₽ выплачиваете в первые 2 месяца. Можно оплачивать в 2 этапа.</p>
          </div>
        </div>
      </div>
    </div>
  )
}