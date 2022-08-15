var formEl = $('#stock-picker');
var firstNameEl = $('input[name="first-name"]');
var lastNameEl = $('input[name="last-name"]');
var emailEl = $('input[name="email"]');
var istatusEl = $('input[name="istatus"]');

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

      if (selected = 'dividend') {
        fetch('https://api.polygon.io/v3/reference/dividends?apiKey=hJomrI4jg8HGGK5i79q8up5jnVCEcpD9', { 
          method: 'GET',
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
          });
        }
      else if (selected = 'splits') {
        fetch('https://api.polygon.io/v3/reference/splits?apiKey=hJomrI4jg8HGGK5i79q8up5jnVCEcpD9', {
          method: 'GET',
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
          });
        }
      else if (selected = 'gainers') {
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
      else if (selected = 'financials') {
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
      else if (selected = 'us_exchange') {
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
  // Clear input fields
  $('input[type="text"]').val('');
  $('input[type="email"]').val('');
  $('input[type="data"]').val('');
  $('input[type="response"]').val('');
  $('input[type="checkbox"]').prop('checked', false);
}

// Submit event on the form
formEl.on('submit', handleFormSubmit);




