import { createSlice, nanoid } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
  },

  reducers: {
    add_task: (state, action) => {
      // console.log(action.payload)
      const data = {
        id: action.payload.id,
        title: action.payload.title,
        detail: action.payload.detail,
      };
      state.tasks.push(data);
    },
    remove_task: (state, action) => {
      const deleteindex = state.tasks.findIndex(
        (item) => item.id === action.payload.id
      );
      if (deleteindex !== -1) {
        state.tasks.splice(deleteindex, 1);
      }
    },
    edit_task: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
  },
});

export const { add_task, remove_task, edit_task } = taskSlice.actions;

export default taskSlice.reducer;
