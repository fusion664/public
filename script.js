let solde = 0;

// Fonction pour générer des retraits simulés
function simulerRetraits() {
    const retraits = [
        "Oumar Thiam a retiré 4 200 000 FCFA 🎉✨",
        "Binta Sow a retiré 2 300 000 FCFA 🎉✨",
        "Fatou Diop a retiré 3 500 000 FCFA 🎉✨",
        "Mamadou Kone a retiré 36 500 000 GNF 🎉✨",
        "Bicici Maiga a retiré 4 200 000 FCFA 🎉✨",
        "Ibrahim Maye a retiré 10 200 000 FCFA 🎉✨",
        "Cedric Ndoumbe a retiré 8 200 000 FCFA 🎉✨",
        "Yaya Bello a retiré 1850 $🎉✨",
    ];

    const retraitContainer = document.getElementById('retraits-simulation');
    retraitContainer.innerHTML = "";

    for (let i = 0; i < 2; i++) {
        const retrait = document.createElement('div');
        retrait.textContent = retraits[Math.floor(Math.random() * retraits.length)];
        retraitContainer.appendChild(retrait);
    }
}

// Mettre à jour le prix BTC/USDT
function updatePrice() {
    const prixActuel = Math.floor(Math.random() * (70000 - 60000 + 1)) + 60000; // Prix aléatoire entre 60K et 70K
    const variation = Math.random() > 0.5 ? `+${(Math.random() * 5).toFixed(2)}%` : `-${(Math.random() * 5).toFixed(2)}%`;
    
    document.getElementById('prix-actuel').textContent = `${prixActuel} USDT`;
    document.getElementById('variation').textContent = variation;
    document.getElementById('variation').style.color = variation.includes('+') ? 'green' : 'red';
}

// Gestion des boutons Acheter et Vendre
document.getElementById('acheter-btn').addEventListener('click', () => {
    if (solde === 0) {
        alert("Solde insuffisant, veuillez recharger votre solde !");
    } else {
        const montant = prompt("Entrez le montant d'achat :");
        if (montant > solde) {
            alert("Montant trop élevé !");
        } else {
            solde -= montant;
            document.getElementById('montant-solde').textContent = `${solde} `;
            alert("Achat effectué avec succès !");
        }
    }
});

document.getElementById('vendre-btn').addEventListener('click', () => {
    if (solde === 0) {
        alert("Solde insuffisant, veuillez investir d'abord !");
    } else {
        const montant = prompt("Entrez le montant à vendre :");
        alert(`Vente de ${montant} XOF effectuée.`);
    }
});

// Bouton Retirer
document.getElementById('retrait-btn').addEventListener('click', () => {
    if (solde === 0) {
        alert("Veuillez investir avant de retirer.");
    } else {
        window.location.href = "retrait.html";
    }
});

// Initialiser les mises à jour automatiques
setInterval(simulerRetraits, 10000); // Changer les retraits toutes les 10s
setInterval(updatePrice, 10000); // Mettre à jour le prix toutes les 10s
updatePrice();
simulerRetraits();
