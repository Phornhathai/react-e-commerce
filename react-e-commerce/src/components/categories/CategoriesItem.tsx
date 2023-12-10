import './categories.css'

type categoriesProps = {
    item: {
        id: number;
        img: string;
        title: string;
    }
}
const CategoriesItem = ({ item }: categoriesProps) => {
    return (
        <div className='categoriesItemContainer'>
            <img className='categoriesImg' src={item.img} alt="" />
            <div className="categoriesItemInfo">
                <h1 className='categoriestitle'>{item.title}</h1>
                <button className='categoriesBtn'>SHOP NOW</button>
            </div>
        </div>
    )
}

export default CategoriesItem
