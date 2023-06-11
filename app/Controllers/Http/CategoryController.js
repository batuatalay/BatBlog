'use strict'

const Category = use("App/Models/Category");
const ArticleController = use("App/Controllers/Http/ArticleController");

class CategoryController {

    async index({view}) {
        const allCategories = await Category.all();
        return view.render('categories', {
            title: "All Categories | Bat Blog",
            subTitle: "All Categories",
            postData: allCategories.toJSON()
        })

    }
    
    async getCategoryArticles({params, view}) {
        const category = await Category.find(params.categoryID);

        const articleController = new ArticleController();
        const categoryArticles = await articleController.getArticleByCategory(params.categoryID);
        return view.render('articles', {
            title: "category Articles | Bat Blog",
            subTitle: category.name,
            postData: categoryArticles
        });
    }

}

module.exports = CategoryController
