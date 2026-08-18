export const colors = [
  { slug: "", name: "White", label: "Blanco", adjective: "blanca", hex: "#ffffff", text: "#141414" },
  { slug: "black-screen", name: "Black", label: "Negro", adjective: "negra", hex: "#000000", text: "#ffffff" },
  { slug: "red-screen", name: "Red", label: "Rojo", adjective: "roja", hex: "#ef2929", text: "#ffffff" },
  { slug: "green-screen", name: "Green", label: "Verde", adjective: "verde", hex: "#19c463", text: "#07170d" },
  { slug: "blue-screen", name: "Blue", label: "Azul", adjective: "azul", hex: "#246bfd", text: "#ffffff" },
  { slug: "yellow-screen", name: "Yellow", label: "Amarillo", adjective: "amarilla", hex: "#ffd633", text: "#171300" },
  { slug: "orange-screen", name: "Orange", label: "Naranja", adjective: "naranja", hex: "#ff8a24", text: "#1c0c00" },
  { slug: "pink-screen", name: "Pink", label: "Rosa", adjective: "rosa", hex: "#ff69a6", text: "#250713" },
  { slug: "purple-screen", name: "Purple", label: "Morado", adjective: "morada", hex: "#8b5cf6", text: "#ffffff" },
  { slug: "cyan-screen", name: "Cyan", label: "Cian", adjective: "cian", hex: "#22d3ee", text: "#042025" },
  { slug: "gray-screen", name: "Gray", label: "Gris", adjective: "gris", hex: "#808080", text: "#ffffff" },
] as const;

export type ScreenColor = (typeof colors)[number];
export const colorPath = (color: ScreenColor) => color.slug ? `/${color.slug}/` : "/";
