import React from 'react'
import logo from '../../assets/logo.svg';
import facebook from '../../assets/social-media/facebook.svg';
import linkedin from '../../assets/social-media/linkedin.svg';
import youtube from '../../assets/social-media/youtube.svg';
import twitter from '../../assets/social-media/twitter.svg';
import instagram from '../../assets/social-media/instagram.svg';
import appStore from '../../assets/appStore.png';
import playStore from '../../assets/googlePlay.png';
import customerCare from '../../assets/customerCare.png'
import ButtonHollow from '../UI/ButtonHollow';
function Footer() {
    return (
        <footer className="p-section grid grid-cols-7">
            <div className='col-span-2 flex flex-col gap-6'>
                <img src={logo} className='w-[200px]' alt="logo" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                <div className="flex gap-3">
                    <a href="#" className='social-media-container'>
                        <img src={facebook} className='social-media' />
                    </a>
                    <a href="#" className='social-media-container'>
                        <img src={youtube} className='social-media' />
                    </a>
                    <a href="#" className='social-media-container'>
                        <img src={instagram} className='social-media' />
                    </a>
                    <a href="#" className='social-media-container'>
                        <img src={twitter} className='social-media' />
                    </a>
                    <a href="#" className='social-media-container'>

                        <img src={linkedin} className='social-media' />
                    </a>
                </div>
            </div>
            <div className='col-span-1 flex flex-col gap-8'>
                <h1 className='uppercase text-xl font-semibold'>quick links</h1>

                <ul className='flex flex-col gap-2'>
                    <li><a href="#" className='text-gray-500'>Products</a></li>
                    <li><a href="#" className='text-gray-500'>Classifieds</a></li>
                    <li><a href="#" className='text-gray-500'>Contact Us</a></li>
                    <li><a href="#" className='text-gray-500'>Login</a></li>
                    <li><a href="#" className='text-gray-500'>Signup</a></li>
                </ul>
            </div>
            <div className='col-span-1 flex flex-col gap-8'>
                <h1 className='uppercase text-xl font-semibold'>CUSTOMER AREA</h1>

                <ul className='flex flex-col gap-2'>
                    <li><a href="#" className='text-gray-500'>My Account</a></li>
                    <li><a href="#" className='text-gray-500'>Orders</a></li>
                    <li><a href="#" className='text-gray-500'>Tracking List</a></li>
                    <li><a href="#" className='text-gray-500'>Terms</a></li>
                    <li><a href="#" className='text-gray-500'>Privacy Policy</a></li>
                    <li><a href="#" className='text-gray-500'>Return Policy</a></li>
                    <li><a href="#" className='text-gray-500'>My Cart</a></li>
                </ul>
            </div>
            <div className='col-span-1 flex flex-col gap-8'>
                <h1 className='uppercase text-xl font-semibold'>Vendor Area</h1>

                <ul className='flex flex-col gap-2'>
                    <li><a href="#" className='text-gray-500'>Partner with Us</a></li>
                    <li><a href="#" className='text-gray-500'>Trainings</a></li>
                    <li><a href="#" className='text-gray-500'>Procedures</a></li>
                    <li><a href="#" className='text-gray-500'>Terms</a></li>
                    <li><a href="#" className='text-gray-500'>Privacy Policy</a></li>
                </ul>
            </div>
            <div className='col-span-2 flex flex-col gap-8'>
                <h1 className='uppercase text-xl font-semibold'>Contact</h1>

                <div className='flex flex-col gap-4'>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                    <div className='flex gap-4 justify-between'>
                        <img src={customerCare} className='w-[35px]'/>
                        <div className='flex flex-col justify-between'>
                            <p className='text-sm font-light'>Have Any Question</p>
                            <a href="tel:123 456 789" className='text-darkBlue'>+ 123 456 789</a>
                        </div>
                        <ButtonHollow className={`rounded-[12px] text-sm font-bold px-6 py-2`}>CHAT</ButtonHollow>
                    </div>
                    <div className='flex gap-4'>
                        <img src={appStore} className='w-[170px]'/>
                        <img src={playStore} className='w-[170px]'/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;