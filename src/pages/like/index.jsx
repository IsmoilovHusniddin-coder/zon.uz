import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/card";

const Like = () => {
  const { like } = useSelector((state) => state.likeSlice);
  return (
    <div>
      <h1>Like page</h1>
      <div className=" grid grid-cols-5 gap-5">
        {like.map((value) => (
          <Card key={value.id} {...value} />
        ))}
      </div>
    </div>
  );
};

export default Like;
