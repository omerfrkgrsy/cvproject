

const languageReducer =(state=[],action)=>{
    if(action.type==='FETCH_LANGUAGE_LIST'){
        
        return action.payload
        
    }
    else if(action.type==='ADD_LANGUAGE'){
        return [...state,action.payload];
    }
    else if(action.type==='DELETE_LANGUAGE'){
        return state.filter(language=>action.payload!==language.id)
    }
    return state
}
export default languageReducer;