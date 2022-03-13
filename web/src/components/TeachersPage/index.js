import React, { useState, useEffect } from "react";
import { TeacherPageStyled } from "./style";
import { TeacherGlider } from "../TeacherGlider";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.min.css";
import { TeachersTemplate } from "../TeachersTemplate";

import sanityClient from "../../client.js";

export const TeachersPage = () => {
  const [allTeachers, setAllTeachers] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "teachers"]{
          _id,
          title,
          description,
          authors[]{
            author->{
              name,
              handle,
              nationality,
              image{
                alt,
                caption,
                asset->{
                  url
                }
              }
            }
          },
        }`
      )
      .then((data) => setAllTeachers(data))
      .catch(console.error);
  }, []);

console.log(allTeachers)

  const [key, setKey] = useState("home");
  return (
    <TeacherPageStyled>
      <h1>TEACHERS</h1>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 tabSelector"
        defaultActiveKey="/home"
      >
        {allTeachers?.map( (teachers) => {
          return(
            <Tab eventKey={teachers.title}  title={teachers.title} tabClassName="individualTab" activeKey="team">
              <TeachersTemplate teachers={teachers} />
            </Tab>
          )
          })}
      </Tabs>
    </TeacherPageStyled>
  );
};
