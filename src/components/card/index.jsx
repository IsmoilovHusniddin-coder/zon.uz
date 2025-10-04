import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/cart-slice";
import toast from "react-hot-toast";
import { deleteLike, getDataLike } from "../../redux/like-slice";
import { FaHeart } from "react-icons/fa6";

const Card = (props) => {
  const dispatch = useDispatch();
  const { thumbnail, title, price, id } = props;
  const { like } = useSelector((state) => state.likeSlice);
  const isLiked = like.find((value) => value.id === id);
  console.log(Boolean(isLiked));

  return (
    <div className="shadow !p-3 w-[90%] !mx-[5%]">
      <div className="relative">
        <img src={thumbnail} alt="" />
        {Boolean(isLiked) ? (
          <FaHeart
            onClick={() => {
              dispatch(deleteLike(id));
              toast.success("Product sevimlilardan o'chirildi");
            }}
            className="absolute top-2 right-2 cursor-pointer text-red-500"
          />
        ) : (
          <FaRegHeart
            onClick={() => {
              dispatch(getDataLike(props));
              toast.success("Product sevimlilarga qo'shildi");
            }}
            className="absolute top-2 right-2 cursor-pointer"
          />
        )}
      </div>

      <div className="h-[100px] flex items-start justify-between flex-col">
        <div>
          <h1>{title}</h1>
          <h2>{price} $</h2>
        </div>

        <Button
          onClick={() => {
            dispatch(getData(props));
            toast.success("Product cartga qo'shildi");
          }}
          className="w-full"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Card;
