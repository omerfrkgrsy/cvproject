import axios from 'axios';
export const getWorkExperiences = () => {
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
        const response=
         await axios.get("/Work/AllWorkByUser",config)
        dispatch({
                type:'FETCH_WORKEXPERIENCE_LIST',
                payload:response.data
            });
    }
}
export const addWorkExperience = (workExperience) => {
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
        const response=
         await axios.post("/Work/AddWorkByUser",workExperience,config);
         
        dispatch({
                type:'ADD_WORKEXPERIENCE',
                payload:response.data
            });
    }
}
export const deleteWorkExperience = (id)=>{
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
         await axios.delete("/Work/DeleteWorkByUser/"+id,config)
         
         .then(()=>{
             
            dispatch({
                type:'DELETE_WORKEXPERIENCE',
                payload:id
            });
         });
         
        
    }
}