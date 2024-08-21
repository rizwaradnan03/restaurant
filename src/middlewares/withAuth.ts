import { RoleRoutes, roleRoutes } from "@/routes/roleRoutes";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default function withAuth(middleware, requireAuth) {
  return async (req, next) => {
    const pathName = req.nextUrl.pathname;
    if (requireAuth.includes(pathName)) {
      const token = await getToken({
        req,
        secret: process.env.SECRET_KEY,
      });

      console.log("isi token", token);

      if (!token) {
        const url = new URL("/auth/login", req.url);
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url);
      }

      // Dapatkan peran pengguna dari token
      const userRolePaths = RoleRoutes[token.role];
      const hasAccess = userRolePaths.some((route) => route === pathName);
      if (!hasAccess) {
        return NextResponse.redirect(new URL("/", req.url));
      }
      return middleware(req, next);
    }
  };
}
