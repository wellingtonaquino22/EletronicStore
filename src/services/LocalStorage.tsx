export const setItem = (key: any, value: any) =>{
    localStorage.setItem(key, JSON.stringify(value));
}

export const getItem = (key: string) => {
    try {
      const value = localStorage.getItem(key);
      if (value === null) {
        return null;
      }
      return JSON.parse(value);
    } catch (error) {
      console.error(`Error parsing JSON from localStorage for key "${key}":`);
      return null;
    }
  }
  
 