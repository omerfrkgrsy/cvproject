const jobPostReducer =(state=[],action)=>{
    
    if(action.type==='FETCH_JOBPOST_LIST'){
        
        return action.payload
    }else if(action.type==='ADD_JOBPOST'){
        return [...state,action.payload];
    }else if(action.type === 'DELETE_JOBPOST'){
        return state.filter(jobpost=>action.payload!==jobpost.id)
    }
    return state;
}
export default jobPostReducer;