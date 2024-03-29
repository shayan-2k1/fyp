import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie
import { Button, Img, Input, List, Text } from "components";
import lottie from 'lottie-web';


const MentorLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Change to false

  const container = useRef(null)

  useEffect(() => {
    try {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./mentor.json')
      });
    } catch (error) {
      console.error('Error loading animation:', error);
    }
  }, []);
  const handleChange = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    try {
      const response = await axios.post("http://localhost:3000/mentor/signin", {
        email: email,
        password: password
      });

      // Save the authentication token to a cookie
      if (response.data.token) {
        Cookies.set('auth_token', response.data.token, { expires: 1 }); // Set the token in a cookie
      }

      console.log(response.data);
      alert("Login Successful")
      navigate("/MentorProfile");
    } catch (error) {
      console.log(error);
      setError("Failed to sign in!");
    }

    setLoading(false);
  };

  return (

    <>

      <div className="bg-gray-300 flex flex-col font-nunito items-center justify-start mx-auto w-full">
        {/* to change navbar */}
        <div className="bg-white-A700 flex flex-col items-center justify-start pr-[1px] py-[1px] w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start mb-[10px] w-full">
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


                <div className="absolute flex flex-col font-overpass h-full inset-[0] items-start justify-center m-auto w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-cyan-700 tracking-[3.60px]"
                    size="txtOverpassExtraBold36"
                  >
                    WELCOME BACK!{" "}
                  </Text>
                  <Text
                    className="common-pointer mt-[25px] text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl tracking-[2.40px]"
                    size="txtOpenSans24"
                    onClick={() => navigate("/mentorSignup")}
                  >
                    <span className="text-blue_gray-800 font-nunito text-left font-normal">
                      Don’t have a account,
                    </span>
                    <span className="text-blue_gray-800 font-nunito text-left font-normal">
                      {" "}
                    </span>
                    <span className="text-cyan-800 font-nunito text-left font-bold">
                      Sign up
                    </span>
                  </Text>
                  <div className="flex flex-col font-nunito gap-3 h-[600px] md:h-auto items-start justify-start max-w-[700px] mt-[81px] w-full">

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
                          console.log('email: ', e.target.value);
                          setEmail(e.target.value)
                        }}
                        placeholder="2023"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-[50%]"
                        wrapClassName="border-2 border-indigo-300 border-solid w-[70%]"
                        shape="round"
                        style={{ color: '#000000' }}
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
                          console.log('password: ', e.target.value);
                          setPassword(e.target.value)
                        }}
                        placeholder="xyz"
                        className="!placeholder:text-blue-100_2f !text-blue-100_2f leading-[normal] md:text-[19px] p-0 sm:text-xl text-1xl text-left tracking-[2.00px] w-[50%]"
                        wrapClassName="border-2 border-indigo-300 border-solid w-[70%]"
                        shape="round"
                        style={{ color: '#000000' }}
                      ></Input>
                    </div>
                    <List
                      className="sm:flex-col flex-row md:gap-4 grid md:grid-cols-1 grid-cols-2 justify-between max-w-[700px] w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-row gap-1 items-start justify-start w-auto">
                        <div className="flex items-center justify-start mt-[10px] ">
                          <input type="radio" name="rememberMe" id="rememberMe" className="hidden" />
                          <label
                            htmlFor="rememberMe"
                            className="bg-white-A700 border-2 border-cyan-800_01 border-solid flex items-center justify-center h-9 w-9 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-cyan-800 hover:border-cyan-800"
                          >
                            <div className="bg-cyan-800 h-[29px] rounded-[14px] shadow-bs2 w-[29px]"></div>
                          </label>
                        </div>
                        <div className="flex flex-col items-start justify-start mt-[10px] pr-[6px] py-[6px]">
                          <Text
                            className="text-blue_gray-800 text-xl tracking-[2.00px]"
                            size="txtNunitoRegular20"
                          >
                            Remember me
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">

                        <div className="flex flex-col items-center justify-end py-2">
                          <button
                            className="mt-[3px] text-blue_gray-800 text-xl tracking-[2.00px]"
                            size="txtNunitoRegular20"
                            onClick={() => navigate("/Update")}
                          >
                            Forget password?
                          </button>
                        </div>
                      </div>
                    </List>
                    <Button
                      className="cursor-pointer font-bold font-roboto leading-[normal] mx-auto  min-w-[300px] sm:min-w-full ml-20 mt-[25px] text-0xl md:text-[10px] text-center sm:text-xl tracking-[1.60px] uppercase"
                      shape="round"
                      onClick={handleChange}
                    >
                      Sign in
                    </Button>

                  </div>



                </div>
              </div>
              <div className="md:flex-1 h-[500px] sm:h-auto md:mt-0 mt-[100px] object-cover rounded-bl-[10px] rounded-br-[150px] rounded-tl-[150px] rounded-tr-[30px] w-[50%] md:w-full relative">
                <div ref={container} className="absolute inset-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorLogin;
