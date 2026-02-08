import React, { useEffect, useState } from "react";
import AdminSideMenu from "../components/AdminSideMenu";
import { useMutation } from "@tanstack/react-query";
import { adminloginApi } from "../api/adminlogin";
import { Button, ConfigProvider, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Login = ({ children }) => {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(null);
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordError, setPassWordError] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    // Only run this code in the client-side
    if (typeof window !== "undefined") {
      setIsRendered(true);
      const storedValue = localStorage.getItem("isLoginRCS");
      setLoginStatus(storedValue);
    }
  }, []);

  const loginMutation = useMutation({
    mutationFn: adminloginApi,
    onSuccess: (res) => {
      localStorage.setItem("isLoginRCS", "true");
      setLoginStatus("true");
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
      setPassWordError(true);
    },
  });

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
                src="/images/primarylogo.png"
                width={120}
                height={120}
                alt="logo"
                priority
              />
            </div>
          </div>
          <>
            {loginStatus === "true" ? (
              <div className="grid  grid-cols-12 h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)]">
                <div className=" col-span-3 2xl:col-span-2  border-r-2 ">
                  <div className="mt-10 p-1 lg:p-5 ">
                    <AdminSideMenu
                      onlogout={() => {
                        localStorage.removeItem("isLoginRCS");
                        setLoginStatus(null);
                        setPasswordValue("");
                        navigate("/admin/home");
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
                        setPasswordValue(e.target.value);
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
                    loading={loginMutation.isPending}
                    size="large"
                    type="primary"
                    className="w-[300px]"
                    onClick={() =>
                      loginMutation.mutate({ password: passwordValue })
                    }
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

export default Login;
