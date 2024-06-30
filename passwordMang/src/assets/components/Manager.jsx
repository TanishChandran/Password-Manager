import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    const passInput = document.getElementById("password-3");
    const icon = document.getElementById("icon");
    if (passInput.type === "password") {
      passInput.type = "text";
      icon.innerText = "visibility_off";
    } else {
      passInput.type = "password";
      icon.innerText = "visibility";
    }
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_150%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="mx-auto  mycontainer">
        <h1 className="text-center text-4xl font-bold text-white ">
          <span className="text-violet-500">&lt;</span>Pass
          <span className="text-violet-500">word/&gt;</span>{" "}
        </h1>
        <p className="text-violet-500 text-2xl text-center m-4">
          Your Our password Manager
        </p>
        <div className="flex flex-col p-4 text-white text-lg gap-6">
          <input
            type="text"
            name="site"
            id="site"
            value={form.site}
            onChange={handleChange}
            placeholder="Enter Website URL"
            className="rounded-full border bg-transparent focus:outline-none border-purple border-2 w-full p-4 py-1"
          />
          <div className="flex justify-between gap-8">
            <input
              type="text"
              name="username"
              id="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border bg-transparent focus:outline-none border-purple border-2 w-full p-4 py-1"
            />
            <div className="relative flex items-center">
              <input
                type="password"
                name="password"
                id="password-3"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
                className="rounded-full border bg-transparent focus:outline-none border-purple border-2 w-full p-4 py-1"
              />
              <i
                id="visibilityBtn"
                className="absolute right-1 px-2 top-2 cursor-pointer"
                onClick={showPassword}
              >
                <span id="icon" className="material-symbols-outlined">
                  visibility
                </span>
              </i>
            </div>
          </div>
          <div className="flex justify-center align-center">
            <button
              onClick={savePassword}
              className="flex justify-center items-center bg-purple hover:bg-violet-600 w-fit m-4 p-2 px-8 rounded-full gap-2"
            >
              <lord-icon
                src="https://cdn.lordicon.com/ftndcppj.json"
                trigger="hover"
              ></lord-icon>
              Add Password
            </button>
          </div>
          <div className="passwords">
            <h2 className="text-violet-500 text-2xl my-7 px-3 ">Your Passwords</h2>
            {passwordArray.length === 0 && <div className="text-white text-4xl text-center m-4">No Passwords to show</div>}
            {passwordArray.length != 0 && <table className="table-auto w-full rounded-lg overflow-hidden border-collapse border-spacing-[100px] border border-white">
              <thead className="bg-violet-800" >
                <tr>
                  <th className="p-2">Website</th>
                  <th className="p-2">Username</th>
                  <th className="p-2">Password</th>
                </tr>
              </thead>
              <tbody className="bg-violet-950">
                {passwordArray.map((item,index)=>(
                   <tr key={index}>
                    <td className="text-center min-w-40 p-5 border border-white"><a href={item.site} target="_blank">{item.site}</a></td>
                    <td className="text-center min-w-40 p-5 border border-white">{item.username}</td>
                    <td className="text-center min-w-40 p-5 border border-white">{item.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
