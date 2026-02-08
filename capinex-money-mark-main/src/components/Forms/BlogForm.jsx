import React, { useEffect, useState } from "react";
import { Button, Drawer, notification, Upload, Modal } from "antd";
import { EyeOutlined, UploadOutlined } from "@ant-design/icons";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { RxEnterFullScreen } from "react-icons/rx";
import { CiMobile3 } from "react-icons/ci";
import CustomInput from "../inputs/CustomInput";
import CustomTextEditor from "../inputs/CustomTextEditor";
import CustomTextBox from "../inputs/CutomTextBox";
import { ErrorNotification, successNotification } from "../utils";
import { uploadImageApi } from "../../api/resource";

const schema = yup.object().shape({
  title: yup.string().required().min(3).max(150),
  image: yup
    .mixed()
    .required("Image is required")
    .test("fileSize", "Image is too large", (value) => {
      return value && value[0]?.size <= 10 * 1024 * 1024;
    }),
  permalink: yup
    .string()
    .required()
    .matches(/^[a-z0-9_-]+$/, "Invalid permalink"),
  description: yup.string().required().min(3).max(255),
  readTime: yup
    .string()
    .required()
    .matches(/^([1-9]|[1-5][0-9]|60)$/, "Should be 1-60"),
  content: yup
    .string()
    .required()
    .test("content", "Content should be minimum 10 characters", (value) => {
      const content = value.replace(/(<([^>]+)>)/gi, "");
      return content.trim().length !== 0;
    }),
  actionType: yup.string().notRequired(),
});

const EditorForm = ({
  InitialValue,
  isEdit,
  createApi,
  editApi,
  id,
  redirectUrl,
}) => {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const [previewUrl, setPreviewUrl] = useState("");
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [isPreviewDrawerOpen, setIsPreviewDrawerOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: InitialValue,
  });

  useEffect(() => {
    if (InitialValue) {
      reset(InitialValue);
      setValue("bannerImageUrl", InitialValue.bannerImageUrl);
    }
  }, [InitialValue]);

  const editMutation = useMutation({
    mutationFn: editApi,
    onSuccess: () => {
      successNotification(api, "Success", "Published successfully");
      navigate(redirectUrl);
    },
    onError: (err) => {
      ErrorNotification(
        api,
        "Error",
        err.response?.data?.detail?.[0]?.msg || "Something went wrong"
      );
    },
  });

  const createMutation = useMutation({
    mutationFn: createApi,
    onSuccess: () => {
      successNotification(api, "Success", "Published successfully");
      reset();
      navigate(redirectUrl);
    },
    onError: (err) => {
      ErrorNotification(
        api,
        "Error",
        err.response?.data?.detail?.[0]?.msg || "Something went wrong"
      );
    },
  });

  const onDraft = async () => {
    const values = getValues();
    const payload = {
      ...values,
      readTime: Number(values.readTime),
      actionType: "Draft",
      bannerImageUrl: values.bannerImageUrl,
    };
    isEdit
      ? editMutation.mutate({ id, data: payload })
      : createMutation.mutate(payload);
  };

  const onSubmit = async (values) => {
    try {
      const image = values.image?.[0];
      const imageUploadRes = await uploadImageApi(image);
      const imageUrl = imageUploadRes?.data?.detail?.[0]?.url;

      if (!imageUrl) {
        throw new Error("Image upload failed");
      }

      const payload = {
        ...values,
        bannerImageUrl: imageUrl,
        readTime: Number(values.readTime),
        actionType: "Publish",
      };

      isEdit
        ? editMutation.mutate({ id, data: payload })
        : createMutation.mutate(payload);
    } catch (err) {
      ErrorNotification(api, "Error", err.message);
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[90%] 2xl:w-[70%] space-y-5"
      >
        <div className="flex justify-end">
          <div
            className={`px-6 text-sm py-1 border rounded-md ${
              InitialValue?.actionType === "Publish"
                ? "bg-green-100 text-green-500 border-green-500"
                : "bg-blue-100 text-blue-500 border-blue-500"
            }`}
          >
            {InitialValue?.actionType || "Draft"}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <CustomInput
            label="Title"
            control={control}
            errors={errors}
            name="title"
            placeholder="Enter Title"
          />
          <CustomInput
            label="Permalink"
            control={control}
            errors={errors}
            name="permalink"
            placeholder="Enter Permalink"
          />
          <Controller
            control={control}
            name="image"
            render={({ field }) => (
              <div className="flex flex-col">
                <label className="mb-1 font-medium text-sm text-gray-700">
                  Banner Image
                </label>
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
                {errors.image && (
                  <p className="text-red-500">{errors.image.message}</p>
                )}
              </div>
            )}
          />

          <CustomTextBox
            label="Description"
            control={control}
            errors={errors}
            name="description"
            placeholder="Enter Description"
          />
          <CustomInput
            label="Read Time (in mins)"
            control={control}
            errors={errors}
            name="readTime"
            placeholder="Enter read time between 1-60"
          />
        </div>

        <CustomTextEditor
          label="Editor"
          control={control}
          errors={errors}
          name="content"
        />

        <div className="flex justify-between">
          <Button
            size="large"
            onClick={() => setIsPreviewDrawerOpen(true)}
            disabled={!watch("title") && !watch("bannerImageUrl")}
          >
            Preview
          </Button>
          <div className="flex gap-4">
            <Button
              type="primary"
              size="large"
              ghost
              disabled={watch("title")?.length < 3}
              onClick={onDraft}
              loading={createMutation.isPending || editMutation.isPending}
            >
              Draft
            </Button>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              loading={createMutation.isPending || editMutation.isPending}
            >
              Publish
            </Button>
          </div>
        </div>
      </form>

      <Drawer
        title="Preview Content"
        placement="right"
        closable
        onClose={() => setIsPreviewDrawerOpen(false)}
        open={isPreviewDrawerOpen}
        width={1400}
      >
        <div className="flex gap-4 text-2xl">
          <RxEnterFullScreen
            className="cursor-pointer"
            onClick={() => setIsMobileView(false)}
          />
          <CiMobile3
            className="cursor-pointer"
            onClick={() => setIsMobileView(true)}
          />
        </div>

        <div className="p-10 flex justify-center">
          <div
            className={`${
              isMobileView
                ? "w-[430px] border-2 rounded-2xl h-[650px] p-5 overflow-y-scroll"
                : "w-full md:w-[768px]"
            } space-y-10 leading-relaxed`}
          >
            <div className="space-y-5">
              <div className="text-3xl font-bold">{getValues("title")}</div>
              <p className="font-medium">{getValues("description")}</p>
              <img
                src={getValues("bannerImageUrl")}
                alt="Banner"
                className="rounded-xl w-full"
              />
              <div dangerouslySetInnerHTML={{ __html: getValues("content") }} />
            </div>
          </div>
        </div>
      </Drawer>

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

export default EditorForm;
