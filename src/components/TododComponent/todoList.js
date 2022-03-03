// const todoItems = todos.map((todo, index) => (
// 	// Only do this if items have no stable IDs
// 	<li key={index}>{todo.text}</li>
// ));
const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);