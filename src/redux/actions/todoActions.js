import Axios from "axios"

export const getTodos = () => {
 return function(dispatch){
     Axios.get("http://5de80f759578cb001487adea.mockapi.io/Todo").then(response => {
        dispatch({
            type: "GET_TODOS_SUCCESS",
            payload: response.data
        });
     });
 }
}

export const toggleTodo = (todo) => {
    return function(dispatch){
        Axios.put("http://5de80f759578cb001487adea.mockapi.io/Todo/" + todo.id, {
            done: !todo.done
        }).then(response => {
           dispatch({
               type: "TOGGLE_TODO",
               payload: todo.id
           });
        });
    }
   }