import "./styles.css";
import m from "mithril";
import { Header } from "./Header";
import { Footer } from "./Footer";

function App() {
  let comp = {
    view() {
      return [m(Header), m(Footer)];
    }
  };
  return comp;
}
m.mount(document.getElementById("app"), App);
