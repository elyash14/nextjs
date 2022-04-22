import "../styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import store from "store";
import MainLayout from "components/layout/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
