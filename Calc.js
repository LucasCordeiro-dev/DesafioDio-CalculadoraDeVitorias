let heroLevel = calc(109, 10);
let heroRank;

if (heroLevel < 10) {
    heroRank = "Ferro";
} else if (heroLevel >= 11 && heroLevel <= 20) {
    heroRank = "Bronze";
} else if (heroLevel >= 21 && heroLevel <= 50) {
    heroRank = "Prata";
} else if (heroLevel >= 51 && heroLevel <= 80) {
    heroRank = "Ouro";
} else if (heroLevel >= 81 && heroLevel <= 90) {
    heroRank = "Diamante";
} else if (heroLevel >= 91 && heroLevel <= 100) {
    heroRank = "Lendário";
} else {
    heroRank = "Imortal";
}

function calc(wins, looses) {
    return wins - looses;
}

console.log(`O herói tem saldo de ${heroLevel} e está no nível de ${heroRank}`);
