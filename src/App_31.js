import './App_31.scss';
import Homepage_31 from './pages/Homepage_31';
import Shop_31 from './pages/Shop_31';
import ContactPage_31 from './pages/ContactPage_31';
import SigninPage_31 from './pages/SigninPage_31';
import Header_31 from './components/Header_31';
import { Switch, Route} from 'react-router-dom';

function App_31() {
  return (
    <div>
      <Header_31 />
      <Switch>
      <Route exact path='/' component={Homepage_31} />
      <Route exact path='/shop_31' component={Shop_31} />
      <Route exact path='/contact_31' component={ContactPage_31} />
      <Route exact path='/signin_31' component={SigninPage_31} />
      </Switch>
    </div>
  );
}


export default App_31;
