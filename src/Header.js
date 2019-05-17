import m from "mithril";
export function Header() {
  let comp = {
    view() {
      return m("h1", "header");
    }
  };
  return comp;
}
