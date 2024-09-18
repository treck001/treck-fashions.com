import React from 'react'

const Category = () => {
  return (
    <>
        <h2 className="text-2xl font-bold mb-4 mt-4 text-center">Shop By Roles</h2>
    <div className="category-grid">
        <div className="category-card">
          <img width= '335' height= '415' src='https://images.cbazaar.com/pl_images/bannerimages/SB11_July19.jpg' alt="Category" className="category-image" />
          {/* <div className="category-name">Bride</div> */}
        </div>


        <div className="category-card">
          <img src='https://images.cbazaar.com/pl_images/bannerimages/SB9_July19.jpg' alt="Category" className="category-image" />
          {/* <div className="category-name">Bride</div> */}
        </div>

        <div className='category-card'>
            <img  width= '335' height= '415' src = "https://images.cbazaar.com/pl_images/bannerimages/SB6_July19.jpg" className='category-image'/>

        </div>

        <div className='category-card'>
            <img src="https://images.cbazaar.com/pl_images/bannerimages/SB8_July19.jpg" className='category-image' alt="" />
        </div>
    </div>
    </>
  )
}

export default Category