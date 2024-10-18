import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('auth/login', async ({ username, password }) => {
  const response = await fetch('http://localhost:5500/users'); 
  if (!response.ok) {
    throw new Error('Login failed');
  }

  const users = await response.json();
  const user = users.find(user => user.username === username && user.password === password);

  if (!user) {
    throw new Error('Invalid username or password');
  }

  return { user: user, role: user.role }; 
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, role: null, error: null },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.error = null; 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user; 
        state.role = action.payload.role; 
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message; 
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
