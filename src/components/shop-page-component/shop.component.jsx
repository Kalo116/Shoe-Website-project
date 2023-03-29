import { useEffect, useState } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { shoesCollectionRef } from '../../utils/firebase/firestore.collections';

import ShopList from './ShopList-component/ShopList.component';
import ShopCategories from './ShopCategories.component/ShopCategories.component';

import './shop.styles.scss';


export const Shop = () => {
    const [data, setData] = useState([]);
    const [filteredShoes, setFilteredShoes] = useState([]);


    useEffect(() => {
        const unsubcribe = onSnapshot(shoesCollectionRef, (snapshot) => {
            setData(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        })
        return () => {
            unsubcribe();
        }
    }, []);

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