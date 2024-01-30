export function phoneValidation(phone: string | undefined): boolean {
  if (typeof phone == "undefined") return false;
  const regExp = /^(\+7)\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
  return regExp.test(phone);
}

export function amountValidation(amount: number | undefined): boolean {
  if (typeof amount == "undefined") return false;
  return amount >= 1 && amount <= 1000;
}
