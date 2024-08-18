import Link from "next/link";
import Button from "@mui/material/Button";
import { MdOutlineDashboard } from "react-icons/md";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar fixed top-0 left-0 z-[100] w-[15%]">
        <Link href={"/"}>
          <div className="logoWrapper py-3 px-3">
            <img
              src="https://m.media-amazon.com/images/I/81KM0plGIpL._UF1000,1000_QL80_.jpg"
              className="w-100"
            />
          </div>
        </Link>

        <div className="sidebarTabs px-3">
          <Button fullWidth className="w-100">
            <span className="icon mr-3 w-[25px] h-[25px] flex items-center justify-center rounded-md">
              <MdOutlineDashboard />
            </span>{" "}
            Dashboard
          </Button>
        </div>
      </div>
    </>
  );
}
