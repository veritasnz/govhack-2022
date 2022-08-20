import "../styles/normalize.css";
import "../styles/globals.css";
import { PipeContextProvider } from "../src/context/PipeContextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <PipeContextProvider>
      <Component {...pageProps} />
    </PipeContextProvider>
  );
}

export default MyApp;
