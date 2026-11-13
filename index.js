const express = require('express');
const app = express();
const keuanganRoutes = require('./routes/keuanganRoutes');

app.use(express.json());
app.use(express.static('public'));
app.use('/api/pemasukan', keuanganRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});