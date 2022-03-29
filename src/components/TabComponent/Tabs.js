import React, { useState } from "react";
import { CreateStudent, ListStudent } from "../screens/createStudent";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("AddStudent");
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("AddStudent");
    };
    function handleTab2() {
        // update the state to tab2
        setActiveTab("StudentList");
    };
  return (
    <div className="Tabs">
        <ul className="nav">
            <li
                className={activeTab === "AddStudent" ? "active" : ""}
                onClick={handleTab1}
            >
                Add Student
            </li>
            <li
                className={activeTab === "StudentList" ? "active" : ""}
                onClick={handleTab2}
            >
                Student List
            </li>
        </ul>
      <div className="outlet">
          {activeTab === "AddStudent" ? <CreateStudent /> : <ListStudent />}
      </div>
    </div>
  );
};
export default Tabs;