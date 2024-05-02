import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import Button from '../../Assets/Button';
import PsychometricJson from "../../PsychometricJson.json";
import Error from '../Error/Error';

const Result = ({ res }) => {

    const { userLoginDetail } = useSelector((state) => state.UserSlice)

    const param = useParams();
    let paramId = param.id;
    let paramInc = param.in;
    let paramDe = param.de;
    let paramQues = param.ques;

    let percentage = Math.floor((paramInc / paramQues) * 100);
    let percentageCont = "";
    if (percentage <= 10 && percentage == 0) {

        percentageCont = "You are Fail, Try Again!";
    }
    else if (percentage > 11 && percentage < 40) {
        percentageCont = "You Can Do Better";
    } else if (percentage > 41 && percentage < 69) {
        percentageCont = "Your Result is Neutral ";
    }
    else if (percentage > 70 && percentage <= 100) {
        percentageCont = "Your Result is Vey Excellent ";

    }
    return (
        <div>
            {userLoginDetail.status == true ? <>
                <div className="max-w-[96%] md:max-w-[70%] w-full m-auto flex flex-col justify-center ">
                    <div className="icon text-[5rem] md:text-[8rem] m-auto">✅</div>
                    <div className="icon text-[1.2rem] text-center md:text-[4rem] m-auto text-green-700">Congratulations You Made It!</div>

                    <div className="resultCard bg-gray-300 text-center m-8 rounded-md shadow-xl">
                        <div className="text-gray-700 text-[1.2rem] text-center md:text-[3rem] mt-5">{percentageCont}</div>
                        <div className="text-blue-700 font-semibold my-4 text-[1.2rem] text-center md:text-[3rem]">Your Score : {percentage}%</div>

                        <div className="cont max-w-[90%] md:max-w-[84%] w-full m-auto ">
                            <div className="text-[1rem] text-center text-2xl justify-between w-[70%] m-auto my-5 flex  font-bold"> <span className="">Total Number Of Questions : </span> <span className="">{paramQues}</span> </div>
                            <div className="text-[1rem] text-center text-2xl justify-between w-[70%] m-auto my-5 flex font-bold"> <span className="">Total Number Of Correct Answers : </span> <span className="">{paramInc}</span> </div>
                            <div className="text-[1rem] text-center text-2xl justify-between w-[70%] m-auto my-5 flex font-bold"> <span className="">Total Number Of In-Correct Questions : </span> <span className="">{paramDe}</span> </div>
                        </div>

                    </div>

                    <NavLink to="/" className="w-[7rem] md:w-[11rem] text-center font-bold text-1xl md:text-3xl m-auto my-3 md:my-5 "> <Button btn="Home" /> </NavLink>
                </div>
            </> : <Error />}
        </div>
    )
}

export default Result
