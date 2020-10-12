const experienceReducer =(state=[],action)=>{
    
    if(action.type==='FETCH_EXPERIENCE_LIST'){
        
        return action.payload;
    }
    return state;
}
export default experienceReducer;