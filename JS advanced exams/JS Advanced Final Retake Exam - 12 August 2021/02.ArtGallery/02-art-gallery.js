class ArtGallery{
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity){
        if (!this.possibleArticles[articleModel.toLowerCase()]){
            throw new Error("This article model is not included in this gallery!");
        }
        const existArticle = this.listOfArticles.find(a => a.articleName === articleName);
        if (existArticle){
            if(existArticle.articleModel === articleModel.toLowerCase()){
                existArticle.quantity += Number(quantity)
                return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
            }
        }
        const article = {
            articleModel: articleModel.toLowerCase(),
            articleName,
            quantity: Number(quantity)
        }
        this.listOfArticles.push(article)
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality){
        const existGuest = this.guests.filter(g => g.guestName === guestName)[0];
        let points = personality === "Vip"? 500 : personality === "Middle" ? 250 : 50;
        if (!existGuest){
            const guest = {
                guestName,
                points: Number(points),
                purchaseArticle: 0,
            }
            this.guests.push(guest)
            return `You have successfully invited ${guestName}!`
        }
        throw new Error(`${guestName} has already been invited.`)
    }

    buyArticle(articleModel, articleName, guestName){
        const existArticle = this.listOfArticles
            .filter((a => a.articleName === articleName && a.articleModel === articleModel))[0];

        if (!existArticle){
            throw new Error("This article is not found.");
        }
        if (existArticle.quantity === 0){
            return `"The ${articleName} is not available."`
        }

        const existGuest = this.guests.filter(g => g.guestName === guestName)[0];
        if(!existGuest){
            return "This guest is not invited.";
        }

        if (existGuest.points < this.possibleArticles[articleModel]){
            return "You need to more points to purchase the article.";
        }
        existGuest.points -= Number(this.possibleArticles[articleModel]);
        existGuest.purchaseArticle += 1;
        existArticle.quantity -= 1;

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }

    showGalleryInfo(criteria){
        let result = [];
        if (criteria === "article"){
            result.push("Articles information:");
            this.listOfArticles.forEach(a => {
                result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`)
            });
        }else if (criteria === "guest"){
            result.push("Guests information:");
            this.guests.forEach(g => {
                console.log(g.points)
                result.push(`${g.guestName} - ${g.purchaseArticle}`)
            });
        }
        return result.join("\n");
    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
// console.log(artGallery.listOfArticles)

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

