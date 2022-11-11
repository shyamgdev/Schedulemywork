export default function snackbar(props) {
  if (document.querySelector('#snackbar')) {
    document.querySelector('#snackbar').remove();
  }

  const snackbar = `
    <div id="snackbar">
      <p>${props}</p>
    </div>`;
  let container = document.getElementById('root');
  container.insertAdjacentHTML('beforeend', snackbar);
}