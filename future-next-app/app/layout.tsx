import ResponsiveAppBar from "@components/molecules/ResponsiveAppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Footer from "@components/molecules/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ResponsiveAppBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
