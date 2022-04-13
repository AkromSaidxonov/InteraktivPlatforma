import React, { useState, useEffect } from "react";
import "./Dorixona.css";
import { Link, useParams } from "react-router-dom";

function Dorixona() {
  const { id } = useParams();
  const [product, setDori] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5050/doctors")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <div className="container">
        <p className="headerParagraf">Мавжуд дори воситаларининг рўйхати </p>
        <div className="sections">
          <Link to="/Dorixona" className="sectionItem active">
            Бюджет
          </Link>
          <Link to="/Markazlashgan" className="sectionItem">
            Марказлашган
          </Link>
          <Link to="/Ichki" className="sectionItem">
            Ички дорихона
          </Link>
          <Link to="/Muruvvat" className="sectionItem">
            Мурувват
          </Link>
        </div>
        <div className="sectionBody">
          <div className="BodyHeader">
            <p className="BheaderChild">№</p>
            <p>Дори воситасининг номи</p>
            <p>Яроқлилик муддати</p>
          {product.filter(data => data.id = id).map((data) =>(
            <div key={data.id} >
              <h1>{data.name}</h1>
              <h1>{data.date}</h1>
              <h1>hello</h1>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dorixona;
