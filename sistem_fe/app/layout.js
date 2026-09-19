import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "YourCompany | Digital Technology Partner",
  description:
    "Software house dan digital technology partner untuk bisnis modern.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}