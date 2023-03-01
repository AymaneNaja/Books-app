import React from 'react'
import { useSearchContext } from '../../Contexts/SearchContext'
import { Link } from 'react-router-dom'
import {TiDelete} from 'react-icons/ti'
const Favorites = () => {
  const {favs,setFavs}=useSearchContext()
  console.log(favs)

  function RemoveFavs(id){
    const UpdatesdFavs=favs.filter(book=>book.id!==id?book:null)
    setFavs(UpdatesdFavs)
  }
  return (
  <div className='py-20 min-h-screen '>
     <h1 className='text-center  text-red-500 mb-20'>Favorites</h1>  
     <div className='search-results flex flex-wrap gap-2 justify-start items-start mx-auto mt-2  w-3/4'>
     {favs.length<1?<div className='mt-10 text-xl font-bold text-red-600'>No favorite books have been added....</div>:null}
    {favs.map(book=>{
          try{
              return(
              <div className='                  h-fit 
              '>
                <Link to={`/book/${book.id}`} className='text-decoration-none space-y-0   
                 relative   
                  h-fit 
                 font-semibold text-base'>
                 <div className='
                 h-fit
                 grid justify-center items-start
                 hover:text-white
                 hover:bg-red-400 
                 p-2 
                 transition-all  rounded-lg '>
                    <img className='book-img rounded-lg shadow-lg my-1' 
                    src={book.volumeInfo.imageLinks.thumbnail}/>
                    <div className='grid h-fit m-auto items-center'>
                      <p className='text-slate-800' >{book.volumeInfo.title}</p>
                      <p className='text-slate-600'>{[...book.volumeInfo.authors]}</p>

                    </div>
                   </div>
                  <button 
                  onClick={()=>RemoveFavs(book.id)}
                  className='absolute -top-2 -right-2  text-xl flex items-center justify-center text-white rounded-full bg-white'><TiDelete
                    className='text-red-600 scale-150 hover:text-black transition-all '
                  /></button>
                </Link>
            </div>)

          }catch(err){
            console.log(err)
          }
            })}
      
    </div>
    </div>
  )
}

export default Favorites