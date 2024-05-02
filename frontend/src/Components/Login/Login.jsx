import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Button1 from '../../Assets/Button1'
import { LoginReducer } from '../../Store/Slice/UserSlice';

const Login = () => {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { userLoginDetail, toastVal } = useSelector((state) => state.UserSlice);

	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});

	useEffect(() => {
		if (userLoginDetail.status == true) {
			navigate('/');
		} else {
			navigate("/login");
		}
	}, [userLoginDetail.status]);

	// func 
	const handleSubmit = (e) => {
		// console.log(toastVal);
		e.preventDefault();
		dispatch(LoginReducer(inputs));
	};

	return (
		<div>
			<div>
				<div className="flex justify-center gap-12 flex-col w-screen items-center  h-screen bg-[url('https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1500&lazy=load')]">

					<div className=' p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ' style={{ background: "black" }}>


						<h1 className='text-3xl font-semibold text-center text-gray-300'>
							Login
							<span className='text-blue-500' > For Transation</span>
						</h1>

						<form onSubmit={handleSubmit}>
							{/* <form > */}
							<div className="my-5 ">
								<label className='label p-2'>
									<span className='text-base label-text'>Username</span>
								</label>
								<input
									type='text'
									placeholder='Enter username'
									className='w-full input input-bordered h-10 p-4 text-black    '
									value={inputs.email}
									onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
								/>
							</div>

							<div className="my-5 ">
								<label className='label'>
									<span className='text-base label-text'>Password</span>
								</label>
								<input
									type='password'
									placeholder='Enter Password'
									className='w-full input input-bordered h-10  p-4 text-black    '
									value={inputs.password}
									onChange={(e) => setInputs({ ...inputs, password: e.target.value })}

								/>
							</div>
							<NavLink to="/register" className="text-white hover:text-blue-500 font-serif "  > Redirect to- SignUp </NavLink>
							<div>
								<div className="text-sm text-red-500"> {toastVal}</div>
								<div className="  my-7  " onClick={handleSubmit}  >
									<Button1 btn="Log In" />
								</div>
							</div>

						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
