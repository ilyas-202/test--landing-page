"use client"

import { useState, useEffect } from "react";
import Button from "@/app/components/ui/button";
import { Roadmap } from "@/app/components/roadmap/roadmap";
import { Tariff } from "@/app/components/tariff/tariff";
import { DecisionTree } from "@/app/components/decisionTree/decision-tree";
import { AdditionalServices } from "@/app/components/additional/additional-services";
import { TelegramReviews } from "@/app/components/telegramreviews/telegram-reviews";
import Image from "next/image";
import styles from "./page.module.css";
import { AddBenefits } from "@/app/components/addBenefits/addBenefits";

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <header className={`${styles.header}`}>
        <div className={styles.logoContainer}>
          <Image src="/logo.png" width={157} height={32} alt="Logo" />
        </div>
        <button className={styles.tgButton}>
          <span className={styles.tgText}>НАПИСАТЬ В ТЕЛЕГРАМ</span>
          <Image src="/Vector@2x.png" width={32} height={32} alt="tg" className={styles.tgIcon}/>
        </button>
      </header>

      <main id="home" className={styles.main}>
        <section className={styles.introSection}>
          <div className={styles.introL}>

            <h1 className={styles.introTitle}>
              <span className={styles.highlight}>ФРОНТЕНД БЕЗ ВОДЫ:</span>
                <br />ТОЛЬКО СУТЬ, ТОЛЬКО<br />РЕЗУЛЬТАТ
            </h1>

            <div className={styles.introTextCont}>
              <p className={styles.introText}>
                Добро пожаловать на путь к совершенству в мире Frontend разработки, где каждый шаг будет сопровождаться
                профессиональной поддержкой и наставлениями!
              </p>
            </div>

            <Button className={styles.contactButton}>
              <p className={styles.btnText}>СВЯЗАТЬСЯ СО МНОЙ</p>
              <Image className={styles.image} src="/mingcute_telegram-fill (2).png" width={24} height={24} alt="" />
            </Button>
          </div>

          <div className={styles.introR}>
            <div className={`${styles.skillBubble} ${styles.html}`}>HTML</div>
            <div className={`${styles.skillBubble} ${styles.js}`}>JS</div>
            <div className={`${styles.skillBubble} ${styles.react}`}>REACT</div>
            <div className={`${styles.skillBubble} ${styles.css}`}>CSS</div>
            <div className={`${styles.skillBubble} ${styles.typescript}`}>TYPESCRIPT</div>
            <div className={`${styles.skillBubble} ${styles.redux}`}>REDUX</div>
          </div>
        </section>

        <section className={styles.bioSection}>
          <div className={styles.bio}>
            <div className={styles.bioBlock}>
              <h2 className={styles.bioTitle}>ПРИВЕТ, МЕНЯ ЗОВУТ СУЛЕЙМАН!</h2>
              <p className={styles.bioSubtitle}>FRONTEND МЕНТОР</p>
              <Image src="/Frame 14.png" width={56} height={61} alt="" />
              <div className={styles.bioTextContainer}>
                <p className={styles.bioText}>Помню, как сам не понимал, что нужно сделать, чтобы устроиться на работу. Я был в замкнутом круге: начинал учиться, бросал и снова возвращался.</p>
                <p className={styles.bioText}>Но теперь, пройдя этот путь, я знаю, как его преодолеть. Как опытный фронтенд-разработчик и ментор, я могу помочь вам избежать этих ошибок.</p>
                <p className={styles.bioText}>Я научу вас ключевым навыкам, необходимым для трудоустройства, и покажу, как эффективно подготовиться к собеседованиям в IT-компаниях. Вместе мы разработаем чёткий план действий, который приведёт вас к желаемой работе</p>
              </div>
            </div>
            <div className={styles.photo}>
              цвцв
            </div>
          </div>
          <div className={styles.statsSection}>

            <div className={styles.statCard}>
              <div className={styles.statCont}>
                <p className={styles.num}>4</p>
                <p className={styles.statTitle}>ГОДА</p>
                <p className={styles.statText}>опыта в веб-разработке</p>
              </div>
            </div>

            <div className={styles.statCardM}>
              <div className={styles.statContM}>
                <p className={styles.numM}>30+</p>
                <p className={styles.statTitleM}>УЧЕНИКОВ</p>
                <p className={styles.statTextM}>за 6 месяцев</p>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statCont}>
                <p className={styles.num}>150 K</p>
                <p className={styles.statTitle}>Р / МЕС</p>
                <p className={styles.statText}>средняя ЗП учеников</p>
              </div>
            </div>

          </div>

        </section>

      </main>

      <section id="roadmap">
        <Roadmap />
      </section>

      <section id="pricing">
        <Tariff />
      </section>

      <section id="addBenefits">
        <AddBenefits />
      </section>

      <section id="questions">
        <DecisionTree />
      </section>

      <section id="services">
        <AdditionalServices />
      </section>

      <section id="reviews">
        <TelegramReviews />
      </section>

      <div className={styles.footerCont}>
        <div className={styles.line}></div>
        <div className={styles.footer}>
          <p>2024 © Suleyman</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={styles.scrollTopButton}>
            <Image src="/наверх.png" width={40} height={40} alt=""/>
          </button>
        </div>

      </div>
    </div>
  );
}