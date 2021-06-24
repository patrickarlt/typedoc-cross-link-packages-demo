import { IceCream, Flavors } from "../shared";

export function serve(flavor: Flavors): IceCream {
  return {
    flavor: flavor,
  };
}
