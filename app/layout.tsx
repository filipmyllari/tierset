import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/navigation/sidebar";

export const metadata: Metadata = {
  title: "Tierset Studio",
  description: "Webbyrå i Stockholm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative h-full bg-primary min-h-screen overflow-visible">
        <div className="relative h-[80vh] md:h-screen bg-gradient">
          <svg
            className="absolute w-full md:z-0 bottom-[-2px] md:h-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#244584"
              fillOpacity="1"
              d="M0,160L60,144C120,128,240,96,360,90.7C480,85,600,107,720,144C840,181,960,235,1080,234.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
          <Sidebar />
          <div className="flex justify-center items-center min-h-screen md:pb-16 z-10 md:pl-[2rem] pr-4 md:pr-8 pb-20 z-5">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
