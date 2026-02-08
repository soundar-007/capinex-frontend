import {
  Controller,
  Control,
  FieldValues,
  FieldErrors,
  RegisterOptions,
} from "react-hook-form";
import { MdError } from "react-icons/md";
import { useState, useMemo } from "react";
import { Button, Input, Modal } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface CustomTextEditorProps {
  label: string;
  name: keyof FieldValues;
  errors: FieldErrors<FieldValues>;
  rules?: RegisterOptions<FieldValues>;
  control: Control<FieldValues>;
}

const CustomTextEditor = ({
  label,
  name,
  rules,
  errors,
  control,
}: CustomTextEditorProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadUrl, setUploadUrl] = useState("");

  const imageUploader = (blobInfo: any, success: any, failure: any) => {
    if (!uploadUrl.trim()) return failure("Invalid URL");
    success(uploadUrl);
  };

  const modules = useMemo(
    () => ({
      toolbar: "undo redo | bold italic | link image",
      image: {
        url: uploadUrl,
        uploadHandler: imageUploader,
      },
    }),
    [uploadUrl]
  );

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <div>
          <label
            htmlFor={label}
            className="flex justify-start py-1 font-semibold"
          >
            {label}
          </label>
          <div>
            <CKEditor
              editor={ClassicEditor}
              data={value || ""}
              onChange={(event, editor) => {
                const data = editor.getData();
                onChange(data); // Updating React Hook Form
              }}
              config={{
                toolbar: ["undo", "redo", "bold", "italic", "link", "image"],
                image: {
                  url: uploadUrl,
                  uploadHandler: imageUploader,
                },
                height: "500px", // Set your desired height here
              }}
              style={{ minHeight: "500px" }} // Alternatively, you can use inline styles
            />

            <Modal
              open={isModalOpen}
              footer={null}
              onCancel={() => setIsModalOpen(false)}
              centered
            >
              <div className="space-y-5 p-5">
                <div className="text-xl font-semibold">Upload URL</div>
                <Input
                  onChange={(e) => setUploadUrl(e.target.value)}
                  value={uploadUrl}
                />
                <div className="flex justify-end">
                  <Button
                    type="primary"
                    size="large"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Upload
                  </Button>
                </div>
              </div>
            </Modal>
          </div>
          {errors[name] && (
            <div className="h-fit font-medium text-sm text-red-500 flex mt-1 gap-1">
              <MdError className="flex-none mt-[2px]" />
              {`${errors[name]?.message}`}
            </div>
          )}
        </div>
      )}
    />
  );
};

export default CustomTextEditor;
