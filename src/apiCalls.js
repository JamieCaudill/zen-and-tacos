// apiCalls.js //

// const getTacos = () => {
//   fetch('https://zenquotes.io/api/quotes/')
//     .then(response => response.json())
//     .then(data => console.log(data))
// }




async function getRandomQuote(url)
{
  const response = await fetch("https://api.quotable.io/random");
  return await response.json();
}




export { getRandomQuote }