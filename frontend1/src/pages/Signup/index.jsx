import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Cookies from "js-cookie";
const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState("");
  const [remembered, setRemembered] = useState(false);
  const handleChange = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    try {
      const response = await axios.post(
        "http://localhost:3000/student/signup",
        {
          email:email,
          username:username,
          password:password
          
        }
      );

      // Save the authentication token to a cookie
      if (response.data.token) {
        Cookies.set("auth_token", response.data.token, { expires: 1 }); // Set the token in a cookie
      }

      console.log(response.data);
      alert("Signup Successful")
      navigate("/desktopone");
    } catch (error) {
      console.log(error);
      setError("Failed to sign up!");
    }

    setLoading(false);
  };

  
    

    // Function to handle the Remember Me checkbox change
    const handleRememberMeChange = (event) => {
      if (event.target.checked) {
        localStorage.setItem("rememberedUser", "true");
        setRemembered(true);
      } else {
        localStorage.removeItem("rememberedUser");
        setRemembered(false);
      }
    };

    useEffect(() => {
      const isRemembered = localStorage.getItem("rememberedUser");
      if (isRemembered === "true") {
        setRemembered(true);
      }
    }, []);
    return (
      <>
        <div className="bg-gray-300 flex flex-col font-nunito items-center justify-start mx-auto w-full">
          {/* to change navbar */}
          <div className="bg-white-A700 flex flex-col items-center justify-start pr-[1px] py-[1px] w-full">
            <div className="flex flex-col gap-[100px] items-center justify-start mb-[10px] w-full">
              <header className="bg-light_teal flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs3 w-full">
                <Img
                  className="md:flex-1 h-[63px] sm:h-auto mb-[18px] md:ml-[0] ml-[25px] md:mt-0 mt-[11px] object-cover w-[5%] md:w-full"
                  src="images/img_logo1.png"
                  alt="logoOne"
                />
                <ul className="flex sm:flex-col flex-row gap-20 sm:hidden items-start justify-start mb-2 md:ml-[0] ml-[744px] md:mt-0 mt-[53px] w-auto common-row-list">
                  <li>
                    <a
                      href="javascript:"
                      className="text-blue_gray-800 text-right text-xl tracking-[2.00px]"
                    >
                      <Text size="txtNunitoRegular20">Home</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-blue_gray-800  text-right text-xl tracking-[2.00px]"
                    >
                      <Text size="txtNunitoRegular20">About us</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row items-start justify-between">
                        <Text
                          className="text-blue_gray-800 text-right text-xl tracking-[2.00px] w-auto"
                          size="txtNunitoRegular20"
                        >
                          English
                        </Text>
                        <div className="flex flex-col items-center justify-start py-[7px]">
                          <Img
                            className="h-3 w-3"
                            src="images/img_arrowup.svg"
                            alt="arrowup"
                          />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-blue_gray-800 text-right text-xl tracking-[2.00px]"
                    >
                      <Text size="txtNunitoRegular20">Contact us</Text>
                    </a>
                  </li>
                </ul>
                {/* the home icon */}
                <Img
                  className="h-9 mb-[5px] md:ml-[0] ml-[49px] mr-[53px] md:mt-0 mt-[51px] w-20"
                  src="images/img_iconfontawesome_blue_gray_800.svg"
                  alt="iconfontawesome"
                />
              </header>
              <div className="flex md:flex-col flex-row gap-[100px] items-start justify-start max-w-[1347px] mx-auto md:px-5 w-full">
                <div className="flex md:h-[1068px] h-[900px] justify-end relative w-[55%] md:w-full">
                  <Text
                    className="absolute left-[0] text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl top-[6%] tracking-[2.40px]"
                    size="txtNunitoRegular24"
                  >
                    <span className="text-blue_gray-800 font-nunito text-left font-normal">
                      Signup for{" "}
                    </span>
                    <span className="text-light_blue-900 font-nunito text-left font-normal">
                      EaseAssist{" "}
                    </span>
                    <span className="text-blue_gray-800 font-nunito text-left font-normal">
                      to achieve your goals
                    </span>
                  </Text>

                  <div className="absolute flex flex-col font-overpass h-full inset-[0] items-start justify-center m-auto w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-cyan-700 tracking-[3.60px]"
                      size="txtOverpassExtraBold36"
                    >
                      CREATE ACCOUNT{" "}
                    </Text>
                    <div className="flex flex-col font-nunito gap-2 h-[585px] md:h-auto items-start justify-start max-w-[700px] mt-[81px] w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-full">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                          size="txtNunitoSemiBold28"
                        >
                          Email
                        </Text>
                        <Input
                          name="email"
                          value={email}
                          onChange={(e) => {
                            console.log("email: ", e.target.value);
                            setEmail(e.target.value);
                          }}
                          placeholder="xyz@gmail.com"
                          className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-[50%]"
                          wrapClassName="border-2 border-indigo-300 border-solid w-[70%]"
                          shape="round"
                          style={{ color: "#000000" }}
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start w-full">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                          size="txtNunitoSemiBold28"
                        >
                          Username
                        </Text>
                        <Input
                          name="username"
                          value={username}
                          onChange={(e) => {
                            console.log("username: ", e.target.value);
                            setUsername(e.target.value);
                          }}
                          placeholder="2023"
                          className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-[50%]"
                          wrapClassName="border-2 border-indigo-300 border-solid w-[70%]"
                          shape="round"
                          style={{ color: "#000000" }}
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start w-full">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[27px] text-blue_gray-800 tracking-[2.00px] w-auto"
                          size="txtNunitoSemiBold28"
                        >
                          Password
                        </Text>
                        <Input
                          name="password"
                          value={password}
                          onChange={(e) => {
                            console.log("password: ", e.target.value);
                            setPassword(e.target.value);
                          }}
                          placeholder="xyz"
                          className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-[50%]"
                          wrapClassName="border-2 border-indigo-300 border-solid w-[70%]"
                          shape="round"
                          style={{ color: "#000000" }}
                        ></Input>
                      </div>{" "}
                      <List
                        className="sm:flex-col flex-row md:gap-4 grid md:grid-cols-1 grid-cols-2 justify-between max-w-[700px] w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-row gap-1 items-start justify-start w-auto">
                          <div className="flex items-center justify-start mt-[10px] ">
                            <input
                              type="radio"
                              name="rememberMe"
                              id="rememberMe"
                              // type="checkbox"
                                onChange={handleRememberMeChange}
                                checked={remembered}
                              className="hidden"
                            />
                            <label
                              htmlFor="rememberMe"
                              className="bg-white-A700 border-2 border-cyan-800_01 border-solid flex items-center justify-center h-9 w-9 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-cyan-800 hover:border-cyan-800"
                            >
                              <div className="bg-cyan-800 h-[29px] rounded-[14px] shadow-bs2 w-[29px]"></div>
                            </label>
                          </div>
                          <div className="flex flex-col items-start justify-start mt-[10px] pr-[6px] py-[6px]">
                            <label htmlFor="rememberMe">
                              {/* <input
                                id="rememberMe"
                                type="checkbox"
                                onChange={handleRememberMeChange}
                                checked={remembered}
                              /> */}
                              <Text
                                className="text-blue_gray-800 text-xl tracking-[2.00px]"
                                size="txtNunitoRegular20"
                              >
                                Remember me
                              </Text>
                            </label>
                          </div>
                        </div>
                      </List>
                      <Button
                        className="cursor-pointer font-bold font-roboto leading-[normal] mx-auto  min-w-[300px] sm:min-w-full ml-20 mt-[25px] text-0xl md:text-[10px] text-center sm:text-xl tracking-[1.60px] uppercase"
                        shape="round"
                        onClick={handleChange}
                      >
                        Sign up
                      </Button>
                    </div>
                    <div className="font-nunito mb-[20px] md:h-[100px] h-[50px] ml-2 md:ml-[0] mt-[40px] relative w-4/5 sm:w-full">
                      <Line className="absolute bg-blue-100 bottom-[44%] h-0.5 inset-x-[0] mx-auto w-full" />
                      <Input
                        name="frameThirteen"
                        placeholder="or continue with"
                        className="!placeholder:text-blue_gray-800 !text-blue_gray-800 justify-center leading-[normal] p-0 text-left text-xl tracking-[2.00px] w-full"
                        wrapClassName="absolute inset-[0] m-auto w-2/5"
                        shape="square"
                        size="xs"
                      ></Input>
                    </div>

                    <div className="flex flex-row sm:gap-3 h-30 md:h-auto items-start justify-between ml-0 md:ml-[0] mt-100 w-[500px] sm:w-full">
                      <div className="bg-white-A700 border-2 border-indigo-300 border-solid flex flex-col h-20 md:h-auto items-start justify-between sm:px-5 px-4 py-[15px] rounded-lg w-[120px]">
                        <div className="flex flex-col h-[50px] items-center justify-end p-[5px] w-[50px]">
                          <Img
                            className="h-[38px] mt-0.5 w-[38px]"
                            src="images/img_google.svg"
                            alt="google"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 border-2 border-indigo-300 border-solid flex flex-col h-20 md:h-auto items-start justify-start sm:px-5 px-4 py-[15px] rounded-lg w-[120px]">
                        <Img
                          className="h-12 w-12"
                          src="images/img_iconfontawesome_indigo_300_01.svg"
                          alt="iconfontawesome_Two"
                        />
                      </div>
                      <div className="bg-white-A700 border-2 border-indigo-300 border-solid flex flex-col h-20 md:h-auto items-start justify-between sm:px-5 px-4 py-[15px] rounded-lg w-[120px]">
                        <Img
                          className="h-11 w-11"
                          src="images/img_apple.svg"
                          alt="apple"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="md:flex-1 h-[500px] sm:h-auto md:mt-0 mt-[100px] object-cover rounded-bl-[10px] rounded-br-[150px] rounded-tl-[150px] rounded-tr-[30px] w-[50%] md:w-full"
                  src="images/sc2.png"
                  alt="rectangleThree"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default Signup;
