import './App.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import News from './components/News';
import { jumbotron } from 'bootstrap-css'
import Weather from './components/Weather';
import Music from './components/Music';
function App() {


  return (

    <>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 tab_custom"
      >
      <Tab eventKey="news" title="Tin Tức">
        <News />
      </Tab>
      <Tab eventKey="weather" title="Thời Tiết">
        <Weather />
      </Tab>
      <Tab eventKey="music" title="Nghe Nhạc">
        <Music/>
      </Tab>
    </Tabs>
      </>
  );
}

export default App;
