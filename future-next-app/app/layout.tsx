import ResponsiveAppBar from "@components/molecules/ResponsiveAppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

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
      </body>
    </html>
  );
}
