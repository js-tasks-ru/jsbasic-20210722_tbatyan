function hideSelf() {
  let neededButton = document.querySelector(".hide-self-button");
  neededButton.addEventListener('click', () => {
    neededButton.hidden = true
  });
}
