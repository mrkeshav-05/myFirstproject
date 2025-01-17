

const Button = ({label,iconUrl,backgroundColor,borderColor,textColor,fullWidth}) => {
  return (
    <button 
      className={`flex justify-center px-7 py-4 items-center gap-2 border font-montserrat text-lg leading-none bg-coral-red rounded-full 
      ${
            backgroundColor
              ? `${backgroundColor} ${textColor} ${borderColor}`
              : "bg-coral-red text-white border-coral-red"
          } rounded-full ${fullWidth && "w-full"}
      
      `}
      
    >
      {label}
      {iconUrl && (
      <img src={iconUrl} alt="arrow right icon" className=" ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  )
}

export default Button