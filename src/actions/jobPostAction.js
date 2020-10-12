import axios from 'axios';
export const getPostList = () => {
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
        const response=
         await axios.get("/JobPosting/AllJobPostingByUser",config)
        dispatch({
                type:'FETCH_JOBPOST_LIST',
                payload:response.data
            });
    }
}
export const addJobPost = (jobPost) => {
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
            
        }
        const response=
         await axios.post("/JobPosting/AddJobPostingByUser",jobPost,config)
        dispatch({
                type:'ADD_JOBPOST',
                payload:response.data
            });
    }
}

export const finishJobPost = (id)=>{
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
         await axios.delete("/JobPosting/DeleteJobPostingByUser/"+id,config)
         
         .then(()=>{
             
            dispatch({
                type:'DELETE_JOBPOST',
                payload:id
            });
         });
         
        
    }
}
