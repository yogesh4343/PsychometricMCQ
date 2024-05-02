import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Button from '../../Assets/Button';
import PsychometricJson from "../../PsychometricJson.json";
import Footer from '../../Assets/Footer';
import { useSelector } from 'react-redux';
import NavBar from '../Nav/NavBar';

const Assignment = (props) => {
    const [coupon, setCoupon] = useState(false);
    const paramId = useParams();
    const { userLoginDetail } = useSelector((state) => state.UserSlice);

    // func 
    const btnClick = () => {
        if (coupon == true) {
            setCoupon(false);
        } else {
            setCoupon(true);
        };
    };

    // fil 
    const filterAssignment = PsychometricJson.filter((curEl, idx) => {
        return curEl.id == paramId.id;
    });
    let filterAssignmentAns = filterAssignment[0];


    return (
        <div class="">
            <NavBar />
            <div className=" bg-gradient-to-b from-orange-600  to-black-400 text-center cursor-pointer md:p-12  w-full m-auto  flex justify-center  gap-5 ">
                <div className="left text-center max-w-[90%] md:max-w-[70%] ">
                    <div className="headings text-5xl  font-bold my-3">{filterAssignmentAns.title}</div>
                    <div className="headings text-3xl  font-bold  my-8">Assessment For Working Professionals</div>
                    <p>The term <strong>“21st-century skills”</strong> refers to a specific range of core competencies like <strong>critical thinking, interpersonal skills</strong>, intrapersonal skills, and digital literacy that are believed to not only help students & individuals to succeed in today’s education environments but also function well once they graduate onto the workforce.</p>

                    <p className="my-8" >Framework is designed taking in consideration of <strong> parameters suggested by World Economic Forum & WHO on 21st century curriculum </strong>, psychometric evaluation, skills and education requirements.
                    </p>

                    <div className="topButtons  gap-4 text-center font-bold py-6   ">
                        <div className="topButon flex gap-4 text-center font-bold justify-center  ">
                            <div onClick={btnClick} className="leftButtons w-[12rem]"> <Button btn="Have a Coupon?" /></div>
                            {userLoginDetail.status == true ? <NavLink to={`/paymentPsychometric/${paramId.id}`} > <div className="rightButtons w-[12rem] "> <Button btn="Buy Test" /></div> </NavLink> : <NavLink to={`/login`} > <div className="rightButtons w-[12rem] "> <Button btn="Buy Test" /></div> </NavLink>}
                        </div>

                        {/* exam  */}

                        {userLoginDetail.status == true ? <NavLink to={`/test/${paramId.id}`}> <div className="bottomButtons w-full md:w-[20rem]  py-4 justify-center  m-auto   "> <Button btn={filterAssignmentAns.title} btn1="Test" /></div>  </NavLink> : <NavLink to={`/login`}> <div className="bottomButtons w-full md:w-[20rem]  py-4 justify-center  m-auto   "> <Button btn={filterAssignmentAns.title} btn1="Test" /></div>  </NavLink>}

                        {coupon === true ? <div className="coupon flex gap-2 text-center justify-center  m-auto">
                            <input className="border-none  rounded-md" type="text" placeholder="Enter Coupon Here.." />
                            <Button btn="Apply Coupon" />
                        </div> : <div className="coupon hidden gap-2 text-center justify-center  m-auto">
                            <input className="border-none  rounded-md" type="text" placeholder="Enter Coupon Here.." />
                            <Button btn="Apply Coupon" />
                        </div>}
                    </div>
                </div>

                <div className="right  gap-4 text-center font-bold  m-auto  hidden md:flex justify-center   ">
                    <img className="m-auto  w-[22rem] h-[23rem] " src={filterAssignmentAns.img} alt="img" />
                </div>
            </div>


            {/* ================================================ */}

            <div className="description text-center max-w-[90%] md:max-w-[70%]  p-8 m-auto      ">
                <div className="descriptioHeading      text-amber-800  text-4xl font-semi-bold      ">
                    {filterAssignmentAns.title}
                </div>

                <p className="    my-5 w-[80%] m-auto"      >He term “21st-century skills” refers to a specific range of core competencies like critical thinking, intrapersonal skills, interpersonal skills.</p>
            </div>

            <div className="flex     p-8 ">
                <div className="leftDescription max-w-[90%] md:max-w-[55%] w-full ">
                    <div className="headin text-3xl font-bold">Report Description</div>
                    <p className="headin py-4 text-xl" >
                        <strong className=" text-amber-700"> 21st century life skills      </strong> Psychometric assessments can help parents and teachers work on <strong className=" text-amber-700">student's styles and improve them. Students & Employees can be offered extracurricular activities </strong>  based on the report recommendations.
                    </p>
                    <p className=" py-4 text-xl">They can also assess students learning styles and recommend various activities. parents, academician, counsellors, and teachers can use the outcome of the Psychometric assessment and interpret it and working on building confidence factor!</p>

                    <div className="btn w-[18rem] my-5 text-center font-bold"> <NavLink to="/contact"   > <Button btn="Contact Us." /> </NavLink> </div>
                </div>
                <div className="rightDescription  w-[34rem] h-[34rem]">
                    <img src="https://www.careerguide.com/assessment/21century/images/circle.png" alt="img" />
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Assignment
