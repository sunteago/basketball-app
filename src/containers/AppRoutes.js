import React from "react";
import PageContainer from "../components/layout/PageContainer";
import AddShot from "../components/AddShot/";

export default function AppRoutes() {
  return (
    <PageContainer sideChildren={<AddShot />}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae odio error
      obcaecati officiis laudantium, illo eveniet numquam sint deleniti
      voluptatibus? Consequuntur ipsa doloribus, unde dolore officia nulla quas
      labore quia.
    </PageContainer>
  );
}
