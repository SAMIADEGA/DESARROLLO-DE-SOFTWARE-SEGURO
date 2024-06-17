const createUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Verificar si el usuario que realiza la solicitud tiene rol de administrador
    if (req.role !== 'admin') {
      return res.status(403).json({ message: 'No tienes permisos para realizar esta acción' });
    }

    // Lógica para crear un nuevo usuario
    // ...
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = {
  createUser
};
const createEquipmentState = async (req, res) => {
  // Verificar si el usuario que realiza la solicitud tiene rol de administrador
  if (req.role !== 'admin') {
    return res.status(403).json({ message: 'No tienes permisos para realizar esta acción' });
  }

  // Lógica para crear un nuevo estado de equipo
  // ...
};

const createBrand = async (req, res) => {
  // Verificar si el usuario que realiza la solicitud tiene rol de administrador
  if (req.role !== 'admin') {
    return res.status(403).json({ message: 'No tienes permisos para realizar esta acción' });
  }

  // Lógica para crear una nueva marca
  // ...
};

const createEquipmentType = async (req, res) => {
  // Verificar si el usuario que realiza la solicitud tiene rol de administrador
  if (req.role !== 'admin') {
    return res.status(403).json({ message: 'No tienes permisos para realizar esta acción' });
  }

  // Lógica para crear un nuevo tipo de equipo
  // ...
};