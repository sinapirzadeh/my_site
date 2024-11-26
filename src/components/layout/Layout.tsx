import Footer from "../main/footer/Footer";
import Header from "../main/header/Header";

type TLayout = {
  children: React.ReactNode;
};

export default function Layout({ children }: TLayout) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
