import styles from "./About.module.css";
import heroImage from "../../assets/hero-image.png";
import { Button, Reveal } from "..";

export default function About() {
  return (
    <section className={styles.wrapper} id="about">
      <div className={styles.top}>
        <Reveal>
          <h3 className={styles.heading}>About Brand</h3>
        </Reveal>
        <p className={styles.body}>
          <Reveal>
            <p>
              Lakshimi started with a tea class that the representative, Yoko
              Toda, started at home. In 2005, “Lakshimi Tea Shop” opened in
              Kitano, Kobe.
            </p>
          </Reveal>
          <Reveal>
            <>
              <p>
                {" "}
                In 2008, we started to blend our own original tea. Initially, we
                started with only a few blends, but as we learned about the
                tastes and preferences of our customers, we gradually increased
                the number of original blends.
              </p>{" "}
            </>
          </Reveal>
          <Reveal>
            <p>
              In 2011, we developed our popular product, “Premium Honey Tea”.
              This tea was well-received by customers who enjoyed its sweet yet
              low-calorie content, making it a mainstay in our store.
            </p>
          </Reveal>
        </p>

        <Reveal>
          <div className={styles.buttonWrapper}>
            <Button>Buy Now</Button>
          </div>
        </Reveal>
      </div>

      <div className={styles.heroImageWrapper}>
        <Reveal>
          <img src={heroImage} alt="hero image" />
        </Reveal>
      </div>
    </section>
  );
}
