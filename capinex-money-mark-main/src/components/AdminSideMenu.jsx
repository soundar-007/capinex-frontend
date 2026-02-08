import React from "react";
import { ConfigProvider, Menu } from "antd";
import { FaBlog } from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import { HiOutlineHome } from "react-icons/hi";
import { CgNotes } from "react-icons/cg";
import { BiSolidMessageDetail  } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";
import { adminBaseurl } from "./utils";

const Menulabel = ({ label, icon }) => (
  <div className="flex items-center gap-4">
    <div className="text-2xl">{icon}</div>
    <div className="font-semibold">{label}</div>
  </div>
);

const AdminSideMenu = ({ onlogout }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const items = [
    {
      path: `${adminBaseurl}/home`,
      label: <Menulabel label="Home" icon={<HiOutlineHome />} />,
      key: "home",
    },
    {
      path: `${adminBaseurl}/blogs`,
      label: <Menulabel label="Blogs" icon={<FaBlog />} />,
      key: "blogs",
    },
    {
      path: `${adminBaseurl}/logo`,
      label: <Menulabel label="Client Logo" icon={<CgNotes />} />,
      key: "logo",
    },
    {
      path: `${adminBaseurl}/testimonials`,
      label: <Menulabel label="Testimonials" icon={<BiSolidMessageDetail />} />,
      key: "testimonials",
    },
  ];

  const handleSelect = (event) => {
    const selectedPath = event?.item?.props?.path;
    if (selectedPath) {
      navigate(selectedPath);
    }
  };

  const selectedKey = location.pathname?.split("/").pop();
  console.log(selectedKey)

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemSelectedBg: "#FFAD00",
            itemSelectedColor: "#ffff",
          },
        },
      }}
    >
      <Menu
        className="topbar"
        mode="inline"
        items={items}
        onSelect={handleSelect}
        defaultSelectedKeys={[selectedKey]}
        selectedKeys={[selectedKey]}
      />
      <div className="py-5 mt-5 border-t border-gray-100 pl-3">
        <div className="cursor-pointer flex items-center gap-3" onClick={onlogout}>
          <CiLogout/> <span>Logout</span>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default AdminSideMenu;
