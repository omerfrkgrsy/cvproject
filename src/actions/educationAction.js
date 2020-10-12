import axios from 'axios';
export const getEducations = () => {
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
        const response=
         await axios.get("/Education/AllEducationByUser",config)
        dispatch({
                type:'FETCH_EDUCATION_LIST',
                payload:response.data
            });
    }
}
export const addEducation = (education) => {
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
        const response=
         await axios.post("/Education/AddEducationByUser",education,config);
         
        dispatch({
                type:'ADD_EDUCATION',
                payload:response.data
            });
    }
}
export const deleteEducation = (id)=>{
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
         await axios.delete("/Education/DeleteEducationByUser/"+id,config)
         
         .then(()=>{
             
            dispatch({
                type:'DELETE_EDUCATION',
                payload:id
            });
         });
         
        
    }
}