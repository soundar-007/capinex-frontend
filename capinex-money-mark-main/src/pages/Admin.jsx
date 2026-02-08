import React, { useEffect, useState } from "react";
import AdminSideMenu from "../components/AdminSideMenu";
import { useMutation } from "@tanstack/react-query";
import { adminloginApi } from "../api/adminlogin";
import { Button, ConfigProvider, Input } from "antd";
import { useQuery } from "@tanstack/react-query";
import { FaBlog } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";
import { MdOutlineImage } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getAllBlogsUserApi } from "../api/resource";


const AdminLayout = ({ children }) => {
    const navigate = useNavigate();

    const { data: blogData } = useQuery({
        queryKey: ["BlogsTotal"],
        queryFn: () => getAllBlogsUserApi(3),
      });
    
      const blogsCount = blogData?.data?.detail[0]?.total || 0;
      const clientLogosCount = 12; // Replace with actual API count
      const testimonialsCount = 8; // Replace with actual API count

  const [loginStatus, setLoginStatus] = useState("true");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordError, setPassWordError] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  console.log(loginStatus);

//   useEffect(() => {
//     setIsRendered(true);
//     const storedValue = localStorage.getItem("isLoginRCS");
//     setLoginStatus(storedValue);
//   }, []);

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
        <div className="w-screen max-w-[2560px]">
          <div className="h-16 lg:h-20 bg-whiteColour drop-shadow-lg sticky top-0 px-12 z-40 flex items-center bg-white">
            <div>
              {/* Replace Image with img if not using Next.js */}
              <img
                src="/images/primarylogo.png"
                width={120}
                height={120}
                alt="logo"
                priority
              />
            </div>
          </div>

          {loginStatus === "true" ? (
            <div className="grid grid-cols-12 h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)]">
              <div className="col-span-3 2xl:col-span-2 border-r-2">
                <div className="mt-10 p-1 lg:p-5">
                  <AdminSideMenu
                    onlogout={() => {
                      localStorage.removeItem("isLoginRCS");
                      setLoginStatus(null);
                      navigate("/admin/home");
                      setPasswordValue("");
                    }}
                  />
                </div>
              </div>
              <div className="col-span-9 2xl:col-span-10">
                <div className="h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] overflow-y-scroll">
                <div className="p-10">
        <h1 className="text-3xl font-semibold py-2">Welcome</h1>
        <p className="text-sm">Dashboard to view overall contents Created</p>

        <div className="pt-5 w-full 2xl:w-[90%] 3xl:w-[70%]">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">

            {/* Blogs */}
            <div className="bg-pink-200 rounded-md shadow-md p-5 space-y-3">
              <div className="w-12 h-12 bg-red-500 text-white rounded-full flex justify-center items-center">
                <FaBlog className="text-xl" />
              </div>
              <div className="text-3xl font-bold">{blogsCount}</div>
              <div className="font-semibold">Published Blogs</div>
              <div
                className="text-sm font-semibold text-right cursor-pointer"
                onClick={() => navigate("/admin/blogs")}
              >
                View
              </div>
            </div>

            {/* Client Logos */}
            <div className="bg-blue-200 rounded-md shadow-md p-5 space-y-3">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex justify-center items-center">
                <MdOutlineImage className="text-xl" />
              </div>
              <div className="text-3xl font-bold">{clientLogosCount}</div>
              <div className="font-semibold">Client Logos</div>
              <div
                className="text-sm font-semibold text-right cursor-pointer"
                onClick={() => navigate("/admin/clients")}
              >
                View
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-yellow-100 rounded-md shadow-md p-5 space-y-3">
              <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex justify-center items-center">
                <BsPeople className="text-xl" />
              </div>
              <div className="text-3xl font-bold">{testimonialsCount}</div>
              <div className="font-semibold">Testimonials</div>
              <div
                className="text-sm font-semibold text-right cursor-pointer"
                onClick={() => navigate("/admin/testimonials")}
              >
                View
              </div>
            </div>

          </div>
        </div>
      </div>
                </div>
              </div>
            </div>
          ) : isRendered ? (
            <div className="flex justify-center py-10">
              <div className="w-[500px] flex flex-col items-center gap-10">
                <div className="text-2xl font-semibold">Admin Login</div>
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
        </div>
      </ConfigProvider>
    </div>
  );
};

export default AdminLayout;
