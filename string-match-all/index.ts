function extractEmails(text: string) {
  const regex = /\w+@\w+\.\w+/g;
  const matches = text.matchAll(regex);

  // return matches.toArray().map((match) => match[0]);
  return [...matches].map((match) => match[0]);
}

const text = "Contact me at test@example.com and support@domain.org.";
console.log(extractEmails(text));
