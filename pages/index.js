import Head from 'next/head'
import { useState, useEffect } from 'react';


import Nav from '../components/Nav/Nav.js'
import Category from '../components/Category/Category.js'

import { groceries } from '../redux/store/index.js'

export default function Home() {

  const [groceryObjects, setGroceryObjects] = useState({});

  useEffect(() => {
    createGroceryObjectsInitialState(groceries)
  }, [groceries]);
  
  function createGroceryObjectsInitialState(groceryObject) {
    let groceryObjectsInitialState = {};
    for (let category of groceryObject) {
      for (let item of category.items) {
        groceryObjectsInitialState[item] = 0;
      };
    };
    setGroceryObjects(groceryObjectsInitialState);
  };

  function onFormChange (ev) {
    const {name, value} = ev.target;
    const groceryObjectsCopy = {...groceryObjects};
    setGroceryObjects({
      ...groceryObjectsCopy,
      [name]: value,
    });
  };

  return (
    <div >
      <Head>
        <title>Your shopping list</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav groceryObjects={groceryObjects}/>
      <main>
      <section className="text-gray-600 body-font">
        {groceries.map(category => (
            <Category
            category={category.category}
            key={category.category}
            description={category.description}
            items={category.items}
            onFormChange={onFormChange} />
        ))}
      </section>
      </main>

    </div>
  )
}
