import React from "react";
export function RowCard({book,thumbnail}) {
  return<div className="  text-sm">
    <img className='rounded hover:opacity-60' src={thumbnail}>
                    </img>
                    <div className='text-black text-md w-20 text-ellipsis flex flex-col   text-decoration-none'>
                      <p className='font-bold  text-slate-700 '>{book.volumeInfo.title}</p>
                    </div>
                    </div>}
  