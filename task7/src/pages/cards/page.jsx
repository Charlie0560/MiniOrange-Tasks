import React from 'react'
import "./card.css"


function cards({ data}) {
  let symbol=data.symbol;

  let close = data.close;
  let open = data.open;
  let high = data.high;
  let low = data.low;
  return (
    <div className='container p-5 carddiv'>
      <b>STOCK :</b> {symbol}
      <br />  
      <b>CLOSE :</b> {close.toFixed(4)}
      <br />  
      <b>OPEN :</b>{open.toFixed(4)}
      <br />  
      <b>HIGH :</b>{high.toFixed(4)}
      <br />  
      <b>LOW :</b>{low.toFixed(4)}

    </div>
  )
}

export default cards