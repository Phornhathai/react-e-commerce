import { categories } from '../../data'
import CategoriesItem from './CategoriesItem'
import './categories.css'

const Categories = () => {
    return (
        <div className='categories-container'>
            {categories.map(item => (
                <CategoriesItem item={item} />
            ))}
        </div>
    )
}

export default Categories
