'use strict'

const Article = use("App/Models/Article");

class ArticleController {

    async index({view}) {
        const postData = await Article.all();
        return view.render('articles', {
            title: "All Articles | BAT Blog",
            subTitle: "All Articles",
            postData: postData.toJSON()
        })
    }
}

module.exports = ArticleController
