const educationReducer =(state=[],action)=>{
    if(action.type==='FETCH_EDUCATION_LIST'){
        
        return action.payload
        
    }
    else if(action.type==='ADD_EDUCATION'){
        return [...state,action.payload];
    }
    else if(action.type==='DELETE_EDUCATION'){
        return state.filter(education=>action.payload!==education.id)
    }
    return state
}
export default educationReducer;