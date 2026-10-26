export function showLoading(container) {
  container.innerHTML = `
    <div class="loading">
      <div class="spinner"></div>
      <p>Invocando el mapa del merodeador...</p>
    </div>
  `;
}

export function showError(container, message) {
  container.innerHTML = `
    <div class="error">
      <p>🪄 ¡Expelliarmus! Algo salió mal.</p>
      <p class="error-detail">${message}</p>
      <button onclick="window.location.reload()">Reintentar</button>
    </div>
  `;
}