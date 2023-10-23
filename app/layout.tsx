/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";

export const metadata = {
  title: "ChatGPT Learn Web",
  description: "你的独享机器猫-多啦C梦.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "ChatGPT Learn Web",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
        {/*<script src="/baidustatistics.js" defer></script>*/}
        <script
          async
          src="https://umami.guoshuaifu.cn/script.js"
          data-website-id="81b5ed1d-1160-43df-8094-550fcd5c7bb5"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
