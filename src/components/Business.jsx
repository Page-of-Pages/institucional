import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { GiBrainstorm } from "react-icons/gi";
import {PiPaintBrushFill} from "react-icons/pi"
import {FaLaptopCode} from "react-icons/fa"

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue flex items-center justify-center`}
    >
      {icon === "brain" && <GiBrainstorm size={40} className="text-secondary"/>}
      {icon === "design" && <PiPaintBrushFill size={40} className="text-secondary"/>}
      {icon === "dev" && <FaLaptopCode size={40} className="text-secondary"/>}
      
      {/* <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" /> */}
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Enfócate en tu negocio, <br className="sm:block hidden" /> nosotros del
        resto.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Céntrate en tu negocio mientras nos ocupamos de la personalización,
        gestión del contenido y rendimiento de tu sitio web.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
