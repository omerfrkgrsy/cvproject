import axios from 'axios';
export const getExperience = () => {
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
            
        }
        const response=
         await axios.get("/Experience/AllExperience",config)
        dispatch({
                type:'FETCH_EXPERIENCE_LIST',
                payload:response.data
            });
    }
}