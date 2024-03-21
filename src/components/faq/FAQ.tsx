import { Button, Reveal } from "..";
import styles from "./FAQ.module.css";

const faqs = [
  {
    number: "01",
    question: "Can children drink it?",
    answer: "No. Do not give to children under 1 year old.",
  },
  {
    number: "02",
    question: "Are there staples attached to the tea bag?",
    answer:
      "There are no staples nor any metals attached. So, please drink it with peace of mind.",
  },
  {
    number: "03",
    question: "Is there an expiration date?",
    answer: "The expiration date is 2 years after the date of manufacture.",
  },
];

export default function FAQ() {
  return (
    <section className={styles.wrapper} id="faq">
      <div className={styles.top}>
        <Reveal>
          <div className={styles.top}>
            <h3 className={styles.heading}>Frequently Asked Questions</h3>
            <p className={styles.topBody}>
              Dive into the details! Here are answers to some commonly asked
              questions. If you don't find what you're looking for, feel free to
              reach out to us – we're here to help!
            </p>
          </div>
        </Reveal>
      </div>

      <div className={styles.bottom}>
        <div className={styles.faqs}>
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={0.25 + index * 0.1}>
              <div className={styles.faq}>
                <p className={styles.number}>{faq.number}</p>

                <div className={styles.bottomTexts}>
                  <p className={styles.bottomHeading}>{faq.question}</p>

                  <Reveal delay={0.25 + index * 0.15}>
                    <p className={styles.bottomBody}>{faq.answer}</p>
                  </Reveal>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className={styles.button}>
            <Button>Buy Now</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
