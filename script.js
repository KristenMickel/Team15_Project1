//TO DO: 
//1). ADD BOTH FOR LOOPS TO EVERY ELSE IF - LEAVE AS LINK BC IT MIGHT WORK TO HOOK UP WITH FINHUBB RETURN
//2). FIGURE OUT CSS FRAMEWORK
//3). FIGURE OUT LOCAL STORAGE
//4). ADD COMMENTS INTO ALL SCRIPTS

var formEl = $('#stock-picker');
var firstNameEl = $('input[name="first-name"]');
var lastNameEl = $('input[name="last-name"]');
var emailEl = $('input[name="email"]');
var istatusEl = $('input[name="istatus"]');
var tickers = [];

function handleFormSubmit(event) {
  event.preventDefault();

  console.log('First Name:', firstNameEl.val());
  console.log('Last Name:', lastNameEl.val());
  console.log('Email:', emailEl.val());
  console.log('Investment Status:', istatusEl.val());

  var checkedEl = $('input:checked');
  var selected = [];

  $.each(checkedEl, function () {
    selected.push($(this).val());
  });

  console.log('Choices: ', selected);
  // a loop to loop over all the options

  for (var e = 0; e < selected.length; e++) {
    var option = selected[e]
    var tableBody = document.getElementById('repo-table');
    var fetchButton = document.getElementById('fetch-button');
    if (selected[e] === 'dividend') {
      fetch('https://api.polygon.io/v3/reference/dividends?ex_dividend_date=2022-08-01&pay_date>2022-08-15&limit=50&apiKey=hJomrI4jg8HGGK5i79q8up5jnVCEcpD9', {   
        method: 'GET',
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          console.log(data.results);
            for (var i = 0; i < data.results.length; i++) {
              //console.log(data.results[i].ticker)
              tickers.push(data.results[i].ticker)
                var tickersList = [tickers]
                var newTickersList = localStorage.getItem("tickersList");
                  for (var j = 0; j < tickersList.length; j++) {
                    // Creating elements, tablerow, tabledata, and anchor
                    var createTableRow = document.createElement('tr');
                    var tableData = document.createElement('td');
                    //var link = document.createElement('a');
                    var link = document.createElement('p');
            
                    //LINK TO THE API CALLS FOR EACH TICKER FROM FINHUB
                    //Setting the text of link and the href of the link
                    //link.textContent = tickersList[j].html_url;
                    //link.href = tickersList[j].html_url;
                    link.textContent = tickersList[j];
                    link.href = tickersList[j];
            
                    // Appending the link to the tabledata and then appending the tabledata to the tablerow
                    // The tablerow then gets appended to the tablebody
                    //APPEND CHILD MIGHT BE THE PROBLEM
                    tableData.appendChild(link);
                    createTableRow.appendChild(tableData);
                    tableBody.appendChild(createTableRow);
                    localStorage.setItem("newTickersList", newTickersList);
                  }
            }
            console.log(tickers)
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
          console.log(data);
          console.log(data.results);
            for (var i = 0; i < data.results.length; i++) {
              //console.log(data.results[i].ticker)
              tickers.push(data.results[i].ticker)
                var tickersList = [tickers]
                var newTickersList = localStorage.getItem("tickersList");
                  for (var j = 0; j < tickersList.length; j++) {
                    // Creating elements, tablerow, tabledata, and anchor
                    var createTableRow = document.createElement('tr');
                    var tableData = document.createElement('td');
                    //var link = document.createElement('a');
                    var link = document.createElement('p');
            
                    //LINK TO THE API CALLS FOR EACH TICKER FROM FINHUB
                    // Setting the text of link and the href of the link
                    //link.textContent = tickersList[j].html_url;
                    //link.href = tickersList[j].html_url;
                    link.textContent = tickersList[j];
                    link.href = tickersList[j];
            
                    // Appending the link to the tabledata and then appending the tabledata to the tablerow
                    // The tablerow then gets appended to the tablebody
                    //APPEND CHILD MIGHT BE THE PROBLEM
                    tableData.appendChild(link);
                    createTableRow.appendChild(tableData);
                    tableBody.appendChild(createTableRow);
                    localStorage.setItem("newTickersList", newTickersList);
                  }
            }
            console.log(tickers)
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
          console.log(data);
          console.log(data.results);
            for (var i = 0; i < data.results.length; i++) {
              //console.log(data.results[i].ticker)
              tickers.push(data.results[i].ticker)
                var tickersList = [tickers]
                var newTickersList = localStorage.getItem("tickersList");
                  for (var j = 0; j < tickersList.length; j++) {
                    // Creating elements, tablerow, tabledata, and anchor
                    var createTableRow = document.createElement('tr');
                    var tableData = document.createElement('td');
                    //var link = document.createElement('a');
                    var link = document.createElement('p');
            
                    //LINK TO THE API CALLS FOR EACH TICKER FROM FINHUB
                    // Setting the text of link and the href of the link
                    //link.textContent = tickersList[j].html_url;
                    //link.href = tickersList[j].html_url;
                    link.textContent = tickersList[j];
                    link.href = tickersList[j];
            
                    // Appending the link to the tabledata and then appending the tabledata to the tablerow
                    // The tablerow then gets appended to the tablebody
                    //APPEND CHILD MIGHT BE THE PROBLEM
                    tableData.appendChild(link);
                    createTableRow.appendChild(tableData);
                    tableBody.appendChild(createTableRow);
                    localStorage.setItem("newTickersList", newTickersList);
                  }
            }
            console.log(tickers)
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
          console.log(data);
          console.log(data.results);
            for (var i = 0; i < data.results.length; i++) {
              //console.log(data.results[i].ticker)
              tickers.push(data.results[i].ticker)
                var tickersList = [tickers]
                var newTickersList = localStorage.getItem("tickersList");
                  for (var j = 0; j < tickersList.length; j++) {
                    // Creating elements, tablerow, tabledata, and anchor
                    var createTableRow = document.createElement('tr');
                    var tableData = document.createElement('td');
                    //var link = document.createElement('a');
                    var link = document.createElement('p');
            
                    //LINK TO THE API CALLS FOR EACH TICKER FROM FINHUB
                    // Setting the text of link and the href of the link
                    //link.textContent = tickersList[j].html_url;
                    //link.href = tickersList[j].html_url;
                    link.textContent = tickersList[j];
                    link.href = tickersList[j];
            
                    // Appending the link to the tabledata and then appending the tabledata to the tablerow
                    // The tablerow then gets appended to the tablebody
                    //APPEND CHILD MIGHT BE THE PROBLEM
                    tableData.appendChild(link);
                    createTableRow.appendChild(tableData);
                    tableBody.appendChild(createTableRow);
                    localStorage.setItem("newTickersList", newTickersList);
                  }
            }
            console.log(tickers)
            //document.getElementById(.Results).innerHTML = tickers
        });
      }
    else if (selected[e] === 'market_holidays') {
      fetch('https://api.polygon.io/v1/marketstatus/upcoming?apiKey=hJomrI4jg8HGGK5i79q8up5jnVCEcpD9', {
        method: 'GET',
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          console.log(data.results);
            for (var i = 0; i < data.results.length; i++) {
              //console.log(data.results[i].ticker)
              date.push(data.results[i].date)
                var datesList = [date]
                var newDatesList = localStorage.getItem("datesList");
                  for (var j = 0; j < datesList.length; j++) {
                    // Creating elements, tablerow, tabledata, and anchor
                    var createTableRow = document.createElement('tr');
                    var tableData = document.createElement('td');
                    //var link = document.createElement('a');
                    var link = document.createElement('p');
            
                    //LINK TO THE API CALLS FOR EACH TICKER FROM FINHUB
                    // Setting the text of link and the href of the link
                    //link.textContent = tickersList[j].html_url;
                    //link.href = tickersList[j].html_url;
                    link.textContent = datesList[j];
                    link.href = datesList[j];
            
                    // Appending the link to the tabledata and then appending the tabledata to the tablerow
                    // The tablerow then gets appended to the tablebody
                    //APPEND CHILD MIGHT BE THE PROBLEM
                    tableData.appendChild(link);
                    createTableRow.appendChild(tableData);
                    tableBody.appendChild(createTableRow);
                    localStorage.setItem("newDatesList", newDatesList);
                  }
            }
            console.log(date)
            //document.getElementById(.Results).innerHTML = tickers
        });
      }
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




