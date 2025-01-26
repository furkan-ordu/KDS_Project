function calculateTOPSIS(data, weights) {
    // Normalize edilen matris
    const normalizedData = data.map(row => {
        const norm = Math.sqrt(
            row.arsa_fiyat ** 2 + row.issiz_oran ** 2 + row.ort_sicaklik ** 2
        );
        return {
            ...row,
            arsa_fiyat: row.arsa_fiyat / norm,
            issiz_oran: row.issiz_oran / norm,
            ort_sicaklik: row.ort_sicaklik / norm,
        };
    });

    // Ağırlıklandırma
    const weightedData = normalizedData.map(row => ({
        ...row,
        arsa_fiyat: row.arsa_fiyat * weights.arsa_fiyat,
        issiz_oran: row.issiz_oran * weights.issiz_oran,
        ort_sicaklik: row.ort_sicaklik * weights.ort_sicaklik,
    }));

    // İdeal ve anti-ideal çözüm
    const ideal = {
        arsa_fiyat: Math.max(...weightedData.map(row => row.arsa_fiyat)),
        issiz_oran: Math.min(...weightedData.map(row => row.issiz_oran)),
        ort_sicaklik: Math.max(...weightedData.map(row => row.ort_sicaklik)),
    };
    const antiIdeal = {
        arsa_fiyat: Math.min(...weightedData.map(row => row.arsa_fiyat)),
        issiz_oran: Math.max(...weightedData.map(row => row.issiz_oran)),
        ort_sicaklik: Math.min(...weightedData.map(row => row.ort_sicaklik)),
    };

    // Uzaklık hesaplama
    const results = weightedData.map(row => {
        const idealDistance = Math.sqrt(
            (ideal.arsa_fiyat - row.arsa_fiyat) ** 2 +
            (ideal.issiz_oran - row.issiz_oran) ** 2 +
            (ideal.ort_sicaklik - row.ort_sicaklik) ** 2
        );
        const antiIdealDistance = Math.sqrt(
            (antiIdeal.arsa_fiyat - row.arsa_fiyat) ** 2 +
            (antiIdeal.issiz_oran - row.issiz_oran) ** 2 +
            (antiIdeal.ort_sicaklik - row.ort_sicaklik) ** 2
        );

        return {
            il_id: row.il_id,
            score: antiIdealDistance / (idealDistance + antiIdealDistance),
        };
    });

    // Sonuçları sırala
    return results.sort((a, b) => b.score - a.score);
}

module.exports = { calculateTOPSIS };
