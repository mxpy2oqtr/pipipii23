// Cargar información del usuario
document.addEventListener('DOMContentLoaded', function () {
  const userName = localStorage.getItem('userName') || 'Usuario';
  const userEmail = localStorage.getItem('userEmail') || 'usuario@email.com';
  const userGoal = localStorage.getItem('userGoal') || 'No especificado';

  document.getElementById('userName').textContent = userName;
  document.getElementById('userEmail').textContent = userEmail;

  // Traducir objetivo a texto legible
  const goalTranslations = {
    'weight-loss': 'Pérdida de peso',
    fitness: 'Mejorar condición física',
    'health-monitoring': 'Monitoreo de salud',
    nutrition: 'Mejorar alimentación',
    'stress-management': 'Manejo del estrés',
    other: 'Otro objetivo personalizado',
  };

  const displayGoal = goalTranslations[userGoal] || userGoal;
  document.getElementById('userGoal').textContent = displayGoal;
});
