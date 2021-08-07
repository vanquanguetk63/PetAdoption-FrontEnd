import React from "react";
import { useParams } from "react-router-dom";

const Animal = () => {
  const { id } = useParams();
  return <div>AnimalPage: {id} </div>;
};

export default Animal;
