
import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Century21 from './Components/Century21/Century21';
import Psychometric from './Components/Psychometric/Psychometric';
import Assignment from './Components/Century21/AssignmentCentury';
import AssignmentPsychometric from './Components/Psychometric/AssignmentPsychometric';
import Error from './Components/Error/Error';
import Contact from './Components/Contact/Contact';
import Test from './Components/Text/TestPsychometric';
import Result from './Components/Result/Result';
import TestCentury from './Components/Text/TestCentury';
import PaymentPsychometric from './Components/Payment/PaymentPsychometric';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import SingleUser from './Components/SingleUser/SingleUser';


function App() {
  return (
    <div className="">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/psychometric" element={<Psychometric />} />
      <Route path="/century" element={<Century21 />} />
      <Route path="/assignment/:id" element={<Assignment />} />
      <Route path="/assignmentPsychometric/:id" element={<AssignmentPsychometric />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/test/:id" element={<Test />} />
      <Route path="/testCentury/:id" element={<TestCentury />} />
      <Route path="*" element={<Error />} />
      <Route path="/result/:id/:in/:de/:ques" element={<Result />} />
      <Route path="/paymentPsychometric/:id" element={<PaymentPsychometric />} />

      {/* login  */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/singleUser/:id" element={<SingleUser />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
