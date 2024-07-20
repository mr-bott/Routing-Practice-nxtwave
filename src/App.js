import Header from './components/Header'
import {Route, Switch} from 'react-router-dom'
import HomeRoute from './components/Home'
import AboutRoute from './components/About'
import ContactRoute from './components/Contact'
import NotFound from './components/NotFound'
const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={HomeRoute} />
      <Route exact path="/about" component={AboutRoute} />
      <Route exact path="/contact" component={ContactRoute} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
