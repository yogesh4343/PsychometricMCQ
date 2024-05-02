import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { LogoutReducer } from '../../Store/Slice/UserSlice';

const NavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userLoginDetail } = useSelector((state) => state.UserSlice);
    
    // func 
    const registerFunc = ()=>{
            navigate("/register")
        }
        const logInFunc = ()=>{
        navigate("/login");
}
    const logoutFunc = ()=>{
        dispatch(LogoutReducer());
    }

  return (
    <div className="p-7 bg-pink-400 text-white flex justify-end font-bold  cursor-pointer gap-4 ">
      {userLoginDetail.status == true ? 
      <div className="gap-7 flex">
       <div className="text-md flex items-center align-center justify-center  "> 🧔🏻‍♂️  {userLoginDetail.loginDetail.name} </div>
      <div className="loginBtn bg-black p-2 rounded-md text-[.6rem] md:text-[.9rem] hover:bg-white hover:text-black" onClick={logoutFunc}> LogOut </div>
       </div> 
       :
      <>
      <div className="loginBtn bg-black p-2 rounded-md text-[.6rem] md:text-[.9rem] hover:bg-white hover:text-black" onClick={logInFunc}> Login </div>
       <div className="loginBtn bg-black p-2 rounded-md text-[.6rem] md:text-[.9rem] hover:bg-white hover:text-black" onClick={registerFunc}> Register </div>
      </>
     
    }
    </div>
  )
}

export default NavBar
