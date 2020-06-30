import { Provider } from 'react-redux';
import React from 'react';
import store from "../src/redux/store/store";

export default function App(props): JSX.Element {
    const { Component, pageProps } = props;
    return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
    );
}


// import React from "react";
// import ReactDOM from "react-dom";
// import "./assets/styles/index.css";
// import App from './components/App';
// import {store} from './redux/store'
// import { Provider } from "react-redux";
// import { BrowserRouter, Route } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <Route component={App} />
//     </Provider>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();




// import '@styles/reset.css';
// import '@styles/generalStyles.css';
// import { AppProps } from 'next/app';
// import Header from '@components/Header';
// import Footer from '@components/Footer';
// import styled from 'styled-components';

// const PageContainer = styled.div`
//   position: relative;
//   min-height: 100vh;
// `;

// const Container = styled.div`
//   padding-bottom: 150px;
// `;

// function MyApp({ Component, pageProps }: AppProps): JSX.Element {
//   return (
//     <PageContainer>
//       <Container>
//         <Header />
//         <Component {...pageProps} />
//       </Container>
//       <Footer />
//     </PageContainer>
//   );
// }

// export default MyApp;
