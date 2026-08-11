const copyWithSelection = (text: string): boolean => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "true");
  textArea.className = "fixed opacity-0 pointer-events-none";
  document.body.appendChild(textArea);
  textArea.select();

  try {
    return document.execCommand("copy");
  } catch (error) {
    console.error("Could not copy the text to the clipboard", error);
    return false;
  } finally {
    document.body.removeChild(textArea);
  }
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  if (!navigator.clipboard?.writeText) {
    return copyWithSelection(text);
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Could not copy the text to the clipboard", error);
    return copyWithSelection(text);
  }
};
