export const checkValidData = (email, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
  
  if (!isEmailValid) return 'Invalid email format';
  if (!isPasswordValid) return 'Invalid password format';

  return null;
};  