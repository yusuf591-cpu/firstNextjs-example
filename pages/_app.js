import "../styles/globals.scss";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import NextNprogress from "nextjs-progressbar";


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="red"
        startPosition={0.5}
        stopDelayMs={200}
        height="10"
      />
      <Component {...pageProps} />
    </>
  );
}
