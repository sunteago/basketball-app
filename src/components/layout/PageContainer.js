import React from "react";
import classes from "./PageContainer.module.css";
import { Layout } from "antd";
import Navbar from "./Navbar/";
import Logo from "../../assets/img/basketball.svg";

const { Header, Footer, Sider, Content } = Layout;

export default function PageContainer(props) {
  const { currPage, setCurrPage, children, sideChildren } = props;

  return (
    <Layout className={classes.Layout}>
      <Header className={classes.Header}>
        <img className={classes.Logo} src={Logo} alt="" />
        <Navbar />
      </Header>
      <Layout>
        <Content className={classes.Content}>{children}</Content>
        <Sider breakpoint="lg" collapsedWidth="0" reverseArrow width={200}>
          {sideChildren}
        </Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}
