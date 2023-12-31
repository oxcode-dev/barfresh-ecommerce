 import '../styles/globals.css';
import {wrapper, store} from '../store';
import { Provider } from 'react-redux';

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps}/>
    </Provider>
  )
}

const WrappedApp = wrapper.withRedux(App)

export default WrappedApp 