const { verifyToken } = require('./middlewares/auth');
// Inventarios
router.route('/inventarios')
  .post(verifyToken, createInventory)
  .get(verifyToken, getAllInventories);

// Estados de equipos
router.route('/estados-equipos')
  .post(verifyToken, createEquipmentState)
  .get(verifyToken, getAllEquipmentStates);

// Marcas
router.route('/marcas')
  .post(verifyToken, createBrand)
  .get(verifyToken, getAllBrands);

// Tipos de equipos
router.route('/tipos-equipos')
  .post(verifyToken, createEquipmentType)
  .get(verifyToken, getAllEquipmentTypes);

  const createInventory = async (req, res) => {
    // Verifica si el usuario tiene el rol de administrador
    if (req.role !== 'admin') {
      return res.status(403).json({ message: 'Acceso denegado' });
    }
  
    // Lógica para crear un nuevo inventario
    // ...
  };