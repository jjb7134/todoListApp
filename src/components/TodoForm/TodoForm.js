import React, { useState } from "react";

function TodoForm(props) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
    // console.log(e.target.value);
  };
  const onClick = (e) => {
    // 공란 Validation rule 추가
    if (text === "") {
      alert("1자 이상은 입력해야해요");
    } else {
      e.preventDefault();
      props.onclick(text);
      setText("");
    }
  };

  return (
    <div>
      <h2>할일을 추가해 보세요</h2>
      <input onChange={onChange} value={text}></input>
      <button type="button" onClick={onClick}>
        추가
      </button>
    </div>
  );
}

export default TodoForm;
