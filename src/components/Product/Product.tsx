import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
  const [isHovered, setIsHovered] = useState(false)
  const [position, setPosition] = useState({ x: 760, y: 688 })

  const handleHover = () => {
    setIsHovered(!isHovered)
    if (!isHovered) {
      // Random position within the screen bounds
      const newX = Math.random() * (window.innerWidth - 200)
      const newY = Math.random() * (window.innerHeight - 200)
      setPosition({ x: newX, y: newY })
    }
  }
  const mouseOut = () => {
    setIsHovered(false)
  }
  return (
    <>
      <div className='mx-auto min-h-screen bg-orange-100 py-12'>
        <div className='grid grid-cols-1 items-center justify-center text-center'>
          <div className='text-6xl font-bold tracking-wider text-pink-300'>
            Trang có mún đi Valentine với tui ko ???
          </div>
          <div
            className='mt-10 h-[500px] bg-[url(https://i.pinimg.com/originals/42/61/ec/4261ec8b20a4ec6f9cf047250024371f.gif)] bg-center bg-no-repeat'
            style={{ position: 'relative' }}
          ></div>
          <div className='mx-auto mt-10 grid grid-cols-2 gap-12'>
            <Link
              to='thanku'
              className='cursor-pointer rounded-lg bg-pink-300 px-12 py-2 text-center text-xl text-white hover:bg-pink-400'
            >
              Coá
            </Link>
            <div
              className='absolute rounded-lg bg-pink-300 px-12 py-2 text-center text-xl text-white hover:bg-pink-400'
              style={{ top: position.y, left: position.x }}
              onMouseEnter={handleHover}
              onMouseLeave={mouseOut}
            >
              Khum
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
