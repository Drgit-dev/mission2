import './style.css';
import { fetchCharacters } from './api/harryPotter.js';
import { filterAndFormatCharacters } from './utils/format.js';
import { showLoading, showError } from './ui/states.js';
import { renderCharacters } from './ui/render.js';

// Seleccionamos los nodos
const appContainer = document.querySelector('#app');
const filterSelect = document.querySelector('#house-filter');

let allCharacters = []; // Guardamos todos los personajes en memoria

async function init() {
  showLoading(appContainer);
  
  try {
    const rawData = await fetchCharacters();
    allCharacters = rawData;
    
    // Primera pintura (todos)
    updateUI('all');
    
  } catch (error) {
    showError(appContainer, error.message);
  }
}

function updateUI(house) {
  // Transformamos los datos según el filtro
  const processedData = filterAndFormatCharacters(allCharacters, house);
  // Los pintamos
  renderCharacters(appContainer, processedData);
}

// Event listener para el filtro
filterSelect.addEventListener('change', (e) => {
  updateUI(e.target.value);
});

// Arrancamos
init();