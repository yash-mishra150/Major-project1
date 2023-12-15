import React, { useState } from "react";
import Footer from "../Components/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import "./Pages.css";

function MainRegister() {
  const [error,seterror] = useState({
    error: "",
    email: "",
    phone_number: "",
    student_no: "",
  })
  const [formData, setFormData] = useState({
    name: "",
    student_no: "",
    branch: "",
    email: "",
    phone_number: "",
    gender: "",
    year: "",
    residence: "",
    captcha: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    axios.post('https://registrationportal-hrxz.onrender.com/ad/register/', formData)
  .then(response => {
    // Handle successful response
    alert(response.data.message);

  })
  .catch(error => {
    // Handle error
    if (error.response) {
      // The request was made and the server responded with a status code
      seterror(error.response.data);
      
    }
  });
  console.log({error})
  if(error.email !== undefined && error.email !== ""){
    alert(error.email);
  }
  if(error.student_no !== undefined && error.student_no !== ""){
    alert(error.student_no);
  }
  if(error.phone_number !== undefined && error.phone_number !== ""){
    alert(error.phone_number);
  }

  }



  function onChange1(value) {
      setFormData({...formData , captcha : value});
     }

  return (
    <div>
      <div className="Header"></div>
      <div className="register-content">
        <div className="Transperent_card">
          <h1 className="h1_name_RegisterPage  text-white font-normal text-5xl text-center m-2">
            Register
          </h1>
          <form>
            <div className="Register_form flex justify-around items-top my-10">
              <section className="Left_register flex flex-col w-[25rem]">
                <label className="text-white">Name:</label>
                <input
                  type="text"
                  className="h-[2rem] rounded"
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                />

                <br></br>

                <label className="text-white">Gender:</label>
                <select
                  name="gender"
                  className="h-[2rem] rounded"
                  value={formData.gender}
                  onChange={onChange}
                >
                  <option value="select">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>

                <br></br>

                <label className="text-white">Student Number:</label>
                <input
                  type="number"
                  name="student_no"
                  className="h-[2rem] rounded"
                  value={formData.student_no}
                  onChange={onChange}
                />

                <br></br>

                <label className="text-white">Year:</label>
                <select
                  name="year"
                  className="h-[2rem] rounded"
                  value={formData.year}
                  onChange={onChange}
                >
                  <option value="select">Select</option>
                  <option value="2">2nd</option>
                  <option value="3">3rd</option>
                </select>

                <br></br>

                <label className="text-white">Where Do You Live:</label>
                <select
                  name="residence"
                  className="h-[2rem] rounded"
                  value={formData.residence}
                  onChange={onChange}
                >
                  <option value="select">Select</option>
                  <option value="Hosteler">Hosteler</option>
                  <option value="Day scholar">Day Scholar</option>
                </select>
              </section>
              <section className="Right_register flex flex-col m-0 w-[25rem]">
                <label className="text-white">Branch:</label>
                <select
                  name="branch"
                  className="h-[2rem] rounded"
                  value={formData.branch}
                  onChange={onChange}
                >
                  <option value="select">Select</option>
                  <option value="CS">CS</option>
                  <option value="CSE">CSE</option>
                  <option value="CSIT">CS/IT</option>
                  <option value="CSE(AIML)">CSE(AIML)</option>
                  <option value="CSE(DS)">CSE(DS)</option>
                  <option value="CSE(Hindi)">CSE(Hindi)</option>
                  <option value="EN">EN</option>
                  <option value="AIML">AIML</option>
                  <option value="IT">IT</option>
                  <option value="EC">EC</option>
                  <option value="ME">Mechanical</option>
                  <option value="ECE">ECE</option>
                </select>

                <br></br>

                <label className="text-white">Section:</label>
                <select
                  name="section"
                  className="h-[2rem] rounded"
                  value={formData.section}
                  onChange={onChange}
                >
                  <option value="select">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <br></br>
                <label className="text-white">Phone Number:</label>
                <input
                  type="number"
                  name="phone_number"
                  className="h-[2rem] rounded"
                  value={formData.phone_number}
                  onChange={onChange}
                />

                <br></br>
                <label className="text-white">Email Address:</label>
                <input
                  type="email"
                  name="email"
                  className="h-[2rem] rounded"
                  value={formData.email}
                  onChange={onChange}
                />
                <br></br>
                <ReCAPTCHA
                  className="REcaptcha_change"
                  sitekey="6Lcd2CMpAAAAAKLqwdxjTgnWwzSgAGEgtl0BVOng"
                  onChange={onChange1}
                  value={formData.captcha}
                />
              </section>
            </div>
            <div className="flex justify-center">
              <button className="Submit_Button bg-white w-[200px] h-[60px] rounded-lg text-xl" onClick={submitHandler}>
                Register Now!
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer_Registrypage">
        <Footer />
      </div>
    </div>
  );
}

export default MainRegister;