// Usamos filter y map de forma idiomática
export function filterAndFormatCharacters(characters, houseFilter) {
  if (!Array.isArray(characters)) return [];

  return characters
    .filter(char => char.name) // Evitar personajes sin nombre (robustez)
    .filter(char => houseFilter === 'all' || char.house === houseFilter)
    .map(char => {
      return {
        id: char.id,
        name: char.name,
        // Si no tiene casa, asignamos 'Sin casa'
        house: char.house || 'Sin casa',
        // Si no tiene imagen, ponemos un placeholder
        image: char.image || 'https://via.placeholder.com/150?text=No+Image',
        actor: char.actor || 'Desconocido',
        alive: char.alive
      };
    })
    // Ordenamos alfabéticamente usando .sort (mutamos el nuevo array, es seguro)
    .sort((a, b) => a.name.localeCompare(b.name));
}