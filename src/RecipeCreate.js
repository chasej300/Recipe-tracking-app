import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers <input type="text">Name</input>

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState({...initialFormState});

  const handleChange =({target}) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormState});
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" type="text" id="name" placeholder="Name" onChange={handleChange} value={formData.name} />
            </td>
            <td>
              <input name="cuisine" type="text" id="cuisine" placeholder="Cuisine" onChange={handleChange} value={formData.cuisine} />
            </td>
            <td>
              <input name="photo" type="url" id="photo" placeholder="URL" onChange={handleChange} value={formData.photo} />
            </td>
            <td>
              <textarea name="ingredients" type="text" id="ingredients" placeholder="Ingredients" onChange={handleChange} value={formData.ingredients}></textarea>
            </td>
            <td>
              <textarea name="preparation" type="text" id="preparation" placeholder="Preparation" onChange={handleChange} value={formData.preparation}></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
