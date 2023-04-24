import CategoryItem from '../category-item/category-item.componet';
import './directory.styles.scss';

const Directory = ({ categories }) => (
  <div className="directory-container">
    {categories.map((category) => (
      <CategoryItem category={category} key={category.id} />
    ))}
  </div>
);
export default Directory;