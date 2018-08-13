import App, { Container } from "next/app";
import * as React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import { Store } from "redux";

interface Props {
  store: Store;
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
