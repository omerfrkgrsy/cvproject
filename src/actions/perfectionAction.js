import axios from 'axios';
export const getPerfections = () => {
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
        const response=
         await axios.get("/Perfection/AllPerfectionByUser",config)
        dispatch({
                type:'FETCH_PERFECTION_LIST',
                payload:response.data
            });
    }
}
export const addPerfection = (perfection) => {
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
        const response=
         await axios.post("/Perfection/AddPerfectionByUser",perfection,config);
         
        dispatch({
                type:'ADD_PERFECTION',
                payload:response.data
            });
    }
}
export const deletePerfection = (id)=>{
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
         await axios.delete("/Perfection/DeletePerfectionByUser/"+id,config)
         
         .then(()=>{
             
            dispatch({
                type:'DELETE_PERFECTION',
                payload:id
            });
         });
         
        
    }
}