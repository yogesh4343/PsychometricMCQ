import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import Button from '../../Assets/Button';
import PsychometricJson from "../../PsychometricJson.json";
import Error from '../Error/Error';
import PsychometricSkillBasedJson from "../Json/PsychometricSkillBasedJson.json";
import Result from '../Result/Result';


const Test = () => {
  const paramId = useParams();
  const [clickedIndex, setClickedIndex] = useState([]);
  const [options, setOptions] = useState();
  const [length, setLength] = useState(true);
  const [increment, setIncrement] = useState(0);
  const [QuesIncre, setQuesInc] = useState(0);
  let decrement = 0;

  const { userLoginDetail } = useSelector((state) => state.UserSlice);


  let JsonLength = PsychometricSkillBasedJson.length;
  let indexVal = ""

  // fil 
  const filterAssignment = PsychometricJson.filter((curEl, idx) => {
    return curEl.id == paramId.id;
  });
  let filterAssignmentAns = filterAssignment[0];

  const filterPsychometricSkillBased = PsychometricSkillBasedJson.map((curEl, idx) => {
    return curEl;
  });

  // nextFunc 
  const nextFunc = () => {
    setQuesInc(QuesIncre + 1);
    console.log("nextFunc", QuesIncre);
    if (PsychometricSkillBasedJson[QuesIncre].id == JsonLength - 1) {
      setLength(false);
    }
  }

  const optionChoose = (quesId, optVal) => {
    const filterPsychometricSkillBased = PsychometricSkillBasedJson.filter((curEl, idx) => {
      return curEl.id === quesId;
    });
    const PsychometricSkillCont = filterPsychometricSkillBased[0].answer;
    if (PsychometricSkillCont == optVal) {
      setIncrement(increment + 1);
    }


    console.log("Ans", PsychometricSkillCont, "Cho", optVal, " inc", increment);

  }

  // increment 
  decrement = JsonLength - increment;
  console.log("Ques", JsonLength, "Increment", increment, "Decrement", decrement);
  // decrem 


  return (
    <div>
      {userLoginDetail.status == true ? <div>

        <div className="headingTest text-4xl font-bold  bg-gradient-to-b from-blue-600  to-orange-560 py-8 text-center">#Psychometric Assignment <br />{filterAssignmentAns.title} Std </div>



        <div className="option flex flex-col items-center gap-1 md:m-5 " >


          <div className="option1 cursor-pointer my-8 w-full md:w-[70%]" >

            <div className="ques1 text-md md:text-xl p-4 md:p-7 rounded-md drop-shadow-lg bg-gray-200"><span>Question {PsychometricSkillBasedJson[QuesIncre].id} ).&nbsp; &nbsp; </span> <strong>{PsychometricSkillBasedJson[QuesIncre].question} </strong></div>

            <div className="firstopt flex text-md mt-12  flex-col ">
              <div className="opt1 p-5" onClick={() => optionChoose(PsychometricSkillBasedJson[QuesIncre].id, PsychometricSkillBasedJson[QuesIncre].option1)}>1. <span className="p-4 px-8  rounded-lg bg-purple-600 text-[#fff] hover:bg-blue-500  "> {PsychometricSkillBasedJson[QuesIncre].option1} </span></div>
              <div className="opt1 p-5" onClick={() => optionChoose(PsychometricSkillBasedJson[QuesIncre].id, PsychometricSkillBasedJson[QuesIncre].option2)}>2. <span className="p-4 rounded-lg bg-purple-600 text-[#fff] hover:bg-blue-500 "> {PsychometricSkillBasedJson[QuesIncre].option2} </span></div>
            </div>

            <div className="secondopt flex text-xl flex-col">
              <div className="opt1 p-5" onClick={() => optionChoose(PsychometricSkillBasedJson[QuesIncre].id, PsychometricSkillBasedJson[QuesIncre].option3)}>3. <span className="p-4 rounded-lg bg-purple-600 text-[#fff] hover:bg-blue-500 "> {PsychometricSkillBasedJson[QuesIncre].option3} </span></div>
              <div className="opt1 p-5" onClick={() => optionChoose(PsychometricSkillBasedJson[QuesIncre].id, PsychometricSkillBasedJson[QuesIncre].option4)}>4. <span className="p-4 rounded-lg bg-purple-600 text-[#fff] hover:bg-blue-500 "> {PsychometricSkillBasedJson[QuesIncre].option4} </span></div>
            </div>

          </div>

          {length == true ? <div className="cursor-pointer ml-0" onClick={nextFunc}> <Button btn="Next" /> </div> : <NavLink to={`/result/${paramId.id}/${increment}/${decrement}/${JsonLength}`} className="cursor-pointer" > <Button btn="Submit" /> </NavLink>}
          <br /><br />
        </div>
      </div>
        :
        <Error />
      }
    </div>

  )
}

export default Test
