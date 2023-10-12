import { useState } from "react"

type OrderItemProps = {
  name: string,
  init_price: number,
}

const OrderItem = ({name, init_price}: OrderItemProps) => {
  const [amount, setAmount] = useState<number>(1);
  const handlePlus = () => {
    setAmount(prev => prev+1);
  }
  const handleMinus = () => {
    setAmount(prev => prev-1);
  }

  return (
    <div className='item-order'>
        <h2>{name}</h2>
        <span className='singular-price'>{init_price}tg</span>
        <div className='order-pm'>
            <input className='plus-order' type="button" value="+" onClick={handlePlus} />
            <span>1</span>
            <input className='plus-order minus-order' type="button" value="-" onClick={handleMinus}/>
        </div>
        <span className='singular-price total-price'>{init_price*amount}tg</span>
    </div>
  )
}

export default OrderItem