  const form = document.getElementById('myForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
    

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      resultDiv.innerHTML = `<strong>Name:</strong> ${name} <br><strong>Email:</strong> ${email}`;

      form.reset();
    });