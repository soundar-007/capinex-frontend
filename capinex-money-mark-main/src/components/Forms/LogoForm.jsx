import React, { useState } from "react";
import { Button, notification, Upload, Modal } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ErrorNotification, successNotification } from "../utils";
import { UploadOutlined, EyeOutlined } from "@ant-design/icons";
import { uploadImageApi } from "../../api/resource";


const schema = yup.object().shape({
  name: yup.string().required("Client name is required"),
  image: yup
    .mixed()
    .required("Image is required")
    .test("fileSize", "Image is too large", (value) => {
      return value && value[0]?.size <= 10 * 1024 * 1024; // 5MB
    }),
});

const ImageUploadForm = ({ InitialValue, isEdit, createApi, editApi, id, redirectUrl }) => {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const [previewUrl, setPreviewUrl] = useState("");
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      image: [],
      name: "",
    },
  });

  const createMutation = useMutation({
    mutationFn: createApi,
    onSuccess: () => {
      successNotification(api, "Success", "Image uploaded successfully");
      reset();
      navigate(redirectUrl);
    },
    onError: (err) => {
      ErrorNotification(api, "Error", err?.response?.data?.detail?.[0]?.msg || "Something went wrong");
    },
  });

  const editMutation = useMutation({
    mutationFn: editApi,
    onSuccess: () => {
      successNotification(api, "Success", "Image updated successfully");
      navigate(redirectUrl);
    },
    onError: (err) => {
      ErrorNotification(api, "Error", err?.response?.data?.detail?.[0]?.msg || "Something went wrong");
    },
  });

  const onSubmitHandler = async (actionType) => {
    const { image, name } = getValues();
  
    try {
      const imageUploadRes = await uploadImageApi(image[0]);
      const imageUrl = imageUploadRes?.data?.detail?.[0]?.url;
  
      if (!imageUrl) {
        throw new Error("Image upload failed");
      }
  
      const clientData = {
        name,
        logoUrl: imageUrl,
      };
  
      createMutation.mutate(clientData);
    } catch (err) {
      ErrorNotification(api, "Error", err?.message || "Upload failed");
    }
  };

  const handlePreview = () => {
    const file = watch("image")?.[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
      setIsPreviewVisible(true);
    }
  };

  return (
    <>
      {contextHolder}
      <form onSubmit={handleSubmit(() => onSubmitHandler("Publish"))} className="w-full md:w-2/3 space-y-6">

      <Controller
  control={control}
  name="name"
  render={({ field }) => (
    <input
      {...field}
      className="w-full border p-2 rounded"
      placeholder="Enter client name"
    />
  )}
/>
{errors.name && <p className="text-red-500">{errors.name.message}</p>}
       
        <Controller
          control={control}
          name="image"
          render={({ field }) => (
            <>
              <Upload
                beforeUpload={(file) => {
                  setValue("image", [file]);
                  return false;
                }}
                fileList={watch("image")}
                onRemove={() => {
                  setValue("image", []);
                  setPreviewUrl("");
                }}
                showUploadList={{
                  showPreviewIcon: true,
                  previewIcon: <EyeOutlined onClick={handlePreview} />,
                }}
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
              {errors.image && <p className="text-red-500">{errors.image.message}</p>}
            </>
          )}
        />

        <div className="flex justify-end gap-4">
          <Button
            type="default"
            size="large"
            onClick={() => onSubmitHandler("Draft")}
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

      <Modal
        open={isPreviewVisible}
        footer={null}
        onCancel={() => setIsPreviewVisible(false)}
      >
        <img alt="Preview" style={{ width: "100%" }} src={previewUrl} />
      </Modal>
    </>
  );
};

export default ImageUploadForm;
