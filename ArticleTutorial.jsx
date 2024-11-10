import { ArticleReact } from './Article';  // Adjust the path as necessary
import Tutorials from './Tutorials';



function FeaturedArticlesAndTutorials() {
  

  return (
    <div className="main-body">
      <h2>Featured Articles</h2>
        <ArticleReact />
      <button>See all articles</button>

      <h2>Featured Tutorials</h2>
      <div className="tutorial-container">
        <Tutorials />
      </div>
      <button>See all tutorials</button>
    </div>
  );
}

export default FeaturedArticlesAndTutorials;