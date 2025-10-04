import React from "react";
import { useAxios } from "../../hooks/useAxios";
import Card from "../../components/card";
import { Skeleton } from "antd";
import SkeltonComponent from "../../components/skeleton";
import Category from "../../components/category";

const Home = () => {
  const { data, loading } = useAxios("products");
  console.log(data);
  return (
    <section>
      <Category />
      <div className="grid containerss grid-cols-5 gap-4 !mt-5">
        {loading ? (
          <SkeltonComponent />
        ) : (
          data.map((value) => <Card key={value.id} {...value} />)
        )}
      </div>
    </section>
  );
};

export default Home;
