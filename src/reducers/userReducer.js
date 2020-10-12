const userReducer =(state=[],action)=>{
    
    if(action.type==='ADD_USER'){
        return action.payload;
    }
    else if(action.type==='GET_AUTH_USER'){
        console.log(action.payload);
        return action.payload;
    }
    else if(action.type==='UPDATE_AUTH_USER'){
        return action.payload;
    }
    return state;
}
export default userReducer;