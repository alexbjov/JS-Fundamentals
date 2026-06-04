function solve(lostFightsCount, helmetPrice, swordPrice,
    shieldPrice, armorPrice) {

    let totalHelmetPrice = 0;
    let totalSwordPrice = 0;
    let totalShieldPrice = 0;
    let totalArmorPrice = 0;

    let countHelmet = 0;
    let countSword = 0;
    let countShield = 0;
    let countArmor = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) {
            countHelmet++;
        }

        if (i % 3 === 0) {
            countSword++;
        }

        if (i % 2 === 0 && i % 3 === 0 &&
            (countHelmet !== 0 || countSword !== 0)) {

            countShield++;
            if (countShield % 2 === 0) {
                countArmor++;
            }
        }
    }

    totalHelmetPrice = countHelmet * helmetPrice;
    totalSwordPrice = countSword * swordPrice;
    totalShieldPrice = countShield * shieldPrice;
    totalArmorPrice = countArmor * armorPrice;
    let total = totalHelmetPrice + totalSwordPrice + totalShieldPrice + totalArmorPrice;

    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5);
solve(23, 12.50, 21.50, 40, 200);
