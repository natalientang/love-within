import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <nav style={{ backgroundColor: "#FAFAFA" }}>
      <Navbar />
      </nav>
      {children}
      <Footer />
    </>
  );
}