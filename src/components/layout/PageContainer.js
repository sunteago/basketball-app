import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./PageContainer.module.css";
import { Layout } from "antd";
import { PlusCircleOutlined, DoubleRightOutlined } from "@ant-design/icons";
import Navbar from "./Navbar/";
import Logo from "../../assets/img/basketball.svg";

const { Header, Footer, Sider, Content } = Layout;

export default function PageContainer(props) {
  const { currPage, setCurrPage, children, sideChildren } = props;
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
      <Footer>Footer</Footer>
    </Layout>
  );
}
