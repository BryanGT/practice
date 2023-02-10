(() => {
  /**
   * Here the script to run in the browser Console
   * This works on this page https://littlesleepies.com/products/rust-rainbows-bamboo-viscose-zippy
   */

  function enableMessage() {
    if (!document.querySelector(".message-practice")) {
      const elementPrice = document.getElementById("afterpay-messaging-widget");
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message-practice");
      messageDiv.style.backgroundColor = "#b2fce4";
      messageDiv.style.padding = "5px";
      messageDiv.innerHTML = "Add 2 of this product and the third one is free!";
      elementPrice.parentNode.insertBefore(
        messageDiv,
        elementPrice.nextSibling
      );
      const parentMessage = document.querySelector('.message-practice').parentElement;
      parentMessage.style.flexWrap = 'wrap';
    }
  }

  function changeMessage(quantity) {
    const messageElement = document.querySelector(".message-practice");
    if (messageElement) {
      if (quantity === "1") {
        messageElement.innerHTML =
          "Add 2 of this product and the third one is free!";
      }

      if (quantity === "2") {
        messageElement.innerHTML = "Add another one free to your cart.";
      }

      if (quantity === "3") {
        messageElement.innerHTML = "Congrats! add to cart now!";
      }

      if (quantity > "3") {
        messageElement.style.display = "none";
      }

      if (quantity <= "3") {
        messageElement.style.display = "block";
      }
    }
  }

  let selectSize = document.querySelector(".js-pdp-hidden-select");
  selectSize.onchange = function () {
    const opt = this.options[this.selectedIndex];
    let size = opt.getAttribute("data-option-1");
    const arraySizes = ["18-24 months", "2T", "3T"];

    if (size) {
      if (arraySizes.includes(size)) {
        enableMessage();
      }
    }
  };

  let buttonElem = document.querySelectorAll(".js-pdp-quantity-button");
  for (let i = 0; i < buttonElem.length; i += 1) {
    buttonElem[i].addEventListener("click", () => {
      let quantity = document.querySelector(".js-pdp-quantity-input").value;
      changeMessage(quantity);
    });
  }
})();
