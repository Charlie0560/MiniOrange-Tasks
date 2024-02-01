// "use client";
// _app.js
import React, { useEffect, useState } from 'react'
const axios = require('axios');
// import axios from "axios"
// var fetch = require('fetch');
import Cards from "../cards/page"
import "./home.css"





function home({ stockData }) {
  console.log(stockData)
  const [data, setData] = useState([]);


  return (<>
    <h1>Stock Details</h1>
    <div className='cards '>
        {stockData &&  stockData.length > 0 &&
          stockData.map((d) => <Cards data={d} />)}
      </div>
      {/* <Component {...pageProps} /> */}
  </>
  )
}


export async function getStaticProps() {
  const symbols = ['AMRN', 'AAPL', 'GOOGL'];
  const options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data',
    headers: {
      'X-RapidAPI-Key': '62c9e1f1f5msha037b886bcca680p1d2fe3jsna1be07a3121e',
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
    },
  };

  try {
    console.log("hellow world")
    const stockData = await Promise.all(
      symbols.map(async (symbol) => {
        const stockOptions = { ...options, params: { symbol, region: 'US' } };
        const response = await axios.request(stockOptions);
        const slicedData = response.data.prices.slice(0, 1);
        return slicedData.map((item) => ({ ...item, symbol }));
      })
    );
    console.log(stockData.flat())
    return {
      props: {
        stockData: stockData.flat(),
      },
    };
  } catch (err) {
    console.error(err);
    
  }
}

export default home