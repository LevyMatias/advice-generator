const fetchAdvice = () => {
  const randomNumber = Math.floor(Math.random() * 200);
  const apiUrl = `https://api.adviceslip.com/advice/${randomNumber}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        document.querySelector('.advice').textContent = `"${data.slip.advice}"`;
        document.querySelector('#advice-id').textContent = `#${data.slip.id}`;
    })
    .catch(error => {
        console.log(error);
    });
}

window.onload = fetchAdvice();
document.querySelector('.advice-btn').addEventListener('click', fetchAdvice);