import axios from 'axios';
export const getEducationLevel = () => {
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
            
        }
        const response=
         await axios.get("/Education/AllEducationLevel",config)
        dispatch({
                type:'FETCH_EDUCATIONLEVEL_LIST',
                payload:response.data
            });
    }
}