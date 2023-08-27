function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todolist.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
