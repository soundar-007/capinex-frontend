import React from "react";
import { Button, notification } from "antd";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import CustomInput from "../inputs/CustomInput";
import CustomTextEditor from "../inputs/CustomTextEditor";
import { ErrorNotification, successNotification } from "../utils";

const schema = yup.object().shape({
  title: yup.string().required("Job Title is required").min(2).max(150),
  location: yup.string().required("Location is required"),
  salary: yup.string().required("Salary is required"),
  jobType: yup.string().required("Job Type is required"),
  description: yup.string().required("Job Description is required"),
  requirements: yup.string().required("Requirements are required"),
  actionType: yup.string().notRequired(),
});

const JobForm = ({ InitialValue, isEdit, createApi, editApi, id, redirectUrl }) => {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: InitialValue || {
      title: "",
      location: "",
      salary: "",
      jobType: "",
      description: "",
      requirements: "",
    },
  });

  const editMutation = useMutation({
    mutationFn: editApi,
    onSuccess: () => {
      successNotification(api, "Success", "Job updated successfully");
      navigate(redirectUrl);
    },
    onError: (err) => {
      ErrorNotification(api, "Error", err?.response?.data?.detail?.[0]?.msg || "Something went wrong");
    },
  });

  const createMutation = useMutation({
    mutationFn: createApi,
    onSuccess: () => {
      successNotification(api, "Success", "Job created successfully");
      reset();
      navigate(redirectUrl);
    },
    onError: (err) => {
      ErrorNotification(api, "Error", err?.response?.data?.detail?.[0]?.msg || "Something went wrong");
    },
  });

  const onDraft = () => {
    const values = getValues();
    const payload = { ...values, actionType: "Draft" };
    isEdit ? editMutation.mutate({ id, data: payload }) : createMutation.mutate(payload);
  };

  const onSubmit = (values) => {
    const payload = { ...values, actionType: "Publish" };
    isEdit ? editMutation.mutate({ id, data: payload }) : createMutation.mutate(payload);
  };

  return (
    <>
      {contextHolder}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-2/3 space-y-6">
        <CustomInput
          label="Job Title"
          name="title"
          control={control}
          errors={errors}
          placeholder="e.g. Software Engineer"
        />

        <div className="flex gap-4 w-full">
          <div className="w-1/3">
            <CustomInput
              label="Location"
              name="location"
              control={control}
              errors={errors}
              placeholder="e.g. Remote"
            />
          </div>
          <div className="w-1/3">
            <CustomInput
              label="Job Type"
              name="jobType"
              control={control}
              errors={errors}
              placeholder="e.g. Full-time"
            />
          </div>
          <div className="w-1/3">
            <CustomInput
              label="Salary Range"
              name="salary"
              control={control}
              errors={errors}
              placeholder="e.g. $50k-$70k"
            />
          </div>
        </div>

        <CustomTextEditor
          label="Job Description"
          name="description"
          control={control}
          errors={errors}
        />

        <CustomTextEditor
          label="Requirements"
          name="requirements"
          control={control}
          errors={errors}
        />

        <div className="flex justify-end gap-4 pb-10">
          <Button
            type="default"
            size="large"
            disabled={!watch("title")}
            onClick={onDraft}
            loading={createMutation.isPending || editMutation.isPending}
          >
            Save as Draft
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={createMutation.isPending || editMutation.isPending}
          >
            Publish Job
          </Button>
        </div>
      </form>
    </>
  );
};

export default JobForm;
