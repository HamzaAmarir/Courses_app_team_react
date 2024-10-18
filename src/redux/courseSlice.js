import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCourses = createAsyncThunk('course/fetchCourses', async () => {
  const response = await fetch('http://localhost:3000/courses');
  const data = await response.json();
  return data;
  
});

export const addCourse = createAsyncThunk('course/addCourse', async (course) => {
  const response = await fetch('http://localhost:3000/courses', {
    method: 'POST',
    body: JSON.stringify(course),
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
});

export const deleteCourse = createAsyncThunk('course/deleteCourse', async (courseId) => {
  await fetch(`http://localhost:3000/courses/${courseId}`, {
    method: 'DELETE',
  });
  return courseId;
});


export const editCourse = createAsyncThunk('course/editCourse', async ({ courseId, updatedCourse }) => {
  const response = await fetch(`http://localhost:3000/courses/${courseId}`, {
    method: 'PUT',
    body: JSON.stringify(updatedCourse),
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
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.courses = state.courses.filter((course) => course.id !== action.payload);
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.courses.push(action.payload)
      })
      .addCase(editCourse.fulfilled, (state, action) => {
        const index = state.courses.findIndex((course) => course.id === action.payload.id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      });
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
