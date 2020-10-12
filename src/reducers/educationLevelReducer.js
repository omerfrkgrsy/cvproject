const educationLevelReducer =(state=[],action)=>{
    if(action.type==='FETCH_EDUCATIONLEVEL_LIST'){
        
        return action.payload;
    }
    return state;
}
export default educationLevelReducer;

