import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCourses = createAsyncThunk('course/fetchCourses', async () => {
  const response = await fetch('http://localhost:3000/courses');
  return response.json();
});

export const addCourse = createAsyncThunk('course/addCourse', async (course) => {
  const response = await fetch('http://localhost:3000/courses', {
    method: 'POST',
    body: JSON.stringify(course),
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
});

// export const addComment = createAsyncThunk('course/addComment', async ({ courseId, comment }) => {
//   const response = await fetch(`http://localhost:3000/courses${courseId}/comments`, {
//     method: 'POST',
//     body: JSON.stringify({ comment }),
//     headers: { 'Content-Type': 'application/json' },
//   });
//   return response.json();
// });

const courseSlice = createSlice({
  name: 'course',
  initialState: { courses: [], comments: {}, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.courses.push(action.payload);
      })
      // .addCase(addComment.fulfilled, (state, action) => {
      //   const { courseId, comment } = action.payload;
      //   if (!state.comments[courseId]) {
      //     state.comments[courseId] = [];
      //   }
      //   state.comments[courseId].push(comment);
      // });
  },
});

export default courseSlice.reducer;
