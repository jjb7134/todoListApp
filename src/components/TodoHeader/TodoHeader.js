import React from "react";

function TodoHeader(props) {
  return (
    <div>
      <header>{props.index}개의 할일이 있음</header>
    </div>
  );
}

export default TodoHeader;
