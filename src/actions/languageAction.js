import axios from 'axios';
export const getLanguages = () => {
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
        const response=
         await axios.get("/Language/AllLanguageByUser",config)
        dispatch({
                type:'FETCH_LANGUAGE_LIST',
                payload:response.data
            });
    }
}
export const addLanguage = (language) => {
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
        const response=
         await axios.post("/Language/AddLanguageByUser",language,config);
         
        dispatch({
                type:'ADD_LANGUAGE',
                payload:response.data
            });
    }
}
export const deleteLanguage = (id)=>{
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
         await axios.delete("/Language/DeleteLanguageByUser/"+id,config)
         
         .then(()=>{
             
            dispatch({
                type:'DELETE_LANGUAGE',
                payload:id
            });
         });
         
        
    }
}