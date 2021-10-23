document.body.innerHTML =`
<section id="welcome" class="background-image">
        <div class="home-container">
            <div class="info">
                <h1>Music for everyone.</h1>
            </div>
        </div>
    </section>

<div id="wrapper">

        <section id="append-song">
            <div class="first-container">
                <img src="./static/img/hero-bg.png.png" alt="image">

                <div class="container-text">
                    <h2>Add song.</h2>
                    <p>Join the world of music, add the latest hits.</p>

                    <form action="">
                        <label for="genre">Genre:</label>
                        <input type="text" id="genre" name="genre" placeholder="Pop">

                        <label for="name">Name of the song:</label>
                        <input type="text" id="name" name="name" placeholder="Pon de Replay">

                        <label for="author">Author of the song:</label>
                        <input type="text" id="author" name="author" placeholder="Rihanna">

                        <label for="date">Date of creation:</label>
                        <input type="text" id="date" name="date" placeholder="26.11.2009">

                        <button id="add-btn" type="submit">Add</button>
                    </form>
                    <span>No spams included</span>

                </div>
            </div>
        </section>

        <section id="all-hits">
            <div class="all-hits-container">
                <h1>Collection of songs</h1>

            </div>
        </section>

        <section id="saved-hits">
            <div class="saved-container">
                <h1>Saved songs</h1>

            </div>
        </section>

        <section id="total-likes">
            <div class="likes">
                <p>Total Likes: 0</p>
                <img src="./static/img/like-btn.jpg" alt="image-like">
            </div>
        </section>

    </div>

    <footer>@JS Advanced Exam - Music Site </footer>
    <script src="app.js"></script>
`;
result();
const createSong = {
    genre: ()=>document.getElementById("genre"),
    name: ()=>document.getElementById("name"),
    author: ()=>document.getElementById("author"),
    date: ()=>document.getElementById("date"),
    addBtn: ()=>document.getElementById("add-btn")
}
createSong.genre().value = 'Jazz';
createSong.name().value = 'Chicago';
createSong.author().value = 'Frank Sinatra';
createSong.date().value = '05.11.2020';

createSong.addBtn().click();

document.querySelector(".save-btn").click();

let savedSection = document.querySelector(".saved-container>.hits-info");

let actual = savedSection.innerHTML.trim().replace(/\s/gm,"");
let expected = '<img src="./static/img/img.png"><h2>Genre: Jazz</h2><h2>Name: Chicago</h2><h2>Author: Frank Sinatra</h2><h3>Date: 05.11.2020</h3><button class="delete-btn">Delete</button>'.trim().replace(/\s/gm,"");

assert.equal(actual,expected);