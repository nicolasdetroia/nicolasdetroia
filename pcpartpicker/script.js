const pcParts = {
    "CPUs": [
        {"name": "AMD Ryzen 5 5600X", "price": 200, "rating": 4.8, "affiliate": "https://www.amazon.com/..."},
        {"name": "AMD Ryzen 7 7800X", "price": 350, "rating": 4.9, "affiliate": "https://www.amazon.com/..."},
        // Add more CPUs
    ],
    "GPUs": [
        {"name": "NVIDIA RTX 3060", "price": 400, "rating": 4.5, "affiliate": "https://www.amazon.com/..."},
        {"name": "AMD RX 6700 XT", "price": 480, "rating": 4.6, "affiliate": "https://www.amazon.com/..."},
        // Add more GPUs
    ],
    "Motherboards": [
        {"name": "ASUS ROG Strix B550-F", "price": 180, "rating": 4.7, "affiliate": "https://www.amazon.com/..."},
        {"name": "MSI MPG Z490 Gaming Edge", "price": 200, "rating": 4.6, "affiliate": "https://www.amazon.com/..."},
        // Add more Motherboards
    ],
    // Add RAM, Storage, Cases, Power Supplies, Peripherals, and Games/Productivity
};

function getRecommendations(budget) {
    const recommendations = {};
    for (const category in pcParts) {
        recommendations[category] = pcParts[category].filter(part => part.price <= budget);
    }
    return recommendations;
}

document.getElementById('get-recommendations').addEventListener('click', () => {
    const budget = parseInt(document.getElementById('budget-input').value);
    const recommendations = getRecommendations(budget);
    displayRecommendations(recommendations);
});

function displayRecommendations(recommendations) {
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '';

    for (const category in recommendations) {
        if (recommendations[category].length > 0) {
            recommendationsDiv.innerHTML += `<h3>${category}</h3>`;
            recommendations[category].forEach(part => {
                recommendationsDiv.innerHTML += `
                    <div class="part">
                        <span>${part.name} - $${part.price} (Rating: ${part.rating})</span>
                        <a href="${part.affiliate}" target="_blank">Buy</a>
                    </div>
                `;
            });
        }
    }
}
