import React from "react";
import classes from "./index.module.css";
import { Typography } from "antd";
import { LinkedinFilled, GithubFilled } from "@ant-design/icons";
const { Paragraph, Title } = Typography;

//tOdo: features
export default function About() {
  return (
    <div className={classes.About}>
      <Title>Basketball App</Title>
      <Paragraph>
        Esta App fue creada espacialmente para{" "}
        <span>hiring@tiendadolar.com.ar</span>
      </Paragraph>
      <Paragraph>
        Características de la App:
        <ul className={classes.FeaturesList}>
          <li>Diseño plano y responsive</li>
          <li>Agregar alumno</li>
          <li>Agregar tiro de alumno previamente agregado</li>
          <li>Dashboard para ver ultimos tiros agregados</li>
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
    </div>
  );
}
