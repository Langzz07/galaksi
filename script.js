const scriptURL = 'https://script.google.com/macros/s/AKfycbxtzT_ZpKG1GOIsa-_MjIdUK17ZoFXUo98qBoDvIZ12omuMSgqIiVRF207f5BFv6diQSg/exec'

const form = document.forms['data-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})