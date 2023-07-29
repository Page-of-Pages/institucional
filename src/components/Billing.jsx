import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      {/* <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
      <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_ubqfycud.json"
          background="transparent"
          speed="1"
          style={{
            height: "auto",
            width:
              window.innerWidth >= 1024
                ? "500px"
                : window.innerWidth >= 425 && window.innerWidth < 1024
                ? "300px"
                : "200px",
          }}
          loop
          autoplay
        ></lottie-player>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Controlá facil tu <br className="sm:block hidden" /> facturación
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Podemos desarrollar un sistema de gestión altamente eficiente que te permitirá administrar y mantener un control óptimo sobre tus procesos de facturación y facturación. Con la máxima facilidad y comodidad, podrás manejar cada aspecto de tu ciclo de facturación de manera efectiva.
      
      </p>
    </div>
  </section>
);

export default Billing;
