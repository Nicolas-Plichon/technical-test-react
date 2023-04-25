# technical-test-react

Bonjour,

Afin d'aller plus loin avec votre candidature, je vous invite à compléter le test "frontend" ci-dessous.

ShoppingListApp

You have a ShoppingListApp React component, which receives an initial list of items, each one with name and quantity.

Your app should render an ordered list (most to less quantity), with a list item for each shopping item.
Item quantity can be incremented or decremented.

By appropriately using React state and props, implement the increment and decrement logic.
Keep the state in the topmost component, while the ShoppingItem component should accept props.

For example, passing the following array as items prop to ShoppingListApp [{ name: "Banana", quantity: 15 }, { name: "Egg", quantity: 13 }, { name: "Apple", quantity: 13 }] and clicking the '+' button next to the "Apple" should result in HTML like:

Banana - quantity: 15+ -
Apple - quantity: 14+ -
Egg - quantity: 13+ -
When a quantity drops to zero, related items should be removed from the list.

As a second part of this test, you'll add a basic form that allows you to add new items at the end of the list.

The name input should nicely replace non-ASCII characters with appropriate ASCII characters upon typing. For example, when typing "Self défense", the prompt should contain "Self defense".

Additionally, draft inputs are saved locally on the browser and survive to a page refresh.

For this test,
You'll use ReactJS
Prefer typescript over javascript
Style-related tools (SaSS, Less, styled-components) are OK and encouraged.
However, design systems (Antd, Bootstrap, Bulma, Tailwind, etc..) are discouraged.
Other 3rd-party packages are discouraged too.