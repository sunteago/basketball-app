import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./index.module.css";
import { Layout } from "antd";
import { PlusCircleOutlined, DoubleRightOutlined } from "@ant-design/icons";
import Navbar from "../Navbar";
import Logo from "../../../assets/img/basketball.svg";
import FooterContent from "../Footer";

const { Header, Footer, Sider, Content } = Layout;

export default function PageContainer(props) {
  const { children, sideChildren } = props;
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Layout className={classes.Layout}>
      <Header className={classes.Header}>
        <Link className={classes.LogoLink} to="/">
          <img className={classes.Logo} src={Logo} alt="Basketball App" />
        </Link>
        <Navbar />
      </Header>
      <Layout>
        <Content className={classes.Content}>{children}</Content>
        <Sider
          trigger={
            isCollapsed ? <PlusCircleOutlined /> : <DoubleRightOutlined />
          }
          onCollapse={() => console.log("hasd")}
          breakpoint="lg"
          collapsedWidth="0"
          reverseArrow
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
