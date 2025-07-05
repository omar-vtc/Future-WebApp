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
        <main>{children}</main>
      </body>
    </html>
  );
}
