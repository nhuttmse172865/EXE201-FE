import React from 'react'

const ElevatedButton = ({ text, width, height, rounded, fontSize, color, handleOnclick }) => {
  return (
    <div
      className="bg-(--color-primary-100) flex justify-center items-center rounded-[.375rem] cursor-pointer"
      style={{
        height: height,
        borderRadius: rounded,
        width: width,
      }}
      onClick={() => handleOnclick()}
    >
      <span className="text-[14px] text-white font-light"
        style={{fontSize: fontSize, color: color}}
      >{text}</span>
    </div>
  )
}

export default ElevatedButton