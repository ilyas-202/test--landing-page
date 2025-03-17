"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styles from './roadmap.module.css'

interface StepContent {
  id: string
  category: string
  title: string
  description: string
  duration?: string
  objectives?: string[]
}

const steps: StepContent[] = [
  {
    id: "01",
    category: "СТАРТ",
    title: "ЗНАКОМСТВО НА ПЕРВОМ БЕСПЛАТНОМ СОЗВОНЕ",
    description: "Я расскажу о себе, отвечу на вопросы. А ты поделишься своим запросом.",
    duration: "Продолжительность созвона от 15 до 20 минут",
    objectives: [
      "Рассказать подробнее про обучение",
      "Понимать основные сложности",
      "Ответить на твои вопросы",
      "Задать свои вопросы, чтобы скорректировать обучение именно под твои нужды",
      "Понять, комфортно ли нам будет дальше взаимодействовать",
    ],
  },
  {
    id: "02",
    category: "ПРОГРАММА",
    title: "ПРЕДОСТАВЛЕНИЕ ROADMAP ДЛЯ ОБУЧЕНИЯ",
    description: "Составим индивидуальный план обучения на основе твоих целей и текущего уровня.",
    objectives: [
      "Оценка текущего уровня знаний",
      "Определение конкретных целей",
      "Создание персонального плана обучения",
      "Установка временных рамок",
    ],
  },
  {
    id: "03",
    category: "МАТЕРИАЛЫ",
    title: "ДОСТУП К ЗАКРЫТОМУ СООБЩЕСТВУ С ПОЛЕЗНОСТЯМИ",
    description: "Получи доступ к базе знаний и сообществу единомышленников.",
    objectives: [
      "Доступ к обучающим материалам",
      "Участие в групповых обсуждениях",
      "Практические задания",
      "Код-ревью ваших проектов",
    ],
  },
  {
    id: "04",
    category: "РЫНОК IT",
    title: "ПОДГОТОВКА К СОБЕСЕДОВАНИЮ",
    description: "Подготовим тебя к техническим собеседованиям и поможем составить резюме.",
    objectives: [
      "Разбор типичных вопросов на собеседованиях",
      "Практика технических заданий",
      "Составление привлекательного резюме",
      "Моковые собеседования",
    ],
  },
  {
    id: "05",
    category: "ОФФЕР",
    title: "ПОМОЩЬ В ТРУДОУСТРОЙСТВЕ",
    description: "Поможем найти первую работу и успешно пройти испытательный срок.",
    objectives: [
      "Поиск подходящих вакансий",
      "Подготовка к собеседованиям",
      "Помощь в переговорах по зарплате",
      "Поддержка на испытательном сроке",
    ],
  },
]

function RoadmapStep({
  step,
  isExpanded,
  onClick,
}: {
  step: StepContent
  isExpanded: boolean
  onClick: () => void
}) {
  return (
    <div className={styles.stepWrapper}>
      <div className={styles.stepNumber}>{step.id}</div>
      <div className={styles.stepCard}>
        <div className={styles.stepContent}>
          <div className={styles.stepCategory}>{step.category}</div>
          <div className={styles.stepTitle}>{step.title}</div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={styles.stepDetails}
            >
              <div className={styles.stepDetailsContent}>
                <p className="text-zinc-300 text-xs sm:text-sm">{step.description}</p>
                {step.duration && <p className="text-zinc-400 text-xs sm:text-sm">{step.duration}</p>}

                {step.objectives && step.objectives.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-zinc-400 text-xs sm:text-sm">Задачи созвона:</div>
                    <ul className={styles.objectivesList}>
                      {step.objectives.map((objective, index) => (
                        <li key={index} className={styles.objectiveItem}>
                          <span className={styles.objectiveMarker}>•</span>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <button onClick={onClick} className={styles.toggleButton}>
            {isExpanded ? "СВЕРНУТЬ" : "УЗНАТЬ ПОДРОБНЕЕ"}
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            </motion.div>
          </button>
      </div>
    </div>
  )
}

export function Roadmap() {
  const [expandedStep, setExpandedStep] = useState<string | null>(null)

  return (
    <div className={styles.roadmapContainer}>
      <div >
        <h2 className={styles.title}>
          НАШЕ ВЗАИМОДЕЙСТВИЕ
        </h2>

        <div className={styles.stepsWrapper}>
          <div className={styles.verticalLine}></div>

          {steps.map((step) => (
            <RoadmapStep
              key={step.id}
              step={step}
              isExpanded={expandedStep === step.id}
              onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
            />
          ))}

          <div className={styles.bonusSection}>
            <div className={styles.bonusTag}>
              БОНУС
            </div>
            <div className={styles.bonusCard}>
              <div className={styles.bonusTitle}>ПИНКИ МОТИВАЦИИ</div>
              <div className={styles.bonusText}>Когда захочешь все бросить, я напомню, зачем ты это начал.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}