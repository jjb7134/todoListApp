import React from "react";
import TodoHeader from "../TodoHeader/TodoHeader";
import Card from "../UI/Card";
import classes from "./CompleteList.module.css";

function CompleteList(props) {
  return (
    <section className={classes.meals}>
      <Card>
        <TodoHeader>
          <h3>{props.completeList.length}개의 할일을 완료함</h3>
        </TodoHeader>
        <hr></hr>
        <ul>
          {props.completeList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default CompleteList;
