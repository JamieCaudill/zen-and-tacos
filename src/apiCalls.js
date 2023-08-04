// apiCalls.js //

async function getRandomQuote() {

  try {
  const response = await fetch("https://api.themotivate365.com/stoic-quote");
  if (!response.ok) { 
    throw new Error(response.statusText)
  }
  return response.json();
  } catch (error) {
    throw new Error(error)
  }
}

export { getRandomQuote }