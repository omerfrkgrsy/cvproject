import axios from 'axios';
import history from '../helpers/history'
export const examination = (id) => {
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
        const response=
         await axios.get("/Home/Examination/"+id,config)
        if(response!=null){
            history.push({
               pathname: '/IK/Aplication/Detail',
               state: { list: response.data }
             })
        }
        dispatch({
                type:'GET_APPLICATION_DETAİL',
                payload:response.data
            });
    }
}