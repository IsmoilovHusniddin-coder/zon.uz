import React from "react";
import { useAxios } from "../../hooks/useAxios";

const Category = () => {
  const { data, loading } = useAxios("products/category-list");
  {
    data?.map((value) => <div className="wrapp"> console.log(value)</div>);
  }

  return (
    <div className="flex items-center justify-between gap-3 over">
      {data?.map((value) => (
        <div className="wrapp">{value} </div>
      ))}
    </div>
  );
};
