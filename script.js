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

const copyToClipboard = async () => {
    const adviceText = document.querySelector('.advice').textContent;
    const btnCopy = document.querySelector('.btn-copy');
    const originalIcon = btnCopy.innerHTML;
    try {
      await navigator.clipboard.writeText(adviceText);
      btnCopy.innerHTML = '<i class="fa-solid fa-check"></i>'; // display the check icon

      setTimeout(() => {
        btnCopy.innerHTML = originalIcon;
      }, 2000); // Restores the original icon

    } catch (error) {
      alert('Erro ao copiar para a área de transferência:'+ error);
    }
};

document.querySelector('.btn-copy').addEventListener('click', copyToClipboard);