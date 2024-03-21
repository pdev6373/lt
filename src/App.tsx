import styles from "./App.module.css";
import {
  About,
  Button,
  CTA,
  FAQ,
  Footer,
  Header,
  Hero,
  Reveal,
} from "./components";
import award1 from "./assets/award-1.png";
import award2 from "./assets/award-2.png";
import product1 from "./assets/product-1.png";
import product2 from "./assets/product-2.png";
import features1 from "./assets/features-1.png";
import features2 from "./assets/features-2.png";
import tea1 from "./assets/tea-1.png";
import tea2 from "./assets/tea-2.png";

const products = [
  {
    image: product1,
    title: "Premium Honey Tea",
    description:
      "As a product delivered by a tea sommelier from a tea specialty shop, we have maximized the flavor of the tea leaves. We blend powdered multi-floral honey from Spain into the tea. The sweetness of the honey is so strong that there is no need to use sugar. Just one sip brings a feeling of happiness, a rich flavor. It’s a delicious tea, whether hot or iced, straight or as a milk tea.",
  },
  {
    image: product2,
    title: "Premium Honey Lemon Tea",
    description:
      "Indulge in the harmonious blend of nature's finest ingredients with Lakshimi Premium Honey Lemon Tea. Crafted with meticulous care, this exquisite infusion combines the sweetness of pure honey, the zest of sun-kissed lemons, and the premium quality tea leaves to create a tea experience like no other. Elevate your tea ritual with Lakshimi Premium Honey Lemon Tea, where every sip is a celebration of taste and tranquility.",
  },
];

const features = [
  {
    image: features1,
    title: "Honey that took over 2 years to find.",
    description:
      "Discover the liquid gold that embodies patience and persistence – our honey took over 2 years to find. We have tried over a 1000 different types of honey of different locations and finally, after 2 years of extensive search and going all the way from Japan to Spain, we discovered the perfect honey for the perfect flavored blend of tea.",
  },
  {
    image: features2,
    title: "Blended by Japanese tea sommelier Yoko Toda.",
    description:
      "Crafted with precision and expertise, each blend bears the mark of Japanese tea sommelier Yoko Toda. Immerse yourself in the artistry of tea, perfected by a master for an unparalleled experience in every sip.",
  },
];

const tea = [
  {
    image: tea1,
    title: "With Milk",
    description:
      "Savor the perfect union of tradition and comfort by enjoying our tea with milk. Elevate your tea-drinking experience as the rich, robust flavors intertwine with the creamy embrace of milk, creating a symphony of taste that lingers in every delightful sip.",
  },
  {
    image: tea2,
    title: "With Ice",
    description:
      "Embrace the refreshing symphony of flavors as you take a cool journey through our teas enjoyed with ice. Immerse yourself in the invigorating fusion of iced tea, where each sip unfolds a delightful dance of chilled sophistication and exceptional taste.",
  },
];

const awards = [
  {
    image: award1,
    title: "Top sales in tea category in Japanese EC site.",
  },
  {
    image: award2,
    title: "Top sales in tea category in department stores.",
  },
];

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />

      <section className={styles.section} id="products">
        <div className={styles.wrapper}>
          <Reveal>
            <div className={styles.top}>
              <h3 className={styles.heading}>Selected Products</h3>
              <p className={styles.topBody}>
                Indulge in Our Exceptional Tea Collection.
              </p>
            </div>
          </Reveal>

          <div className={styles.products}>
            {products.map((product, index) => (
              <div className={styles.product} key={index}>
                <Reveal delay={0.25 + index * 0.2}>
                  <img
                    src={product.image}
                    alt="award"
                    className={styles.productImage}
                  />
                </Reveal>

                <div className={styles.productBottom}>
                  <div className={styles.productTexts}>
                    <Reveal delay={0.25 + index * 0.3}>
                      <p className={styles.productTitle}>{product.title}</p>
                    </Reveal>
                    <Reveal delay={0.25 + index * 0.4}>
                      <p className={styles.productText}>
                        {product.description}
                      </p>
                    </Reveal>
                  </div>

                  <Reveal delay={0.25 + index * 0.5}>
                    <Button>Buy Now</Button>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="features">
        <div className={styles.wrapper}>
          <Reveal>
            <div className={`${styles.top} ${styles.topLeft}`}>
              <h3 className={styles.heading}>Product Features</h3>
              <p className={styles.topBody}>
                Discover the Essence of Our Tea Collection
              </p>
            </div>
          </Reveal>

          <div className={styles.features}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${styles.feature} ${
                  index % 2 === 1 ? styles.featureReverse : ""
                }`}
              >
                <Reveal>
                  <img
                    src={feature.image}
                    alt="award"
                    className={styles.productImage}
                  />
                </Reveal>

                <div className={styles.productBottom}>
                  <div className={styles.productTexts}>
                    <Reveal delay={0.25 + index * 0.2}>
                      <p className={styles.productTitle}>{feature.title}</p>
                    </Reveal>
                    <Reveal delay={0.25 + index * 0.3}>
                      <p className={styles.productText}>
                        {feature.description}
                      </p>
                    </Reveal>
                  </div>

                  <Reveal delay={0.25 + index * 0.4}>
                    <Button>Buy Now</Button>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrapper}>
          <Reveal>
            <div className={styles.top}>
              <h3 className={styles.heading}>Get the best from our Tea</h3>
              <p className={styles.topBody}>Style to your own taste.</p>
            </div>
          </Reveal>

          <div className={styles.features}>
            {tea.map((feature, index) => (
              <div
                key={index}
                className={`${styles.feature} ${
                  index % 2 === 1 ? styles.featureReverse : ""
                }`}
              >
                <Reveal>
                  <img
                    src={feature.image}
                    alt="award"
                    className={styles.productImage}
                  />
                </Reveal>

                <div className={styles.productBottom}>
                  <div className={styles.productTexts}>
                    <Reveal delay={0.25 + index * 0.2}>
                      <p className={styles.productTitle}>{feature.title}</p>
                    </Reveal>
                    <Reveal delay={0.25 + index * 0.3}>
                      <p className={styles.productText}>
                        {feature.description}
                      </p>
                    </Reveal>
                  </div>

                  <Reveal delay={0.25 + index * 0.4}>
                    <Button>Buy Now</Button>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="awards">
        <div className={styles.wrapper}>
          <Reveal>
            <div className={`${styles.top} ${styles.topLeft}`}>
              <h3 className={styles.heading}>Awards & Recognition</h3>
              <p className={styles.topBody}>Our works speaks for us.</p>
            </div>
          </Reveal>

          <div className={styles.awards}>
            {awards.map((award, index) => (
              <div className={styles.award} key={index}>
                <Reveal delay={0.25 + index * 0.2}>
                  <img src={award.image} alt="award" />
                </Reveal>

                <Reveal delay={0.25 + index * 0.3}>
                  <div className={styles.left}>
                    <p className={styles.awardText}>{award.title}</p>
                  </div>
                </Reveal>

                <Reveal delay={0.25 + index * 0.4}>
                  <div className={styles.awardButton}>
                    <Button>Buy Now</Button>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
