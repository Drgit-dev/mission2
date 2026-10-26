export function renderCharacters(container, characters) {
  if (characters.length === 0) {
    container.innerHTML = `<p class="empty">No se encontraron magos con esos filtros.</p>`;
    return;
  }

  // Usamos template literals y map para generar el HTML
  const html = characters.map(char => `
    <article class="card">
      <img src="${char.image}" alt="${char.name}" loading="lazy" />
      <div class="card-content">
        <h2>${char.name}</h2>
        <p class="house ${char.house.toLowerCase().replace(' ', '-')}">
          ${char.house}
        </p>
        <p class="actor">Interpretado por: ${char.actor}</p>
        <p class="status">${char.alive ? '🟢 Vivo' : '💀 Finado'}</p>
      </div>
    </article>
  `).join(''); // El join('') es crucial para quitar las comas del array

  container.innerHTML = html;
}