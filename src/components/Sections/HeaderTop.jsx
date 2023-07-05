import React from 'react'
import phone from '../../assets/phone.svg';
import envelope from '../../assets/envelope.svg';
import location from '../../assets/location.svg'
const HeaderTop = () => {
  return (
    <div className='bg-darkBlue px-section p-1 flex justify-between'>
      <div className='flex gap-4'>
        <span className='text-white flex gap-2 items-center'>
          <img src={phone} alt="" className='header-top-logo' />
          <p className='text-sm'>+221 33 66 22</p>
        </span>
        <span className='text-white flex gap-2 items-center'>
          <img src={envelope} alt="" className='header-top-logo' />
          <p className='text-sm'>support@elextra.io</p>
        </span>
      </div>

      <div className='flex items-center'>
        <span className='text-white flex gap-2 items-center'>
          <img src={location} alt="" className='header-top-logo' />
          <p className='text-sm'>Location</p>
        </span>

        <div className='bg-white w-[2px] h-5/6 mx-10'/>

        <select className='bg-transparent text-sm text-white outline-none border-none mr-2'>
          <option value="English">EN</option>
          <option value="Afrikaans">AF</option>
          <option value="Arabic">AR</option>
          <option value="Bengali">BN</option>
          <option value="Chinese">ZH</option>
          <option value="Czech">CS</option>
          <option value="Danish">DA</option>
          <option value="Dutch">NL</option>
          <option value="Finnish">FI</option>
          <option value="French">FR</option>
          <option value="German">DE</option>
          <option value="Hindi">HI</option>
          <option value="Indonesian">ID</option>
          <option value="Italian">IT</option>
          <option value="Japanese">JA</option>
          <option value="Korean">KO</option>
          <option value="Malay">MS</option>
          <option value="Norwegian">NO</option>
          <option value="Polish">PL</option>
          <option value="Portuguese">PT</option>
          <option value="Russian">RU</option>
          <option value="Spanish">ES</option>
          <option value="Swedish">SV</option>
          <option value="Turkish">TR</option>
        </select>

        <select className='bg-transparent text-white text-sm outline-none border-none'>
          <option value="USD">$ Dollar (US)</option>
          <option value="EUR">€ Euro (EU)</option>
          <option value="GBP">£ Pound (UK)</option>
          <option value="JPY">¥ Yen (Japan)</option>
          <option value="CAD">$ Dollar (Canada)</option>
          <option value="AUD">$ Dollar (Australia)</option>
          <option value="CHF">Fr Franc (Switzerland)</option>
          <option value="CNY">¥ Yuan (China)</option>
          <option value="INR">₹ Rupee (India)</option>
          <option value="MXN">$ Peso (Mexico)</option>
          <option value="BRL">R$ Real (Brazil)</option>
          <option value="RUB">₽ Ruble (Russia)</option>
        </select>
      </div>
    </div>
  )
}

export default HeaderTop;