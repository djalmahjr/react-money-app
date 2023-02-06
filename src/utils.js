export function maskMoney(price) {
  if (price && price.replace) {
    price = price.replace(/[^0-9]/g, "");
  }
  if (!Number.isNaN(price)) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price / 100);
  }
  return "";
}

export function onlyNumbers(value) {
  return Number(value.replace(/[^0-9]/g, ""));
}
