// src/mock/auth.js

// Mock sign in — stores user in localStorage
export const mockSignIn = ({ email }) => {
    const user = {
      id: 1,
      name: "Shulammite",
      email,
      role: "Guest",
    };
    localStorage.setItem("owanbe_user", JSON.stringify(user));
    return user;
  };
  
  // Mock sign up — stores user in localStorage
  export const mockSignUp = ({ name, email }) => {
    const user = {
      id: Date.now(),
      name,
      email,
      role: "Guest",
    };
    localStorage.setItem("owanbe_user", JSON.stringify(user));
    return user;
  };
  
  // Get current user from localStorage
  export const getCurrentUser = () => {
    try {
      return JSON.parse(localStorage.getItem("owanbe_user"));
    } catch {
      return null;
    }
  };
  
  // Logout — remove user from localStorage
  export const logout = () => {
    localStorage.removeItem("owanbe_user");
  };
  