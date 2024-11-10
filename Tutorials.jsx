import {Article, ArticleObj} from "./Article";

const Lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a imperdiet nulla. Vivamus gravida vehicula quam, non suscipit purus finibus."

var tutorial1 = new ArticleObj("./images/tutorial1.jpg", "Tutorial 1", "Puzzle", Lorem, 4.7, "Manav");
var tutorial2 = new ArticleObj("./images/tutorial2.jpg", "Tutorial 2", "Space", Lorem,3.9, "Himansh");
var tutorial3 = new ArticleObj("./images/tutorial3.jpg", "Tutorial 3", "Yoru", Lorem,5, "Ben");


function Tutorials(){
    return(
        <div className="all-articles">
        <Article article={tutorial1} />
        <Article article={tutorial2} />
        <Article article={tutorial3} />
        </div>
    )
}

export default Tutorials