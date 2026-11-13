const db = require('../config/db');
exports.getAllPemasukan = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM pemasukan');
        res.status(200).json({
            success: true,
            message: 'Berhasil mengambil data pemasukan',
            data: rows
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getPemasukanById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.query('SELECT * FROM pemasukan WHERE id = ?', [id]);
        
        if (rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Data tidak ditemukan' });
        }

        res.status(200).json({ success: true, data: rows[0] });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.createPemasukan = async (req, res) => {
    try {
        const { keterangan, jumlah } = req.body;
        const [result] = await db.query(
            'INSERT INTO pemasukan (keterangan, jumlah) VALUES (?, ?)',
            [keterangan, jumlah]
        );

        res.status(201).json({
            success: true,
            message: 'Data pemasukan berhasil ditambahkan',
            data: { id: result.insertId, keterangan, jumlah }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.updatePemasukan = async (req, res) => {
    try {
        const { id } = req.params;
        const { keterangan, jumlah } = req.body;

        const [result] = await db.query(
            'UPDATE pemasukan SET keterangan = ?, jumlah = ? WHERE id = ?',
            [keterangan, jumlah, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Data tidak ditemukan' });
        }

        res.status(200).json({
            success: true,
            message: 'Data pemasukan berhasil diubah'
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.deletePemasukan = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.query('DELETE FROM pemasukan WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Data tidak ditemukan' });
        }

        res.status(200).json({
            success: true,
            message: 'Data pemasukan berhasil dihapus'
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};