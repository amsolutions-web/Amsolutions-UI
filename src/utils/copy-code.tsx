export default function CopyCode(code: string) {
  // Attempt to copy text using clipboard API
  if (document.hasFocus()) {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        console.log("Code copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy code: ", err);
      });
  } else {
    // Fallback method if clipboard API is restricted
    const textarea = document.createElement("textarea");
    textarea.value = code;
    textarea.style.position = "absolute";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand("copy");
      console.log("Code copied to clipboard (fallback)!");
    } catch (err) {
      console.error("Failed to copy code (fallback): ", err);
    }
    document.body.removeChild(textarea);
  }
}
