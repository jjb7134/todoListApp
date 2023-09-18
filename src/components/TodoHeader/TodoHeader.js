import React from "react";

function TodoHeader(props) {
  return (
    <div>
      <h3>{props.todolist}개의 할일이 있음</h3>
    </div>
  );
}

export default TodoHeader;
