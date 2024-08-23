import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { ExceptionLayoutRoutes } from "@/routes/exceptionLayoutRoutes";
import "@/styles/style.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const pathName = usePathname();
  return (
    <>
      <SessionProvider session={session}>
        {ExceptionLayoutRoutes.includes(pathName) ? (
          <Component {...pageProps} />
        ) : (
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        )}
      </SessionProvider>
    </>
  );
}
