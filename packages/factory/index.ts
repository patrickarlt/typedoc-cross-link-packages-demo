import { IceCream, Flavors } from "../shared";

export function make(flavor: Flavors): IceCream {
  return {
    flavor: flavor,
  };
}
