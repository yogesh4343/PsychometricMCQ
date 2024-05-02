import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import Button1 from '../../Assets/Button1'
import { SignUpReducer } from '../../Store/Slice/UserSlice';

const Register = () => {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { userLoginDetail, toastVal } = useSelector((state) => state.UserSlice);

	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		password: "",
		gender: "male",
	});

	// func 
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(SignUpReducer(inputs));
	};

	useEffect(() => {
		if (userLoginDetail.status == true) {
			navigate('/');
		} else {
			navigate("/register");
		}
	}, [userLoginDetail.status]);

	return (
		<div>
			<div>
				<div>
					<div className="  flex justify-center gap-12 flex-col w-screen items-center  h-screen bg-[url('https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1500&lazy=load')]  ">
						<div className=' p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0' style={{ background: "black" }}>
							<h1 className='text-3xl font-semibold text-center text-gray-300'>
								Sign Up <span className='text-blue-500 text-wrap'> For Transaction</span>
							</h1>

							<form onSubmit={handleSubmit}>
								{/* <form > */}
								<div className='my-5 '>
									<label className='label p-2 '>
										<span className='text-base label-text text-gray-300 '> Name</span>
									</label>
									<input
										type='text'
										placeholder='Enter Name'
										className='w-full input input-bordered text-black h-10 p-4 '
										value={inputs.name}
										onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
									/>
								</div>

								<div className='my-5 ' >
									<label className='label p-2 '>
										<span className='text-base label-text text-gray-300 '>Email</span>
									</label>
									<input
										type='email'
										placeholder='Enter mail.com'
										className='w-full input text-black input-bordered h-10 p-4  '
										value={inputs.email}
										onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
									/>
								</div>

								<div className='my-5 '     >
									<label className='label'>
										<span className='text-base label-text text-gray-300 '>Password</span>
									</label>
									<input
										type='password'
										placeholder='Enter Password'
										className='w-full input text-black input-bordered h-10 p-4  '
										value={inputs.password}
										onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
									/>
								</div>


								<div className="w-full  px-3 mb-6 md:mb-0 my-5  ">
									<label className="block uppercase tracking-wide  text-xs font-bold mb-2 text-gray-300     " htmlFor="grid-state">
										Gender
									</label>
									<div className="relative">
										<select value={inputs.gender} onChange={(e) => setInputs({ ...inputs, gender: e.target.value })} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
											<option value="male">Male</option>
											<option value="female">Female</option>
										</select>
										<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
											<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
										</div>
									</div>
								</div>
								<br />
								<NavLink to="/login" className="text-[#fff] hover:text-blue-500 font-serif "   > Redirect to- Login </NavLink>

								<div className="text-sm text-red-500 "> {toastVal}</div>


								<div className="  my-7  " onClick={handleSubmit}  >
									<NavLink to="/login"> <Button1 btn="Sign In" /> </NavLink>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Register
