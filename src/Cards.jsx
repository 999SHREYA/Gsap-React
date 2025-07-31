import React from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)

const Cards = () => {
    
    const images = [
        '/images/1.png',
        '/images/2.png',
        '/images/3.png',
        '/images/4.png',
        '/images/5.png',
        '/images/6.png',
      ];

      useEffect(()=>{
        gsap.utils.toArray('.card').forEach(card => {
            gsap.to(card, {
                scale:0.8,
                opacity:0,
                scrollTrigger:{
                    trigger: card,
                    start:'top 15%',
                    end:'bottom 15%',
                    markers:true,
                    scrub:true
                }
            })
        })
      })

  
  return (
    <main className="flex flex-col w-full text-white gap-5 items-center py-[15vh] pb-[20vh]">
        {
            images.map( (image, index) => {
                return(
                    <div key={index} className="card sticky  top-[15vh] text-center  w-[27vw] items-center flex flex-col gap-5 px-[30px] py-[10vh] rounded-lg bg-[#383027]" >
            <img  className="w-[150px]" src={image} alt="img" />
            <h1 className="text-4xl">
                The <br /> <span className="font-bold"> Algorithm</span>  
            </h1>
            <p className="font-thin ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, doloremque.</p>
        </div>
                )
            })
        }

     


        
    </main>
  );
};

export default Cards;
