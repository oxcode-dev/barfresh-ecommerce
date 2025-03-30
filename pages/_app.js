'use client'
import '../styles/globals.css';
import {wrapper, store} from '../store';
import { Provider } from 'react-redux';

import { useEffect } from "react";
import { usePathname } from 'next/navigation'


const ScrollToTop = (props) => {
  const location = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <ScrollToTop>
        <Component {...props.pageProps}/>
      </ScrollToTop>
    </Provider>
  )
}

const WrappedApp = wrapper.withRedux(App)

export default WrappedApp 
