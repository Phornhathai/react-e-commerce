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
        <div className='CategoriesItem-container'>
            <img src={item.img} alt="" />
            <div className="CategoriesItemInfo">
                <h1>{item.title}</h1>
                <button>SHOP NOW</button>
            </div>
        </div>
    )
}

export default CategoriesItem
