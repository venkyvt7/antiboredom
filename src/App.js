import logo from './logo.svg';
import './App.css';
import {Header} from './components/navbar/Navbar';
import Activity from './components/activity/Activity';
import { Quiz } from './components/quiz/Quiz';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import Home from './components/home/Home.js';
import Chat from './components/chat/Chat';
function App() {
  return (
    <div className="App">
     
    <Header></Header>
      {/* <Activity/> */}
      {/* <Quiz></Quiz> */}


      <Router>  
    
      <Route exact path="/" 
      component={Home} 
      />  
      <Route exact path="/moodquiz" component={Quiz} />  
      <Route  exact path="/activitysuggestor" component={Activity} />  
      <Route  exact path="/randomchat" component={Chat} />  
     
  </Router>
    </div>
  );
}

export default App;
