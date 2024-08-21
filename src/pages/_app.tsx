import DefaultLayout from "@/components/Layouts/DefaultLayout";
import "@/styles/style.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </SessionProvider>
    </>
  );
}
