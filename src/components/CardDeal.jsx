import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Todas tus ventas  <br className="sm:block hidden" /> al alcance de tu mano.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Toma decisiones con solo ver las graficas. Conoce el comportamiento de tus ventas y clientes.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
