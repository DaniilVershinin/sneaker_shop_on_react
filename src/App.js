import React from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import axios from "axios";
import { Routes, Route } from 'react-router-dom'


export const AppContext = React.createContext({})

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCardOpened] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(true);

  React.useEffect(() => {
    axios.get('https://6780a43285151f714b074ee5.mockapi.io/items').then(res => {
      setItems(res.data)
    })
    axios.get('https://6780a43285151f714b074ee5.mockapi.io/cart').then(res => {
      setCartItems(res.data)
    })
    setisLoading(false)
  }, [])

  const onAddToCart = (obj) => {
    try {

    } catch (error) {

    }


    // axios.post('https://6780a43285151f714b074ee5.mockapi.io/cart', obj)
    // setCartItems(prev => [...prev, obj]);
  }

  const onAddToFavorites = (obj) => {
    axios.post('https://6780a43285151f714b074ee5.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj]);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://6780a43285151f714b074ee5.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id));
    console.log(id)
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const renderItems = () => {
    return (
      isLoading
        ? [...Array(10)]
        : items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log('Добавили в закладки')}
              onPlus={(obj) => onAddToCart(obj)}
              loading={false} />
          ))
    )
  }

  return (
    <AppContext.Provider value={{items, cartItems, }}>
      <div className="wrapper clear">
        <Header onClickCart={() => setCardOpened(true)} />
        {cartOpened && <Drawer items={cartItems} onClose={() => setCardOpened(false)} onRemove={onRemoveItem} />}

        <Routes>
          <Route path="/text" element={<div>это текстовая информация</div>} />
        </Routes>

        <div className='content p-40'>
          <div className='d-flex align-center justify-between mb-40'>
            <h1> {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"} </h1>
            <div className='search-block d-flex'>
              <img src="./img/pousk.svg" />
              <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск ..." />
            </div>
          </div>

          <div className='d-flex flex-wrap'>
            {renderItems()}

          </div>
        </div>
      </div >
    </AppContext.Provider>
  );
}

export default App;
