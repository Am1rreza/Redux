import { BUY_PHONE } from "./phoneTypes";

export function buyPhone(number = 1) {
  return {
    type: BUY_PHONE,
    payload: number,
  };
}
