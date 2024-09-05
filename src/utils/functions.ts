export const getIngredientsAndMeasures = (drink: { [x: string]: any }) => {
  const ingredients = [];
  const measures = [];

  if (drink) {
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`];
      const measure = drink[`strMeasure${i}`];

      if (ingredient) {
        ingredients.push(ingredient);
      }

      if (measure) {
        measures.push(measure);
      }
    }
  }

  return { ingredients, measures };
};

