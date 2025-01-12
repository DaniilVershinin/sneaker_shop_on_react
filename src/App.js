import React from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCardOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://6780a43285151f714b074ee5.mockapi.io/items').then(res => {
      return res.json();
    }).then(json => {
      setItems(json);
    })
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  return (
    <div className="wrapper clear">
      <Header onClickCart={() => setCardOpened(true)} />
      {cartOpened && <Drawer items={cartItems} onClose={() => setCardOpened(false)} />}

      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1> Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src="./img/pousk.svg" />
            <input placeholder="Поиск кроссовок ..." />
          </div>
        </div>

        <div className='d-flex flex-wrap'>
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log('Добавили в закладки')}
              onPlus={(obj) => onAddToCart(obj)} />
          ))}

        </div>
      </div>
    </div >
  );
}

export default App;
