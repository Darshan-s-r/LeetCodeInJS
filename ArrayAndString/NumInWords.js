const numberToWords = (num) => {
  const ones = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
  ];

  const tens = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
  ];

  const scales = ["", "thousand", "million", "billion", "trillion"];

  if (num === 0) return "zero";

  const chunkify = (n) => {
    const chunks = [];
    while (n > 0) {
      chunks.unshift(n % 1000);
      n = Math.floor(n / 1000);
    }
    return chunks;
  };

  const chunkToWords = (n) => {
    const hundred = Math.floor(n / 100);
    const remainder = n % 100;
    const ten = Math.floor(remainder / 10);
    const one = remainder % 10;

    let words = "";
    if (hundred) {
      words += ones[hundred] + " hundred ";
    }
    if (remainder < 20) {
      words += ones[remainder];
    } else {
      words += tens[ten] + (one ? "-" + ones[one] : "");
    }

    return words.trim();
  };

  const chunks = chunkify(num);
  const wordsArray = chunks.map((chunk, i) => {
    if (chunk === 0) return "";
    const scale = scales[chunks.length - 1 - i];
    return chunkToWords(chunk) + (scale ? " " + scale : "");
  });

  return wordsArray.filter(Boolean).join(" ").trim();
};

// Example usage
const num = 0;
const words = numberToWords(num);
console.log(words);
