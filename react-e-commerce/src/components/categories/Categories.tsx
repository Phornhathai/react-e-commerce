import { categories } from '../../data'
import CategoriesItem from './CategoriesItem'
import './categories.css'

const Categories = () => {
    return (
        <div className='categoriesContainer'>
            {categories.map(item => (
                <CategoriesItem item={item} />
            ))}
        </div>
    )
}

export default Categories
