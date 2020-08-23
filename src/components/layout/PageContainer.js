import React from "react";
import classes from "./PageContainer.module.css";
import { Layout } from "antd";
import Navbar from "./Navbar/";
import Logo from "../../assets/img/basketball.svg";

const { Header, Footer, Sider, Content } = Layout;

export default function PageContainer(props) {
  const { currPage, setCurrPage } = props;

  return (
    <Layout className={classes.Layout}>
      <Header className={classes.Header}>
        <img className={classes.Logo} src={Logo} alt="" />
        <Navbar />
      </Header>
      <Layout>
        <Content className={classes.Content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          inventore cupiditate dignissimos repellat eaque, minima a veritatis
          ullam aut rerum amet voluptatum sequi vel natus aspernatur minus,
          similique perspiciatis nam dolorem. Fugit animi incidunt et optio
          error. Iusto accusantium perferendis quibusdam ratione, assumenda
          deleniti. Suscipit molestiae necessitatibus consequuntur illo nostrum.
        </Content>
        <Sider breakpoint="lg" collapsedWidth="0">
          Sider
        </Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}
