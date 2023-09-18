import { Fragment, useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import { styled } from "styled-components";
import Lists from "./components/TodoList/Lists";
import TodoList from "./components/TodoList/TodoList";

// 스타일 컴포넌트 영역
const Div = styled.div`
  background: white;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  text-align: center;
  margin: 100px auto 20px;
  width: 40%;
`;

function App() {
  const [todolist, setTodolist] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // 수정 중인 아이템의 인덱스
  const [editValue, setEditValue] = useState(""); // 수정 중인 아이템의 값

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
    // 수정간 공란 Validation rule 추가
    if (updatedList[editIndex] === "") {
      alert("1자 이상은 입력해야해요.");
    } else {
      setTodolist(updatedList);
      resetEditing(); // 편집 모드 종료
    }
  };

  // 편집 모드 종료 함수
  const resetEditing = () => {
    setEditIndex(null);
    setEditValue("");
  };

  const onclick = (newitem) => {
    setTodolist([...todolist, newitem]);
  };

  return (
    <Fragment>
      <Div>
        <TodoForm onclick={onclick}></TodoForm>
      </Div>

      <main>
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
        {/* <Lists>
        </Lists> */}
      </main>
    </Fragment>
  );
}

export default App;
