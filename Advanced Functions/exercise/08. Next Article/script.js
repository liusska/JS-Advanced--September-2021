function getArticleGenerator(articles) {
    let contextTag = document.querySelector("#content");

    function showNext(){
        if (articles.length !== 0){
            let articleTag = document.createElement("article");
            let divTag = document.createElement("div");
            divTag.textContent = articles.shift();
            articleTag.appendChild(divTag);
            contextTag.appendChild(articleTag);
        }
    }
    return showNext;
}
