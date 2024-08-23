import { MdDashboard } from "react-icons/md";

interface RoleRoutesInterface {
    title: string;
    path: string;
    icon: React.ReactNode
}

export const RoleRoutes: Record<string, RoleRoutesInterface[]> = {
  ADMIN: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <MdDashboard />,
    },
  ],
  CASHIER: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <MdDashboard />,
    },
  ],
};
