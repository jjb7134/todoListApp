import Button from "../UI/Button";

function TodoList(props) {
  const onDeleteHandler = (index) => {
    props.onDeleteHandler({ index });
  };

  const onEditHandler = (index) => {
    props.onEditHandler(index);
  };

  const onUpdateHandler = () => {
    props.onUpdateHandler();
  };

  return (
    <div>
      <ul>
        {props.todolist.map((item, index) => (
          <li key={index}>
            {/* 수정버튼 누르면 입력필드랑 완료버튼 표시 */}
            {props.editIndex === index ? (
              <>
                <input
                  type="text"
                  value={props.editValue}
                  onChange={(e) => props.setEditValue(e.target.value)}
                />
                <button onClick={onUpdateHandler}>완료</button>
              </>
            ) : (
              // 편집모드 아닌경우 기존 뷰
              <>
                {item}
                <button onClick={() => onEditHandler(index)}>수정</button>
              </>
            )}
            {/* 삭제버튼은 항상 표시 */}
            <button onClick={() => onDeleteHandler(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
