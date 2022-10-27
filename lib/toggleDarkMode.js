export default function toggleDarkMode(_) {
  // Exit if window is undefined
  if (typeof window === "undefined") return

  window.userHasCustomDarkModePref = true

  document.documentElement.classList.toggle("dark")
}
