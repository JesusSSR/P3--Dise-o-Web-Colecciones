const endpoints = {
  medicos: '/api/medicos',
  pacientes: '/api/pacientes',
  consultas: '/api/consultas',
  personal: '/api/personal'
};

const getData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    const key = endpoint.replace('/api/', '');
    return mockData[key] || [];
  }
};

const renderList = (containerId, items, fields) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!items.length) {
    container.innerHTML = '<p class="empty-state">No hay datos disponibles en este momento.</p>';
    return;
  }

  const header = `<tr>${fields.map(field => `<th>${field.label}</th>`).join('')}</tr>`;
  const body = items.map(item => {
    return `<tr>${fields.map(field => {
      const rawValue = item[field.key];
      const value = rawValue !== undefined && rawValue !== null ? rawValue : '—';
      return `<td>${value}</td>`;
    }).join('')}</tr>`;
  }).join('');

  container.innerHTML = `
    <div class="table-panel">
      <table class="records-table">
        <thead>${header}</thead>
        <tbody>${body}</tbody>
      </table>
    </div>
  `;
};

const fetchData = async (endpoint, containerId, fields) => {
  try {
    const data = await getData(endpoint);
    renderList(containerId, data, fields);
  } catch (error) {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = `<p class="empty-state">Error al cargar los datos. ${error.message}</p>`;
    }
  }
};

const collectionFields = {
  medicos: [
    { key: 'nombre', label: 'Nombre' },
    { key: 'especialidad', label: 'Especialidad' },
    { key: 'horario', label: 'Horario' },
    { key: 'consultorio', label: 'Consultorio' },
    { key: 'telefono', label: 'Teléfono' },
    { key: 'email', label: 'Email' }
  ],
  pacientes: [
    { key: 'nombre', label: 'Nombre' },
    { key: 'edad', label: 'Edad' },
    { key: 'telefono', label: 'Teléfono' },
    { key: 'fecha_nac', label: 'Nacimiento' },
    { key: 'direccion', label: 'Dirección' },
    { key: 'genero', label: 'Género' }
  ],
  consultas: [
    { key: 'fecha', label: 'Fecha' },
    { key: 'motivo', label: 'Motivo' },
    { key: 'estado', label: 'Estado' },
    { key: 'pacienteId', label: 'Paciente ID' },
    { key: 'medicoId', label: 'Médico ID' }
  ]
};

const loadAllData = () => {
  fetchData(endpoints.medicos, 'medicosList', collectionFields.medicos);
  fetchData(endpoints.pacientes, 'pacientesList', collectionFields.pacientes);
  fetchData(endpoints.consultas, 'consultasList', collectionFields.consultas);
};

const bindForm = () => {
  const form = document.getElementById('appointmentForm');
  if (!form) return;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const pacienteId = form.pacienteId.value.trim();
    const medicoId = form.medicoId.value.trim();
    const fecha = form.fecha.value;
    const motivo = form.motivo.value.trim();

    const payload = { pacienteId, medicoId, fecha, motivo };
    const response = await fetch(endpoints.consultas, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    const status = document.getElementById('appointmentStatus');
    if (response.ok) {
      status.textContent = 'Tu consulta fue registrada con éxito y queda en estado Pendiente.';
      status.className = 'status success';
      form.reset();
      loadAllData();
    } else {
      status.textContent = result.error || 'No se pudo registrar la solicitud. Revisa los datos.';
      status.className = 'status error';
    }
  });
};

window.addEventListener('DOMContentLoaded', () => {
  loadAllData();
  bindForm();
});
