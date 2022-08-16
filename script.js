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
    if (selected[e] === 'dividend') {
      fetch('https://api.polygon.io/v3/reference/dividends?ex_dividend_date=2022-08-01&pay_date>2022-08-15&limit=50&apiKey=hJomrI4jg8HGGK5i79q8up5jnVCEcpD9', {   
        method: 'GET',
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          //console.log(data);
          //console.log(data.results);
            for (i = 0; i < data.results.length; i++) {
              tickers.push(data.results[i].ticker)
            }
            //console.log(tickers)
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




