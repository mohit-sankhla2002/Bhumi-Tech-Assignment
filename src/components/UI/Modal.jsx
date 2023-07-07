import React from 'react'
import ReactDOM from 'react-dom';
import {toggleCartActions} from '../../store/slices/toggleCartSlice.js'
import {useDispatch} from 'react-redux';
const Backdrop = (props) => {
    return <div onClick={props.onClick} className="absolute top-0 left-0 backdrop-blur-sm backdrop-brightness-50 h-screen w-full z-20"></div>
}

const Content = (props) => {
    return <div className='z-50 fixed top-[20vh] left-[5%] w-[90%] flex items-center m-auto'>{props.children}</div>
};

function Modal(props) {
  const dispatch = useDispatch();
  const closeCartHandler = () => {
    dispatch(toggleCartActions.closeCart());
  }
  return (
  <>
    {ReactDOM.createPortal(<Backdrop onClick={closeCartHandler} />, document.getElementById('overlay'))}
    {ReactDOM.createPortal(<Content>{props.children}</Content>, document.getElementById('overlay'))}
  </>)
}

export default Modal;