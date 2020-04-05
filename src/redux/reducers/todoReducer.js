const initialStore = [{
    "id": "24",
    "createdAt": "2020-02-17T12:06:26.656Z",
    "name": "If we index the card, we can get to the SDD hard drive through the solid state IB pixel!",
    "done": true
}];

const todoReducer = (store = initialStore, action) => {
    switch (action.type) {
        case "GET_TODOS_SUCCESS":
            return action.payload;
        case "TOGGLE_TODO":
            const newState = store.map(todo => {
                const newTodo = {...todo};

                if(newTodo.id === action.payload){
                    newTodo.done = !newTodo.done;
                }

                return newTodo
            });

            return newState;     
        default:
            return store;
        }    
}

export default todoReducer;