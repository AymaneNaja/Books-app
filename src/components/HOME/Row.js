import React from 'react'
import useFetchCateg from '../../CustomHooks/useFetchCateg'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Spinner from 'react-bootstrap/Spinner';
import '@splidejs/splide/css/sea-green';
import { Link } from 'react-router-dom';



const OPTIONS={
  height:220,
  rewind: true,
  autoWidth:true,
  drag:'free',
  padding:'2em',
  gap:'1em',
  pagination:false,
  }
const Row = ({category,orderby,filter}) => {
  const {Data,Loading,Err,ErrMsg}=useFetchCateg({category,orderby})
  return (
    <div className='my-1 mx-10'>
      <h2 className='text-decoration-underline text-blue-400 m-2'>{category}</h2>
    {!Loading&&!Err?
      <Splide options={OPTIONS} 
     >
            {Data.map(book=>{
              try{
              return (
                <SplideSlide key={book.id}>
                  <Link to={`/book/${book.id}`}>
                    <img  className='rounded hover:opacity-60' src={book.volumeInfo.imageLinks.thumbnail}>
                    </img>
                  </Link>              
                </SplideSlide>

              )}catch(err){console.log(err)}
            })
            }
      </Splide>
      :<div className='flex justify-center align-middle' ><Spinner  animation="grow" />
    
    </div>
    
    }



    </div>
  )
}

export default Row