const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'docente'], required: true }
});

router.route('/users')
  .post(verifyToken, isAdmin, createUser)
  .get(verifyToken, isAdmin, getAllUsers);
  const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Verificar si el rol es válido
    if (!['admin', 'docente'].includes(role)) {
      return res.status(400).json({ message: 'Rol inválido' });
    }

    // Crear un nuevo usuario
    const newUser = new User({ email, password, role });
    await newUser.save();

    res.status(201).json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = {
  createUser
};
