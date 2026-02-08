"use client";
import React, { ReactNode, useEffect, useState } from "react";
import AdminSideMenu from "./AdminSideMenu";
import { useMutation } from "@tanstack/react-query";
import { Button, ConfigProvider, Input } from "antd";
import { adminloginApi } from "../api/adminlogin";
import logo from "../assets/Untitled design (11).png";
import { useNavigate } from "react-router-dom";


const AdminLayout = ({children}) => {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(true);
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordError, setPassWordError] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsRendered(true);
      const storedValue = localStorage.getItem("isLoginRCS");
      setLoginStatus(storedValue);
    }
  }, []);

  const {isPending,mutate} = useMutation({
    mutationFn: adminloginApi,
    onSuccess: (res) => {
      localStorage.setItem("isLoginRCS", "true");
      setLoginStatus("true");
    },
    onError: (err) => {
      // localStorage.setItem("isLoginRCS", "true");
      // setLoginStatus("true");   use these two comments for now  bro to login 
      console.log(err);
      setPassWordError(true);
    },
  });

  const handleLogin = () => {
    const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD;
    if (passwordValue === correctPassword) {
      localStorage.setItem("isLoginRCS", "true");
      setLoginStatus("true");
    } else {
      setPassWordError(true);
    }
  };
  

  return (
    <div className="flex justify-center">
    <ConfigProvider
      theme={{
        components: {
          Button: {
            fontSizeLG: 14,
            fontWeight: 500,
            primaryShadow: "none",
            borderRadiusLG: 6,
            borderRadius: 6,
            colorBorder: "#000000",
          },
          Input: {
            activeShadow: "none",
          },
        },
      }}
    >
      <div className="w-screen max-w-[2560px] ">
        <div className="h-16 lg:h-20 bg-whiteColour drop-shadow-lg sticky top-0 px-12 z-40 flex items-center bg-white">
          <div className="">
             <img
              src={logo}
              width={12}
              height={12}
              alt="logo"
              priority
            /> 
            Logo
            {/* add your logo bro  */}
          </div>
        </div>
        <>
          {loginStatus === "true" ? (
            <div className="grid  grid-cols-12 h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)]">
              <div className=" col-span-3 2xl:col-span-2  border-r-2 border-gray-200">
                <div className="mt-10 p-1 lg:p-5 ">
                  <AdminSideMenu
                    onlogout={() => {
                      localStorage.removeItem("isLoginRCS");
                      navigate("/admin/home");
                      setLoginStatus(null);
                      setPasswordValue("")
                    }}
                  />
                </div>
              </div>
              <div className="col-span-9 2xl:col-span-10 ">
                <div className="h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] overflow-y-scroll">
                  {children}
                </div>
              </div>
            </div>
          ) : isRendered ? (
            <div className=" flex justify-center py-10">
              <div className=" w-[500px] flex flex-col items-center gap-10">
                <div className=" text-2xl font-semibold">Admin Login</div>
                <div className="space-y-2">
                  <label className="font-medium">Password</label>
                  <Input.Password
                    value={passwordValue}
                    onChange={(e) => {
                      setPasswordValue(e.target.value),
                        setPassWordError(false);
                    }}
                    status={passwordError ? "error" : ""}
                    size="large"
                  />
                  {passwordError ? (
                    <div className="text-red-500 text-sm">
                      Invalid Password
                    </div>
                  ) : (
                    <div className="h-5"></div>
                  )}
                </div>
                <Button
                  loading={isPending}
                  size="large"
                  type="primary" 
                  style={{backgroundColor:"#1e3163"}}
                  className="w-[300px]"
                  // onClick={() =>
                  //   mutate({ password: passwordValue })
                  // }
                  onClick={()=>handleLogin()}
                >
                  Login
                </Button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </>
      </div>
    </ConfigProvider>
  </div>
  );
};

export default AdminLayout;
