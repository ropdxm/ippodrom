import '../css/order.css';
import OrderItem from './OrderItem';

const Order = () => {
  return (
    <main>
      <section className="bron-prog">
        <div className='clipped-bg'></div>
        <h1 className='order-title'>Забронировать прогулку</h1>
        <div className='list-of-orders'>
          <OrderItem name="Мустанг" init_price={2000} />
          <OrderItem name="Мустанг" init_price={2000} />
          <OrderItem name="Мустанг" init_price={2000} />
          <OrderItem name="Мустанг" init_price={2000} />
        </div>
        <hr style={{height: ".2rem", width: "40%", backgroundColor: "black", border: "none", marginTop: "2rem", marginBottom: "2rem"}} />
        <h1 className='date-time-h'>Выберите дату и время</h1>
        <div className='date-time'>
          <input type="date" />
          <input type="time" />
        </div>
        <h2 className='total-title'>Итого: 2000tg</h2>


      
<div className="wrapper-o">
  <div className="container">
    <div className="title">Данные карты</div>
    
    <div className="input-form">
      <div className="section-1">
        <div className="items">
          <label className="label">Номер карты</label>
          <input type="text" className="input" maxLength={16} data-mask="0000 0000 0000 0000"placeholder="1234 1234 1234 1234" />
        </div>
      </div>
      <div className="section-2">
        <div className="items">
          <label className="label">Владелец карты</label>
          <input type="text" className="input" placeholder="Yermek Abaiov" />
        </div>
      </div>
      <div className="section-3">
        <div className="items">
          <label className="label">дата истечения срока</label>
          <input type="text" className="input" data-mask="00 / 00" placeholder="MM / YY" />
        </div>
        <div className="items">
          <div className="cvc">
            <label className="label">cvc code</label>
            <div className="tooltip">?
              <div className="cvc-img"><img src="https://i.imgur.com/r8oXtry.png" alt="" /></div>
            </div>
          </div>
          <input type="text" className="input" data-mask="0000" placeholder="0000" />
        </div>
      </div>
    </div>
    
  </div>
</div>

        <input type="button" className='order-inp' value="Начать бронирование" />
      </section>
    </main>
  )
}

export default Order