//TO DO: 
//2). FIGURE OUT HOW TO ADD FINHUB API RESULTS AS TICKER LINKS
//2). FIGURE OUT CSS FRAMEWORK
//4). ADD COMMENTS INTO ALL SCRIPTS

var formEl = $('#stock-picker');
var firstNameEl = $('input[name="first-name"]');
var lastNameEl = $('input[name="last-name"]');
var emailEl = $('input[name="email"]');
var istatusEl = $('input[name="istatus"]');
var tickers = [];


function handleFormSubmit(event) {
  
  event.preventDefault();
  var checkedEl = $('input:checked');
  var selected = [];

  $.each(checkedEl, function () {
    selected.push($(this).val());
  });
  // a loop to loop over all the options

  for (var e = 0; e < selected.length; e++) {
    var option = selected[e]
    var tableBody = document.getElementById('repo-table');
    var fetchButton = document.getElementById('fetch-button');

    if (selected[e] === 'dividend') { 
      fetch('https://api.polygon.io/v3/reference/dividends?ex_dividend_date=2022-08-18&limit=10&apiKey=hJomrI4jg8HGGK5i79q8up5jnVCEcpD9', {   
        method: 'GET',
      })
      .then(function (response) {
        return response.json();})
        .then(function (data) {
          // combine all lists into a single list and then take the first 50 items
          var finalList = []; 
          console.log(data)
          for (var x = 0; x < data.results.length; x++) {
            finalList.push(data.results[x].ticker)
            
            var createTableRow = document.createElement('tr');
                    var tableData = document.createElement('td');
                    //var link = document.createElement('a');
                    var link = document.createElement('button');
                    link.setAttribute("id", "profileButton")
                    link.setAttribute("name",data.results[x].ticker)
                    link.setAttribute("onclick", "viewProfile()")
                    
                    
                    
            
                    //LINK TO THE API CALLS FOR EACH TICKER FROM FINHUB
                    //Setting the text of link and the href of the link
                    //link.textContent = tickersList[j].html_url;
                    //link.href = tickersList[j].html_url;
                    link.textContent = data.results[x].ticker ;
    
                    //link.href = tickersList[j];
            
                    // Appending the link to the tabledata and then appending the tabledata to the tablerow
                    // The tablerow then gets appended to the tablebody
                    tableData.appendChild(link);
                    createTableRow.appendChild(tableData);
                    tableBody.appendChild(createTableRow);
          }
          // get the first 50 items from finalList
          localStorage.setItem("newTickersList", JSON.stringify(finalList)); // set will replace what's already there, look at Module 6 Exercise 23

          //document.getElementById(.Results).innerHTML = tickers
        });
      }
    else if (selected[e] === 'splits') {
      fetch('https://api.polygon.io/v3/reference/splits?execution_date>2022-08-15&apiKey=hJomrI4jg8HGGK5i79q8up5jnVCEcpD9', {
        method: 'GET',
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {

          // combine all lists into a single list and then take the first 50 items

          var finalList = []; 

          for (var x = 0; x < data.results.length; x++) {
            finalList.push(data.results[x].ticker)
            
            var createTableRow = document.createElement('tr');
                    var tableData = document.createElement('td');
                    //var link = document.createElement('a');
                    var link = document.createElement('p');
                   
                   

            
                    //LINK TO THE API CALLS FOR EACH TICKER FROM FINHUB
                    //Setting the text of link and the href of the link
                    //link.textContent = tickersList[j].html_url;
                    //link.href = tickersList[j].html_url;
                    link.textContent = data.results[x].ticker ;
                    
            
                    // Appending the link to the tabledata and then appending the tabledata to the tablerow
                    // The tablerow then gets appended to the tablebody
                    tableData.appendChild(link);
                    createTableRow.appendChild(tableData);
                    tableBody.appendChild(createTableRow);
          }
          // get the first 50 items from finalList
    
          localStorage.setItem("newTickersList", JSON.stringify(finalList)); // set will replace what's already there, look at Module 6 Exercise 23
          //document.getElementById(.Results).innerHTML = tickers
        });
      }
    else if (selected[e] === 'gainers') {
      fetch('https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?apiKey=hJomrI4jg8HGGK5i79q8up5jnVCEcpD9', {
        method: 'GET',
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          
          // combine all lists into a single list and then take the first 50 items

          var finalList = []; 

          for (var x = 0; x < data.tickers.length; x++) {
            finalList.push(data.tickers[x].ticker)
            
            var createTableRow = document.createElement('tr');
                    var tableData = document.createElement('td');
                    //var link = document.createElement('a');
                    var link = document.createElement('p');
            
                    //LINK TO THE API CALLS FOR EACH TICKER FROM FINHUB
                    //Setting the text of link and the href of the link
                    //link.textContent = tickersList[j].html_url;
                    //link.href = tickersList[j].html_url;
                    link.textContent = data.tickers[x].ticker ;
                    //link.href = tickersList[j];
            
                    // Appending the link to the tabledata and then appending the tabledata to the tablerow
                    // The tablerow then gets appended to the tablebody
                    tableData.appendChild(link);
                    createTableRow.appendChild(tableData);
                    tableBody.appendChild(createTableRow);
          }
          // get the first 50 items from finalList
          localStorage.setItem("newTickersList", JSON.stringify(finalList)); // set will replace what's already there, look at Module 6 Exercise 23

          //document.getElementById(.Results).innerHTML = tickers
        });
      }
    else if (selected[e] === 'losers') {
      fetch('https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/losers?apiKey=hJomrI4jg8HGGK5i79q8up5jnVCEcpD9', {
        method: 'GET',
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          // combine all lists into a single list and then take the first 50 items

          var finalList = []; 

          for (var x = 0; x < data.tickers.length; x++) {
            finalList.push(data.tickers[x].ticker)
            
            var createTableRow = document.createElement('tr');
                    var tableData = document.createElement('td');
                    //var link = document.createElement('a');
                    var link = document.createElement('p');
            
                    //LINK TO THE API CALLS FOR EACH TICKER FROM FINHUB
                    //Setting the text of link and the href of the link
                    //link.textContent = tickersList[j].html_url;
                    //link.href = tickersList[j].html_url;
                    link.textContent = data.tickers[x].ticker ;
                    //link.href = tickersList[j];
            
                    // Appending the link to the tabledata and then appending the tabledata to the tablerow
                    // The tablerow then gets appended to the tablebody
                    tableData.appendChild(link);
                    createTableRow.appendChild(tableData);
                    tableBody.appendChild(createTableRow);
          }
          // get the first 50 items from finalList
          
          localStorage.setItem("newTickersList", JSON.stringify(finalList)); // set will replace what's already there, look at Module 6 Exercise 23
          
          //document.getElementById(.Results).innerHTML = tickers
        });
      }
    /*else if (selected[e] === 'market_holidays') {
      fetch('https://api.polygon.io/v1/marketstatus/upcoming?apiKey=hJomrI4jg8HGGK5i79q8up5jnVCEcpD9', {
        method: 'GET',
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          console.log(data.results);
          // combine all lists into a single list and then take the first 50 items

          var finalList = []; 

          for (var x = 0; x < data.date.length; x++) {
            finalList.push(data.date[x].ticker)
            
            var createTableRow = document.createElement('tr');
                    var tableData = document.createElement('td');
                    //var link = document.createElement('a');
                    var link = document.createElement('p');
            
                    //LINK TO THE API CALLS FOR EACH TICKER FROM FINHUB
                    //Setting the text of link and the href of the link
                    //link.textContent = tickersList[j].html_url;
                    //link.href = tickersList[j].html_url;
                    link.textContent = data.date[x].ticker ;
                    //link.href = tickersList[j];
            
                    // Appending the link to the tabledata and then appending the tabledata to the tablerow
                    // The tablerow then gets appended to the tablebody
                    tableData.appendChild(link);
                    createTableRow.appendChild(tableData);
                    tableBody.appendChild(createTableRow);
          }
          // get the first 50 items from finalList
          console.log("####", finalList)
          localStorage.setItem("newTickersList", JSON.stringify(finalList)); // set will replace what's already there, look at Module 6 Exercise 23
          console.log(tickers)
          //document.getElementById(.Results).innerHTML = tickers
        });
      }*/
      
  }
  
  // Clear input fields
  $('input[type="text"]').val('');
  $('input[type="email"]').val('');
  $('input[type="data"]').val('');
  $('input[type="response"]').val('');
  $('input[type="checkbox"]').prop('checked', false);
}

// Submit event on the form
formEl.on('submit', handleFormSubmit);

function viewProfile(){
  console.log(event.target.name)
  tickerp = event.target.name
  console.log(tickerp)
  getdata()
}


