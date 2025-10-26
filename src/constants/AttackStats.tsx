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
    {
        characterName: "Ben",
        attackStats: [
            // BASIC
            { attackName: "Basic: Debt Reconciliation - 1", attackType: "BASIC", Level1Damage: 65.9, growthPerLevel: 6 },
            { attackName: "Basic: Debt Reconciliation - 2", attackType: "BASIC", Level1Damage: 189.00, growthPerLevel: 17.2 },
            { attackName: "Basic: Debt Reconciliation - 3", attackType: "BASIC", Level1Damage: 348.30, growthPerLevel: 31.7 },
            // DASH
            { attackName: "Dash: Incoming Expense", attackType: "DASH", Level1Damage: 138.40, growthPerLevel: 12.6 },
            // DODGE
            { attackName: "Dodge: Accounts Settled", attackType: "DASH", Level1Damage: 225.70, growthPerLevel: 20.6 },
            // ASSIST
            { attackName: "Quick Assist: Joint Account", attackType: "ASSIST", Level1Damage: 96.7, growthPerLevel: 8.8 },
            { attackName: "Assist Follow-Up: Don't Break Contract", attackType: "ASSIST", Level1Damage: 325.90, growthPerLevel: 29.7 },
            // SPECIAL
            { attackName: "Special: Fiscal Fist - Active", attackType: "SPECIAL", Level1Damage: 41.70, growthPerLevel: 3.8 },
            { attackName: "Special: Fiscal Fist - Block", attackType: "SPECIAL", Level1Damage: 233.40, growthPerLevel: 21.3 },
            // EX SPECIAL
            { attackName: "EX Special: Cashflow Counter - Active ", attackType: "EXSPECIAL", Level1Damage: 438.50, growthPerLevel: 39.9 },
            { attackName: "EX Special: Cashflow Counter - Follow-Up ", attackType: "EXSPECIAL", Level1Damage: 438.50, growthPerLevel: 39.9 },
            { attackName: "EX Special: Cashflow Counter - Block Counter ", attackType: "EXSPECIAL", Level1Damage: 500.50, growthPerLevel: 45.5 },
            { attackName: "EX Special: Cashflow Counter - Block Follow-Up ", attackType: "EXSPECIAL", Level1Damage: 551.20, growthPerLevel: 55.2 },
            // CHAIN
            { attackName: "Chain: Signed and Sealed", attackType: "CHAIN", Level1Damage: 627.30, growthPerLevel: 57.1 },
            // ULT
            { attackName: "Ultimate: Complete Payback", attackType: "ULT", Level1Damage: 1643.00, growthPerLevel: 149.4 },
            
        ],
    },
    {
        characterName: "Anby",
        attackStats: [
            // BASIC
            { attackName: "Basic: Turbo Volt - 1", attackType: "BASIC", Level1Damage: 31.2, growthPerLevel: 2.9 },
            { attackName: "Basic: Turbo Volt - 2", attackType: "BASIC", Level1Damage: 33.70, growthPerLevel: 3.1 },
            { attackName: "Basic: Turbo Volt - 3", attackType: "BASIC", Level1Damage: 113.60, growthPerLevel: 10.4 },
            { attackName: "Basic: Turbo Volt - 4", attackType: "BASIC", Level1Damage: 239.10, growthPerLevel: 21.8 },
            { attackName: "Basic: Thunderbolt", attackType: "BASIC", Level1Damage: 328.60, growthPerLevel: 29.9 },
            // DASH
            { attackName: "Dash: Taser Blast", attackType: "DASH", Level1Damage: 56.70, growthPerLevel:  5.2},
            // DODGE
            { attackName: "Dodge: Thunderclap", attackType: "DASH", Level1Damage: 180.20, growthPerLevel: 16.4 },
            // ASSIST
            { attackName: "Quick Assist: Thunderfall", attackType: "ASSIST", Level1Damage: 61.70, growthPerLevel: 12.4 },
            { attackName: "Assist Follow-Up: Lightning Whirl", attackType: "ASSIST", Level1Damage: 335.20, growthPerLevel: 30.5 },
            // SPECIAL
            { attackName: "Special: Fork Lightning", attackType: "SPECIAL", Level1Damage: 93.40, growthPerLevel: 8.5 },
            // EX SPECIAL
            { attackName: "EX Special: Lightning Bolt", attackType: "EXSPECIAL", Level1Damage: 583.00, growthPerLevel: 53 },
            // CHAIN
            { attackName: "Chain: Electro Engine", attackType: "CHAIN", Level1Damage: 542.40, growthPerLevel: 49.4 },
            // ULT
            { attackName: "Ultimate: Overdrive Engine", attackType: "ULT", Level1Damage: 1512.60, growthPerLevel: 137.6 },
            
        ],
    },
    {
        characterName: "Lucy",
        attackStats: [
            // BASIC
            { attackName: "Basic: Lady's Bat - 1", attackType: "BASIC", Level1Damage: 56.60, growthPerLevel: 5.2 },
            { attackName: "Basic: Lady's Bat - 2", attackType: "BASIC", Level1Damage: 77.80, growthPerLevel: 7.1 },
            { attackName: "Basic: Lady's Bat - 3", attackType: "BASIC", Level1Damage: 188.90, growthPerLevel: 17.2 },
            { attackName: "Basic: Lady's Bat - 4", attackType: "BASIC", Level1Damage: 272.60, growthPerLevel: 24.8 },
            
            { attackName: "Guard Boars: To Arms! - Baseball Bat", attackType: "BASIC", Level1Damage: 272.60, growthPerLevel: 8.5 },
            { attackName: "Guard Boars: To Arms! - Boxing Gloves", attackType: "BASIC", Level1Damage: 272.60, growthPerLevel: 11.6 },
            { attackName: "Guard Boars: To Arms! - Slingshot DMG", attackType: "BASIC", Level1Damage: 272.60, growthPerLevel: 16 },
            
            { attackName: "Guard Boars: Spinning Swing!", attackType: "BASIC", Level1Damage: 272.60, growthPerLevel: 22.8 },
            // DASH
            { attackName: "Dash: Fearless Boar!", attackType: "DASH", Level1Damage: 78.40, growthPerLevel: 7.2 },
            // DODGE
            { attackName: "Dodge: Returning Tusk!", attackType: "DASH", Level1Damage: 308.00, growthPerLevel: 28 },
            // ASSIST
            { attackName: "Quick Assist: Hit By Pitch!", attackType: "ASSIST", Level1Damage: 160.00, growthPerLevel: 14.6 },
            { attackName: "Assist Follow-Up: Scored a Run!", attackType: "ASSIST", Level1Damage: 349.10, growthPerLevel: 31.8 },
            // SPECIAL
            { attackName: "Special: Solid Hit! - Line Drive", attackType: "SPECIAL", Level1Damage: 61.70, growthPerLevel: 5.7 },
            { attackName: "Special: Solid Hit! - Fly Ball", attackType: "SPECIAL", Level1Damage: 69.20, growthPerLevel: 6.3 },
            // EX SPECIAL
            { attackName: "EX Special: Home Run! - Line Drive", attackType: "EXSPECIAL", Level1Damage: 508.40, growthPerLevel: 46.3 },
            { attackName: "EX Special: Home Run! - Fly Ball", attackType: "EXSPECIAL", Level1Damage: 536.40, growthPerLevel: 48.8 },
            // CHAIN
            { attackName: "Chain: Grand Slam!", attackType: "CHAIN", Level1Damage: 483.3, growthPerLevel: 44.7 },
            // ULT
            { attackName: "Ultimate: Walk-Off Home Run!", attackType: "ULT", Level1Damage: 1718.4, growthPerLevel: 156.3 },
            
        ],
    },
    {
        characterName: "Soukaku",
        attackStats: [
            // BASIC
            { attackName: "Basic: Making Rice Cakes - 1", attackType: "BASIC", Level1Damage: 66.20, growthPerLevel: 6.1 },
            { attackName: "Basic: Making Rice Cakes - 2", attackType: "BASIC", Level1Damage: 216.30, growthPerLevel: 19.9 },
            { attackName: "Basic: Making Rice Cakes - 3", attackType: "BASIC", Level1Damage: 293.10, growthPerLevel: 26.7 },
            
            { attackName: "Basic: Making Rice Cakes (Frosted Banner) - 1", attackType: "BASIC", Level1Damage: 76.60, growthPerLevel: 7 },
            { attackName: "Basic: Making Rice Cakes (Frosted Banner) - 2", attackType: "BASIC", Level1Damage: 228.50, growthPerLevel: 20.8 },
            { attackName: "Basic: Making Rice Cakes (Frosted Banner) - 3", attackType: "BASIC", Level1Damage: 511.40, growthPerLevel: 46.5 },
            // DASH
            { attackName: "Dash: 50/50", attackType: "DASH", Level1Damage: 76.70, growthPerLevel: 7 },
            { attackName: "Dash: 50/50(Frosted Banner)", attackType: "DASH", Level1Damage: 131.50, growthPerLevel: 12 },
            // DODGE
            { attackName: "Dodge: Away From My Snacks", attackType: "DASH", Level1Damage: 247.30, growthPerLevel: 22.5 },
            // ASSIST
            { attackName: "Quick Assist: A Set for Two", attackType: "ASSIST", Level1Damage: 113.40, growthPerLevel: 10.4 },
            { attackName: "Assist Follow-Up: Sweeping Strike", attackType: "ASSIST", Level1Damage: 264.00, growthPerLevel: 24 },
            // SPECIAL
            { attackName: "Special: Cooling Bento - 1", attackType: "SPECIAL", Level1Damage: 28.40, growthPerLevel: 2.6 },
            { attackName: "Special: Cooling Bento - Finish", attackType: "SPECIAL", Level1Damage:100.10 , growthPerLevel: 9.1 },
            
            { attackName: "Special: Rally! - Fly the Flag", attackType: "SPECIAL", Level1Damage: 250.10, growthPerLevel: 22.8 },
            { attackName: "Special: Rally! - Quick Fly the Flag", attackType: "SPECIAL", Level1Damage: 140.10, growthPerLevel: 12.8 },
            { attackName: "Special: Rally! - Lowering the Flag", attackType: "SPECIAL", Level1Damage: 245.00, growthPerLevel: 22.3 },
            // EX SPECIAL
            { attackName: "EX Special: Fanning Mosquitoes - Chain Attack", attackType: "EXSPECIAL", Level1Damage: 131.20, growthPerLevel: 19.9 },
            { attackName: "EX Special: Fanning Mosquitoes - Wind Current", attackType: "EXSPECIAL", Level1Damage: 102.10, growthPerLevel: 9.3 },
            // CHAIN
            { attackName: "Chain: Pudding Slash", attackType: "CHAIN", Level1Damage: 748.80, growthPerLevel: 67.7 },
            // ULT
            { attackName: "Ultimate: Jumbo Pudding Slash", attackType: "ULT", Level1Damage: 1989.80, growthPerLevel: 180.9 },
            
        ],
    },
    {
        characterName: "Rina",
        attackStats: [
            // BASIC
            { attackName: "Basic: Whack the Dimwit - 1", attackType: "BASIC", Level1Damage: 44.00, growthPerLevel: 4 },
            { attackName: "Basic: Whack the Dimwit - 2", attackType: "BASIC", Level1Damage: 111.40, growthPerLevel: 10.2 },
            { attackName: "Basic: Whack the Dimwit - 3", attackType: "BASIC", Level1Damage: 117.10, growthPerLevel: 10.7 },
            { attackName: "Basic: Whack the Dimwit - 4", attackType: "BASIC", Level1Damage: 183.90, growthPerLevel: 16.8 },

            { attackName: "Basic: Shoo the Fool", attackType: "BASIC", Level1Damage: 315.10, growthPerLevel: 28.7 },
            // DASH
            { attackName: "Dash: Sudden Surprise", attackType: "DASH", Level1Damage: 105.00, growthPerLevel: 9.6 },
            // DODGE
            { attackName: "Dodge: Bangboo Callback", attackType: "DASH", Level1Damage: 227.60, growthPerLevel: 20.7 },
            // ASSIST
            { attackName: "Quick Assist: Duple Meter Allemande", attackType: "ASSIST", Level1Damage: 122.60, growthPerLevel: 11.2 },
            { attackName: "Assist Follow-Up: Quadruple Meter Gavotte", attackType: "ASSIST", Level1Damage: 349.40, growthPerLevel: 31.8 },
            // SPECIAL
            { attackName: "Special: Beat the Blockhead", attackType: "SPECIAL", Level1Damage: 61.30, growthPerLevel: 5.6 },
            // EX SPECIAL
            { attackName: "EX Special: Dimwit Disappearing Trick", attackType: "EXSPECIAL", Level1Damage: 546.00, growthPerLevel: 49.7 },
            // CHAIN
            { attackName: "Chain: Code of Conduct", attackType: "CHAIN", Level1Damage: 1013.00, growthPerLevel: 92.1 },
            // ULT
            { attackName: "Ultimate: The Queen's Attendant", attackType: "ULT", Level1Damage: 2116.70, growthPerLevel: 192.5 },
            
        ],
    },
    {
        characterName: "Lycaon",
        attackStats: [
            // BASIC
            { attackName: "Basic: Moon Hunter - 1 ", attackType: "BASIC", Level1Damage: 29.2, growthPerLevel: 2.7 },
            { attackName: "Basic: Moon Hunter - 1 Charged ", attackType: "BASIC", Level1Damage: 37.1, growthPerLevel: 3.4 },
            { attackName: "Basic: Moon Hunter - 2", attackType: "BASIC", Level1Damage: 34.9, growthPerLevel: 3.2 },
            { attackName: "Basic: Moon Hunter - 2 Charged ", attackType: "BASIC", Level1Damage: 56.4, growthPerLevel: 5.2 },
            { attackName: "Basic: Moon Hunter - 3", attackType: "BASIC", Level1Damage: 58.4, growthPerLevel: 5.4 },
            { attackName: "Basic: Moon Hunter - 3 Charged ", attackType: "BASIC", Level1Damage: 99.5, growthPerLevel: 9.1 },
            { attackName: "Basic: Moon Hunter - 4", attackType: "BASIC", Level1Damage: 152, growthPerLevel: 13.9 },
            { attackName: "Basic: Moon Hunter - 4 Charged ", attackType: "BASIC", Level1Damage: 210.9, growthPerLevel: 19.2 },
            { attackName: "Basic: Moon Hunter - 5", attackType: "BASIC", Level1Damage: 180.7, growthPerLevel: 16.5 },
            { attackName: "Basic: Moon Hunter - 5 Level-1 Charged ", attackType: "BASIC", Level1Damage: 277.6, growthPerLevel: 25.3 },
            { attackName: "Basic: Moon Hunter - 5 Level-2 Charged ", attackType: "BASIC", Level1Damage: 355.7, growthPerLevel: 32.4 },
            // DASH
            { attackName: "Dash: Keep it Clean", attackType: "DASH", Level1Damage: 47.30, growthPerLevel: 4.3 },
            // DODGE
            { attackName: "Dodge: Etiquette Manual", attackType: "DASH", Level1Damage: 181.00, growthPerLevel: 17 },
            // ASSIST
            { attackName: "Quick Assist: Wolf Pack", attackType: "ASSIST", Level1Damage: 63.10, growthPerLevel: 5.8 },
            { attackName: "Assist Follow-Up: Vengeful Counterattack", attackType: "ASSIST", Level1Damage: 288.30, growthPerLevel: 26.3 },
            // SPECIAL
            { attackName: "Special: Time to Hunt", attackType: "SPECIAL", Level1Damage: 77.1, growthPerLevel: 7.1 },
            { attackName: "Special: Time to Hunt - Charged", attackType: "SPECIAL", Level1Damage: 133.1, growthPerLevel: 12.2 },
            // EX SPECIAL
            { attackName: "EX Special: Thrill of the Hunt", attackType: "EXSPECIAL", Level1Damage: 534.3, growthPerLevel: 48.7 },
            { attackName: "EX Special: Thrill of the Hunt - Charged", attackType: "EXSPECIAL", Level1Damage: 789.5, growthPerLevel: 71.9 },
            // CHAIN
            { attackName: "Chain: As You Wish", attackType: "CHAIN", Level1Damage: 637.8, growthPerLevel: 58 },
            // ULT
            { attackName: "Ultimate: Mission Complete", attackType: "ULT", Level1Damage: 1694.1, growthPerLevel: 154.1 },
            
        ],
    },
    {
        characterName: "Koleda",
        attackStats: [
            // BASIC
            { attackName: "Basic: Smash 'n' Bash - 1", attackType: "BASIC", Level1Damage: 63.6, growthPerLevel: 5.8 },
            { attackName: "Basic: Smash 'n' Bash - 2", attackType: "BASIC", Level1Damage: 79.2, growthPerLevel: 7.2 },
            { attackName: "Basic: Smash 'n' Bash - 3", attackType: "BASIC", Level1Damage: 126.1, growthPerLevel: 11.5 },
            { attackName: "Basic: Smash 'n' Bash - 4", attackType: "BASIC", Level1Damage: 317.4, growthPerLevel: 28.9 },
            { attackName: "Basic: Smash 'n' Bash - 1 Enchanced", attackType: "BASIC", Level1Damage: 160.8, growthPerLevel: 14.7 },
            { attackName: "Basic: Smash 'n' Bash - 2 Enchanced", attackType: "BASIC", Level1Damage: 404.9, growthPerLevel: 36.9 },
            { attackName: "Basic: Smash 'n' Bash - 2 Enchanced Teamwork", attackType: "BASIC", Level1Damage: 501.3, growthPerLevel: 45.6 },
            // DASH
            { attackName: "Dash: Tremble!", attackType: "DASH", Level1Damage: 56.10, growthPerLevel: 5.1 },
            // DODGE
            { attackName: "Dodge: Don't Look Down on Me", attackType: "DASH", Level1Damage: 343.20, growthPerLevel: 31.3 },
            // ASSIST
            { attackName: "Quick Assist: Coming Thru!", attackType: "ASSIST", Level1Damage: 183.8, growthPerLevel: 16.8 },
            { attackName: "Assist Follow-Up: Hammer Bell", attackType: "ASSIST", Level1Damage: 359.2, growthPerLevel: 32.7 },
            // SPECIAL
            { attackName: "Special: Hammer Time - Strike", attackType: "SPECIAL", Level1Damage: 51.9, growthPerLevel: 4.8 },
            { attackName: "Special: Hammer Time - Explosion", attackType: "SPECIAL", Level1Damage: 77.8, growthPerLevel: 7.1 },
            { attackName: "Special: Hammer Time - Explosion Teamwork", attackType: "SPECIAL", Level1Damage: 85.5, growthPerLevel: 7.8 },
            // EX SPECIAL
            { attackName: "EX Special: Boiling Furnace - Strike", attackType: "EXSPECIAL", Level1Damage: 152.3, growthPerLevel: 13.9 },
            { attackName: "EX Special: Boiling Furnace - Explosion", attackType: "EXSPECIAL", Level1Damage: 606, growthPerLevel: 55.1 },
            { attackName: "EX Special: Boiling Furnace - Explosion Teamwork", attackType: "EXSPECIAL", Level1Damage: 666.6, growthPerLevel: 60.6 },
            // CHAIN
            { attackName: "Chain: Natural Disaster", attackType: "CHAIN", Level1Damage: 636.00, growthPerLevel: 57.9 },
            // ULT
            { attackName: "Ultimate: Hammerquake", attackType: "ULT", Level1Damage: 1548.80, growthPerLevel: 140.8 },
            { attackName: "Ultimate: Hammerquake Teamwork", attackType: "ULT", Level1Damage: 1694.00, growthPerLevel: 154 },
            
        ],
    },

    // {
    //     characterName: "",
    //     attackStats: [
    //         // BASIC
    //         { attackName: "Basic:  - 1", attackType: "BASIC", Level1Damage: , growthPerLevel:  },
    //         // DASH
    //         { attackName: "Dash: ", attackType: "DASH", Level1Damage: , growthPerLevel:  },
    //         // DODGE
    //         { attackName: "Dodge: ", attackType: "DASH", Level1Damage: , growthPerLevel:  },
    //         // ASSIST
    //         { attackName: "Quick Assist: ", attackType: "ASSIST", Level1Damage: , growthPerLevel:  },
    //         { attackName: "Assist Follow-Up: ", attackType: "ASSIST", Level1Damage: , growthPerLevel:  },
    //         // SPECIAL
    //         { attackName: "Special: ", attackType: "SPECIAL", Level1Damage: , growthPerLevel:  },
    //         // EX SPECIAL
    //         { attackName: "EX Special: ", attackType: "EXSPECIAL", Level1Damage: , growthPerLevel:  },
    //         // CHAIN
    //         { attackName: "Chain: ", attackType: "CHAIN", Level1Damage: , growthPerLevel:  },
    //         // ULT
    //         { attackName: "Ultimate: ", attackType: "ULT", Level1Damage: , growthPerLevel:  },
            
    //     ],
    // },
];
