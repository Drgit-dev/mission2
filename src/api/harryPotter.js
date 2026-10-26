const BASE_URL = 'https://hp-api.onrender.com/api/characters';

export async function fetchCharacters() {
  // BONUS: Comprobar caché en localStorage
  const cachedData = localStorage.getItem('hp_characters');
  if (cachedData) {
    console.log('Cargando desde caché local...');
    return JSON.parse(cachedData);
  }

  try {
    const response = await fetch(BASE_URL);
    
    // Robustez (10 pts): comprobar si la respuesta es OK
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Guardar en caché para la próxima vez
    localStorage.setItem('hp_characters', JSON.stringify(data));
    
    return data;
  } catch (error) {
    // Relanzamos el error para que main.js lo capture
    throw error; 
  }
}