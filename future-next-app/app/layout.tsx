import ResponsiveAppBar from "@components/molecules/ResponsiveAppBar";
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
      </body>
      <main>{children}</main>
    </html>
  );
}
