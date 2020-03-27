// ============================================
//   Puerto
// ============================================
process.env.PORT = process.env.PORT || 3000;
// ============================================
//   Entorno
// ============================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
// ============================================
//   Fecha de expiracion del TOKEN
// ============================================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
// ============================================
//   SEED del TOKEN
// ============================================
process.env.SEED = process.env.SEED || 'este-el-seed-de-desarrollo';
// ============================================
//   Base de Datos
// ============================================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;
// ============================================
//   Google Client ID
// ============================================
process.env.CLIENT_ID = process.env.CLIENT_ID || '469901167030-qvbu5udbrcl6ailsvvkq1v4o2grh9g12.apps.googleusercontent.com';