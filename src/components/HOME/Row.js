import { RowCard } from './RowCard';
import React from 'react'
import useFetchCateg from '../../CustomHooks/useFetchCateg'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Spinner from 'react-bootstrap/Spinner';
import '@splidejs/splide/css/sea-green';
import { Link } from 'react-router-dom';



const OPTIONS={
  height:320,
  rewind: true,
  autoWidth:true,
  drag:'free',
  padding:'2em',
  gap:'1em',
  pagination:false,
  }
const Row = ({category,orderby,filter}) => {
  const {Data,Loading,Err}=useFetchCateg({category,orderby})
  console.log(Data)
  return (
    <div className='my-1 mx-10 w-full'>
      <h2 className='border-l-4  border-blue-400  text-blue-500 text-center font-extrabols'>{category}</h2>
    {!Loading&&!Err?
      <Splide options={OPTIONS} 
     >
            {Data.map(book=>{
              try{
              return (
                <SplideSlide key={book.id}>
                  <Link to={`/book/${book.id}`}
                  className='text-decoration-none'>
                    <RowCard thumbnail={book.volumeInfo.imageLinks.thumbnail}  book={book}  />
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