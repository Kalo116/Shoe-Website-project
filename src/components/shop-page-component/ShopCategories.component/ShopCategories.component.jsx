import React, { useEffect } from 'react'
import { useState } from 'react';

const ShopCategories = ({
    data,
    setFilteredShoes
}) => {

    const [inputRangeValue, setInputRangeValue] = useState(Number);
    const [search, setSearch] = useState('');
    const [maxPrice, setMaxPrice] = useState(0);
    const [minPrice, setMinPrice] = useState(0);

    useEffect(() => {
        const priceList = data.map(el => el.data.price);
        setMinPrice(Math.min(...priceList));
        setMaxPrice(Math.max(...priceList));
    }, [data]);

    const onCategoryClick = (e) => {
        setInputRangeValue(maxPrice);
        const category = e.target.innerText;
        let newFilteredShoes;
        switch (category) {
            case 'All':
                setFilteredShoes(data);
                break;
            case 'Nike Air Force 1':
                newFilteredShoes = data.filter((shoe) => {
                    return shoe.data.cat.includes('Nike Air Force 1');
                });
                setFilteredShoes(newFilteredShoes);
                break;

            case 'Nike Air Max':
                newFilteredShoes = data.filter((shoe) => {
                    return shoe.data.cat.includes('Nike Air Max');
                });
                setFilteredShoes(newFilteredShoes);
                break;


            case 'Nike Air Zoom':
                newFilteredShoes = data.filter((shoe) => {
                    return shoe.data.cat.includes('Nike Air Zoom');
                });
                setFilteredShoes(newFilteredShoes);
                break;


            case 'Nike Air Jordan 1':
                newFilteredShoes = data.filter((shoe) => {
                    return shoe.data.cat.includes('Nike Air Jordan 1');
                });
                setFilteredShoes(newFilteredShoes);
                break;


            case 'Nike Dunk':
                newFilteredShoes = data.filter((shoe) => {
                    return shoe.data.cat.includes('Nike Dunk');
                });
                setFilteredShoes(newFilteredShoes);
                break;

            default:
                setFilteredShoes(data);
                break;
        }
    };


    const onChangeHandler = (e) => {
        const searchField = e.target.value.toLocaleLowerCase();
        setSearch(searchField);
        const searchFilter = data.filter((shoe) => {
            return shoe.data.cat.toLocaleLowerCase().includes(searchField);
        })
        setFilteredShoes(searchFilter);
    };
    const onInputRangeChange = (e) => {
        setInputRangeValue(e.target.value);
        setFilteredShoes(data.filter((shoe) => {
            return shoe.data.price <= e.target.value;
        }))
    }



    return (
        <div className="left-section">
            <input
                type="text"
                className='search-input'
                placeholder='Search...'
                value={search}
                onChange={onChangeHandler}

            />
            <h1 className='left-section-title'>
                Categories
            </h1>

            <ul className="shop-categories">
                <li className="shop-category" onClick={onCategoryClick}>All</li>
                <li className="shop-category" onClick={onCategoryClick}>Nike Air Force 1</li>
                <li className="shop-category" onClick={onCategoryClick}>Nike Air Max</li>
                <li className="shop-category" onClick={onCategoryClick}>Nike Air Zoom</li>
                <li className="shop-category" onClick={onCategoryClick}>Nike Air Jordan 1</li>
                <li className="shop-category" onClick={onCategoryClick}>Nike Dunk</li>
            </ul>

            <h1 className="left-section-post-title">
                Maximum Price
            </h1>
            <div className="left-section-price">
                <input type="range" className='price-range'
                    min={minPrice}
                    max={maxPrice}
                    value={inputRangeValue}
                    onChange={onInputRangeChange}
                />
                <span className="price-value">${inputRangeValue}</span>
            </div>
        </div>
    )
}

export default ShopCategories;