import React, { useEffect, useState } from "react";
import data from "../Json/test.json";
import "./StartTest.css";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function StartTest({ addPoint, setAddPoint }) {
  let newData = [];

  const params = useParams();



  switch (params.level) {
    case "easy":
      for (let i = 0; i < 10; i++) {
        newData[i] = data[i];
      }
      break;

    case "medium":
      for (let i = 10, k = 0; i < 20; i++, k++) {
        newData[k] = data[i];
      }
      break;
    case "hard":
      for (let i = 20, k = 0; i < 30; i++, k++) {
        newData[k] = data[i];
      }
      break;

    default:
      break;
  }

  const [count, setCount] = useState(6);
  const [url, setUrl] = useState();
  const [singelQuestion, setSingelQuestion] = useState();
  const [numMulThree, setNumMulThree] = useState(0);
  const [num, setNum] = useState(0);
  const [fourAnser, setFourAnser] = useState([]);
  const [massege, setMassege] = useState();
  const [flag, setFlag] = useState(0);

  let question = newData.map((e) => {
    return e.question;
  });

  let questionUrl = newData.map((e) => {
    return e.questionUrl;
  });

  let wrongAnswers = newData.map((e) => {
    return e.wrongAnswers;
  });

  let rightAns = newData.map((e) => {
    return e.rightAns;
  });

  let currAnsers = null;
  let navigate = useNavigate();

 

  function displayQuestion() {
    if (num == 0) {
      setMassege("get ready");
    }
   

    currAnsers = [
      rightAns[num],
      wrongAnswers[num][numMulThree],
      wrongAnswers[num][numMulThree + 1],
      wrongAnswers[num][numMulThree + 2],
    ];
    currAnsers.sort(() => Math.random() - 0.4);

  
    setCount(count - 1);

    if (count < 1 || flag ) {
      if (num == 9) {
        navigate("/resulte", { replace: true });
      }
      setFlag(0);
      setMassege(null);
      /*  setCount(numMulThree+3) */
      setNum(num + 1);
      setCount(10);
      setSingelQuestion(question[num]);
      setUrl(questionUrl[num]);
      setFourAnser(currAnsers);
    }
  }
  function check(theAnswer) {
    console.log(num);

    setFlag(1);
    if (theAnswer == rightAns[num - 1]) {
      setAddPoint(addPoint + 1);
      
    }
  }
 

  setTimeout(displayQuestion, 1000);

  return (
    <div>
      <ul className="singl-question">
        <li>
          <h1>{massege}</h1>
        </li>
        <li>
          <strong>{massege || singelQuestion ? count : null }</strong>
        </li>
        <li>{singelQuestion}</li>
        <li>
          <img src={url} alt="" style={{ height: "220px" }} />
        </li>
        <li onClick={() => check(fourAnser[0])}>
          <span>{fourAnser[1]}</span>
        </li>
        <li onClick={() => check(fourAnser[1])}>
          <span>{fourAnser[0]}</span>
        </li>
        <li onClick={() => check(fourAnser[2])}>
          <span>{fourAnser[2]}</span>
        </li>
        <li onClick={() => check(fourAnser[3])}>
          <span>{fourAnser[3]}</span>
        </li>
      </ul>
    </div>
  );
}
