import { ThemeProvider } from "@emotion/react";
import Container from "components/atoms/Container";
import { useAppSelector } from "store";
import Footer from "./main-layout/Footer";
import Header from "./main-layout/Header";

interface IMainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <div className={theme.isDark ? "dark-wrapper" : "light-wrapper"}>
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default MainLayout;
