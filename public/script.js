fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log('Datos cargados:', data))
  .catch(err => console.error('Error al cargar datos:', err));