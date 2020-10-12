import axios from 'axios';
import history from '../helpers/history'
export const getjobApplications = () => {
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
        const response=
         await axios.get("/JobApplication/AllJobApplicationByUser",config)
        dispatch({
                type:'FETCH_JOBAPPLICATION_LIST',
                payload:response.data
            });
    }
}

export const getAllJobApplications = () => {
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
        const response=
         await axios.get("/JobApplication/AllJobApplication",config)
        dispatch({
                type:'FETCH_JOBAPPLICATION_LIST',
                payload:response.data
            });
    }
}

export const addjobApplication = (jobPostingId) => {
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
            
        }
        const response=
         await axios.post("/JobApplication/AddJobApplicationByUser",{jobPostingId},config)
         if(response!=null){
            history.push('/User/Myaplications')
         }
        dispatch({
                type:'ADD_JOBAPPLICATION',
                payload:response.data
            });
    }
}
export const finishJobApplication = (id)=>{
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
         await axios.delete("/JobApplication/DeleteJobApplicationByUser/"+id,config)
         
         .then(()=>{
             
            dispatch({
                type:'DELETE_JOBAPPLICATION',
                payload:id
            });
         });
         
        
    }
}