import { ThemeProvider } from "@emotion/react";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { toggleTheme } from "store/slices/themeSlice";

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
        <button onClick={() => dispatch(toggleTheme())}>click</button>
        {children}
      </ThemeProvider>
    </div>
  );
};

export default MainLayout;
