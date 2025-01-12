import React from 'react'
import BradeCrumb from '../component/commonComponent/BradeCrumb'

const CheckoutPage = () => {
  return (
    <div>
      <div className="container">
        {/* ====bradeCrumb===== */}
        <div className='py-10'>
            <BradeCrumb/>
        </div>
        {/* =======billing Details===== */}
        <div className="warpper">
            {/* =====userInfo====== */}
            <div>
                <h2 className='font-inter text-4xl mb-5'>Billing Details</h2>
                <div id='DetailForm' className='w-full max-w-[470px]  bg-slate-300'>
                    {/* ---user name---- */}
                    <div className='w-full flex flex-col'>
                        <label htmlFor="FullName">Full Name</label>
                        <input type="text" id='FullName' name='FullName' />
                    </div>
                    {/* ---Company name---- */}
                    <div className='w-full flex flex-col'>
                        <label htmlFor="FullName">Full Name</label>
                        <input type="text" id='FullName' name='FullName' />
                    </div>
                    {/* ---Street address---- */}
                    <div className='w-full flex flex-col'>
                        <label htmlFor="FullName">Full Name</label>
                        <input type="text" id='FullName' name='FullName' />
                    </div>
                </div>
            </div>
            {/* =====BillingMethod====== */}
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
