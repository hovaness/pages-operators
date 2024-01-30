import { Dispatch, SetStateAction } from "react";

export function handleChange(
  event: React.ChangeEvent<HTMLInputElement>,
  setter: Dispatch<SetStateAction<any>>
) {
  const value = event.target.value;
  setter(value);
}

export function handleBlur(
  event: React.FocusEvent<HTMLInputElement>,
  setter: Dispatch<SetStateAction<boolean>>
) {
  const value = event.target.value;
  !value ? setter(false) : setter(true);
}
