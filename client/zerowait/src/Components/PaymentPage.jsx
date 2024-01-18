import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowIcon from '../Assets/Images/arrow.png'
import MpesaLogo from '../Assets/Images/mpesalogo.png'
import BankCardIcon from '../Assets/Images/bankcard.png'
function PaymentPage() {
    const navigate = useNavigate()
    return (
        <div className='p-3'>
            <img src={ArrowIcon} alt="" style={{ height: '50px' }} onClick={() => navigate('/')} />
            <h1 className='fw-bolder px-4'>Order Summary</h1>
            <div className='p-3 '>
                <ul>
                    <li className='d-flex justify-content-between'>
                        <p className='fw-bold'>Amount</p>
                        <p className='fw-bold'>Kes.900</p>
                    </li>
                    <li className='d-flex justify-content-between' >
                        <p className='fw-bold'>Delivery fees</p>
                        <p className='fw-bold'>Kes.100</p>
                    </li>
                    <li className='d-flex justify-content-between mt-5' >
                        <h4 className='fw-bolder'>Total Amount</h4>
                        <h4 className='fw-bolder'>Kes.1000</h4>
                    </li>
                </ul>

                <p className='fw-bold'>Estimated Delivery Time  15-30 mins</p>
            </div>
            <div className='px-3'>
                <h1 className='text-center fw-bold'>Payment options</h1>
                <div>
                    <h3 className='fw-semibold'>Mpesa</h3>
                    <div className='payment-card my-2'>
                        <img src={MpesaLogo} alt="" />
                        <h5 className='mx-3 fw-semibold'>0713******</h5>
                    </div>
                </div>
                <div>
                    <h3 className='fw-semibold'>Card</h3>
                    <div className='payment-card my-2'>
                        <img src={BankCardIcon} alt="" />
                        <h5 className='mx-3 fw-semibold'>1234**************</h5>
                    </div>
                </div>
            </div>
            <div className='d-flex  justify-content-around text-center p-3'>

                <input type="checkbox" name="" id="" />
                <label className='fw-semibold' style={{ letterSpacing: '0.1px' }}>Save card details for future payments</label>
            </div>

            <div className='d-flex justify-content-between align-content-center p-4'>
                <div>
                    <h4 className='text-center'>Total Price</h4>
                    <h1 className='fw-bolder' style={{fontSize:'40px'}}>Kes.1000</h1>
                </div>
                <button className="btn-2 mt-3" style={{background:'rgba(0,0,0,0.75)', borderRadius:'20px',height:'70px'}}>
                    Checkout
                </button>

            </div>


        </div>
    )
}

export default PaymentPage