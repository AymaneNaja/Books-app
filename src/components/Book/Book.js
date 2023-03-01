import { BookDescription } from './BookDescription';
import { MoreInfoBtn } from './MoreInfoBtn';
import { PublishedDate } from './PublishedDate';
import { Publisher } from './Publisher';
import { BookCategories } from './BookCategories';
import { PageCount } from './PageCount';
import { BookIntro } from './BookIntro';
import { useParams } from 'react-router-dom';
import useFetchBook from "../../CustomHooks/useFetchBook."
import 'react-circular-progressbar/dist/styles.css';
import {Booklang}from './Booklang'
import React from "react";
import Spinner from 'react-bootstrap/Spinner';


const Book = () => {
    const Bookid=useParams()
    const {Data,Loading,Err,ErrMsg}=useFetchBook(Bookid.id)
    console.log(Data)
  return (
    <div className='min-h-screen'>
    {Loading?
        <div className='flex justify-center align-middle' ><Spinner  animation="grow" />
        </div>
    :null}
    {!Loading && !Err?
    <div className="mt-5">
        {Data.map(book=>{
            
            return(
                <div key={book.id} className="book mx-auto flex " >  
                    <BookIntro book={book}  />
                <div className='grid items-start justify-start w-2/4 space-y-0'>
                    <BookDescription book={book}    />
                    <PageCount  book={book}/>
                    {'categories' in book.volumeInfo?
                    <BookCategories book={book}/>:null}
                    <Booklang  book={book}/>
                    <Publisher book={book}  />
                    <PublishedDate book={book}     />
                    <MoreInfoBtn book={book}    />
                    
                    </div>
                </div>
            )
        })}
    </div>
    :null}
    </div>
  )
}

export default Book