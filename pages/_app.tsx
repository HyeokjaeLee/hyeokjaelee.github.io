import { AppProps } from "next/app";
import "../styles/globals.css";
import { TobBar } from "../components/common/Topbar";
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TobBar />
      <div id="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default App;

/*body::-webkit-scrollbar {
  width: 10px;
}
body::-webkit-scrollbar-thumb {
  background-color: #2f3542;
  border-radius: 10px;
}
body::-webkit-scrollbar-track {
  background-color: grey;
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px white;
} */
