import React from "react";
import classes from "./index.module.css";
import { Typography } from "antd";
import { LinkedinFilled, GithubFilled } from "@ant-design/icons";
import ImageDecoration from "../../assets/img/undraw_greek_freak_j2qb.svg";

const { Paragraph, Title } = Typography;

//tOdo: features
export default function About() {
  return (
    <div className={classes.About}>
      <Title>Acerca de Basketball App</Title>
      <Paragraph>
        Esta App fue creada espacialmente para{" "}
        <span>hiring@tiendadolar.com.ar</span> por <span>Santiago Vallejo</span>
      </Paragraph>
      <Paragraph>
        Características de la App:
        <ul>
          <li>diseño plano y responsive</li>
          <li>agregar alumno</li>
          <li>borrar alumno</li>
          <li>agregar tiro de alumno previamente agregado</li>
          <li>borrar tiro</li>
          <li>validación de formularios</li>
          <li>dashboard para ver ultimos tiros agregados</li>
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
