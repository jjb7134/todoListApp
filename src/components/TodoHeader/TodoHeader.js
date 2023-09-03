import React from "react";

function TodoHeader(props) {
  return (
    <div>
      <h2>{props.todolist}개의 할일이 있음</h2>
    </div>
  );
}

export default TodoHeader;
