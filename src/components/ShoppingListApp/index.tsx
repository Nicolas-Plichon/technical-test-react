/* eslint-disable max-len */
import './styles.scss';

interface Iitem {
  name: string
  quantity: number
}

interface ItemsProps {
  items: Iitem[]
  onIncrementeItem: (name: string) => void
  onDecrementeItem: (name: string) => void
}

function ShoppingListApp({ items, onIncrementeItem, onDecrementeItem }: ItemsProps) {
  // on récupère les fonction d'incrément et de décément depuis le componsant App
  const handleIncrementeItem = (item: string) => {
    onIncrementeItem(item);
  };

  const handleDecrementeItem = (item: string) => {
    onDecrementeItem(item);
  };

  return (
    // On affiche une liste non ordonnée, avec une ligne par élément du JSON
    <ul className="itemsList">
      {items
        .sort((a, b) => b.quantity - a.quantity) // je trie les éléments du JSON par quantité décroissante
        .map((item) => ( // je map pour créer une ligne par élément du JSON
          <li key={item.name} className="itemsList__line">
            <div className="itemsList__name-qty">

              <span className="itemsList__name">
                {item.name}
              </span>
              <span className="itemsList__quantity">
                {' '}
                -
                {' '}
                {item.quantity}
              </span>
            </div>

            <div className="buttons">
              <button // Bouton "+"
                type="button"
                onClick={() => handleIncrementeItem(item.name)}
              >
                +
              </button>

              <button // Bouton "-"
                type="button"
                onClick={() => handleDecrementeItem(item.name)}
              >
                -
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default ShoppingListApp;
