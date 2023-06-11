'use strict'

const Article = use("App/Models/Article");

class ArticleController {

    async index({view}) {
        const allArticles = await Article.all();
        return view.render('articles', {
            title: "All Articles | BAT Blog",
            subTitle: "All Articles",
            postData: allArticles.toJSON()
        })
    }
    
    async getArticleByCategory(categoryID) {
        const allArticles = await Article.query().where('category_id', categoryID).fetch();
        return allArticles.toJSON();
    }

    async getArticle({params, view}) {
        const article = await Article.find(params.articleID);
        return view.render('article',{
            title: article.title + " | Bat Blog",
            subTitle: "Article Name : " + article.title,
            postData: article.content
        });
    }
}

module.exports = ArticleController
