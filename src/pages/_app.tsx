import React from "react";
import { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <Component {...pageProps} />
);

export default MyApp;
