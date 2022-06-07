import Head from "next/head"
import { Fragment } from "react"
import { wrapper } from "../redux/store"
import { useStore } from "react-redux"
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import axios from "axios";
import 'react-block-ui/style.css';
import CookieConsent, { Cookies } from "react-cookie-consent";
import React, { useState } from 'react';

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
  window.scroll({
    top: 0
  });
});
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const store = useStore();
  const { locale } = useRouter()
  const [seeMore, setSeeMore] = useState(false)

  axios.interceptors.request.use((con) => {
    let config = store.getState().config;

    if (!con.headers.lang && con.headers.lang) {
      if (locale === "en") {
        con.headers.lang = ""
      } else {
        con.headers.lang = locale;
      }
    }

    if (config.auth)
      if (config.auth.token)
        con.headers.Authorization = `${config.auth.token}`;

    return con;
  },
    (err) => Promise.reject(err)
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );



  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="google-site-verification" content="xvj66e2ya5woglN4ZKsFqBFeXewEgvx5jpYh0gB2r-M" />
        <script src="/js/jquery.min.js" crossOrigin="anonymous"></script>
        <script src="/js/bootstrap.min.js" crossOrigin="anonymous"></script>
        <script src="/js/owl.carousel.js" crossOrigin="anonymous"></script>
        <script src="/js/wow.js" crossOrigin="anonymous"></script>
        <script src="/js/scripts.js" crossOrigin="anonymous"></script>
        <script src="/js/Cookie.js" crossOrigin="anonymous"></script>

        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NK4ZLVB');`,
        }}>
        </script>
        <link type="text/css" rel="stylesheet" href="/css/bootstrapv4.5.min.css" />
        <link type="text/css" rel="stylesheet" href="/css/owl.carousel.css" />
        <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" />
        <link type="text/css" rel="stylesheet" href="/css/animate.min.css" />
        <link type="text/css" rel="stylesheet" href="/css/Cookie.css" />
        <link type="text/css" rel="preload" rel="stylesheet" href="/css/minified.css" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NK4ZLVB"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
      </noscript>
      <Component {...pageProps} />
      <CookieConsent 
      // debug={true} 
      buttonText={"Accept All"}
      declineButtonText={"Decline"}
      declineButtonStyle={{backgroundColor:"#000", color:"#fff", fontSize:"13px", fontWeight:"500", paddingLeft:"20px", paddingRight:"20px", paddingTop:"10px", paddingBottom:"10px",borderRadius:"0"}}
      enableDeclineButton={true}
      style={{background:"#fff",color:"#696969",fontSize:"13px", border:"2px solid black"}} 
      buttonStyle={{ backgroundColor:"#000", color:"#fff", fontSize:"13px", fontWeight:"500", paddingLeft:"20px", paddingRight:"20px", paddingTop:"10px", paddingBottom:"10px",borderRadius:"0" }}
      >
      Gandhi Fabrics uses cookies and other technologies for the basic functionality of the website and application to improve the quality of our services and your experience. Cookies will apply to only the basic functionality of the website and the application. Other purposes of the cookies will not be used until consent is given or those cookies are enabled.
      <button style={{background:"transparent",border:0,color:"blue",textDecoration:"underline"}} onClick={()=>setSeeMore(!seeMore)}>{seeMore? "See less":"See more"}</button>
      {seeMore? <span style={{color:"blue"}}>https://www.gandhifabrics.com/privacy</span>:null}
      </CookieConsent>
    </Fragment>
  )
}

export default wrapper.withRedux(MyApp);
