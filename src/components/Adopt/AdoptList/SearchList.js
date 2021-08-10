import axios from "axios";
import React, { useEffect, useState } from "react";
export var ListAnimal = [];
export default function SearchList() {
  const [list, setList] = useState([]);
  const [sex, setSex] = useState("");
  const [ageInMonths, setAgeInMonths] = useState("");
  const [color, setcolor] = useState("");
  const [isNeutered, setIsNeutered] = useState("");
  const [name, setName] = useState("Sasin");
  const param = {
    sex: "",
    // ageInMonths: ageInMonths,
    // color: color,
    // isNeutered: isNeutered,
    // name: name
  };
  useEffect(() => {
    axios
      .post("https://pure-earth-99144.herokuapp.com/api/pet/find", param)
      .then(function (response) {
        console.log(response.data);
        setList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  ListAnimal = list;
  console.log(ListAnimal);

  return <div className="search-list"></div>;
}
