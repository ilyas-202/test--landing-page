"use client"

import { useState, useEffect } from "react"
import styles from "./decisiontree.module.css"
import Image from "next/image"

interface Question {
  id: number
  text: string
  position: { x: number; y: number }
  mobilePosition?: { x: number; y: number }
}

const questions: Question[] = [
  {
    id: 1,
    text: "Ты хочешь найти первую работу или увеличить свою зарплату?",
    position: { x: 50, y: 15 },
    mobilePosition: { x: 50, y: 10 },
  },
  {
    id: 2,
    text: "У тебя нет чёткого плана как достичь своей цели, не понимаешь, что нужно сделать, чтобы устроиться на работу?",
    position: { x: 35, y: 30 },
    mobilePosition: { x: 50, y: 25 },
  },
  {
    id: 3,
    text: "Надоело учиться, потом бросать и снова возвращаться, быть в этом замкнутом круге?",
    position: { x: 20, y: 45 },
    mobilePosition: { x: 50, y: 40 },
  },
  {
    id: 4,
    text: "Есть проблемы с резюме, позиционированием себя, прохождением собеседований?",
    position: { x: 5, y: 60 },
    mobilePosition: { x: 50, y: 55 },
  },
  {
    id: 5,
    text: "Ты думаешь что ментор всё выполнит за тебя и тебе не придётся работать и преодолевать себя?",
    position: { x: 5, y: 60 },
    mobilePosition: { x: 50, y: 55 },
  },
]

export function DecisionTree() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>ОТВЕТЬ ЧЕСТНО НА НЕСКОЛЬКО ВОПРОСОВ</h2>

        <div className={styles.tree}>
          <svg className={styles.svg} viewBox="0 0 100 100" preserveAspectRatio="none">
            {isMobile ? (
              <path d="M50,10 L50,55 L50,70" fill="none" stroke="#333" strokeWidth="0.5" strokeDasharray="2" />
            ) : (
              <path d="M50,15 L35,30 L20,45 L5,60 L0,75" fill="none" stroke="#333" strokeWidth="0.5" strokeDasharray="2" />
            )}
          </svg>

          {questions.map((question) => (
            <div
              key={question.id}
              className={`${styles.question} ${activeQuestion === question.id ? styles.active : ""}`}
              style={{
                left: `${isMobile ? question.mobilePosition?.x || 50 : question.position.x}%`,
                top: `${isMobile ? question.mobilePosition?.y || question.position.y : question.position.y}%`,
              }}
              onMouseEnter={() => setActiveQuestion(question.id)}
              onMouseLeave={() => setActiveQuestion(null)}
            >
              <div className={styles.questionText}>{question.text}</div>
              <div className={styles.orText}>Или</div>
            </div>
          ))}

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