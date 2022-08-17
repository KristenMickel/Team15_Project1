//TO DO: 
//1). ADD BOTH FOR LOOPS TO EVERY ELSE IF - LEAVE AS LINK BC IT MIGHT WORK TO HOOK UP WITH FINHUBB RETURN
//2). FIGURE OUT CSS FRAMEWORK
//3). FIGURE OUT LOCAL STORAGE
//4). ADD COMMENTS INTO ALL SCRIPTS
//5). REFER TO MODULE 6 ACTIVITY 3

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
                  for (var j = 0; j < tickersList.length; j++) {
                    // Creating elements, tablerow, tabledata, and anchor
                    var createTableRow = document.createElement('tr');
                    var tableData = document.createElement('td');
                    //var link = document.createElement('a');
                    var link = document.createElement('span');
                    for (var k = 0; k < tickersList.length; k++) {             
                      //LINK TO THE API CALLS FOR EACH TICKER FROM FINHUB
                      // Setting the text of link and the href of the link
                      //link.textContent = tickersList[j].html_url;
                      //link.href = tickersList[j].html_url;
                      link.textContent = tickersList[j];
                      link.href = tickersList[j];
              
                      // Appending the link to the tabledata and then appending the tabledata to the tablerow
                      // The tablerow then gets appended to the tablebody
                      //tableData.appendChild(link);
                      //tableData.replaceChild(tickersList[k-1], tickersList[k]);
                      createTableRow.appendChild(tableData);
                      tableBody.appendChild(createTableRow);
                    }
                  }
            }
            console.log(tickers)
            //document.getElementById(.Results).innerHTML = tickers
        });
      }
      //fetchButton.addEventListener('click', getApi);
    else if (selected[e] === 'splits') {
      fetch('https://api.polygon.io/v3/reference/splits?execution_date>2022-08-15&apiKey=hJomrI4jg8HGGK5i79q8up5jnVCEcpD9', {
        method: 'GET',
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
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
        });
      }
    else if (selected[e] === 'financials') {
      fetch('https://api.polygon.io/vX/reference/financials?apiKey=hJomrI4jg8HGGK5i79q8up5jnVCEcpD9', {
        method: 'GET',
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        });
      }
    else if (selected[e] === 'us_exchange') {
      fetch('https://api.polygon.io/v3/reference/exchanges?asset_class=stocks&locale=us&apiKey=hJomrI4jg8HGGK5i79q8up5jnVCEcpD9', {
        method: 'GET',
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
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




