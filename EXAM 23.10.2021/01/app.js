window.addEventListener('load', solve);

function solve() {
    const genre = document.getElementById('genre');
    const name = document.getElementById('name');
    const author = document.getElementById('author');
    const date = document.getElementById('date');

    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addToCollection);

    const collectionContainer = document.querySelector('.all-hits-container');
    const savedContainer = document.querySelector('#saved-hits .saved-container');

    let likes = 0;

    function addToCollection(e){
        e.preventDefault();

        let genreValue = genre.value.trim();
        let nameValue = name.value.trim();
        let authorValue = author.value.trim();
        let dateValue = date.value.trim();

        if(genreValue !=='' && nameValue !== '' && authorValue !== '' && dateValue !== ''){
            const containerDiv = document.createElement('div');
            containerDiv.classList.add('hits-info');
            containerDiv.innerHTML = `<img src="./static/img/img.png">
                                       <h2>Genre: ${genreValue}</h2>
                                       <h2>Name: ${nameValue}</h2>
                                       <h2>Author: ${authorValue}</h2>
                                       <h3>Date: ${dateValue}</h3>
                                       <button class="save-btn">Save song</button>
                                       <button class="like-btn">Like song</button>
                                       <button class="delete-btn">Delete</button>`

            collectionContainer.appendChild(containerDiv);

            const saveBtn = containerDiv.querySelector('.save-btn');
            const likeBtn = containerDiv.querySelector('.like-btn');
            const deleteBtn = containerDiv.querySelector('.delete-btn');

            saveBtn.addEventListener('click', saveSong);
            deleteBtn.addEventListener('click', deleteSong);
            likeBtn.addEventListener('click', likeSong);


            genre.value = '';
            name.value = '';
            author.value = '';
            date.value = '';

            function saveSong(){
                containerDiv.remove();
                const savedContainerDiv = document.createElement('div')
                savedContainerDiv.className = 'hits-info';
                savedContainerDiv.innerHTML = `<img src="./static/img/img.png">
                                                <h2>Genre: ${genreValue}</h2>
                                                <h2>Name: ${nameValue}</h2>
                                                <h2>Author: ${authorValue}</h2>
                                                <h3>Date: ${dateValue}</h3>
                                                <button class="delete-btn">Delete</button>`
                savedContainer.appendChild(savedContainerDiv);

                const deleteBtn = savedContainerDiv.querySelector('.delete-btn');
                deleteBtn.addEventListener('click', deleteSong);

            }

        }
    }

    function deleteSong(e){
        e.target.parentElement.remove();
    }

    function likeSong(e){
        e.target.parentElement.querySelector('.like-btn').disabled = true;
        e.target.parentElement.querySelector('.like-btn').style.color = 'gray';
        let likeInfo = document.querySelector('.likes p');
        likes += 1;
        likeInfo.innerHTML = `Total Likes: ${likes}`
    }

}