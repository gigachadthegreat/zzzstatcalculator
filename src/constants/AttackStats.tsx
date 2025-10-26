import type { CharacterAttack } from "./types";

export const AttackStats: CharacterAttack[] = [
    {
        characterName: "Nicole",
        attackStats: [
            // BASIC
            { attackName: "Basic: Cunning Combo - 1", attackType: "BASIC", Level1Damage: 65.9, growthPerLevel: 6 },
            { attackName: "Basic: Cunning Combo - 2", attackType: "BASIC", Level1Damage: 71.3, growthPerLevel: 6.5 },
            { attackName: "Basic: Cunning Combo - 3", attackType: "BASIC", Level1Damage: 304.3, growthPerLevel: 27.3 },
            { attackName: "Basic: Do As I Please - 1", attackType: "BASIC", Level1Damage: 88.1, growthPerLevel: 8.1 },
            { attackName: "Basic: Do As I Please - 2", attackType: "BASIC", Level1Damage: 100.9, growthPerLevel: 9.3 },
            { attackName: "Basic: Do As I Please - 2", attackType: "BASIC", Level1Damage: 452.3, growthPerLevel: 41.3 },
            // DASH
            { attackName: "Dash: Jack in the Box - Forward", attackType: "DASH", Level1Damage: 158.2, growthPerLevel: 14.2 },
            { attackName: "Dash: Jack in the Box - Backward", attackType: "DASH", Level1Damage: 60.0, growthPerLevel: 5.5 },
            // DODGE
            { attackName: "Dodge: Diverted Bombard", attackType: "DASH", Level1Damage: 182.4, growthPerLevel: 17.6 },
            // ASSIST
            { attackName: "Quick Assist: Emergency Bombard", attackType: "ASSIST", Level1Damage: 63.40, growthPerLevel: 5.8 },
            { attackName: "Assist Follow-Up: Window of Opportunity", attackType: "ASSIST", Level1Damage: 377.10, growthPerLevel: 34.3 },
            // SPECIAL
            { attackName: "Special: Sugarcoated Bullet", attackType: "SPECIAL", Level1Damage: 52.60, growthPerLevel: 4.8 },
            // EX SPECIAL
            { attackName: "EX Special: Stuffed Sugarcoated Bullet - Total Uncharged", attackType: "EXSPECIAL", Level1Damage: 602.1, growthPerLevel: 54.8 },
            { attackName: "EX Special: Stuffed Sugarcoated Bullet - Total Charged", attackType: "EXSPECIAL", Level1Damage: 817.3, growthPerLevel: 74.4 },
            { attackName: "EX Special: Stuffed Sugarcoated Bullet - Charged", attackType: "EXSPECIAL", Level1Damage: 215.20, growthPerLevel: 19.6 },
            { attackName: "EX Special: Stuffed Sugarcoated Bullet - Bombard ", attackType: "EXSPECIAL", Level1Damage: 215.10, growthPerLevel: 19.6 },
            { attackName: "EX Special: Stuffed Sugarcoated Bullet - Energy Field ", attackType: "EXSPECIAL", Level1Damage: 387.00, growthPerLevel: 35.2 },
            // CHAIN
            { attackName: "Chain: Ether Shellacking - Total", attackType: "CHAIN", Level1Damage: 492.6, growthPerLevel: 45 },
            { attackName: "Chain: Ether Shellacking - Bombard", attackType: "CHAIN", Level1Damage: 209.60, growthPerLevel: 19.2 },
            { attackName: "Chain: Ether Shellacking - Energy Field", attackType: "CHAIN", Level1Damage: 283.00, growthPerLevel: 25.8 },
            // ULT
            { attackName: "Ultimate: Ether Grenade - Total", attackType: "ULT", Level1Damage: 1520, growthPerLevel: 138.2 },
            { attackName: "Ultimate: Ether Grenade - Bombard", attackType: "ULT", Level1Damage: 646.80, growthPerLevel: 58.8 },
            { attackName: "Ultimate: Ether Grenade - Energy Field", attackType: "ULT", Level1Damage: 873.20, growthPerLevel: 79.4 },
            
        ],
    },
];
