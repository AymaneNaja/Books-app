import React from "react";
import ReadMoreAndLess from 'react-read-more-less';
export function BookDescription({book}) {
  const descript=book.volumeInfo.description.replace(/(<([^>]+)>)/ig, '');
  return <><label className='font-bold text-grad text-lg text-ellipsis text' htmlFor='description'>
                    Description
                    </label>
                    <ReadMoreAndLess className="read-more-content
                    font-semiblold" charLimit={250} readMoreText="Read more" readLessText="Read less">
                    {descript}
                    </ReadMoreAndLess></>;
}
  