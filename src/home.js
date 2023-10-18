
export default function homepage(){

    const title = document.createElement('h1');
    const text = document.createElement('p');

    title.innerText = "Grandma's Deli: Lasagna Wednesdays";
    title.classList.add("section-title");
    text.innerText = "The best place for lasagna on Wednesdays";
    text.classList.add("section-text");

    return {
        'title': title,
        'text': text,
    }
}