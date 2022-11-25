import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0;

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push({ id: nextTodoId++, text: action.payload, completed: false })
    },
    toggleTodo(state, action) {
      const todos = state.find(todos => todos.id === action.payload)
      if (todos) {
        todos.completed = !todos.completed
      }
    }
  }
})

export const { addTodo, toggleTodo } = todosSlice.actions

export default todosSlice.reducer