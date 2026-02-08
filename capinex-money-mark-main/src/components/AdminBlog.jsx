import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";
import AdminLayout from "./AdminLayout";
import BlogTable from "./Tables/BlogTable";
import TestimonialTable from "./Tables/TestimonialTable";
import ClientTable from "./Tables/ClientTable";
import {
  getAllBlogsApi,
  deleteBlogApi,
  getAllTestimonialsApi,
  deleteTestimonialApi,
  getAllClientsApi,
  deleteClientApi,
} from "../api/resource";
import { adminBaseurl } from "./utils";

const AdminBlog = () => {
  const navigate = useNavigate();
  const { key } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  const apiMap = {
    blogs: { get: getAllBlogsApi, del: deleteBlogApi },
    testimonials: { get: getAllTestimonialsApi, del: deleteTestimonialApi },
    logo: { get: getAllClientsApi, del: deleteClientApi },
  };

  const tableMap = {
    blogs: BlogTable,
    testimonials: TestimonialTable,
    logo: ClientTable,
  };

  const selectedApi = apiMap[key] || {};
  const SelectedTable = tableMap[key] || null;

  const { data, isPending, refetch } = useQuery({
    queryKey: [key, currentPage],
    queryFn: () => selectedApi.get(currentPage, limit),
    enabled: !!selectedApi.get,
  });

  const rowData =
    key === "logo"
      ? data?.data?.detail[0]?.clients || []
      : data?.data?.detail[0]?.[key] || [];

  return (
    <AdminLayout>
      <div className="p-10 lg:p-14 space-y-14">
        <div className="flex justify-between gap-10 items-center">
          <div className="text-3xl font-semibold capitalize">{key}</div>
          <Button
            size="large"
            type="primary"
            style={{ backgroundColor: "black" }}
            onClick={() => navigate(`${adminBaseurl}/${key}/create`)}
          >
            Create {key.charAt(0).toUpperCase() + key.slice(1)}
          </Button>
        </div>

        {SelectedTable ? (
          <SelectedTable
            loading={isPending}
            rowdata={rowData}
            total={data?.data?.detail[0]?.total || 0}
            refech={refetch}
            redirectUrl={key}
            deleteApi={selectedApi.del}
            onPageChange={setCurrentPage}
            currentPage={currentPage}
          />
        ) : (
          <div>Invalid Key</div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminBlog;
