import React, { useState } from "react";
import { TeacherPageStyled } from "./style";
import { TeacherGlider } from "../TeacherGlider";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.min.css";
import { TeachersTemplate } from "../TeachersTemplate";

export const TeachersPage = () => {
  const [key, setKey] = useState("home");
  return (
    <TeacherPageStyled>
      <h1>TEACHERS</h1>
      <p>LOREM IMPUSM</p>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 tabSelector"
        defaultActiveKey="/home"
      >
        <Tab eventKey="team" title="the team" tabClassName="individualTab" activeKey="team">
          <TeachersTemplate />
        </Tab>
        <Tab eventKey="2021" title="2021" tabClassName="individualTab" activeKey="team">
          <TeachersTemplate />
        </Tab>
        <Tab eventKey="2019" title="2019" tabClassName="individualTab" activeKey="team">
          <TeachersTemplate />
        </Tab>
      </Tabs>
    </TeacherPageStyled>
  );
};
