import React from 'react'

interface titleDash {
    txt: string
    
}

const TitleDash: React.FC<titleDash> = ({txt}) => {
  return (
    <h2 className='text-prime font-bold text-[45px] capitalize'>{txt}</h2>
  )
}

export default TitleDash