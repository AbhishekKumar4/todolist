import React, { useState } from 'react';
import './App.css';

function App() {

  const [listItem, setListItem] = useState('');

  let store = JSON.parse(localStorage.getItem('list'));
  if (store == null) {
    store = []
  }
  const [items, setItems] = useState(store);

  const handleSubmit = e => {
    e.preventDefault();
    const newItems = [...items, listItem]
    console.log('items : ', newItems)
    setItems(newItems);
    setListItem('');
    localStorage.setItem('list', JSON.stringify(newItems));
  }

  const deleteItem = item => {
    //items.
  }

  return (
    <div className="container">
      <form>
        <div className='form-group'>
          <label htmlFor='listItem'>Enter Item</label>
          <input className='form-control' type='text' id='listItem' name='listItem' value={listItem} onChange={e => setListItem(e.target.value)}></input>
        </div>
        <div>
          <button type='submit' onClick={handleSubmit} className='btn btn-primary'>Add Item</button>
        </div>
      </form>
      <br />
      <div className='çontainer'>
        <ul className='list-group'>
          {items && items.map(item => {
            return <li className='list-group-item d-flex justify-content-between'>{item}
              <button class="btn"><i class="fa fa-trash right"></i></button>
            </li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
