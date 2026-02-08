import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { RiArrowLeftSLine } from "react-icons/ri";

import AdminLayout from "../components/AdminLayout";
import EditorForm  from "./Forms/BlogForm";
import TestimonialForm from "./Forms/TestimonialForm";
import LogoForm from "./Forms/LogoForm";
import {
  createBlogApi,
  updateBlogApi,
  getBlogByIdApi,
  createTestimonialApi,
  editTestimonialApi,
  getIndividualTestimonialApi,
  createClientApi,
  updateClientApi,
  getClientByIdApi,
  // getLogoByIdApi,
} from "../api/resource";
import { adminBaseurl, InitialContentValue } from "../components/utils";

const EditBlog = () => {
  const { blogid, key } = useParams();
  console.log(blogid, key);
  const navigate = useNavigate();

  const isCreating = blogid === "create";

  const apiMap = {
    blogs: {
      get: getBlogByIdApi,
      create: createBlogApi,
      update: updateBlogApi,
      form: EditorForm,
      redirect: "/admin/blogs",
    },
    testimonials: {
      get: getIndividualTestimonialApi,
      create: createTestimonialApi,
      update: editTestimonialApi,
      form: TestimonialForm,
      redirect: "/admin/testimonials",
    },
    logo: {
      get: getClientByIdApi,
      create: createClientApi,
      update: updateClientApi,
      form: LogoForm,
      redirect: "/admin/logo",
    },
  };

  const selected = apiMap[key];


  const { data, isPending, isError } = useQuery({
    queryKey: ["item-detail", { blogid }],
    queryFn: () => selected?.get(blogid),
    enabled: !isCreating && !!selected?.get,
  });


  const renderForm = () => {
    if (!selected) {
      return <div className="text-center">Invalid key: {key}</div>;
    }

    const FormComponent = selected.form;

    if (isCreating) {
      return (
        <FormComponent
          InitialValue={InitialContentValue}
          isEdit={false}
          createApi={selected.create}
          editApi={selected.update}
          redirectUrl={selected.redirect}
        />
      );
    }

    if (isPending) {
      return (
        <div className="flex h-96 justify-center items-center">
          <Spin size="large" spinning={true} />
        </div>
      );
    }

    if (isError || !data) {
      return (
        <div className="flex justify-center items-center h-40 text-center">
          Error, please check the path.
        </div>
      );
    }

    return (
      <FormComponent
        InitialValue={data.data.detail}
        isEdit={true}
        createApi={selected.create}
        editApi={selected.update}
        id={blogid}
        redirectUrl={selected.redirect}
      />
    );
  };

  return (
    <AdminLayout>
      <div className="p-10 lg:p-14 space-y-10">
        <div className="text-3xl font-semibold flex gap-3">
          <div
            className="bg-gray-100 rounded-md p-2 text-xl cursor-pointer"
            onClick={() => navigate(`${selected?.redirect || "blogs"}`)}
          >
            <RiArrowLeftSLine />
          </div>
          <div>
            {isCreating ? `Create ${key}` : `Edit ${key}`}
          </div>
        </div>
        {renderForm()}
      </div>
    </AdminLayout>
  );
};

export default EditBlog;
