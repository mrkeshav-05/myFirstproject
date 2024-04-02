import { star } from "../assets/icons"
// import { reviews } from "../constants"

const ReviewCard = ({key,imgURL,rating,feedback,customerName}) => {
  return (
    <section className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px] " 
      />
      <p className="mt-6 max:w-sm info-text text-center">{feedback}</p>
      <div className="object-contain m-0">
        <img
          src={star}
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
      
    </section>
  )
}

export default ReviewCard