import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import achieveImg from "../../assets/img/achieve.svg"

const Achieve: React.FC = () => {
  return (
    <section className='flex items-center justify-between gap-4 flex-wrap'>
        <div>
            <img src={achieveImg}  />
        </div>
        <div className=''>
            <h1 className='text-[35px] md:text-[40px] font-bold max-w-[500px] text-start'>Achieve your target
            and won your life</h1>
            <Button className="bg-prime text-white px-6 text-[15px] md:text-[18px] font-semibold mt-2 hover:bg-prime">
          <Link to={"/user/login"}>Get started</Link>
        </Button>
        </div>
    </section>
  )
}

export default Achieve