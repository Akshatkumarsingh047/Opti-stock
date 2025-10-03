import React from 'react'
import TradingViewWidget from "../../components/TradingViewWidget.tsx"
import {MARKET_OVERVIEW_WIDGET_CONFIG,HEATMAP_WIDGET_CONFIG,TOP_STORIES_WIDGET_CONFIG,MARKET_DATA_WIDGET_CONFIG} from "../../lib/constants.ts"

function Home() {
  const baseUrl="https://s3.tradingview.com/external-embedding/embed-widget-"
  return (
    <div className='flex min-h-screen home-wrapper'>
      <section className='grid w-full gap-8 home-section'>
        <div className='md:col-span-1 xl:col-span-1'>
          <TradingViewWidget
          title={"Market Overview"}
          scriptUrl={"https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"}
          config={MARKET_OVERVIEW_WIDGET_CONFIG}
          className='custom-chart cursor-pointer '
          height={600}
          /> </div>
           <div className='md:col-span-1 xl:col-span-2'>
            <TradingViewWidget
          title={"Stock Heatmap"}
          scriptUrl={`${baseUrl}stock-heatmap.js`}
          config={HEATMAP_WIDGET_CONFIG}
          className='custom-chart cursor-pointer border'
          height={600}
          />
           </div>

      </section>
      <section className='grid w-full gap-8 home-section'>
        <div className='w-full md:col-span-1 xl:col-span-1'>
          <TradingViewWidget
          title={""}
          scriptUrl={`${baseUrl}timeline.js`}
          config={TOP_STORIES_WIDGET_CONFIG}
          className='custom-chart cursor-pointer '
          height={600}
          /> </div>
           <div className='w-full md:col-span-1 xl:col-span-2'>
            <TradingViewWidget
          title={""}
          scriptUrl={`${baseUrl}market-quotes.js`}
          config={MARKET_DATA_WIDGET_CONFIG}
          className='custom-chart cursor-pointer border'
          height={600}
          />
           </div>

      </section>
    </div>
  )
}

export default Home
