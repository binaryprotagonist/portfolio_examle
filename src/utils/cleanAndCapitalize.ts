export const cleanAndCapitalize = (text: string) => {
  // Remove special characters and keep only letters, numbers, and spaces
  const cleanText = text.toLowerCase().replace(/[^A-Za-z0-9\s-]/g, "");

  // Replace hyphens with spaces
  const textWithoutDashes = cleanText.replace(/-/g, " ");

  // Capitalize the first letter of each word
  const capitalizedText = textWithoutDashes.replace(/\b\w/g, (match) =>
    match.toUpperCase()
  );

  return capitalizedText;
}