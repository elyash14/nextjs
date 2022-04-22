import { ThemeProvider } from "@emotion/react";
import Container from "components/atoms/Container";
import { useAppDispatch, useAppSelector } from "store";
import { toggleTheme } from "store/slices/themeSlice";
import Footer from "./main-layout/Footer";
import Header from "./main-layout/Header";

interface IMainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  const theme = useAppSelector((state) => state.theme);

  console.log("theme", theme);

  const dispatch = useAppDispatch();

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
