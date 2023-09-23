import React from "react";

function TodoHeader(props) {
  return (
    <div>
      {/* <h3>2개의 할일이 있음</h3> */}
      {props.children}
    </div>
  );
}

export default TodoHeader;
