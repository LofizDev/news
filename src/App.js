import './App.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import News from './components/News';
import { jumbotron } from 'bootstrap-css'
import Weather from './components/Weather';
function App() {


  return (

    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 tab_custom"
    >
      <Tab eventKey="home" title="Tin Tức">
        <News />
      </Tab>
      <Tab eventKey="profile" title="Thời Tiết">
        <Weather />
      </Tab>

    </Tabs>
  );
}

export default App;
