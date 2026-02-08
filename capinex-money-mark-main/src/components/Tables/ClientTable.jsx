import React from "react";
import { notification, Pagination, Popconfirm, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import moment from "moment";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

import { adminBaseurl, ErrorNotification, successNotification } from "../utils";

const { Column } = Table;

const CustomTable = ({
  redirectUrl,
  refech,
  rowdata,
  loading,
  currentPage,
  onPageChange,
  total,
  deleteApi,
  testimonial,
}) => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const deleteMutation = useMutation({
    mutationFn: deleteApi,
    onSuccess: () => {
      refech();
      successNotification(api, "Success", "Deleted successfully");
    },
    onError: () => {
      ErrorNotification(api, "Error", "Something went wrong, try again later");
    },
  });

  return (
    <div>
      {contextHolder}
      <Table
  loading={loading}
  rowKey="_id"
  dataSource={rowdata}
  pagination={false}
>
  <Column
    title="Client Name"
    key="userName"
    render={(record) => record?.userName || record?.name || record?.title || "-"}
  />

  <Column
    title="Updated Date"
    dataIndex="updatedTime"
    key="updatedTime"
    render={(value) => moment(value).format("MMM D YYYY")}
  />
  
  
  <Column
    title="Action"
    key="action"
    render={(_, record) => (
<div className="flex gap-3 text-xl">
  <Popconfirm
    title="Delete the Content"
    description="Are you sure?"
    okText="Yes"
    cancelText="No"
    placement="top"
    onConfirm={() => deleteMutation.mutate(record._id)}
  >
    <AiOutlineDelete className="cursor-pointer hover:text-primary" />
  </Popconfirm>
</div>

    )}
  />
</Table>

      <Pagination
        defaultPageSize={10}
        defaultCurrent={1}
        current={currentPage}
        total={total}
        onChange={onPageChange}
        hideOnSinglePage
      />
    </div>
  );
};

export default CustomTable;
