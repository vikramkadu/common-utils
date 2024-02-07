export const setLocalStorage = <T>(key: string, value: T): boolean => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('Error setting value in local storage:', error);
    return false;
  }
};

export const getLocalStorage = <T>(key: string): T | null => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  } catch (error) {
    console.error('Error getting value from local storage:', error);
    return null;
  }
};

export const unsetLocalStorage = (key: string): boolean => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing value from local storage:', error);
    return false;
  }
};

export const clearLocalStorage = (): boolean => {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error('Error clearing local storage:', error);
    return false;
  }
};
