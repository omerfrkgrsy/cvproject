const workExperienceReducer =(state=[],action)=>{
    if(action.type==='FETCH_WORKEXPERIENCE_LIST'){
        
        return action.payload
        
    }
    else if(action.type==='ADD_WORKEXPERIENCE'){
        return [...state,action.payload];
    }
    else if(action.type==='DELETE_WORKEXPERIENCE'){
        return state.filter(workExperience=>action.payload!==workExperience.id)
    }
    return state
}
export default workExperienceReducer;
