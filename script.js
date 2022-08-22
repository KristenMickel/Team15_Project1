//Declaring key variables for storing user information & ticker results
var formEl = $('#stock-picker');
var firstNameEl = $('input[name="first-name"]');
var lastNameEl = $('input[name="last-name"]');
var emailEl = $('input[name="email"]');
var istatusEl = $('input[name="istatus"]');
var tickers = [];

//Main function which executes calls to the APIs & returns the API results
function handleFormSubmit(event) {
  //Preventing default behavior of user info being cleared
  event.preventDefault();
  //Displaying user info input
  var checkedEl = $('input:checked');
  var selected = [];
  $.each(checkedEl, function () {
    selected.push($(this).val());
  });
  //Looping through the results of the dividends API & appending them to the table for display
  for (var e = 0; e < selected.length; e++) {
    var option = selected[e]
    var tableBody = document.getElementById('repo-table');
    var fetchButton = document.getElementById('fetch-button');
    //If statement to fetch the API data for the dividends API
    if (selected[e] === 'dividend') { 
      fetch('https://api.polygon.io/v3/reference/dividends?ex_dividend_date=2022-08-18&limit=10&apiKey=hJomrI4jg8HGGK5i79q8up5jnVCEcpD9', {   
        method: 'GET',
      })
      .then(function (response) {
        return response.json();})
        .then(function (data) {
          //Combining all of the results into a single list & taking first 10 results
          var finalList = []; 
          console.log(data)
          for (var x = 0; x < data.results.length; x++) {
            finalList.push(data.results[x].ticker)
            var createTableRow = document.createElement('tr');
                    var tableData = document.createElement('td');
                    var link = document.createElement('button');


                    createTableRow.setAttribute("class", "profileBtn text-center")
                    createTableRow.setAttribute("id", "tableRow")
                    link.setAttribute("id", "profileButton")
                    link.setAttribute("name",data.results[x].ticker)
                    link.setAttribute("onclick", "viewProfile()")
                    link.textContent = data.results[x].ticker ;            
                    tableData.appendChild(link);
                    createTableRow.appendChild(tableData);
                    tableBody.appendChild(createTableRow);
          }
          //Saves the results into local storage, converting from an object to a string first
          localStorage.setItem("newTickersList", JSON.stringify(finalList));
        });
    }
    //If not the dividends API, then fetches results from the splits API
    else if (selected[e] === 'splits') {
      fetch('https://api.polygon.io/v3/reference/splits?execution_date>2022-08-15&apiKey=hJomrI4jg8HGGK5i79q8up5jnVCEcpD9', {
        method: 'GET',
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var finalList = []; 
          for (var x = 0; x < data.results.length; x++) {
            finalList.push(data.results[x].ticker)
            var createTableRow = document.createElement('tr');
                    var tableData = document.createElement('td');

                    var link = document.createElement('button');

                    createTableRow.setAttribute("class", "profileBtn text-center")
                    createTableRow.setAttribute("id", "tableRow")
                    link.setAttribute("id", "profileButton")
                    link.setAttribute("name",data.results[x].ticker)
                    link.setAttribute("onclick", "viewProfile()")


                    link.textContent = data.results[x].ticker ;
                    tableData.appendChild(link);
                    createTableRow.appendChild(tableData);
                    tableBody.appendChild(createTableRow);
          }
          localStorage.setItem("newTickersList", JSON.stringify(finalList));
        });
    }
    //If not the dividends or splits API, then fetches results from the price gainers API
    else if (selected[e] === 'gainers') {
      fetch('https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?apiKey=hJomrI4jg8HGGK5i79q8up5jnVCEcpD9', {
        method: 'GET',
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var finalList = []; 
          for (var x = 0; x < data.tickers.length; x++) {
            finalList.push(data.tickers[x].ticker)
            var createTableRow = document.createElement('tr');
                    var tableData = document.createElement('td');

                    var link = document.createElement('button');

                    createTableRow.setAttribute("class", "profileBtn text-center")
                    createTableRow.setAttribute("id", "tableRow")
                    link.setAttribute("id", "profileButton")
                    link.setAttribute("name",data.results[x].ticker)
                    link.setAttribute("onclick", "viewProfile()");


                    link.textContent = data.tickers[x].ticker ;
                    tableData.appendChild(link);
                    createTableRow.appendChild(tableData);
                    tableBody.appendChild(createTableRow);
          }
          localStorage.setItem("newTickersList", JSON.stringify(finalList));
        });
    }
    //If not the dividends or splits or gainers API, then fetches results from the price losers API
    else if (selected[e] === 'losers') {
      fetch('https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/losers?apiKey=hJomrI4jg8HGGK5i79q8up5jnVCEcpD9', {
        method: 'GET',
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var finalList = []; 
          for (var x = 0; x < data.tickers.length; x++) {
            finalList.push(data.tickers[x].ticker)
            console.log(finalList)


            var createTableRow = document.createElement('tr');
                    var tableData = document.createElement('td');
                    var link = document.createElement('button');
                    createTableRow.setAttribute("class", "profileBtn text-center")
                    createTableRow.setAttribute("id", "tableRow")
                    link.setAttribute("id", "profileButton")
                    link.setAttribute("name",data.results[x].ticker)
                    link.setAttribute("onclick", "viewProfile()");
                    link.textContent = data.tickers[x].ticker ;
                    tableData.appendChild(link);
                    createTableRow.appendChild(tableData);
                    tableBody.appendChild(createTableRow);
          }
          localStorage.setItem("newTickersList", JSON.stringify(finalList));
        });
    }
  }
  
  //Clearing the input fields
  $('input[type="text"]').val('');
  $('input[type="email"]').val('');
  $('input[type="data"]').val('');
  $('input[type="response"]').val('');
  $('input[type="checkbox"]').prop('checked', false);
  document.getElementById("header").style.display="none";
  document.getElementById("stock-picker").style.display="none";
  document.getElementById("results").style.display="grid";
}

//Working with the Finnhub API data
formEl.on('submit', handleFormSubmit);
function viewProfile(){
  console.log(event.target.name)
  tickerp = event.target.name
  console.log(tickerp)
  getdata()
}