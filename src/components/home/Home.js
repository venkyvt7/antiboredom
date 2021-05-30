import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="topbox">
        <div>
          <h1 className="mainHead" >Welcome To AntiBoredom </h1>
          <h3 style={{color:"white"}}>
            A Place Where You can Find A Solution to Your Boredom(duh ? !){" "}
          </h3>
        </div>
      </div>

      <div  className="gridmain">
       <a href="/games">   <div className="gridinside">

            <div>
          <h3 style={{color:"white"}} >

       Need Something to keep you active?
      

          </h3>
          <h4>
          This game can help you get faster on your fingers{" "}
          </h4>{" "}
          </div>
        </div>
        </a>
      <a href="/moodquiz"> <div className="gridinside">

            <div>
          <h3 style={{color:"white"}} >
          Bad Day? 

          </h3>
          <h4>
          Find Something Calming to do to improve your mood!){" "}
          </h4>{" "}
          </div>
        </div>
        </a> 
      <a href="/activitysuggestor"> <div className="gridinside">
            <div> 
          <h3 style={{color:"white"}} >  
          Bored out of your mind like we are?
          </h3>
          <h4>
           Find an activity to do
           
           {" "}
          </h4>{" "}
        </div>
        </div>
        </a>  
        <a href="/randomchat">
        <div className="gridinside">
            <div> 
          <h3 style={{color:"white"}} >
                
         Feeling Lucky ?

          </h3>
          <h4>
          Chat With  a Stranger Maybe You will find a new friend today{" "}
          </h4>{" "}
          
          </div>
        </div>
    </a>
      </div>
    </div>
  );
}

export default Home;
