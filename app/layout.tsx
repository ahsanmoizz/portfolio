import "./globals.css";
import SidebarWrapper from "../components/SidebarWrapper";
import PageTransition from "../components/PageTransition";

export const metadata = {
  title: "Portfolio | Blockchain & AI",
  description: "I build Blockchain & AI-powered apps",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <SidebarWrapper>
          {/* Wrap children in PageTransition */}
          <PageTransition>{children}</PageTransition>
        </SidebarWrapper>
      </body>
    </html>
  );
}
