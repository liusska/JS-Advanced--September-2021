class Story{
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];

    }
    get likes(){
        if (this._likes.length === 0){
            return `${this.title} has 0 likes`

        }else if (this._likes.length === 1){
            return `${this._likes[0]} likes this story!`
        }else{
            return `${this._likes[0]} and ${this._likes.length -1} others like this story!`
        }
    }
    like(username){
        if (username === this.creator){
            throw new Error("You can't like your own story!");
        }
        if (this._likes.some(u => u === username)){
            throw new Error("You can't like the same story twice!");
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username){
        if (this._likes.some(u => u === username)){
            this._likes = this._likes.filter(u => u !== username);
            return `${username} disliked ${this.title}`;
        }
        throw new Error("You can't dislike this story!");
    }

    comment(username, content, id) {
        if (!id || !this._comments.some(el => el.id === id)) {
            id = this._comments.length + 1;
        }
        let comment = {};
        if (!this._comments.some(c => c.id === id)) {
            comment = {
                id,
                username,
                content,
                replies: []
            }
            this._comments.push(comment);
            return `${username} commented on ${this.title}`
        }

        comment = this._comments.find(c => c.id === id);
        const newId = Number(`${comment.id}.${comment.replies.length + 1}`);
        comment.replies.push({
            id: newId,
            username,
            content
        });
        return "You replied successfully";
    }

    toString(criteria){
        let result = [`Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:`];

        if(criteria === 'asc'){
            this._comments
                .sort((a, b) => a.id-b.id)
                .forEach((el) =>{
                    result.push(`-- ${el.id}. ${el.username}: ${el.content}`)
                    if (el.replies.length > 0){
                        el.replies
                            .sort((a, b) => a.id-b.id)
                            .forEach(r => {
                                result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
                            });
                    }
                });
        }else if(criteria === 'desc'){
            this._comments
                .sort((a, b) => b.id-a.id)
                .forEach((el) =>{
                    result.push(`-- ${el.id}. ${el.username}: ${el.content}`)
                    if (el.replies.length > 0){
                        el.replies
                            .sort((a, b) => b.id-a.id)
                            .forEach(r => {
                                result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
                            });
                    }
                });
        }else if(criteria === 'username'){
            this._comments
                .sort((a, b) => a.username.localeCompare(b.username))
                .forEach((el) =>{
                    result.push(`-- ${el.id}. ${el.username}: ${el.content}`)
                    if (el.replies.length > 0){
                        el.replies
                            .sort((a, b) => a.username.localeCompare(b.username))
                            .forEach(r => {
                                result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
                            });
                    }
                });
        }
        return result.join('\n')
    }
}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
