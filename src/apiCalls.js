// apiCalls.js //

async function getRandomQuote(url)

{
  const response = await fetch("https://api.quotable.io/random");
  return await response.json();
}

export { getRandomQuote }