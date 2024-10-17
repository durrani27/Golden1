document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();


  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const suggestion = document.getElementById('suggestion').value;


  console.log(`Feedback received from ${name} (${email}): ${suggestion}`);


  document.getElementById('thankYouMessage').style.display = 'block';


  document.getElementById('feedbackForm').reset();
});
