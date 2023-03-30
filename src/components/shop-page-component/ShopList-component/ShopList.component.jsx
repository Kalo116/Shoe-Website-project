import ShopItem from "../ShopItem.component/ShopItem.component";

const ShopList = ({ shoes }) => {
    return (
        <div className="shop-content">
            <div className="products">
                {shoes.map((shoe) => {
                    return <ShopItem key={shoe.id} shoe={shoe.data} shoeId={shoe.id} />
                })}
            </div>
        </div>

    )
};

export default ShopList;