
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";


export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
    // PRODUCT_DETAILS_REQUEST,
    // PRODUCT_DETAILS_SUCCESS,
    // PRODUCT_DETAILS_FAIL,
});

const UserSlice = createSlice({
    name:"user",
    initialState:{
        status: STATUS.ERROR,
        // userDetail:{},
        toastVal:"",
        // userLoginDetail:{},
        userLoginDetail:localStorage.getItem("VishalPsychometricUser")? JSON.parse(localStorage.getItem("VishalPsychometricUser")) : {}
        
    },
    reducers:{
        getStatus(state,action){
            state.status = action.payload
        },
        getUserDetail(state,action){
            state.userDetail = action.payload
        },
        getUserLogin(state,action){
            state.userLoginDetail = action.payload
        },
        getUserLogout(state,action){
            state.userLoginDetail = {};
        },
        getToastDetail(state,action){
            state.toastVal = action.payload;
        }

    }
})

export default UserSlice.reducer;

export const {getStatus , getUserDetail , getUserLogin ,getUserLogout ,getToastDetail  } = UserSlice.actions





 export function SignUpReducer(inputs){
    // console.log(inputs);
        return async function SignUpThunk(dispatch , thunk) {
    
            dispatch(getStatus(STATUS.LOADING))
            // getToastDetail("User is Loading")
    
            const config = { headers : { "Content-Type" : "application/json"}};
            try{
    
                
                const {data} = await axios.post(`/api/register`, inputs , config)
                // console.log(data);
                dispatch(
                    getStatus(STATUS.IDLE),
                    )
                    dispatch(
                        getToastDetail(data.message),
                    )
                dispatch(
                    getUserDetail(data),
                )
               
                // localStorage.setItem("VishalPsychometricUser" , JSON.stringify(data));
            }catch(error){
                // getToastDetail("User's Incorrect Detail")
                dispatch (getStatus(STATUS.ERROR))
            }
        }
    }


export function LoginReducer(inputs){
    console.log(inputs)
    return async function LoginThunk(dispatch , thunk) {

        dispatch(getStatus(STATUS.LOADING))

        const config = { headers : { "Content-Type" : "application/json"}};
        try{

            
            const {data} = await axios.post(`/api/login`, inputs , config)
            console.log(data);
            dispatch(
                getStatus(STATUS.IDLE),
                )
                dispatch(
                    getToastDetail(data.message),
                )
            dispatch(
                getUserLogin(data),
                )
               
            

            localStorage.setItem("VishalPsychometricUser" , JSON.stringify(data));
        }catch(error){
            // console.log(error.message);
        //    dispatch( getToastDetail("User's Incorrect Detail"))
            dispatch (getStatus(STATUS.ERROR))
        }
    }
}


// logout 
export function LogoutReducer(){
    return async function LogoutThunk(dispatch , thunk) {

        dispatch(getStatus(STATUS.LOADING))
        try{

            
            const {data} = await axios.post(`/api/logout`)
            // console.log(data);
            dispatch(
                getStatus(STATUS.IDLE),
                )
                dispatch( getToastDetail(data.message))
            dispatch(
                getUserLogout(data),
            )

            localStorage.removeItem("VishalPsychometricUser");
            
        }catch(error){
            // dispatch( getToastDetail("User's Incorrect Detail in Logout"))
            dispatch (getStatus(STATUS.ERROR))
        }
    }
}