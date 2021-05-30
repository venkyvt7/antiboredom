import React, { useState } from "react";
import "./activity.css";
import Paper from "@material-ui/core/Paper";
import { Button, Input, Select } from "@material-ui/core";
import axios from "axios";
function Activity() {
  function callApi() {
    axios
      .get(`http://www.boredapi.com/api/activity?type=${final[0]}`)
      .then((res) => {
        console.log(res);
        setResults(res.data.activity)
      })
      .catch();
  }

  const type1 = [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];
  // const
  const [type, setType] = useState(type1);
  const [index, setIndex] = useState(0);
   const [results,setResults]=useState();
  const [final, setFinal] = useState([]);
  const no1 = [];
  for (let i = 0; i <= 10; i++) {
    no1[i] = i + 1;
  }
  const [no, setNo] = useState(no1);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2.5vh",
          marginBottom:"5vh"
        }}
      >
        <Paper
          elevation={3}
          style={{
            padding: "1.5%",

            // height:"50vh",
            backgroundColor:"pink"
          }}
        >

             
     <div
            style={{
              display: "block",
            }}
          >
            {index === 1 ? (
              <>
                {" "}
                <div>
                  {" "}
                  <h2 style={{color:"black"}}>
                   
                    Number Of People That This Activity Would Involve ?
                    <select
                      style={{
                        marginLeft: "2vw",
                        width: "2vw",
                        height: "3vh",
                          backgroundColor:"pink",
                        fontFamily: "1.2rem",
                      }}
                    >
                      {1 === 1
                        ? no1.map((data, index) => {
                            return (
                              <option
                                style={{
                                  fontSize: "1.4rem",
                                }}
                                value={data}
                              >
                                {" "}
                                {index + 1}
                              </option>
                            );
                          })
                        : null}
                    </select>
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      onClick={() => {
                        let temp1 = final;

                        setIndex(2);
                        temp1.push(index);

                        setFinal(temp1);

                        console.log(final);
                        
                      }}

                      style={{
                        backgroundColor:"#e17f93"
                      }}
                    >
                      Show Me The Results{" "}
                    </Button>
                  </div>
                </div>
              </>
            ) : null}
            {index == 0
              ? type.map((data, index) => {
                  return (
                    <div
                      style={{
                        // padding: "1.5%",
                      }}
                    >
                      {index===0?<h2 style={{color:"black" }}>What Type Of Activity Do You Want  ?</h2>:(null)}
                     
                     <div style={{textAlign:"center",  padding:"4%"}}> 
                      <Button
                        onClick={() => {
                          setIndex(1);

                          let temp1 = final;

                          temp1.push(data);

                          setFinal(temp1);
                          callApi();
                        }}
                        style={{
                         
                          backgroundColor: "#ee959e",
                          color: "black",
                        
                        }}
                      >
                        {data}{" "}
                      </Button>
                      </div>
                    </div>
                  );
                })
              : null}
            

    {
        index==2?<>
        <div>
        <h1>{results}</h1>
      
        </div>
        </>:null
    }


          </div>
        </Paper>
      </div>{" "}
    </div>
  );
}

export default Activity;
