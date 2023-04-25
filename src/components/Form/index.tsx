/* eslint-disable max-len */
import { useState } from 'react';

interface FormProps {
  onSubmitForm: (formLabel: string) => void
}

function Form({ onSubmitForm }: FormProps) {
  // On utilise le state du formulaire pour gérer le contenu de l'input contrôlé du formulaire
  const [formLabel, setFormLabel] = useState('');

  // On crée une fonction, qu'on utilisera lors des modifications de l'input, qui remplace les caractères spéciaux
  function replaceSpecialCharacters(input: string): string {
    return input
      .replace(/[éèêë]/g, 'e')
      .replace(/[àâä]/g, 'a')
      .replace(/[ùûü]/g, 'u')
      .replace(/[ôö]/g, 'o');
    // Il est possible d'ajouter d'autres caractères à remplacer, en ajoutant d'autres .replace
  }

  const handleChangeFormLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = replaceSpecialCharacters(event.target.value); // Chaque caractère qui est entré est modifié s'il fait partie de ceux définis dans la fonction
    const newValue = value;
    setFormLabel(newValue);
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // J'annule le comportement par défaut du submit (le rechargement de la page)
    onSubmitForm(formLabel); // Je transmets la valeur du formulaire à ma fonction, passée depuis l'App
    setFormLabel(''); // Je vide le champ du formulaire
  };

  return (
    <form
      className="addItemForm"
      onSubmit={handleSubmitForm}
    >
      <input
        type="text"
        className="addItemForm-item"
        placeholder="Ajouter un article à la liste"
        value={formLabel}
        onChange={handleChangeFormLabel}
      />

      <button
        type="submit"
        onClick={() => handleSubmitForm}
      >
        Ajouter
      </button>

    </form>
  );
}

export default Form;
