import React from "react";
import black from "./assets/images/black.jpg";
const App = () => {
  return (
    <>
      <div className="w-[100%] min-h-screen border-2">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[50%] md:min-h-screen bg-slate-50 flex justify-center">
            <img
              src="https://cdn.dribbble.com/userupload/8432950/file/original-0c14504bd291054d76548cb015dff89a.png?resize=1024x768&vertical=center"
              alt="Image"
            ></img>
          </div>
          <div className="w-full md:w-[50%]">
            <div className="flex flex-col justify-center items-center pt-[50px]">
              <img
                src="https://static.vecteezy.com/system/resources/previews/008/440/618/original/black-eagle-mascot-logo-free-vector.jpg"
                className="w-[100px]"
                alt="Logo"
              />
              <h1 className="tracking-[2px] font-bold font-sans text-center md:text-5xl text-4xl pt-[20px]">
                Welcome back !
              </h1>
              <h1 className="font-bold text-gray-600 pt-[20px]">
                Please enter Your details
              </h1>
              <div className="flex justify-center pt-[50px]">
                <input
                  type="text"
                  placeholder="Email"
                  className="border-b-2 border-solid border-black placeholder-black text-black p-[10px] w-[300px] outline-none"
                />
              </div>
              <div className="flex justify-center pt-[20px]">
                <input
                  type="password"
                  placeholder="Password"
                  className="border-b-2 border-solid border-black placeholder-black text-black p-[10px] w-[300px] outline-none"
                />
              </div>
              <div className="flex flex-col items-center pt-[50px]">
                <button className="bg-black text-white w-[300px] p-[10px] rounded-lg">
                  Login
                </button>
                <div className="flex items-center pt-[20px] relative m-[10px]">
                  <img
                    src="https://img.freepik.com/free-icon/search_318-265146.jpg"
                    className="w-[30px] absolute left-0 ml-[35px]"
                    alt="Google Icon"
                  />
                  <button className="bg-slate-300 text-black w-[300px] p-[10px] rounded-lg font-bold pl-[35px]">
                    Login with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
