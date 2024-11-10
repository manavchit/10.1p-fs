class ArticleObj {
    constructor(src, alt, title, description,rating, name) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.description = description;
      this.rating = rating
      this.author_name = name
    }
  }

  const Lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a imperdiet nulla. Vivamus gravida vehicula quam, non suscipit purus finibus."

  var article1 = new ArticleObj("./images/Article1.jpg", "Article 1", "Mountains", Lorem,3.5, "Manav");
  var article2 = new ArticleObj("./images/Article2.jpeg", "Article 2", "Aurora Borelius", Lorem,4, "Deep");
  var article3 = new ArticleObj("./images/Article3.jpeg", "Article 3", "Iphone 16", Lorem,2.6, "Manav");

function Article({article}){
    return(
    <div className="article-body">
        <img src={article.src} alt={article.alt} />
        <h2>{article.title}</h2>
        <div className="article-body-text">
            <p>{article.description}</p>
            <hr></hr>
            <div className="star-rating">
                <img src="./images/star.png" alt="star" />
                <h5>{article.rating}</h5>
                <h4>{article.author_name}</h4>

            </div>
        </div>
    </div>
    )
}

function ArticleReact(){
    return(
        <div className="all-articles">
            <Article article={article1} />
            <Article article={article2} />
            <Article article={article3} />
        </div>
    )
}

export { ArticleObj, Article, ArticleReact };
