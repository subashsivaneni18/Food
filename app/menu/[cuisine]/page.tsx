"use client"
import MenuCard from "@/app/components/MenuCard"
import Navbar from "@/app/components/Navbar"
import { useParams } from "next/navigation"
import { IndianType ,ChineseType, KoreanType, JapaneseType, AmericanType} from "@/data"
import getItemByType from "@/app/actions/getItemByCuisine"

const page = () => {
  const cuisine = useParams().cuisine.toString()

  var x:any=[];

  if(cuisine==='Indian')
  {
    x=IndianType
  }
  else if(cuisine==='Chinese')
  {
    x=ChineseType
  }
  else if(cuisine==='Korean')
  {
    x=KoreanType
  }
  else if(cuisine==='Japanese')
  {
    x=JapaneseType
  }
  else if(cuisine==='American')
  {
    x=AmericanType
  }
  
  
  
  return (
    <div>
      <Navbar />
      <div className="relative top-[70px] w-screen h-[calc(100vh-70px)]  ">
        <div className="w-[90vw] py-3 mx-auto">
          <p className="text-3xl font-bold">{cuisine}</p>
          <div className="mt-10 grid grid-cols-3 row-span-full gap-5">
            {x.map((type:any) => (
              <MenuCard key={type.label} label={type.label} src={type.src} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page
