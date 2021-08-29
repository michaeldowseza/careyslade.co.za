window.addEventListener('load', function () {
  function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }

  function sendData() {
    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const FD = new FormData(form);

    // Define what happens on successful data submission
    XHR.addEventListener('load', function () {
      clearForm();
      alert('Thank you for your submission!');
    });

    // Define what happens in case of error
    XHR.addEventListener('error', function (event) {
      clearForm();
      alert('Thank you for your submission!');
    });

    // Set up our request
    XHR.open(
      'POST',
      'https://docs.google.com/forms/d/e/1FAIpQLSfZn_7MUMIDmUSXNn7JqIh0qSRewuVCcSq1Hb3XVLeKT0wl_g/formResponse?embedded=true'
    );

    // The data sent is what the user provided in the form
    XHR.send(FD);
  }

  // Access the form element...
  const form = document.getElementById('form');

  // ...and take over its submit event.
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    sendData();
  });
});
