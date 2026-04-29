import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter, Poppins } from "next/font/google";

export const metadata = {
  title: {
    template: "%s | Hafidz Docs",
    default: "Hafidz Docs",
  },
  description: "The React.js documentation framework.",
};

const inter = Inter({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
