import styles from "./TechStrip.module.css";

// Import tech stack images
import reactImg from "../../assets/scroll/React.png";
import htmlImg from "../../assets/scroll/html.png";
import cssImg from "../../assets/scroll/css.png";
import jsImg from "../../assets/scroll/js.png";
import angularImg from "../../assets/scroll/angular.png";
import figmaImg from "../../assets/scroll/figma.png";
import muiImg from "../../assets/scroll/mui.png";
import photoshopImg from "../../assets/scroll/photoshop.png";
import premiereProImg from "../../assets/scroll/premierePro.png";
import tailwindImg from "../../assets/scroll/tailwind.png";

function TechStrip() {
  const technologiesRow1 = [
    { name: "React", img: reactImg },
    { name: "HTML", img: htmlImg },
    { name: "CSS", img: cssImg },
    { name: "JavaScript", img: jsImg },
    { name: "Angular", img: angularImg },
    { name: "Figma", img: figmaImg },
  ];

  const technologiesRow2 = [
    { name: "Material UI", img: muiImg },
    { name: "Tailwind CSS", img: tailwindImg },
    { name: "Photoshop", img: photoshopImg },
    { name: "Premiere Pro", img: premiereProImg },
    { name: "React", img: reactImg },
    { name: "Figma", img: figmaImg },
  ];

  const technologiesRow3 = [
    { name: "HTML", img: htmlImg },
    { name: "CSS", img: cssImg },
    { name: "JavaScript", img: jsImg },
    { name: "Angular", img: angularImg },
    { name: "Material UI", img: muiImg },
    { name: "Tailwind CSS", img: tailwindImg },
  ];

  return (
    <section id="tech" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Tech stack</p>
          <h2 className={styles.heading}>Modern stack for modern teams.</h2>
        </div>

        <div className={styles.scrollWrapper}>
          {/* Row 1 */}
          <div className={styles.scroll} style={{ "--time": "60s" }}>
            <div>
              {technologiesRow1.map((tech, index) => (
                <span key={index} className={styles.techChip}>
                  <img src={tech.img} alt={tech.name} />
                  {tech.name}
                </span>
              ))}
            </div>
            <div>
              {technologiesRow1.map((tech, index) => (
                <span key={index} className={styles.techChip}>
                  <img src={tech.img} alt={tech.name} />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className={styles.scroll} style={{ "--time": "60s" }}>
            <div>
              {technologiesRow2.map((tech, index) => (
                <span key={index} className={styles.techChip}>
                  <img src={tech.img} alt={tech.name} />
                  {tech.name}
                </span>
              ))}
            </div>
            <div>
              {technologiesRow2.map((tech, index) => (
                <span key={index} className={styles.techChip}>
                  <img src={tech.img} alt={tech.name} />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Row 3 */}
          <div className={styles.scroll} style={{ "--time": "60s" }}>
            <div>
              {technologiesRow3.map((tech, index) => (
                <span key={index} className={styles.techChip}>
                  <img src={tech.img} alt={tech.name} />
                  {tech.name}
                </span>
              ))}
            </div>
            <div>
              {technologiesRow3.map((tech, index) => (
                <span key={index} className={styles.techChip}>
                  <img src={tech.img} alt={tech.name} />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStrip;