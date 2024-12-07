export const initialState = {
    todos: [],
    counter: 0,
    filter: {
        search: '',
    }
}

export const getInitState = () => {
   const initStateLC = localStorage.getItem('reduxStatePractic');
   return initStateLC ? JSON.parse(initStateLC): initialState;
}