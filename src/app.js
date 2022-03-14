const btn = document.querySelector('.button')
const quote = document.querySelector('.quote-text')
const number = document.querySelector('.NumberAdvice')


btn.addEventListener('click', getAdvice)

async function getAdvice() {
    try {
        const url = 'https://api.adviceslip.com/advice';
        const res = await fetch(url);
        const data = await res.json();

        console.log(data)

        //add advice to quote
        const { advice } = data.slip;
        quote.textContent = `"${advice}"`;

        //add number id 
        const { id } = data.slip;
        number.textContent = `ADVICE #${id}`

    } catch (error) {
        console.log(error);
    }
}
