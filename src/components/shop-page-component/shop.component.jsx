import { useEffect, useState, useContext } from 'react';

import { ShoesContext } from '../../contexts/shoes.context';

import ShopList from './ShopList-component/ShopList.component';
import ShopCategories from './ShopCategories.component/ShopCategories.component';

import './shop.styles.scss';


export const Shop = () => {
    const [filteredShoes, setFilteredShoes] = useState([]);
    const { data } = useContext(ShoesContext);

    useEffect(() => {
        setFilteredShoes([...data])
    }, [data]);

    return (
        <>
            <h1 className="shop-title">Shop</h1>
            <div className='shop-container'>
                <ShopCategories
                    data={data}
                    setFilteredShoes={setFilteredShoes}
                />
                <ShopList shoes={filteredShoes} />
            </div>
        </>
    );
};