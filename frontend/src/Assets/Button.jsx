import React from 'react'

const Button = ({btn , btn1}) => {
  return (
    <div>
      <div>
        <div className="mainBtn bg-red-500 p-3 rounded-lg hover:bg-white hover:text-red-500 border-1 hover:border-solid border-2 border-red-500 ">
            {btn} {btn1}
        </div>
      </div>
    </div>
  )
}

export default Button
