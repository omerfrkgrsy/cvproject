import axios from 'axios';
import history from '../helpers/history'
const loginSuccess= (dispatch,response)=>{
    console.log(response);
    if(response.data.admin===true){
        history.push('/Ik/JobPosting')
    }else{
        history.push('/Home')
    }
    dispatch({
        type:'LOGİN_USER',
        payload:response.data
    });
}

export const loginUser = (email,password) =>{
    return async (dispatch) =>{
        await axios.post('/Home/Authenticate',{email,password}).then((response=>{
            
            localStorage.setItem("jwtToken",response.data.token);
            loginSuccess(dispatch,response);
        }))}
}

export const isLoggedIn =()=>{
    return async dispatch=>{
                let config = {
                    headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
                    }
                }
            await axios.get('/Home/isLoggedIn',config).then((response=>{
                loginSuccess(dispatch,response);
            }))
            .catch(error =>{
                history.push('/Login');
            }
            
            )};
        

}

export const logout =()=>{
    return async dispatch=>{
            localStorage.clear();
            dispatch({type:'LOGOUT' })
            };
        

}