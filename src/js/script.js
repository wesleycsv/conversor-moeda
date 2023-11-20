const btnRadios = document.querySelectorAll(".btn");
const btnConveter = document.querySelector(".btn-conveter");

let moedas = 0;

btnRadios.forEach((button) => {
  //Remover o evento de ativo
  button.addEventListener("click", (event) => {
    btnRadios.forEach((btn) => {
      btn.classList.remove("ativo");
    });

    const label = event.currentTarget;
    label.classList.add("ativo");

    if (label.nextElementSibling.getAttribute("data-moedas") === "usd") {
      moedas = 4.89;
    }
    if (label.nextElementSibling.getAttribute("data-moedas") === "euro") {
      moedas = 5.35;
    }
  });
});

btnConveter.addEventListener("click", () => {
  const brl = document.querySelector(".brl-valor").value;
  const result = document.querySelector(".result");
  const btnRadioEmpty = document.querySelector('input[type="radio"]:checked');

  if (brl === "") {
    return false;
  }
  if (btnRadioEmpty === null) {
    return false;
  }
  let valorFormatado;

  if (btnRadioEmpty.getAttribute("data-moedas") === "usd") {
    valorFormatado =
      "Dólar: " +
      Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(brl / moedas);
  }
  if (btnRadioEmpty.getAttribute("data-moedas") === "euro") {
    valorFormatado =
      "Euro: " +
      Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(brl / moedas);
  }

  result.innerHTML = valorFormatado;
});
