import uuid from 'uuid';

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TODO':

    //  creating an object with an ID and text to add to the todos array
      const todo = {
        id: uuid(),
        text: action.payload.text
      }
      return { todos: state.todos.concat(todo) };
 
    case 'DELETE_TODO':
    
      return {todos: state.todos.filter(todo => todo.id !== action.payload)}
 
    default:
      return state;
  }
}