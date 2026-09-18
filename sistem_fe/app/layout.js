import "./globals.css";

export const metadata = {
  title: "YourCompany | Digital Solutions",
  description:
    "Digital solutions, custom software, website development, ERP, CRM and business automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}