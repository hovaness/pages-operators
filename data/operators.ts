export interface Operator {
  name: string;
  slug: string;
  color: string;
}

const operatorsList: Operator[] = [
  {
    name: "МТС",
    slug: "mts",
    color: "#ed1c24",
  },
  {
    name: "Мегафон",
    slug: "megafon",
    color: "#00B956",
  },
  {
    name: "Yota",
    slug: "yota",
    color: "#00FFFF",
  },
  {
    name: "Билайн",
    slug: "beeline",
    color: "#f7a700",
  },
  {
    name: "Tele2",
    slug: "eledva",
    color: "#000",
  },
  {
    name: "Ростелеком",
    slug: "rostelekom",
    color: "#7700FF",
  },
];

export default operatorsList;
