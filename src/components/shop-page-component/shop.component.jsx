import { useEffect, useState, useContext } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { shoesCollectionRef } from '../../utils/firebase/firestore.collections';

import { ShoesContext } from '../../contexts/shoes.context';

import ShopList from './ShopList-component/ShopList.component';
import ShopCategories from './ShopCategories.component/ShopCategories.component';

import './shop.styles.scss';


export const Shop = () => {
    const [filteredShoes, setFilteredShoes] = useState([]);
    const { data, setData } = useContext(ShoesContext);

    useEffect(() => {
        setFilteredShoes([...data])
    }, [data]);

    return (
        <>
            <h1 className="shop-title">Shop</h1>
            <div className='shop-container'>
                <ShopCategories
                    data={data}
                    setData={setData}
                    setFilteredShoes={setFilteredShoes}
                />
                <ShopList shoes={filteredShoes} />
            </div>
        </>
    );
};