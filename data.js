/* Datos ficticios para la interfaz de Base.html.
   Aquí se simulan las colecciones que normalmente vendrían de una base de datos.
*/
const mockData = {
  medicos: [
    { id: 'med1', nombre: 'Dra. Ana Morales', especialidad: 'Cardiología', horario: 'Lun a Vie 09:00-15:00', consultorio: 'A1', telefono: '5543128901', email: 'ana.morales@clinica.com' },
    { id: 'med2', nombre: 'Dr. Luis Ramírez', especialidad: 'Pediatría', horario: 'Lun a Vie 10:00-16:00', consultorio: 'B3', telefono: '5543987654', email: 'luis.ramirez@clinica.com' },
    { id: 'med3', nombre: 'Dra. Karla Sánchez', especialidad: 'Dermatología', horario: 'Mar a Sab 09:30-14:30', consultorio: 'C2', telefono: '5543678123', email: 'karla.sanchez@clinica.com' },
    { id: 'med4', nombre: 'Dr. Jorge Martínez', especialidad: 'Medicina General', horario: 'Lun a Vie 08:00-13:00', consultorio: 'D4', telefono: '5543322110', email: 'jorge.martinez@clinica.com' },
    { id: 'med5', nombre: 'Dra. Patricia López', especialidad: 'Ginecología', horario: 'Mar a Vie 11:00-17:00', consultorio: 'E5', telefono: '5543212345', email: 'patricia.lopez@clinica.com' },
    { id: 'med6', nombre: 'Dr. Marco Torres', especialidad: 'Neurología', horario: 'Lun, Mié, Vie 12:00-18:00', consultorio: 'F1', telefono: '5543098765', email: 'marco.torres@clinica.com' },
    { id: 'med7', nombre: 'Dra. Elsa Guerra', especialidad: 'Endocrinología', horario: 'Lun a Jue 10:00-15:00', consultorio: 'G6', telefono: '5543981234', email: 'elsa.guerra@clinica.com' },
    { id: 'med8', nombre: 'Dr. Iván Calderón', especialidad: 'Traumatología', horario: 'Mar a Sab 09:00-14:00', consultorio: 'H3', telefono: '5543765432', email: 'ivan.calderon@clinica.com' },
    { id: 'med9', nombre: 'Dra. Marta Franco', especialidad: 'Oftalmología', horario: 'Lun a Vie 14:00-20:00', consultorio: 'I2', telefono: '5543034567', email: 'marta.franco@clinica.com' },
    { id: 'med10', nombre: 'Dr. Raúl Vázquez', especialidad: 'Psiquiatría', horario: 'Mié a Vie 13:00-19:00', consultorio: 'J1', telefono: '5543123456', email: 'raul.vazquez@clinica.com' }
  ],
  pacientes: [
    { id: 'pac1', nombre: 'Sofía Pérez', edad: 28, telefono: '5551122334', fecha_nac: '1998-02-14', direccion: 'Calle Primavera 34', genero: 'Femenino' },
    { id: 'pac2', nombre: 'Diego Ramírez', edad: 45, telefono: '5554455667', fecha_nac: '1979-11-02', direccion: 'Av. Reforma 120', genero: 'Masculino' },
    { id: 'pac3', nombre: 'Lucía Gutiérrez', edad: 33, telefono: '5557788990', fecha_nac: '1991-06-20', direccion: 'Calle Lirio 67', genero: 'Femenino' },
    { id: 'pac4', nombre: 'Mateo Hernández', edad: 52, telefono: '5552233445', fecha_nac: '1972-09-08', direccion: 'Boulevard Central 210', genero: 'Masculino' },
    { id: 'pac5', nombre: 'Valentina Soto', edad: 19, telefono: '5556677889', fecha_nac: '2004-03-29', direccion: 'Calle Azafrán 12', genero: 'Femenino' },
    { id: 'pac6', nombre: 'Carlos Díaz', edad: 60, telefono: '5553344556', fecha_nac: '1964-12-01', direccion: 'Av. Libertad 8', genero: 'Masculino' },
    { id: 'pac7', nombre: 'Gabriela Torres', edad: 41, telefono: '5559988776', fecha_nac: '1982-07-15', direccion: 'Calle Girasol 89', genero: 'Femenino' },
    { id: 'pac8', nombre: 'Bruno Nájera', edad: 25, telefono: '5555566778', fecha_nac: '1999-01-05', direccion: 'Calle Nardo 32', genero: 'Masculino' },
    { id: 'pac9', nombre: 'Camila Fuentes', edad: 37, telefono: '5551011121', fecha_nac: '1987-05-28', direccion: 'Calle Magnolia 15', genero: 'Femenino' },
    { id: 'pac10', nombre: 'Raúl Medina', edad: 48, telefono: '5551314151', fecha_nac: '1975-10-11', direccion: 'Av. Las Torres 54', genero: 'Masculino' }
  ],
  consultas: [
    { id: 'con1', pacienteId: 'pac1', medicoId: 'med1', fecha: '2026-06-03', motivo: 'Chequeo cardiológico', estado: 'Pendiente' },
    { id: 'con2', pacienteId: 'pac4', medicoId: 'med2', fecha: '2026-06-05', motivo: 'Vacunación y consulta pediátrica', estado: 'Confirmada' },
    { id: 'con3', pacienteId: 'pac7', medicoId: 'med3', fecha: '2026-06-08', motivo: 'Revisión de lunares', estado: 'Completada' },
    { id: 'con4', pacienteId: 'pac2', medicoId: 'med4', fecha: '2026-06-10', motivo: 'Molestias generales', estado: 'Pendiente' },
    { id: 'con5', pacienteId: 'pac5', medicoId: 'med5', fecha: '2026-06-12', motivo: 'Control ginecológico anual', estado: 'Confirmada' },
    { id: 'con6', pacienteId: 'pac8', medicoId: 'med6', fecha: '2026-06-14', motivo: 'Estudio neurológico', estado: 'Pendiente' },
    { id: 'con7', pacienteId: 'pac3', medicoId: 'med7', fecha: '2026-06-16', motivo: 'Control de diabetes', estado: 'Completada' },
    { id: 'con8', pacienteId: 'pac6', medicoId: 'med8', fecha: '2026-06-18', motivo: 'Dolor articular', estado: 'Confirmada' },
    { id: 'con9', pacienteId: 'pac9', medicoId: 'med9', fecha: '2026-06-20', motivo: 'Revisión de vista', estado: 'Pendiente' },
    { id: 'con10', pacienteId: 'pac10', medicoId: 'med10', fecha: '2026-06-22', motivo: 'Consulta psicológica inicial', estado: 'Confirmada' }
  ],
  personal: [
    { id: 'per1', nombre: 'Laura Vega', rol: 'Recepcionista', horario: 'Lun a Vie 08:00-16:00', telefono: '5551415161', area: 'Admisión' },
    { id: 'per2', nombre: 'Miguel Paredes', rol: 'Enfermero', horario: 'Lun a Vie 09:00-17:00', telefono: '5551718192', area: 'Clínica' },
    { id: 'per3', nombre: 'Isabel Márquez', rol: 'Auxiliar Administrativo', horario: 'Lun a Vie 10:00-18:00', telefono: '5552021222', area: 'Archivo' },
    { id: 'per4', nombre: 'Pedro Molina', rol: 'Técnico de laboratorio', horario: 'Mar a Sab 08:30-16:30', telefono: '5552324252', area: 'Laboratorio' },
    { id: 'per5', nombre: 'Claudia Ríos', rol: 'Enfermera', horario: 'Mié a Dom 12:00-20:00', telefono: '5552627282', area: 'Urgencias' },
    { id: 'per6', nombre: 'Natalia Castro', rol: 'Coordinadora', horario: 'Lun a Vie 09:00-18:00', telefono: '5552930313', area: 'Operaciones' },
    { id: 'per7', nombre: 'José Luna', rol: 'Personal de limpieza', horario: 'Lun a Vie 06:00-14:00', telefono: '5553233343', area: 'Mantenimiento' },
    { id: 'per8', nombre: 'Patricia Solís', rol: 'Nutrióloga', horario: 'Lun, Mié, Vie 14:00-19:00', telefono: '5553536373', area: 'Nutrición' },
    { id: 'per9', nombre: 'Cristina Ramallo', rol: 'Psicóloga', horario: 'Mar a Vie 09:00-15:00', telefono: '5553839404', area: 'Salud mental' },
    { id: 'per10', nombre: 'Raúl Ortega', rol: 'Chofer', horario: 'Lun a Vie 07:00-15:00', telefono: '5554142434', area: 'Logística' }
  ]
};
