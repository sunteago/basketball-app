import React from "react";
import classes from "./index.module.css";
import { Typography } from "antd";
import { LinkedinFilled, GithubFilled } from "@ant-design/icons";
import ImageDecoration from "../../assets/img/undraw-basketball-2.svg";

const { Paragraph, Title } = Typography;

//tOdo: features
function About() {
  return (
    <div className={classes.About}>
      <Title style={{ overflowWrap: "normal" }}>Basketball App</Title>
      <Paragraph>
        Esta App fue creada por <span>Santiago Vallejo</span>
      </Paragraph>
      <Paragraph>
        Principales características
        <ul>
          <li>
            aplicación web progresiva, por lo que funciona sin conexión a
            internet
          </li>
          <li>diseño plano y responsive</li>
          <li>agregar alumno</li>
          <li>borrar alumno</li>
          <li>agregar tiro de un alumno previamente agregado</li>
          <li>borrar tiro</li>
          <li>validación de formularios</li>
          <li>dashboard para ver ultimos tiros agregados</li>
          <li>visualizacion del estado actual de los tiros</li>
        </ul>
      </Paragraph>
      <Paragraph>
        Mis redes:
        <ul className={classes.SocialNetworkList}>
          <li>
            <a
              href="https://www.linkedin.com/in/santiago-vallejo-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinFilled className={classes.SocialNetworkIcon} /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sunteago"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubFilled className={classes.SocialNetworkIcon} /> GitHub
            </a>
          </li>
        </ul>
      </Paragraph>
      <img src={ImageDecoration} alt="" className={classes.ImageDecoration} />
    </div>
  );
}

export default React.memo(About, () => true);
