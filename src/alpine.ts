import type { Alpine } from "alpinejs";

type ThemeMode = "light" | "dark" | "system";
const isThemeMode = (value: string | null): value is ThemeMode => value === "light" || value === "dark" || value === "system";

export default (Alpine: Alpine) => {
  Alpine.store("theme", {
    mode: "system" as ThemeMode,
    media: null as MediaQueryList | null,
    initialized: false,
    init() {
      if (this.initialized) return;
      this.initialized = true;
      const saved = localStorage.getItem("theme-mode");
      this.mode = isThemeMode(saved) ? saved : "system";
      this.media = window.matchMedia("(prefers-color-scheme: dark)");
      this.media.addEventListener("change", () => { if (this.mode === "system") this.apply(); });
      this.apply();
    },
    set(mode: ThemeMode) {
      this.mode = mode;
      localStorage.setItem("theme-mode", mode);
      this.apply();
    },
    apply() {
      const dark = this.mode === "dark" || (this.mode === "system" && Boolean(this.media?.matches));
      document.documentElement.dataset.theme = dark ? "night" : "bumblebee";
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0f172a" : "#facc15");
    },
  });

  Alpine.data("screenTool", (initialColor: string) => ({
    width: 1920,
    height: 1080,
    customColor: initialColor,
    get validColor() { return /^#[0-9a-f]{6}$/i.test(this.customColor) ? this.customColor : initialColor; },
    get previewText() {
      const value = this.validColor.slice(1);
      const red = parseInt(value.slice(0, 2), 16);
      const green = parseInt(value.slice(2, 4), 16);
      const blue = parseInt(value.slice(4, 6), 16);
      return (red * 299 + green * 587 + blue * 114) / 1000 > 145 ? "#141414" : "#ffffff";
    },
    setSize(width: number, height: number) { this.width = width; this.height = height; },
    openFullscreen() { (this.$refs.canvas as HTMLElement).requestFullscreen?.(); },
    downloadImage() {
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.min(7680, Number(this.width) || 1920));
      canvas.height = Math.max(1, Math.min(4320, Number(this.height) || 1080));
      const context = canvas.getContext("2d");
      if (!context) return;
      context.fillStyle = this.validColor;
      context.fillRect(0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${this.validColor.slice(1)}-screen-${canvas.width}x${canvas.height}.png`;
        link.click();
        URL.revokeObjectURL(url);
      }, "image/png");
    },
  }));

  Alpine.data("feedbackForm", (recipient: string) => ({
    submit(event: SubmitEvent) {
      if (!recipient) return;
      const form = event.currentTarget as HTMLFormElement;
      const data = new FormData(form);
      const category = String(data.get("category") || "Feedback");
      const body = [`Name: ${data.get("name") || "-"}`, `Reply email: ${data.get("email") || "-"}`, "", String(data.get("message") || "")].join("\n");
      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(`[White Screen] ${category}`)}&body=${encodeURIComponent(body)}`;
    },
  }));
};
