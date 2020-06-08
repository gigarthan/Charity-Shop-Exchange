import React,{useState} from 'react';
import ModalButton from './ModalButton'
import Logo from '../../../assets/img/cse_logo.png'

export default function Footer(props) {
  const { formData, handleChange } = props

  let [newClass, setClassName] = useState('')
  let [button, changeButton] = useState('modal-button')
  const [quantity, setQuantity] = useState(true)
  const handleSubmit = () => {
    setClassName('loader')
    console.log('Submit', formData);
    setTimeout(() => {
      setClassName('')
      setQuantity(false)
      setClassName('checkmark draw')
      changeButton('modal-button d')
      document.getElementById("footer").classList.add('footer');
      document.getElementById("modal").classList.add('completed');
    }, 3000)
  };
  const books = formData.checkoutItems.books.filter(item => item.quantity !== 0);
  const dvd = formData.checkoutItems.dvd.filter(item => item.quantity !== 0);
  const total = books.concat(dvd)
  const orderSummary = total.reduce((quantity, item) => {
    for (const [orderName, orderCount] of Object.entries(item)) {
      if (!quantity[orderName]) {
        quantity[orderName] = 0;
      }

      quantity[orderName] += orderCount
    }
    return quantity
  }, {});

  
  const totalSum = total.reduce((sum, i) => (
    sum += i.quantity * 2.00
  ), 3.50)
  const totalDecimalSum = (Math.round(totalSum * 100) / 100).toFixed(2);

  const keysToLook =["address_1", "firstname", "lastname", "postcode", "town"]
  const keysToLook2 =['card_number', 'cvv', 'email', 'expiry_at', 'name', 'phone']


  const showToolTip = keysToLook.some(key => formData.delivery[key] === '')
  const showToolTip2 = keysToLook2.some(key => formData.payment[key] === '')
  
  
  return (
    <div className="modal-footer" id="footer">
      <img className="h-10 md:h-12 img-logo" src={Logo} alt="Charity Shop Exchange" />
      <Selection orderSummary={orderSummary} formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />
      <Subscription text="delivered every" formData={formData} button={button}showToolTip={showToolTip} showToolTip2={showToolTip2} quantity={quantity} orderSummary={orderSummary} handleSubmit={handleSubmit} handleChange={handleChange} newClass={newClass} totalDecimalSum={totalDecimalSum} />
    </div>

  )
}
const Selection = ({ orderSummary, handleSubmit, handleChange }) => {
  if (orderSummary.quantity >= 2) {
    return null
  } if (orderSummary.quantity >= 1) {
    return (
      <>
        <ModalButton className="modal-button-disabled" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true} onClick={handleSubmit} handleChange={handleChange} text="Select 1 more item" />
      </>
    )
  }
  return (
    <>
      <ModalButton className="modal-button-disabled-2" disabled={typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true} onClick={handleSubmit} handleChange={handleChange} text="Select 2 more items" />
    </>
  )
}
const Subscription = ({formData, orderSummary, newClass,button, handleSubmit, quantity, handleChange, showToolTip,showToolTip2, totalDecimalSum}) => {
  const modalButtonClassName = `${showToolTip2 || showToolTip ? "modal-button-disabled" : button} `
  const isEnabled = !showToolTip && !showToolTip2 
  if (typeof orderSummary.quantity !== 'undefined' ? orderSummary.quantity < 2 : true) {
    return null
  } return ( 
   <> 
  {quantity ?  <span className="p"><a className="s">{orderSummary.quantity} items</a>delivered every<a className="s2">{formData.delivery.subscription}</a></span> : <div className="fade-in"><span>Thank  You! An email confirmation has been sent.</span></div>   }
      <ModalButton className={modalButtonClassName} type="button" disabled={!isEnabled}
       onClick={handleSubmit} handleChange={handleChange}>
         <>
         {quantity ? <span className="sum">£{totalDecimalSum} Subscribe</span> : <span className="subscribe">Subscribed</span> }
         {showToolTip2 ? <span className="tooltiptext">Enter Payment Details</span> : ''}
         {showToolTip ? <span className="tooltiptext">Enter Delivery Details</span> : ''}
         <div className={newClass}></div>
           </></ModalButton>
           </>
  )}