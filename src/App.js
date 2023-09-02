import { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoList from "./components/TodoList/TodoList";

import classes from "./App.module.css";

function App() {
  // list를 담는 상태
  const [todolist, setTodolist] = useState([]);
  const [editIndex, setEditIndex] = useState(null); //수정중인 아이템 인덱스
  const [editValue, setEditValue] = useState(""); // 수정중인 내용

  const onclick = (newitem) => {
    setTodolist([...todolist, newitem]);
  };

  const onDeleteHandler = (props) => {
    const updateList = [...todolist]; //목록들을 새 배열로 초기화
    updateList.splice(props.index, 1); //넘겨받은 index 1개만 삭제 처리
    setTodolist(updateList); //삭제할 요소가 삭제된 목록들을 setTodo에 셋팅
  };

  // 수정버튼 클릭시 실행될 함수
  const onEditHandler = (index) => {
    setEditIndex(index);
    setEditValue(todolist[index]);
  };

  // 수정 입력 완료 후 '완료' 버튼 클릭 시 실행될 함수
  const onUpdateHandler = () => {
    let updateList = [...todolist];
    updateList[editIndex] = editValue;
    setTodolist(updateList);
    resetEditing();
  };

  // 편집 모드 종료 함수
  const resetEditing = () => {
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div>
      <div className={classes.todoList}>
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
          setEditValue={setEditValue}
        />
      </div>
    </div>
  );
}

export default App;
