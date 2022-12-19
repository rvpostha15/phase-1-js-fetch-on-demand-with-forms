const init = () => {
    //code should go here in order to be performed after the DOM content has loaded
    const inputForm = document.querySelector('form');
    // url = `http://localhost:3000/movies/${input.value}`
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');

        fetch(`http://localhost:3000/movies/${input.value}`)
            .then(response => response.json())
            .then(data => {
                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p');

                title.innerText = data.title;
                summary.innerText = data.summary;
        });
    });
}

document.addEventListener('DOMContentLoaded', init);
