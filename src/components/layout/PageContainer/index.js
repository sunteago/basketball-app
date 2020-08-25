import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UIContext from "../../../context/UI/UIContext";

import classes from "./index.module.css";
import { Layout } from "antd";
import { PlusCircleOutlined, DoubleRightOutlined } from "@ant-design/icons";
import Logo from "../../../assets/img/basketball.svg";

import Navbar from "../Navbar";
import ContentBox from "../ContentBox";
import FooterContent from "../Footer";

const { Header, Footer, Sider, Content } = Layout;

export default function PageContainer(props) {
  const { children, sideChildren } = props;
  const { isCollapsed, setIsCollapsed } = useContext(UIContext);

  return (
    <Layout className={classes.Layout}>
      <Header className={classes.Header}>
        <Link className={classes.LogoLink} to="/">
          <img className={classes.Logo} src={Logo} alt="Basketball App" />
        </Link>
        <Navbar />
      </Header>
      <Layout>
        <Content className={classes.Content}>
          <ContentBox>{children}</ContentBox>
        </Content>
        <Sider
          trigger={
            isCollapsed ? <PlusCircleOutlined /> : <DoubleRightOutlined />
          }
          className={classes.Sider}
          breakpoint="lg"
          collapsedWidth="0"
          reverseArrow
          collapsed={isCollapsed}
          onCollapse={(val) => setIsCollapsed(val)}
          width={200}
        >
          {sideChildren}
        </Sider>
      </Layout>
      <Footer className={classes.Footer}>
        <FooterContent />
      </Footer>
    </Layout>
  );
}
