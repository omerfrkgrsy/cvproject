const jobApplicationReducer =(state=[],action)=>{
    if(action.type==='FETCH_JOBAPPLICATION_LIST'){
        
        return action.payload
        
    }
    else if(action.type==='ADD_JOBAPPLICATION'){
        return [...state,action.payload];
    }
    else if(action.type==='DELETE_JOBAPPLICATION'){
        return state.filter(jobpost=>action.payload!==jobpost.id)
    }
    
    return state
}
export default jobApplicationReducer;

