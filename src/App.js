import { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoList from "./components/TodoList/TodoList";
import { styled } from "styled-components";

// 스타일 컴포넌트 영역
const Div = styled.div`
  text-align: center;
  border-style: dashed;
  border-radius: 15%;
  margin: 20% auto;
  width: 50%;
`;

function App() {
  const [todolist, setTodolist] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // 수정 중인 아이템의 인덱스
  const [editValue, setEditValue] = useState(""); // 수정 중인 아이템의 값

  const onclick = (newitem) => {
    setTodolist([...todolist, newitem]);
  };

  const onDeleteHandler = (props) => {
    let updatedList = [...todolist];
    updatedList.splice(props.index, 1);
    setTodolist(updatedList);
  };

  // '수정' 버튼 클릭 시 실행될 함수
  const onEditHandler = (index) => {
    setEditIndex(index);
    setEditValue(todolist[index]);
  };

  // 수정 입력 완료 후 '완료' 버튼 클릭 시 실행될 함수
  const onUpdateHandler = () => {
    let updatedList = [...todolist];
    updatedList[editIndex] = editValue;
    setTodolist(updatedList);
    resetEditing(); // 편집 모드 종료
  };

  // 편집 모드 종료 함수
  const resetEditing = () => {
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <Div>
      <TodoHeader></TodoHeader>
      <hr></hr>
      <TodoForm onclick={onclick}></TodoForm>
      <hr></hr>
      <TodoList
        todolist={todolist}
        onDeleteHandler={onDeleteHandler}
        onEditHandler={onEditHandler}
        editIndex={editIndex}
        editValue={editValue}
        onUpdateHandler={onUpdateHandler}
        resetEditing={resetEditing}
        setEditValue={setEditValue} // 이 줄을 추가합니다.
      ></TodoList>
    </Div>
  );
}

export default App;
