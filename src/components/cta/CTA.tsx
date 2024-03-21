import { Button, Reveal } from "..";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapperInner}>
        <div className={styles.top}>
          <Reveal>
            <h3 className={styles.heading}>
              Indulge in the Extraordinary.{" "}
              <span className={styles.heading_accent}>Elevate Your Sip</span>,
              Elevate Your Life.
            </h3>
          </Reveal>
          <Reveal>
            <p className={styles.body}>
              Ready to embark on a journey of unparalleled taste and
              tranquility? Choose Lakshimi Japanese Tea where every cup is a
              celebration of flavor, wellness, and pure indulgence.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <Button>Buy Product</Button>
        </Reveal>
      </div>
    </section>
  );
}
