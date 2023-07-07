import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 14,
      title: "Casio G-Shock Ana-Digi Quartz World Time 200m Black",
      price: 33.33,
      itemsLeft: 24,
    },
    {
      id: 15,
      title: "Canon LBP113w imageCLASS WiFi Laser Printer",
      img: printer,
      price: 33.33,
      itemsLeft: 18,
    },
  ],
};

const flashSaleSlice = createSlice({
    name: 'flashSale', 
    initialState,

})