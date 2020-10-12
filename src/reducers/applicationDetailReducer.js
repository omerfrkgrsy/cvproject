const applicationDetailReducer =(state=[],action)=>{
    if(action.type==='GET_APPLICATION_DETAİL'){
        
        return action.payload;
    }
    return state;
}
export default applicationDetailReducer;


