import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for login
export const login = createAsyncThunk('auth/login', async ({ username, password }) => {
  const response = await fetch('http://localhost:5500/users'); // Adjusted to get user data
  if (!response.ok) {
    throw new Error('Login failed');
  }

  const users = await response.json();
  // Find the user by username and password
  const user = users.find(user => user.username === username && user.password === password);

  if (!user) {
    throw new Error('Invalid username or password');
  }

  return { user: user, role: user.role }; 
});

// Creating the slice
const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, role: null, error: null },
  reducers: {
    // Logout action
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.error = null; // Clear error on logout
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user; // Set the user
        state.role = action.payload.role; // Set the user role
        state.error = null; // Clear any existing error
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message; // Set error message
      });
  },
});

// Export the logout action and reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
