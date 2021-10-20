function solve(){
   const authorInput = document.getElementById('creator');
   const titleInput = document.getElementById('title');
   const categoryInput = document.getElementById('category');
   const contentInput = document.getElementById('content');

   const createBtn = document.getElementsByClassName('btn create')[0];
   createBtn.addEventListener('click', createPost);

   const postSection = document.querySelector('.site-content section');

   const titleList = [];


   function createPost(e){
      e.preventDefault();
      if(authorInput.value && titleInput.value && categoryInput.value && contentInput){
         const article = document.createElement('article');
         article.innerHTML = `<h1>${titleInput.value}</h1>
                             <p>Category:
                                <strong>${categoryInput.value}</strong>
                             </p>
                             <p>Creator:
                                <strong>${authorInput.value}</strong>
                             </p>
                             <p>${contentInput.value}</p>
                            <div class="buttons">
                                <button class="btn delete">Delete</button>
                                <button class="btn archive">Archive</button>
                            </div>`
         postSection.appendChild(article);

         const deleteBtn = article.getElementsByClassName('btn delete')[0];
         const archiveBtn = article.getElementsByClassName('btn archive')[0];

         deleteBtn.addEventListener('click', deletePost);
         archiveBtn.addEventListener('click', archivePost);

         function archivePost(){
            const archiveSection = document.querySelector('.archive-section  ol');
            archiveSection.innerHTML = '';
            let element = article.getElementsByTagName('h1')[0].textContent;
            titleList.push(element);
            titleList
                .sort((a, b) => a.localeCompare(b))
                .forEach(el => {
                   archiveSection.innerHTML += `<li>${el}</li>`;
                });
            article.remove();
         }

      }
      authorInput.value = '';
      titleInput.value = '';
      categoryInput.value = '';
      contentInput.value = '';
   }

   function deletePost(e){
      e.target.parentElement.parentElement.remove()
   }

}
