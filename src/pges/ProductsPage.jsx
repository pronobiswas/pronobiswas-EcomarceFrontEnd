import React from 'react'
import ItemCard from '../component/ItemCard'


const ProductsPage = () => {
  // ========featch category fdata with rtk query======
  
  
  return (
    <div>
       <div className="container flex " >
        {/* =======shop by category======== */}
        <div className="aside w-1/4 h-full max-h-screen bg-slate-400">
        <span>home /</span>
        
        </div>

        <div className="beside w-3/4 h-full min-h-screen ">
        <ItemCard/>
        </div>
       </div>
    </div>
  )
}

export default ProductsPage
