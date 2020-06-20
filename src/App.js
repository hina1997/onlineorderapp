import React from 'react';
import './App.css';
import Nav from './components/shared/Nav';
import Welcome from './components/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import CreateOrder from './components/dashboard/dashboardoperations/CreateOrder';
import NotFound from './components/shared/NotFound';
import { Provider } from 'react-redux';
import store from './Store';
import UpdateOrder from './components/dashboard/dashboardoperations/UpdateOrder';
import Transaction from './components/transactions/Transaction';
import AddTransaction from './components/transactions/transactionoperations/AddTransaction';
import 'react-app-polyfill/stable';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Nav} />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/createorder" exact component={CreateOrder} />
          <Route path="/updateorder/:id" exact component={UpdateOrder} />
          <Route path="/transactions/:id" exact component={Transaction} />
          <Route path="/trns/add/:id" exact component={AddTransaction} />
          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
