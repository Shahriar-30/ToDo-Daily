import React from 'react'

interface imgTxt{
    txt: string;
    img: string;
}

const ImgText: React.FC<imgTxt> = ({txt, img}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 w-full py-2 md:w-fit'>
        <img className='w-[100px]' src={img} />
        <h3 className='font-semibold'>{txt}</h3>
    </div>
  )
}

export default ImgText