import React from "react";
import AdminLayout from "./AdminLayout";
import { useQuery } from "@tanstack/react-query";
import { getAllBlogsApi, getAllTestimonialsApi, getAllClientsApi } from "../api/resource";
import { FaBlog } from "react-icons/fa6";
import { PiImages } from "react-icons/pi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { adminBaseurl } from "./utils";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();

  const blogsQuery = useQuery({
    queryKey: ["BlogsTotal"],
    queryFn: () => getAllBlogsApi(1, 10),
  });

  const logoQuery = useQuery({
    queryKey: ["LogosTotal"],
    queryFn: () => getAllClientsApi(1, 20), // Replace with logo API if available
  });

  const testimonialQuery = useQuery({
    queryKey: ["TestimonialsTotal"],
    queryFn: () => getAllTestimonialsApi(1, 10), // Replace with testimonial API if available
  });

  return (
    <AdminLayout>
      <div className="p-10">
        <div className="text-3xl font-semibold py-2">Welcome</div>
        <div className="text-sm">
          Dashboard to view overall contents Created
        </div>

        <div className="pt-5 w-full 2xl:w-[90%] 3xl:w-[70%]">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">

            {/* Blogs */}
            <div className="col-span-1 bg-[#fecdd3] rounded-md drop-shadow-lg">
              <div className="p-5 space-y-3">
                <div className="w-12 h-12 rounded-full flex justify-center items-center bg-[#ef4444] text-white">
                  <FaBlog className="text-xl" />
                </div>
                <div className="text-3xl font-bold ml-2">
                  {blogsQuery.data?.data?.detail[0]?.total ?? 0}
                </div>
                <div className="font-semibold">Published Blogs</div>
                <div
                  className="text-sm cursor-pointer text-end font-semibold"
                  onClick={() => navigate(`${adminBaseurl}/blogs`)}
                >
                  View
                </div>
              </div>
            </div>

            {/* Client Logos */}
            <div className="col-span-1 bg-[#e0f2fe] rounded-md drop-shadow-lg">
              <div className="p-5 space-y-3">
                <div className="w-12 h-12 rounded-full flex justify-center items-center bg-[#0284c7] text-white">
                  <PiImages className="text-xl" />
                </div>
                <div className="text-3xl font-bold ml-2">
                  {logoQuery.data?.data?.detail[0]?.total ?? 0}
                </div>
                <div className="font-semibold">Client Logos</div>
                <div
                  className="text-sm cursor-pointer text-end font-semibold"
                  onClick={() => navigate(`${adminBaseurl}/logo`)}
                >
                  View
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="col-span-1 bg-[#f0fdf4] rounded-md drop-shadow-lg">
              <div className="p-5 space-y-3">
                <div className="w-12 h-12 rounded-full flex justify-center items-center bg-[#22c55e] text-white">
                  <BiMessageSquareDetail className="text-xl" />
                </div>
                <div className="text-3xl font-bold ml-2">
                  {testimonialQuery.data?.data?.detail[0]?.total ?? 0}
                </div>
                <div className="font-semibold">Testimonials</div>
                <div
                  className="text-sm cursor-pointer text-end font-semibold"
                  onClick={() => navigate(`${adminBaseurl}/testimonials`)}
                >
                  View
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminHome;
