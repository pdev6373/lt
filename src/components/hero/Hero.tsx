import { Button, Reveal } from "..";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.wrapperInner}>
        <div className={styles.top}>
          <Reveal delay={0.35}>
            <h3 className={styles.heading}>
              The ultimate aroma and taste, for blissful{" "}
              <span className={styles.heading_accent}>relaxation</span>.
            </h3>
          </Reveal>

          <Reveal delay={0.45}>
            <p className={styles.body}>
              Elevate your tea experience and discover the perfect balance of
              tranquility and taste, sip by sip. Welcome to a journey where
              every cup is a celebration of serenity and indulgence.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.55}>
          <div className={styles.button}>
            <Button>Buy Now</Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
