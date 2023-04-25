/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import itemsData from '../../data/items';
import ShoppingListApp from '../ShoppingListApp';
import Form from '../Form';
import './styles.scss';

function App() {
  const [items, setItems] = useState(itemsData);

  // Dès que je change mon state, je mets à jour la liste dans le LocalStorage
  useEffect(() => {
    localStorage.setItem('itemsList', JSON.stringify(items));
  }, [items]);

  // Au chargement de l'application, je charge la liste d'objets présente dans le LocalStorage vers mon state
  useEffect(() => {
    const storedItems = localStorage.getItem('itemsList');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  const handleIncrementeItem = (name: string) => {
    // On récupère l'index de l'élément dans le JSON par son nom qu'on obtient lors du click, puis on incrémente cet élément dans le state
    const itemToIncremente = name;
    const newItems = [...items];
    const index = newItems.findIndex((element) => element.name === itemToIncremente);
    newItems[index].quantity += 1;
    setItems(newItems);
  };

  const handleDecrementeItem = (name: string) => {
    // On récupère l'index de l'élément dans le JSON par son nom qu'on obtient lors du click, puis on décrémente cet élément
    const itemToIncremente = name;
    const newItems = [...items];
    const index = newItems.findIndex((element) => element.name === itemToIncremente);
    newItems[index].quantity -= 1;

    // Si la nouvelle quantité atteint 0, on retire l'élément du JSON
    if (newItems[index].quantity === 0) {
      newItems.splice(index, 1);
    }

    // On met à jour le state avec la nouvelle valeur
    setItems(newItems);
  };

  // La fonction utilisée pour ajouter un objet à la liste.
  const handleAddItem = (itemLabel: string) => {
    // Je crée le nouvel objet en récupérant le nom entré dans le formulaire, et en lui attribuant la quantité de 1
    const newItem = {
      name: itemLabel,
      quantity: 1,
    };

    // Je déverse mon nouvel objet dans la liste existante
    const newItemsList = [
      ...items, newItem,
    ];

    // Je charge le state avec la liste mise à jour
    setItems(newItemsList);
  };

  return (
    <div className="app">
      <ShoppingListApp
        items={items}
        onIncrementeItem={handleIncrementeItem}
        onDecrementeItem={handleDecrementeItem}
      />

      <Form
        onSubmitForm={handleAddItem}
      />
    </div>
  );
}

export default App;
