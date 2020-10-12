const perfectionReducer =(state=[],action)=>{
    if(action.type==='FETCH_PERFECTION_LIST'){
        
        return action.payload;
        
    }
    else if(action.type==='ADD_PERFECTION'){
        return [...state,action.payload];
    }
    else if(action.type==='DELETE_PERFECTION'){
        return state.filter(perfection=>action.payload!==perfection.id)
    }
    return state;
}
export default perfectionReducer;