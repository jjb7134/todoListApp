import TodoHeader from "../TodoHeader/TodoHeader";
import Card from "../UI/Card";
import CompleteList from "./CompleteList";
import classes from "./TodoList.module.css";

function TodoList(props) {
  const onDeleteHandler = (index) => {
    props.onDeleteHandler({ index });
  };

  const onEditHandler = (index) => {
    props.onEditHandler(index);
  };

  const onUpdateHandler = (e) => {
    // 엔터키 입력 구현
    if (e.key === "Enter" || e.target.tagName === "BUTTON") {
      props.onUpdateHandler();
    }
  };

  return (
    <section className={classes.meals}>
      <Card>
        <TodoHeader>
          <h3>{props.todolist.length}개의 할일이 있음</h3>
        </TodoHeader>
        <hr></hr>
        <ul>
          {props.todolist.map((item, index) => (
            <li key={index}>
              {/* 편집 모드인 경우 입력 필드와 '완료' 버튼 표시 */}
              {props.editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={props.editValue}
                    onChange={(e) => props.setEditValue(e.target.value)}
                    // 엔터키 입력 구현
                    onKeyDown={onUpdateHandler}
                  />
                  <button
                    onClick={() => {
                      props.onUpdateHandler();
                    }}
                  >
                    수정 완료
                  </button>
                </>
              ) : (
                /* 편집 모드가 아닌 경우 기존 텍스트와 '수정' 버튼 표시 */
                <>
                  {item}
                  <button onClick={() => props.onCompleteHandler(index)}>
                    완료
                  </button>
                  <button onClick={() => onEditHandler(index)}>수정</button>
                </>
              )}
              {/* 삭제 버튼은 항상 표시 */}
              <button onClick={() => onDeleteHandler(index)}>삭제</button>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default TodoList;
