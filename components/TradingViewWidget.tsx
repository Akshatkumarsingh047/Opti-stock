// TradingViewWidget.jsx
"use client"
import useTradingViewWidgets from '@/hooks/useTradingViewWidgets';
import { cn } from '@/lib/utils';
import { div } from 'motion/react-client';
import React, { useEffect, useRef, memo } from 'react';


interface TradingViewWidgetProps{
  title?:string,
  config:Record<string,unknown>,
  height?:number,
  className:string,
  scriptUrl:string
}

function TradingViewWidget({title,height,scriptUrl,config,className}:TradingViewWidgetProps) {
  const containerRef = useTradingViewWidgets (scriptUrl,height,config);


  return (
   <div className='w-full '>
    {title&&<h3 className='font-semibold text-2xl text-gray-100 mb-5  text-yellow-500'>{title}</h3>}
     <div className={cn("tradingview-widget-container",className)} ref={containerRef} >
      <div className="tradingview-widget-container__widget" style={{ height, width: "100%" }}/>
    
    </div>
   </div>
  );
}

export default TradingViewWidget;
