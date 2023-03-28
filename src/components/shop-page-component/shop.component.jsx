import { useEffect, useState } from 'react';
import { data } from '../../utils/firebase/data';
import ShopList from './ShopList-component/ShopList.component';
import ShopCategories from './ShopCategories.component/ShopCategories.component';
import './shop.styles.scss';


export const Shop = () => {
    const [search, setSearch] = useState('');
    const [filteredShoes, setFilteredShoes] = useState(data);
    const [inputValue, setInputValue] = useState(199);

    useEffect(() => {
        const newFilteredShoes = data.filter((shoe) => {
            return shoe.name.toLocaleLowerCase().includes(search)
        });

        setFilteredShoes(newFilteredShoes);
    }, [data, search]);


    const onChangeHandler = (e) => {
        const searchField = e.target.value.toLocaleLowerCase();
        setSearch(searchField);
    };

    const onCategoryClick = (e) => {
        setInputValue(199);
        const category = e.target.innerText;
        let newFilteredShoes;

        switch (category) {
            case 'All':
                setFilteredShoes(data);
                break;
            case 'Nike Air Force 1':
                newFilteredShoes = data.filter((shoe) => {
                    return shoe.cat.includes('Nike Air Force 1');
                });
                setFilteredShoes(newFilteredShoes);
                break;

            case 'Nike Air Max':
                newFilteredShoes = data.filter((shoe) => {
                    return shoe.cat.includes('Nike Air Max');
                });
                setFilteredShoes(newFilteredShoes);
                break;


            case 'Nike Air Zoom':
                newFilteredShoes = data.filter((shoe) => {
                    return shoe.cat.includes('Nike Air Zoom');
                });
                setFilteredShoes(newFilteredShoes);
                break;


            case 'Nike Air Jordan 1':
                newFilteredShoes = data.filter((shoe) => {
                    return shoe.cat.includes('Nike Air Jordan 1');
                });
                setFilteredShoes(newFilteredShoes);
                break;


            case 'Nike Dunk':
                newFilteredShoes = data.filter((shoe) => {
                    return shoe.cat.includes('Nike Dunk');
                });
                setFilteredShoes(newFilteredShoes);
                break;

            default:
                setFilteredShoes(data);
                break;
        }
    };

    const onInputChange = (e) => {
        setInputValue(e.target.value);
        setFilteredShoes(data.filter((shoe) => {
            return shoe.price <= e.target.value;
        }))
    }

    return (
        <>
            <h1 className="shop-title">Shop</h1>
            <div className='shop-container'>
                <ShopCategories
                    onChangeHandler={onChangeHandler}
                    data={data}
                    search={search}
                    onCategoryClick={onCategoryClick}
                    inputValue={inputValue}
                    onInputChange={onInputChange}
                />
                <ShopList shoes={filteredShoes} />
            </div>
        </>
    );
};