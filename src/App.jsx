import { useState } from "react";
import "./App.css";
import LoginForm from "./Components/LoginForm";

function App() {
  return (
    <div className=" bg-slate-100 h-screen">
      <header className="bg-white">
        <div className=" bg-blue-950 font-serif text-sm text-white w-full flex justify-around">
          <div className="p-1 flex ">
            <img
              width={"30px"}
              src="https://img1.digitallocker.gov.in/assets/img/indian_flag.jpg"
              alt=""
            />
            <p className="">&nbsp;Goverment of India</p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="">Skip to main Content</p>
            <p className="">A+</p>
            <p className="">A</p>
            <p className="">-A</p>
          </div>
        </div>
        <div className="shadow-black shadow-lg">
          <img
            style={{marginLeft:'19%'}}
            className="m-2"
            width={"15%"}
            src="https://www.digilocker.gov.in/assets/img/digilocker_logo.png"
            alt=""
          />
        </div>
      </header>

      <div className="flex justify-center mt-20">'
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
