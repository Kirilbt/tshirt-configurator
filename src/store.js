import { proxy } from "valtio";

const state = proxy({
  intro: true,
  colors: ["#aaa", "#EFBD4E", "#80C670", "#726DE8", "#EF674E", "#353934"],
  decals: ["chrome1", "chrome2", "chrome3"],
  selectedColor: "#EFBD4E",
  selectedDecal: "chrome1"
});

export { state };
