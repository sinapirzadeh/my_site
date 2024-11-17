import Container from "../container/Container";
import Footer from "../main/footer/Footer";
import Header from "../main/header/Header";

type TLayout = {
  children: React.ReactNode;
};

export default function Layout({ children }: TLayout) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}
