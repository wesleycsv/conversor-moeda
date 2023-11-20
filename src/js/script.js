const btnRadios = document.querySelectorAll(".btn");
const btnConveter = document.querySelector(".btn-conveter");

btnRadios.forEach((button) => {
  //Remover o evento de ativo
  button.addEventListener("click", (event) => {
    btnRadios.forEach((btn) => {
      btn.classList.remove("ativo");
    });

    const label = event.currentTarget;
    label.classList.add("ativo");
  });
});

btnConveter.addEventListener("click", async () => {
  const brl = document.querySelector(".brl-valor").value;
  const result = document.querySelector(".result");
  const btnRadioEmpty = document.querySelector('input[type="radio"]:checked');

  if (brl === "") {
    return false;
  }
  if (btnRadioEmpty === null) {
    return false;
  }

  const resultApi = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
  ).then((resposta) => resposta.json());

  let valorFormatado;

  if (btnRadioEmpty.getAttribute("data-moedas") === "usd") {
    valorFormatado =
      "Dólar: " +
      Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(brl / resultApi.USDBRL.high);
  }
  if (btnRadioEmpty.getAttribute("data-moedas") === "euro") {
    valorFormatado =
      "Euro: " +
      Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(brl / resultApi.EURBRL.high);
  }

  result.innerHTML = valorFormatado;
});
