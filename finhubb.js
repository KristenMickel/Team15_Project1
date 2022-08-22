apiKey = "token=cbqpkeaad3ibee6m2hlg"
tickerp="cfg"
low="52WeekLow"
de="totalDebt/totalEquityAnnual"

async function getdata(){
    console.log(tickerp)
    document.getElementById("header").style.display="none";
    document.getElementById("stock-picker").style.display="none";
    document.getElementById("results").style.display="none";
    profiledata = await fetch('https://finnhub.io/api/v1/stock/profile2?symbol='+tickerp+'&'+apiKey)
    metricdata = await fetch('https://finnhub.io/api/v1/stock/metric?symbol='+tickerp+'&metric=all&'+apiKey)
    pulledData = await profiledata.json() 
    metrics = await metricdata.json() 
    console.log(metrics)
    console.log(pulledData)
    $("#frame").append("<div id= card class='grid w-4/5 rounded-md items-center justify-items-center border shadow-2xl grid-cols-2 grid-rows-6'>"+
    "<div id= xOut class= 'h-7 flex order-1 col-span-2 text-right'><button id=close>X</button></div>"+
    "<div id= header class= 'h-7 order-2  col-span-2 text-lg font-bold text-center'>"+pulledData.name +"</div>"+
    "<div id= logo class= 'p-2 grid col-span-2 order-3' ><img id='logor' src="+pulledData.logo+"></img></div>"+
    "<div id= header class= 'order-4 border-b-4 w-11/12 border-black-600 col-span-2 text-center'>Key Statistics</div>"+
   
   "<table  class='order-5 h-4 w-5/6 p-2 content-between' >"+
   "<tbody >"+
   "<tr class= ' text-left border-b-2'>"+
   "<td class= 'text-lg font-bold'>Shareholder Equity</td>"+
   "<tr class= ' text-left border-b-2'>"+
   "<td>Shares Outstanding</td>"+
   "<td class= ' text-right' > "+Math.round(pulledData.shareOutstanding)+"M </td>"+
   "</tr>"+
   "<tr class= border-b-2 >"+
   "<td>Market Cap</td>"+
   "<td class= ' text-right'>"+Math.round(pulledData.marketCapitalization)+"</td>"+
   "</tr>"+
   "<tr class= border-b-2>"+
   "<td >Return on Equity(TTM)</td>"+
   "<td class= ' text-right'>"+metrics.metric.roeTTM+"%</td>"+
   "</tr>"+
   "<tr class= border-b-2>"+
   "<td>Total Debt/Total Equity</td>"+
   "<td class= ' text-right'>"+metrics.series.quarterly.totalDebtToEquity[0].v+"</td>"+
   "</tr></tbody></table>"+

   "<table  class='order-6 h-4 w-5/6 p-2' >"+
   "<tbody >"+
   "<tr class= ' text-left border-b-2'>"+
   "<td class= 'text-lg font-bold'>Financial Strength (MRQ)</td>"+
   "<tr class= ' text-left border-b-2'>"+
   "<td>Shares Outstanding</td>"+
   "<td class= ' text-right' > "+Math.round(pulledData.shareOutstanding)+"M </td>"+
   "</tr>"+
   "<tr class= border-b-2 >"+
   "<td>Market Cap</td>"+
   "<td class= ' text-right'>"+Math.round(pulledData.marketCapitalization)+"</td>"+
   "</tr>"+
   "<tr class= border-b-2>"+
   "<td >Return on Equity(TTM)</td>"+
   "<td class= ' text-right'>"+metrics.metric.roeTTM+"%</td>"+
   "</tr>"+
   "<tr class= border-b-2>"+
   "<td>Total Debt/Total Equity</td>"+
   "<td class= ' text-right'>"+metrics.series.quarterly.totalDebtToEquity[0].v+"</td>"+
   "</tr></tbody></table>"+

   "<table  class='order-7 h-4 w-5/6 p-2' >"+
   "<tbody >"+
   "<tr class= ' text-left border-b-2'>"+
   "<td class= 'text-lg font-bold'>Valuation (MRQ)</td>"+
   "<tr class= ' text-left border-b-2'>"+
   "<td>Shares Outstanding</td>"+
   "<td class= ' text-right' > "+Math.round(pulledData.shareOutstanding)+"M </td>"+
   "</tr>"+
   "<tr class= border-b-2 >"+
   "<td>Market Cap</td>"+
   "<td class= ' text-right'>"+Math.round(pulledData.marketCapitalization)+"</td>"+
   "</tr>"+
   "<tr class= border-b-2>"+
   "<td>Return on Equity(TTM)</td>"+
   "<td class= ' text-right'>"+metrics.metric.roeTTM+"%</td>"+
   "</tr>"+
   "<tr class= border-b-2>"+
   "<td>Total Debt/Total Equity</td>"+
   "<td class= ' text-right'>"+metrics.series.quarterly.totalDebtToEquity[0].v+"</td>"+
   "</tr></tbody></table>"+

   "<table  class='order-8 h-5 w-5/6 p-2' >"+
   "<tbody >"+
   "<tr class= ' text-left border-b-2'>"+
   "<td class= 'text-lg font-bold' >Profitability (TTM)</td>"+
   "<tr class= ' text-left border-b-2'>"+
   "<td>Shares Outstanding</td>"+
   "<td class= ' text-right' > "+Math.round(pulledData.shareOutstanding)+"M </td>"+
   "</tr>"+
   "<tr class= border-b-2 >"+
   "<td>Market Cap</td>"+
   "<td class= ' text-right'>"+Math.round(pulledData.marketCapitalization)+"</td>"+
   "</tr>"+
   "<tr class= border-b-2>"+
   "<td>Return on Equity(TTM)</td>"+
   "<td class= ' text-right'>"+metrics.metric.roeTTM+"%</td>"+
   "</tr>"+
   "<tr class= border-b-2>"+
   "<td>Total Debt/Total Equity</td>"+
   "<td class= ' text-right'>"+metrics.series.quarterly.totalDebtToEquity[0].v+"</td>"+
   "</tr></tbody></table>"+

    "</div>"+
    "</div>")

    document.getElementById("close").addEventListener("click",closeOut)    

}   

function closeOut(){
    $("#card").remove()
    document.getElementById("results").style.display="grid";



}

document.getElementById("close2").addEventListener("click",closeOut2)
function closeOut2(){
    $(".profileBtn").remove()
    document.getElementById("results").style.display="none";
    document.getElementById("header").style.display="grid";
    document.getElementById("stock-picker").style.display="grid";
}