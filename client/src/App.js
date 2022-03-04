import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import { HomePage, Register, Login} from './pages';
import PrivateRoute from './PrivateRoute';
import ScrollToTop from './components/ScrollTop';
// import { utils } from './helpers';
// import { loadUser } from './redux/auth/authSlice';

// const { setAuthToken } = utils;

// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

const App = () => {
  // useEffect(() => store.dispatch(loadUser()), []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={HomePage} />

          {/* <PrivateRoute exact path="/feedback" component={Feedback} />
          <PrivateRoute exact path="/thanks" component={ConfirmPage} /> */}

          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          {/* <Route path="/listfood" component={ListfoodPage} />
          <PrivateRoute path="/payment" component={PaymentPage} />

          <PrivateRoute exact path="/report" component={ReportPage} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
