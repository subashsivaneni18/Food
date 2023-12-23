"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Input from '@/app/components/Input';
import { CldUploadButton, CldUploadWidget } from "next-cloudinary";
import ImageUpload from "@/app/components/ImageUpload";
import axios from "axios";
import { useParams } from "next/navigation";
import { item } from "@prisma/client";
const page = () => {
  const [item, setItem] = useState<item>();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("0");
  const [type, setType] = useState("");
  const [description, setDesc] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [image, setImage] = useState("");

  

  

  const handleUpload = (result: any) => {
    setImage(result?.info?.secure_url);
  };

   const Id = useParams().Id.toString();

  const handleUpdate = useCallback(async () => {
    await axios.patch(`/api/ItemById/${Id}`, {
      title,
      price: parseFloat(price),
      type,
      description,
      cuisine,
      image,
      Id
    });
    console.log("Updates");
  }, [title, price, type, description, cuisine, image,Id]);

 

  useMemo(()=>{
    async function getItem(){
      const res = await axios.get(`/api/ItemById/${Id}`)
      setItem(res.data)

       setTitle(item?.title!);
       setPrice(item?.price!);
       setType(item?.type!);
       setDesc(item?.description!);
       setCuisine(item?.cuisine!);
       setImage(item?.image!);
       
    }

    getItem()
    
  },[Id,item?.cuisine,item?.description,item?.image,item?.price,item?.type,item?.title])

  console.log(item)

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[80vw] h-[80vh] border-[1px] broder-white rounded-lg">
        <div className="m-3 ml-3 flex flex-col gap-10 p-3">
          <p className="text-3xl font-semibold">Edit Your Item</p>
          <div className="grid grid-cols-2 gap-5">
            <Input
              label="Title"
              type="text"
              value={title}
              onChange={(e: any) => setTitle(e.target.value)}
              id="title"
            />
            <Input
              label="Type"
              type="text"
              value={type}
              onChange={(e: any) => setType(e.target.value)}
              id="type"
            />
            <Input
              label="Description"
              type="text"
              value={description}
              onChange={(e: any) => setDesc(e.target.value)}
              id="desc"
            />

            <Input
              label="Cuisine"
              type="text"
              value={cuisine}
              onChange={(e: any) => setCuisine(e.target.value)}
              id="cuisine"
            />
          </div>

          <input
            value={price}
            onChange={(e: any) => setPrice(e.target.value)}
            className="
            block
            rounded-md
            px-6
            pt-6
            pb-1
            w-full
            text-md
          text-white
          bg-neutral-700
            appearance-none
            focus:outline-none
            focus:ring-0
            peer
            invalid:border-b-1
           "
            type="number"
            placeholder="Price"
          />

          <div className=" border-[1px] border-white p-3 text-center rounded-lg">
            <CldUploadButton
              uploadPreset="food-app"
              options={{ maxFiles: 1 }}
              onUpload={handleUpload}
            >
              <p>Upload Pic</p>
            </CldUploadButton>
          </div>

          <button
            onClick={() => handleUpdate()}
            className="text-xl bg-red-400 font-bold text-white rounded-lg py-2 hover:bg-red-600 transition duration-150 cursor-pointer"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
