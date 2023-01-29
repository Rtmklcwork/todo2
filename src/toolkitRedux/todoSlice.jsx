import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0,
    todos: ['изучить toolkit','сделать todo','задеплоить на гх' ],
};


const todoSlice = createSlice({
    name:'toolkit',
    initialState,
    reducers: {
        addTodo(state,action){
            state.todos.push(action.payload)
        },
        removeLastTodo(state,action){
            state.todos.pop()
        },
    }
});

export default todoSlice.reducer;
export const {addTodo,removeLastTodo} = todoSlice.actions