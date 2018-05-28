export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';


//receive todos and populate the store

export const receiveTodos = (todos) => (
  {
    type: RECEIVE_TODOS,
    todos
  }
);

export const receiveTodo = (todo) => (
  {
    type: RECEIVE_TODO,
    todo
  }
);


//recieve a single todo - add or update a single todo in the store

//
// const receiveTodos = (todos) => (
//   {
//     type: 'RECEIVE_TODOS',
//     todos
//   }
// );
//
// const receiveTodo = (todo) => (
//   {
//     type: 'RECEIVE_TODO',
//     todo
//   }
// );
