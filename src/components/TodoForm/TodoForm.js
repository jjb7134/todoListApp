import React, { useState } from "react";

function TodoForm(props) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
    // console.log(e.target.value);
  };
  const onClick = (e) => {
    e.preventDefault();
    props.onclick(text);
    setText("");
  };

  return (
    <div>
      <h3>할일을 추가해주세요</h3>
      <input onChange={onChange} value={text}></input>
      <button type="button" onClick={onClick}>
        추가
      </button>
      <button>수정</button>
      <button>삭제</button>
    </div>
  );
}

export default TodoForm;
