export function isPalindrome(word) {
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }

  if (word.length === 0) {
    return false; // handle empty string first
  }

  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Word must contain only letters");
  }

  const lower = word.toLowerCase();
  return lower === lower.split("").reverse().join("");
}
