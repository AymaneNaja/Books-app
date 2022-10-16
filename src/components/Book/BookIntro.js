import React from "react";
import ReactStars from "react-rating-stars-component";
import { useSearchContext } from "../../Contexts/SearchContext";
import {AiFillCheckCircle} from 'react-icons/ai'
import { useState ,useEffect} from "react";
import {MdFavorite} from 'react-icons/md'
export function BookIntro({
    book
}) {
        const [infavs,setInFavs]=useState(false)
        const [success,setSuccess]=useState(false)
        const {favs,setFavs}=useSearchContext()
        console.log(favs)
        useEffect(() => {
            const isFav=favs.findIndex(fav=>fav.id===book.id)
            console.log(isFav)
            if(isFav!==-1){
                setInFavs(true)
            }
            else{setInFavs(false)}

        },[favs]);
        function AddFavs(){
            setFavs(prev=>[...prev,book])
            setTimeout(()=>{
                setSuccess(true)
            })
            setTimeout(()=>{
                setSuccess(false)
            },3000)
        }

  return <div className="w-2/4 grid items-start space-y-0 h-fit justify-center m-3">
                        <img className="rounded shadow m-1" src={book.volumeInfo.imageLinks.smallThumbnail} />
                        <span className=" font-bold ">{book.volumeInfo.title}</span>
                        <span className="font-bold ">By:{[...book.volumeInfo.authors]}</span>
                        <ReactStars
                        count={5}
                        value={book.volumeInfo.averageRating}
                        size={24}
                        activeColor="#ffd700"
                        />
                        {!infavs&&!success?<button 
                        onClick={()=>AddFavs()}
                        className="flex 
                        w-fit items-center justify-center font-bold bg-indigo-700 text-white p-1 rounded-lg mt-2
                        transition-all hover:bg-indigo-900">
                        <MdFavorite />Add To Favorites
                        </button>:<p className="bg-red-500 p-2 w-fit font-bold text-white rounded-lg text-center flex gap-2">
                        <AiFillCheckCircle
                        className='scale-150 m-1'/>added to favorites</p>}
                        {success?<p className="
                        w-fit flex justify-center items-start
                        ont-bold bg-green-500 text-white p-2 
                        font-bold rounded-lg mt-2 
                        transition-all show-to-hide">
                        <AiFillCheckCircle
                        className='scale-150 m-1'/>succesfully added to favorites</p>:null}

                    </div>;
}
  