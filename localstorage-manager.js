export const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('Error setting value in local storage:', error);
    return false; 
  }
};

export const unsetLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true; 
  } catch (error) {
    console.error('Error removing value from local storage:', error);
    return false; 
  }
};
