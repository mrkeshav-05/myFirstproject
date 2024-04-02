import { products } from "../constants"
import PopulerProductCard from "../components/PopulerProductCard"

const PopulerProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Populer</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top notch quality and styles with our sought-after selection. Discover a world of comfort, design and value </p>

      </div>



      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {/* {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))} */}

        {products.map((product) => (
          <PopulerProductCard key={product.name} {...product}
          />
        ))}
      </div>
    </section>





  )
}

export default PopulerProducts