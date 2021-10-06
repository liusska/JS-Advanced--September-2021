function solve() {
    const [task, date] = document.querySelectorAll("form input");
    const description = document.querySelector("#description");
    const addButton = document.querySelector('#add');
    const [addTaskSection, openSection, inProgressSection, completeSection ]= document.querySelectorAll("section div:nth-of-type(2)");
    addButton.addEventListener('click', addTask);

    function addTask(e){
        e.preventDefault()
        if(task.value !== "" && description.value !== "" && date.value !== ""){
            const newArticle = document.createElement("article");
            newArticle.innerHTML =
               `<h3>${task.value}</h3>
                <p>Description: ${description.value}</p>
                <p>Due Date: ${date.value}</p>
                <div class="flex">
                    <button class="green">Start</button>
                    <button class="red">Delete</button>
                </div>`
            openSection.appendChild(newArticle);
            task.value = "";
            description.value = "";
            date.value = "";

            const deleteButton = newArticle.querySelector("article button.red");
            deleteButton.addEventListener("click", deleteTask);
            const startButton = newArticle.querySelector("button.green");
            startButton.addEventListener("click", startTask);
        }

        function deleteTask(e){
            e.target.parentElement.parentElement.remove();
        }

        function startTask(e){
            const taskStart = e.target.parentElement.parentElement.querySelector("h3");
            const [descriptionStart, dateStart] = e.target.parentElement.parentElement.querySelectorAll("p")
            const articleStart = document.createElement('article')
            articleStart.innerHTML =
                `<h3>${taskStart.textContent}</h3>
                <p>${descriptionStart.textContent}</p>
                <p>${dateStart.textContent}</p>
                <div class="flex">
                    <button class="red">Delete</button>
                    <button class="orange">Finish</button>
                </div>`
            inProgressSection.appendChild(articleStart);
            e.target.parentElement.parentElement.remove();

            const deleteButton = articleStart.querySelector("article button.red");
            deleteButton.addEventListener("click", deleteTask);
            const finishButton = articleStart.querySelector("article button.orange");
            finishButton.addEventListener("click", finishTask);
        }

    }

    function finishTask(e){
        const taskFinish = e.target.parentElement.parentElement.querySelector("h3");
        const [descriptionFinish, dateFinish] = e.target.parentElement.parentElement.querySelectorAll("p")
        const articleFinish = document.createElement('article')
        articleFinish.innerHTML =
            `<h3>${taskFinish.textContent}</h3>
                <p>${descriptionFinish.textContent}</p>
                <p>${dateFinish.textContent}</p>`

        completeSection.appendChild(articleFinish);
        e.target.parentElement.parentElement.remove()
    }

}