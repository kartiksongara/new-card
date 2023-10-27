import React from "react";
import ShowCard from "./ShowCard";
import Data from "./DATA"
const CARD=()=>{
    return(
        <div>
            <div className="text-light m-5  d-flex pb-5 justify-content-between  flex-wrap ">
                {Data.map((e)=>{
                    return(
                        <>
                        <ShowCard img={e.img} moviename={e.movieName} genre={e.genre} duration={e.duration} year={e.year} actors={e.actors} language={e.language}
                        />
                        </>
                    )
                })
                }

            </div>
        </div>
    )
} 
export default CARD