import React from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  { title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, imageUrl: "./img/sneakers/1.png" },
  { title: "Мужские Кроссовки Nike Air Max 270", price: 8999, imageUrl: "./img/sneakers/2.jpg" },
  { title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 6999, imageUrl: "./img/sneakers/3.jpg" },
  { title: "Кроссовки Puma X Aka Boku Future Rider", price: 14999, imageUrl: "./img/sneakers/4.jpg" }
]

function App() {
  const [cartOpened, setCardOpened] = React.useState(false);

  return (
    <div className="wrapper clear">
      <Header onClickCart = {() => setCardOpened(true)}/>
      {cartOpened ? <Drawer onClose = {() => setCardOpened(false)}/> : null}

      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1> Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src="./img/pousk.svg" />
            <input placeholder="Поиск кроссовок ..." />
          </div>
        </div>

        <div className='d-flex'>
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl} 
              onFavorite = {() => console.log('Добавили в закладки')}
              onPlus={() => console.log("Нажали плюс")}/>
          ))}

        </div>
      </div>
    </div >
  );
}

export default App;
