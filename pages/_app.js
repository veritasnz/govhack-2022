import "../styles/normalize.css";
import "../styles/globals.css";
import { PulloutContextProvider } from "../src/context/PulloutContextProvider";

function MyApp({ Component, pageProps }) {
    return (
        <PulloutContextProvider>
            <Component {...pageProps} />
        </PulloutContextProvider>
    );
}

export default MyApp;
