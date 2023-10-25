const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) {
    return [];
  }

  const apiResults = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  if (!apiResults.ok) {
    throw new Error(`breeds ${animal} fetch not ok`);
  }

  return apiResults.json();
};

export default fetchBreedList;
