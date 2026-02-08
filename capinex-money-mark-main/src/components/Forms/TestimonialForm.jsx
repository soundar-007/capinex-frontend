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
  userName: yup.string().required("Name is required").min(2).max(100),
  feedback: yup
    .string()
    .required("Feedback is required")
    .test("feedback", "Feedback must be at least 10 characters", (value) => {
      const plainText = value.replace(/(<([^>]+)>)/gi, "");
      return plainText.trim().length >= 10;
    }),
  actionType: yup.string().notRequired(),
});

const TestimonialForm = ({ InitialValue, isEdit, createApi, editApi, id, redirectUrl }) => {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch,
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: InitialValue || {
      userName: "",
      feedback: "",
    },
  });

  const editMutation = useMutation({
    mutationFn: editApi,
    onSuccess: () => {
      successNotification(api, "Success", "Testimonial updated successfully");
      navigate(redirectUrl);
    },
    onError: (err) => {
      ErrorNotification(api, "Error", err?.response?.data?.detail?.[0]?.msg || "Something went wrong");
    },
  });

  const createMutation = useMutation({
    mutationFn: createApi,
    onSuccess: () => {
      successNotification(api, "Success", "Testimonial created successfully");
      reset();
      navigate(redirectUrl);
    },
    onError: (err) => {
      ErrorNotification(api, "Error", err?.response?.data?.detail?.[0]?.msg || "Something went wrong");
    },
  });

  const onDraft = () => {
    const values = getValues();
    const payload = {
      userName: values.userName,
      feedback: values.feedback,
      actionType: "Draft",
    };
    isEdit ? editMutation.mutate({ id, data: payload }) : createMutation.mutate(payload);
  };

  const onSubmit = (values) => {
    const payload = {
      ...values,
      actionType: "Publish",
    };
    isEdit ? editMutation.mutate({ id, data: payload }) : createMutation.mutate(payload);
  };

  return (
    <>
      {contextHolder}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-2/3 space-y-6">
        <CustomInput
          label="Name"
          name="userName"
          control={control}
          errors={errors}
          placeholder="Enter your name"
        />
        <CustomTextEditor
          label="Feedback"
          name="feedback"
          control={control}
          errors={errors}
        />

        <div className="flex justify-end gap-4">
          <Button
            type="default"
            size="large"
            disabled={!watch("userName")}
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
            Publish
          </Button>
        </div>
      </form>
    </>
  );
};

export default TestimonialForm;
