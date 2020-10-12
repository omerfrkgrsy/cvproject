import axios from 'axios';
import history from '../helpers/history'
export const addUser = (user) =>{
    const response =axios.post('/Home/Register',user);
    if(response){
        console.log(response);
    }
    if(response!=null){
        history.push('/Login');
    }
    return{
        type:'ADD_USER',
        payload:{
            user
        }
    }
}
export const getAuthUser = () => {
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
        const response=
         await axios.get('/Home/GetAuthUser',config);
        dispatch({
                type:'GET_AUTH_USER',
                payload:response.data
            });
    }
}
export const updateUser = (user,id) => {
    return async (dispatch) =>{
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
            }
        }
        const response=
         await axios.put('/Home/UpdateUser',user,config);
         if(response!=null){
             history.push({
                pathname: '/User/Educations',
                state: { id: id }
              })
         }
        dispatch({
                type:'UPDATE_AUTH_USER',
                payload:response.data
            });
    }
}