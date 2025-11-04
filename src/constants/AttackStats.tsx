import type { CharacterAttacks } from "./types";

export const Attacks: CharacterAttacks[] = [
    {
        characterName: "Nicole",
        attackStats: [
            // BASIC
            { attackName: "Cunning Combo - 1", attackType: "BASIC", Level1Damage: 65.9, growthPerLevel: 6 },
            { attackName: "Cunning Combo - 2", attackType: "BASIC", Level1Damage: 71.3, growthPerLevel: 6.5 },
            { attackName: "Cunning Combo - 3", attackType: "BASIC", Level1Damage: 304.3, growthPerLevel: 27.3 },
            { attackName: "Do As I Please - 1", attackType: "BASIC", Level1Damage: 88.1, growthPerLevel: 8.1 },
            { attackName: "Do As I Please - 2", attackType: "BASIC", Level1Damage: 100.9, growthPerLevel: 9.3 },
            { attackName: "Do As I Please - 3", attackType: "BASIC", Level1Damage: 452.3, growthPerLevel: 41.3 },
            // DASH
            { attackName: "Jack in the Box - Forward", attackType: "DASH", Level1Damage: 158.2, growthPerLevel: 14.2 },
            { attackName: "Jack in the Box - Backward", attackType: "DASH", Level1Damage: 60.0, growthPerLevel: 5.5 },
            // DODGE
            { attackName: "Diverted Bombard", attackType: "DASH", Level1Damage: 182.4, growthPerLevel: 17.6 },
            // ASSIST
            { attackName: "Emergency Bombard", attackType: "ASSIST", Level1Damage: 63.40, growthPerLevel: 5.8 },
            { attackName: "Window of Opportunity", attackType: "ASSIST", Level1Damage: 377.10, growthPerLevel: 34.3 },
            // SPECIAL
            { attackName: "Sugarcoated Bullet", attackType: "SPECIAL", Level1Damage: 52.60, growthPerLevel: 4.8 },
            // EX SPECIAL
            { attackName: "Stuffed Sugarcoated Bullet - Total Uncharged", attackType: "EXSPECIAL", Level1Damage: 602.1, growthPerLevel: 54.8 },
            { attackName: "Stuffed Sugarcoated Bullet - Total Charged", attackType: "EXSPECIAL", Level1Damage: 817.3, growthPerLevel: 74.4 },
            { attackName: "Stuffed Sugarcoated Bullet - Charged", attackType: "EXSPECIAL", Level1Damage: 215.20, growthPerLevel: 19.6 },
            { attackName: "Stuffed Sugarcoated Bullet - Bombard ", attackType: "EXSPECIAL", Level1Damage: 215.10, growthPerLevel: 19.6 },
            { attackName: "Stuffed Sugarcoated Bullet - Energy Field ", attackType: "EXSPECIAL", Level1Damage: 387.00, growthPerLevel: 35.2 },
            // CHAIN
            { attackName: "Ether Shellacking - Total", attackType: "CHAIN", Level1Damage: 492.6, growthPerLevel: 45 },
            { attackName: "Ether Shellacking - Bombard", attackType: "CHAIN", Level1Damage: 209.60, growthPerLevel: 19.2 },
            { attackName: "Ether Shellacking - Energy Field", attackType: "CHAIN", Level1Damage: 283.00, growthPerLevel: 25.8 },
            // ULT
            { attackName: "Ether Grenade - Total", attackType: "ULT", Level1Damage: 1520, growthPerLevel: 138.2 },
            { attackName: "Ether Grenade - Bombard", attackType: "ULT", Level1Damage: 646.80, growthPerLevel: 58.8 },
            { attackName: "Ether Grenade - Energy Field", attackType: "ULT", Level1Damage: 873.20, growthPerLevel: 79.4 },
        ],
    },
    {
        characterName: "Ben",
        attackStats: [
            // BASIC
            { attackName: "Debt Reconciliation - 1", attackType: "BASIC", Level1Damage: 65.9, growthPerLevel: 6 },
            { attackName: "Debt Reconciliation - 2", attackType: "BASIC", Level1Damage: 189.00, growthPerLevel: 17.2 },
            { attackName: "Debt Reconciliation - 3", attackType: "BASIC", Level1Damage: 348.30, growthPerLevel: 31.7 },
            // DASH
            { attackName: "Incoming Expense", attackType: "DASH", Level1Damage: 138.40, growthPerLevel: 12.6 },
            // DODGE
            { attackName: "Accounts Settled", attackType: "DASH", Level1Damage: 225.70, growthPerLevel: 20.6 },
            // ASSIST
            { attackName: "Joint Account", attackType: "ASSIST", Level1Damage: 96.7, growthPerLevel: 8.8 },
            { attackName: "Don't Break Contract", attackType: "ASSIST", Level1Damage: 325.90, growthPerLevel: 29.7 },
            // SPECIAL
            { attackName: "Fiscal Fist - Active", attackType: "SPECIAL", Level1Damage: 41.70, growthPerLevel: 3.8 },
            { attackName: "Fiscal Fist - Block", attackType: "SPECIAL", Level1Damage: 233.40, growthPerLevel: 21.3 },
            // EX SPECIAL
            { attackName: "Cashflow Counter - Active ", attackType: "EXSPECIAL", Level1Damage: 438.50, growthPerLevel: 39.9 },
            { attackName: "Cashflow Counter - Follow-Up ", attackType: "EXSPECIAL", Level1Damage: 438.50, growthPerLevel: 39.9 },
            { attackName: "Cashflow Counter - Block Counter ", attackType: "EXSPECIAL", Level1Damage: 500.50, growthPerLevel: 45.5 },
            { attackName: "Cashflow Counter - Block Follow-Up ", attackType: "EXSPECIAL", Level1Damage: 551.20, growthPerLevel: 55.2 },
            // CHAIN
            { attackName: "Signed and Sealed", attackType: "CHAIN", Level1Damage: 627.30, growthPerLevel: 57.1 },
            // ULT
            { attackName: "Complete Payback", attackType: "ULT", Level1Damage: 1643.00, growthPerLevel: 149.4 },
        ],
    },
    {
        characterName: "Anby",
        attackStats: [
            // BASIC
            { attackName: "Turbo Volt - 1", attackType: "BASIC", Level1Damage: 31.2, growthPerLevel: 2.9 },
            { attackName: "Turbo Volt - 2", attackType: "BASIC", Level1Damage: 33.70, growthPerLevel: 3.1 },
            { attackName: "Turbo Volt - 3", attackType: "BASIC", Level1Damage: 113.60, growthPerLevel: 10.4 },
            { attackName: "Turbo Volt - 4", attackType: "BASIC", Level1Damage: 239.10, growthPerLevel: 21.8 },
            { attackName: "Thunderbolt", attackType: "BASIC", Level1Damage: 328.60, growthPerLevel: 29.9 },
            // DASH
            { attackName: "Taser Blast", attackType: "DASH", Level1Damage: 56.70, growthPerLevel:  5.2},
            // DODGE
            { attackName: "Thunderclap", attackType: "DASH", Level1Damage: 180.20, growthPerLevel: 16.4 },
            // ASSIST
            { attackName: "Thunderfall", attackType: "ASSIST", Level1Damage: 61.70, growthPerLevel: 12.4 },
            { attackName: "Lightning Whirl", attackType: "ASSIST", Level1Damage: 335.20, growthPerLevel: 30.5 },
            // SPECIAL
            { attackName: "Fork Lightning", attackType: "SPECIAL", Level1Damage: 93.40, growthPerLevel: 8.5 },
            // EX SPECIAL
            { attackName: "Lightning Bolt", attackType: "EXSPECIAL", Level1Damage: 583.00, growthPerLevel: 53 },
            // CHAIN
            { attackName: "Electro Engine", attackType: "CHAIN", Level1Damage: 542.40, growthPerLevel: 49.4 },
            // ULT
            { attackName: "Overdrive Engine", attackType: "ULT", Level1Damage: 1512.60, growthPerLevel: 137.6 },
        ],
    },
    {
        characterName: "Lucy",
        attackStats: [
            // BASIC
            { attackName: "Lady's Bat - 1", attackType: "BASIC", Level1Damage: 56.60, growthPerLevel: 5.2 },
            { attackName: "Lady's Bat - 2", attackType: "BASIC", Level1Damage: 77.80, growthPerLevel: 7.1 },
            { attackName: "Lady's Bat - 3", attackType: "BASIC", Level1Damage: 188.90, growthPerLevel: 17.2 },
            { attackName: "Lady's Bat - 4", attackType: "BASIC", Level1Damage: 272.60, growthPerLevel: 24.8 },
            
            { attackName: "Guard Boars: To Arms! - Baseball Bat", attackType: "BASIC", Level1Damage: 272.60, growthPerLevel: 8.5 },
            { attackName: "Guard Boars: To Arms! - Boxing Gloves", attackType: "BASIC", Level1Damage: 272.60, growthPerLevel: 11.6 },
            { attackName: "Guard Boars: To Arms! - Slingshot DMG", attackType: "BASIC", Level1Damage: 272.60, growthPerLevel: 16 },
            
            { attackName: "Guard Boars: Spinning Swing!", attackType: "BASIC", Level1Damage: 272.60, growthPerLevel: 22.8 },
            // DASH
            { attackName: "Fearless Boar!", attackType: "DASH", Level1Damage: 78.40, growthPerLevel: 7.2 },
            // DODGE
            { attackName: "Returning Tusk!", attackType: "DASH", Level1Damage: 308.00, growthPerLevel: 28 },
            // ASSIST
            { attackName: "Hit By Pitch!", attackType: "ASSIST", Level1Damage: 160.00, growthPerLevel: 14.6 },
            { attackName: "Scored a Run!", attackType: "ASSIST", Level1Damage: 349.10, growthPerLevel: 31.8 },
            // SPECIAL
            { attackName: "Solid Hit! - Line Drive", attackType: "SPECIAL", Level1Damage: 61.70, growthPerLevel: 5.7 },
            { attackName: "Solid Hit! - Fly Ball", attackType: "SPECIAL", Level1Damage: 69.20, growthPerLevel: 6.3 },
            // EX SPECIAL
            { attackName: "Home Run! - Line Drive", attackType: "EXSPECIAL", Level1Damage: 508.40, growthPerLevel: 46.3 },
            { attackName: "Home Run! - Fly Ball", attackType: "EXSPECIAL", Level1Damage: 536.40, growthPerLevel: 48.8 },
            // CHAIN
            { attackName: "Grand Slam!", attackType: "CHAIN", Level1Damage: 483.3, growthPerLevel: 44.7 },
            // ULT
            { attackName: "Walk-Off Home Run!", attackType: "ULT", Level1Damage: 1718.4, growthPerLevel: 156.3 },
        ],
    },
    {
        characterName: "Soukaku",
        attackStats: [
            // BASIC
            { attackName: "Making Rice Cakes - 1", attackType: "BASIC", Level1Damage: 66.20, growthPerLevel: 6.1 },
            { attackName: "Making Rice Cakes - 2", attackType: "BASIC", Level1Damage: 216.30, growthPerLevel: 19.9 },
            { attackName: "Making Rice Cakes - 3", attackType: "BASIC", Level1Damage: 293.10, growthPerLevel: 26.7 },
            
            { attackName: "Making Rice Cakes (Frosted Banner) - 1", attackType: "BASIC", Level1Damage: 76.60, growthPerLevel: 7 },
            { attackName: "Making Rice Cakes (Frosted Banner) - 2", attackType: "BASIC", Level1Damage: 228.50, growthPerLevel: 20.8 },
            { attackName: "Making Rice Cakes (Frosted Banner) - 3", attackType: "BASIC", Level1Damage: 511.40, growthPerLevel: 46.5 },
            // DASH
            { attackName: "50/50", attackType: "DASH", Level1Damage: 76.70, growthPerLevel: 7 },
            { attackName: "50/50(Frosted Banner)", attackType: "DASH", Level1Damage: 131.50, growthPerLevel: 12 },
            // DODGE
            { attackName: "Away From My Snacks", attackType: "DASH", Level1Damage: 247.30, growthPerLevel: 22.5 },
            // ASSIST
            { attackName: "A Set for Two", attackType: "ASSIST", Level1Damage: 113.40, growthPerLevel: 10.4 },
            { attackName: "Sweeping Strike", attackType: "ASSIST", Level1Damage: 264.00, growthPerLevel: 24 },
            // SPECIAL
            { attackName: "Cooling Bento - 1", attackType: "SPECIAL", Level1Damage: 28.40, growthPerLevel: 2.6 },
            { attackName: "Cooling Bento - Finish", attackType: "SPECIAL", Level1Damage:100.10 , growthPerLevel: 9.1 },
            
            { attackName: "Rally! - Fly the Flag", attackType: "SPECIAL", Level1Damage: 250.10, growthPerLevel: 22.8 },
            { attackName: "Rally! - Quick Fly the Flag", attackType: "SPECIAL", Level1Damage: 140.10, growthPerLevel: 12.8 },
            { attackName: "Rally! - Lowering the Flag", attackType: "SPECIAL", Level1Damage: 245.00, growthPerLevel: 22.3 },
            // EX SPECIAL
            { attackName: "Fanning Mosquitoes - Chain Attack", attackType: "EXSPECIAL", Level1Damage: 131.20, growthPerLevel: 19.9 },
            { attackName: "Fanning Mosquitoes - Wind Current", attackType: "EXSPECIAL", Level1Damage: 102.10, growthPerLevel: 9.3 },
            // CHAIN
            { attackName: "Pudding Slash", attackType: "CHAIN", Level1Damage: 748.80, growthPerLevel: 67.7 },
            // ULT
            { attackName: "Jumbo Pudding Slash", attackType: "ULT", Level1Damage: 1989.80, growthPerLevel: 180.9 },
        ],
    },
    {
        characterName: "Rina",
        attackStats: [
            // BASIC
            { attackName: "Whack the Dimwit - 1", attackType: "BASIC", Level1Damage: 44.00, growthPerLevel: 4 },
            { attackName: "Whack the Dimwit - 2", attackType: "BASIC", Level1Damage: 111.40, growthPerLevel: 10.2 },
            { attackName: "Whack the Dimwit - 3", attackType: "BASIC", Level1Damage: 117.10, growthPerLevel: 10.7 },
            { attackName: "Whack the Dimwit - 4", attackType: "BASIC", Level1Damage: 183.90, growthPerLevel: 16.8 },

            { attackName: "Shoo the Fool", attackType: "BASIC", Level1Damage: 315.10, growthPerLevel: 28.7 },
            // DASH
            { attackName: "Sudden Surprise", attackType: "DASH", Level1Damage: 105.00, growthPerLevel: 9.6 },
            // DODGE
            { attackName: "Bangboo Callback", attackType: "DASH", Level1Damage: 227.60, growthPerLevel: 20.7 },
            // ASSIST
            { attackName: "Duple Meter Allemande", attackType: "ASSIST", Level1Damage: 122.60, growthPerLevel: 11.2 },
            { attackName: "Quadruple Meter Gavotte", attackType: "ASSIST", Level1Damage: 349.40, growthPerLevel: 31.8 },
            // SPECIAL
            { attackName: "Beat the Blockhead", attackType: "SPECIAL", Level1Damage: 61.30, growthPerLevel: 5.6 },
            // EX SPECIAL
            { attackName: "Dimwit Disappearing Trick", attackType: "EXSPECIAL", Level1Damage: 546.00, growthPerLevel: 49.7 },
            // CHAIN
            { attackName: "Code of Conduct", attackType: "CHAIN", Level1Damage: 1013.00, growthPerLevel: 92.1 },
            // ULT
            { attackName: "The Queen's Attendant", attackType: "ULT", Level1Damage: 2116.70, growthPerLevel: 192.5 },
        ],
    },
    {
        characterName: "Lycaon",
        attackStats: [
            // BASIC
            { attackName: "Moon Hunter - 1 ", attackType: "BASIC", Level1Damage: 29.2, growthPerLevel: 2.7 },
            { attackName: "Moon Hunter - 1 Charged ", attackType: "BASIC", Level1Damage: 37.1, growthPerLevel: 3.4 },
            { attackName: "Moon Hunter - 2", attackType: "BASIC", Level1Damage: 34.9, growthPerLevel: 3.2 },
            { attackName: "Moon Hunter - 2 Charged ", attackType: "BASIC", Level1Damage: 56.4, growthPerLevel: 5.2 },
            { attackName: "Moon Hunter - 3", attackType: "BASIC", Level1Damage: 58.4, growthPerLevel: 5.4 },
            { attackName: "Moon Hunter - 3 Charged ", attackType: "BASIC", Level1Damage: 99.5, growthPerLevel: 9.1 },
            { attackName: "Moon Hunter - 4", attackType: "BASIC", Level1Damage: 152, growthPerLevel: 13.9 },
            { attackName: "Moon Hunter - 4 Charged ", attackType: "BASIC", Level1Damage: 210.9, growthPerLevel: 19.2 },
            { attackName: "Moon Hunter - 5", attackType: "BASIC", Level1Damage: 180.7, growthPerLevel: 16.5 },
            { attackName: "Moon Hunter - 5 Level-1 Charged ", attackType: "BASIC", Level1Damage: 277.6, growthPerLevel: 25.3 },
            { attackName: "Moon Hunter - 5 Level-2 Charged ", attackType: "BASIC", Level1Damage: 355.7, growthPerLevel: 32.4 },
            // DASH
            { attackName: "Keep it Clean", attackType: "DASH", Level1Damage: 47.30, growthPerLevel: 4.3 },
            // DODGE
            { attackName: "Etiquette Manual", attackType: "DASH", Level1Damage: 181.00, growthPerLevel: 17 },
            // ASSIST
            { attackName: "Wolf Pack", attackType: "ASSIST", Level1Damage: 63.10, growthPerLevel: 5.8 },
            { attackName: "Vengeful Counterattack", attackType: "ASSIST", Level1Damage: 288.30, growthPerLevel: 26.3 },
            // SPECIAL
            { attackName: "Time to Hunt", attackType: "SPECIAL", Level1Damage: 77.1, growthPerLevel: 7.1 },
            { attackName: "Time to Hunt - Charged", attackType: "SPECIAL", Level1Damage: 133.1, growthPerLevel: 12.2 },
            // EX SPECIAL
            { attackName: "Thrill of the Hunt", attackType: "EXSPECIAL", Level1Damage: 534.3, growthPerLevel: 48.7 },
            { attackName: "Thrill of the Hunt - Charged", attackType: "EXSPECIAL", Level1Damage: 789.5, growthPerLevel: 71.9 },
            // CHAIN
            { attackName: "As You Wish", attackType: "CHAIN", Level1Damage: 637.8, growthPerLevel: 58 },
            // ULT
            { attackName: "Mission Complete", attackType: "ULT", Level1Damage: 1694.1, growthPerLevel: 154.1 },
        ],
    },
    {
        characterName: "Koleda",
        attackStats: [
            // BASIC
            { attackName: "Smash 'n' Bash - 1", attackType: "BASIC", Level1Damage: 63.6, growthPerLevel: 5.8 },
            { attackName: "Smash 'n' Bash - 2", attackType: "BASIC", Level1Damage: 79.2, growthPerLevel: 7.2 },
            { attackName: "Smash 'n' Bash - 3", attackType: "BASIC", Level1Damage: 126.1, growthPerLevel: 11.5 },
            { attackName: "Smash 'n' Bash - 4", attackType: "BASIC", Level1Damage: 317.4, growthPerLevel: 28.9 },
            { attackName: "Smash 'n' Bash - 1 Enchanced", attackType: "BASIC", Level1Damage: 160.8, growthPerLevel: 14.7 },
            { attackName: "Smash 'n' Bash - 2 Enchanced", attackType: "BASIC", Level1Damage: 404.9, growthPerLevel: 36.9 },
            { attackName: "Smash 'n' Bash - 2 Enchanced Teamwork", attackType: "BASIC", Level1Damage: 501.3, growthPerLevel: 45.6 },
            // DASH
            { attackName: "Tremble!", attackType: "DASH", Level1Damage: 56.10, growthPerLevel: 5.1 },
            // DODGE
            { attackName: "Don't Look Down on Me", attackType: "DASH", Level1Damage: 343.20, growthPerLevel: 31.3 },
            // ASSIST
            { attackName: "Coming Thru!", attackType: "ASSIST", Level1Damage: 183.8, growthPerLevel: 16.8 },
            { attackName: "Hammer Bell", attackType: "ASSIST", Level1Damage: 359.2, growthPerLevel: 32.7 },
            // SPECIAL
            { attackName: "Hammer Time - Strike", attackType: "SPECIAL", Level1Damage: 51.9, growthPerLevel: 4.8 },
            { attackName: "Hammer Time - Explosion", attackType: "SPECIAL", Level1Damage: 77.8, growthPerLevel: 7.1 },
            { attackName: "Hammer Time - Explosion Teamwork", attackType: "SPECIAL", Level1Damage: 85.5, growthPerLevel: 7.8 },
            // EX SPECIAL
            { attackName: "Boiling Furnace - Strike", attackType: "EXSPECIAL", Level1Damage: 152.3, growthPerLevel: 13.9 },
            { attackName: "Boiling Furnace - Explosion", attackType: "EXSPECIAL", Level1Damage: 606, growthPerLevel: 55.1 },
            { attackName: "Boiling Furnace - Explosion Teamwork", attackType: "EXSPECIAL", Level1Damage: 666.6, growthPerLevel: 60.6 },
            // CHAIN
            { attackName: "Natural Disaster", attackType: "CHAIN", Level1Damage: 636.00, growthPerLevel: 57.9 },
            // ULT
            { attackName: "Hammerquake", attackType: "ULT", Level1Damage: 1548.80, growthPerLevel: 140.8 },
            { attackName: "Hammerquake Teamwork", attackType: "ULT", Level1Damage: 1694.00, growthPerLevel: 154 },
        ],
    },
    {
        characterName: "Piper",
        attackStats: [
            // BASIC
            { attackName: "Load Up and Roll Out - 1", attackType: "BASIC", Level1Damage: 59, growthPerLevel: 5.4 },
            { attackName: "Load Up and Roll Out - 2", attackType: "BASIC", Level1Damage: 78.8, growthPerLevel: 7.2 },
            { attackName: "Load Up and Roll Out - 3", attackType: "BASIC", Level1Damage: 150.1, growthPerLevel: 13.7 },
            { attackName: "Load Up and Roll Out - 4", attackType: "BASIC", Level1Damage: 320.6, growthPerLevel: 29.2 },
            // DASH
            { attackName: "Pedal to the Metal", attackType: "DASH", Level1Damage: 90.1, growthPerLevel: 8.2 },
            // DODGE
            { attackName: "Power Drift", attackType: "DASH", Level1Damage: 269, growthPerLevel: 24.5 },
            // ASSIST
            { attackName: "Brake Tap", attackType: "ASSIST", Level1Damage: 130, growthPerLevel: 11.9 },
            { attackName: "Overtaking Maneuver", attackType: "ASSIST", Level1Damage: 400.5, growthPerLevel: 36.5 },
            // SPECIAL
            { attackName: "Tire Spin", attackType: "SPECIAL", Level1Damage: 271.7, growthPerLevel: 23.7 },
            { attackName: "One Trillion Tons 1 Charge", attackType: "SPECIAL", Level1Damage: 93.4, growthPerLevel: 8.5 },
            { attackName: "One Trillion Tons 2 Charge", attackType: "SPECIAL", Level1Damage: 103.4, growthPerLevel: 9.4 },
            { attackName: "One Trillion Tons 3 Charge", attackType: "SPECIAL", Level1Damage: 235, growthPerLevel: 21.4 },
            // EX SPECIAL
            { attackName: "Engine Spin", attackType: "EXSPECIAL", Level1Damage: 93.5, growthPerLevel: 8.6 },
            { attackName: "Really Heavy", attackType: "EXSPECIAL", Level1Damage: 612.9, growthPerLevel: 55.8 },
            // CHAIN
            { attackName: "Buckle Up", attackType: "CHAIN", Level1Damage: 652.3, growthPerLevel: 59.3 },
            // ULT
            { attackName: "Hold On Tight", attackType: "ULT", Level1Damage: 1660.4, growthPerLevel: 151 },
        ],
    },
    {
        characterName: "Billy",
        attackStats: [
            // BASIC
            { attackName: "Full Firepower - Standing Fire", attackType: "BASIC", Level1Damage: 68, growthPerLevel: 6.2 },
            { attackName: "Full Firepower - Standing Bullet", attackType: "BASIC", Level1Damage: 7.6, growthPerLevel: 0.7 },
            { attackName: "Full Firepower - Crouching Fire", attackType: "BASIC", Level1Damage: 61.8, growthPerLevel: 5.7 },
            { attackName: "Full Firepower - Crouching Bullet", attackType: "BASIC", Level1Damage: 12.7, growthPerLevel: 1.2 },
            { attackName: "Full Firepower - Rolling Shot ", attackType: "BASIC", Level1Damage: 61.8, growthPerLevel: 5.7 },
            { attackName: "Full Firepower - Finishing Shot", attackType: "BASIC", Level1Damage: 49.5, growthPerLevel: 4.5 },
            // DASH
            { attackName: "Starlight Sanction - 360-degree Shot", attackType: "DASH", Level1Damage: 63.1, growthPerLevel: 5.8 },
            { attackName: "Starlight Sanction - Straight Shot", attackType: "DASH", Level1Damage: 39, growthPerLevel: 3.6 },
            // DODGE
            { attackName: "Fair Fight", attackType: "DASH", Level1Damage: 221.4, growthPerLevel: 20.2 },
            // ASSIST
            { attackName: "Power of Teamwork", attackType: "ASSIST", Level1Damage: 93.4, growthPerLevel: 8.5 },
            { attackName: "Fatal Shot", attackType: "ASSIST", Level1Damage: 388.8, growthPerLevel: 35.4 },
            // SPECIAL
            { attackName: "Stand Still - 1", attackType: "SPECIAL", Level1Damage: 24.2, growthPerLevel: 2.2 },
            { attackName: "Stand Still - 2", attackType: "SPECIAL", Level1Damage: 51.7, growthPerLevel: 4.7 },
            { attackName: "Stand Still - 3", attackType: "SPECIAL", Level1Damage: 50.1, growthPerLevel: 4.6 },
            // EX SPECIAL
            { attackName: "Clearance Time", attackType: "EXSPECIAL", Level1Damage: 543.8, growthPerLevel: 49.5 },
            // CHAIN
            { attackName: "Starlight Mirage", attackType: "CHAIN", Level1Damage: 735.2, growthPerLevel: 66.9 },
            // ULT
            { attackName: "Starlight Sparkle", attackType: "ULT", Level1Damage: 1597.7, growthPerLevel: 145.3 },
        ],
    },
    {
        characterName: "Anton",
        attackStats: [
            // BASIC
            { attackName: "Enthusiastic Drills - 1", attackType: "BASIC", Level1Damage: 67.8, growthPerLevel: 6.2 },
            { attackName: "Enthusiastic Drills - 2", attackType: "BASIC", Level1Damage: 92.3, growthPerLevel: 8.4 },
            { attackName: "Enthusiastic Drills - 3", attackType: "BASIC", Level1Damage: 109.3, growthPerLevel: 9.9 },
            { attackName: "Enthusiastic Drills - 4", attackType: "BASIC", Level1Damage: 229.1, growthPerLevel: 20.9 },
            { attackName: "Enthusiastic Drills (Burst Mode) - 1", attackType: "BASIC", Level1Damage: 240.9, growthPerLevel: 23.9 },
            { attackName: "Enthusiastic Drills (Burst Mode) - 2", attackType: "BASIC", Level1Damage: 469.2, growthPerLevel: 42.7 },
            { attackName: "Enthusiastic Drills (Burst Mode) - 3", attackType: "BASIC", Level1Damage: 456.9, growthPerLevel: 41.7 },
            // DASH
            { attackName: " Fire With Fire", attackType: "DASH", Level1Damage: 68.4, growthPerLevel: 6.3 },
            // DODGE
            { attackName: "Retaliation", attackType: "DASH", Level1Damage: 271.2, growthPerLevel: 24.7 },
            { attackName: "Overload Drill (Burst Mode)", attackType: "DASH", Level1Damage: 465.4, growthPerLevel: 42.4 },
            // ASSIST
            { attackName: "Shoulder-To-Shoulder", attackType: "ASSIST", Level1Damage: 263.4, growthPerLevel: 24 },
            { attackName: "Protective Drill (Burst Mode)", attackType: "ASSIST", Level1Damage: 365.4, growthPerLevel: 33.3 },
            { attackName: "Limit Burst", attackType: "ASSIST", Level1Damage: 325.8, growthPerLevel: 29.7 },
            // SPECIAL
            { attackName: "Spin, Bro!", attackType: "SPECIAL", Level1Damage: 44.2, growthPerLevel: 4.1 },
            { attackName: "Explosive Drill (Burst Mode)", attackType: "SPECIAL", Level1Damage: 231.4, growthPerLevel: 21.1 },
            // EX SPECIAL
            { attackName: "Smash the Horizon, Bro!", attackType: "EXSPECIAL", Level1Damage: 195.1, growthPerLevel: 17.8 },
            // CHAIN
            { attackName: "Go Go Go!", attackType: "CHAIN", Level1Damage: 640.7, growthPerLevel: 58.3 },
            // ULT
            { attackName: "Go Go Go Go Go!", attackType: "ULT", Level1Damage: 1816.4, growthPerLevel: 165.2 },
        ],
    },
    {
        characterName: "Corin",
        attackStats: [
            // BASIC
            { attackName: "Wipeout - 1", attackType: "BASIC", Level1Damage: 82, growthPerLevel: 7.5 },
            { attackName: "Wipeout - 2", attackType: "BASIC", Level1Damage: 76.6, growthPerLevel:  7},
            { attackName: "Wipeout - 3", attackType: "BASIC", Level1Damage: 179.2, growthPerLevel: 16.3 },
            { attackName: "Wipeout - 4", attackType: "BASIC", Level1Damage: 233.4, growthPerLevel: 21.3 },
            { attackName: "Wipeout - 5", attackType: "BASIC", Level1Damage: 421.2, growthPerLevel: 38.3 },
            // DASH
            { attackName: "Oopsy-Daisy!", attackType: "DASH", Level1Damage: 96.7, growthPerLevel: 8.8 },
            // DODGE
            { attackName: "Nope!", attackType: "DASH", Level1Damage: 271.2, growthPerLevel: 24.8 },
            // ASSIST
            { attackName: "Emergency Measures", attackType: "ASSIST", Level1Damage: 215, growthPerLevel: 19.6 },
            { attackName: "Quick Sweep", attackType: "ASSIST", Level1Damage: 547.5, growthPerLevel: 49.5 },
            // SPECIAL
            { attackName: "Clean Sweep - Spinning Slash", attackType: "SPECIAL", Level1Damage: 66.7, growthPerLevel: 6.1 },
            { attackName: "Clean Sweep - Extended Slash Maximum", attackType: "SPECIAL", Level1Damage: 37.5, growthPerLevel: 3.5 },
            { attackName: "Clean Sweep - Explosion DMG", attackType: "SPECIAL", Level1Damage: 25, growthPerLevel: 2.3 },
            // EX SPECIAL
            { attackName: "Beware the Skirt - Spinning Slash", attackType: "EXSPECIAL", Level1Damage: 345.1, growthPerLevel: 31.4 },
            { attackName: "Beware the Skirt - Extended Slash Maximum", attackType: "EXSPECIAL", Level1Damage: 1035.1, growthPerLevel: 94.2 },
            { attackName: "Beware the Skirt - Explosion DMG", attackType: "EXSPECIAL", Level1Damage: 345.1, growthPerLevel: 31.4 },
            // CHAIN
            { attackName: "Sorry...", attackType: "CHAIN", Level1Damage: 687.3, growthPerLevel: 62.5 },
            // ULT
            { attackName: "Very, Very Sorry!", attackType: "ULT", Level1Damage: 2028.8, growthPerLevel: 184.5 },
        ],
    },
    {
        characterName: "Grace",
        attackStats: [
            // BASIC
            { attackName: "High-Pressure Spike - 1", attackType: "BASIC", Level1Damage: 55.1, growthPerLevel: 5.1 },
            { attackName: "High-Pressure Spike - 2", attackType: "BASIC", Level1Damage: 59.7, growthPerLevel: 5.5 },
            { attackName: "High-Pressure Spike - 3", attackType: "BASIC", Level1Damage: 124.8, growthPerLevel: 11.4 },
            { attackName: "High-Pressure Spike - 4", attackType: "BASIC", Level1Damage: 186.3, growthPerLevel: 17 },
            { attackName: "High-Pressure Spike - 5", attackType: "BASIC", Level1Damage: 40.3, growthPerLevel: 3.7 },
            // DASH
            { attackName: "Quick Inspection", attackType: "DASH", Level1Damage: 33.3, growthPerLevel: 3.1 },
            // DODGE
            { attackName: "Violation Penalty", attackType: "DASH", Level1Damage: 164.2, growthPerLevel: 15 },
            // ASSIST
            { attackName: "Incident Management", attackType: "ASSIST", Level1Damage: 45.5, growthPerLevel: 4.2 },
            { attackName: "Counter Volt Needle", attackType: "ASSIST", Level1Damage: 359.2, growthPerLevel: 32.7 },
            // SPECIAL
            { attackName: "Obstruction Removal", attackType: "SPECIAL", Level1Damage: 42.1, growthPerLevel: 3.9 },
            // EX SPECIAL
            { attackName: "Supercharged Obstruction Removal", attackType: "EXSPECIAL", Level1Damage: 333.8, growthPerLevel: 30.4 },
            // CHAIN
            { attackName: "Collaborative Construction", attackType: "CHAIN", Level1Damage: 571.3, growthPerLevel: 52 },
            // ULT
            { attackName: "Demolition Blast - Beware", attackType: "ULT", Level1Damage: 1478.8, growthPerLevel: 134.4 },
        ],
    },
    {
        characterName: "Soldier 11",
        attackStats: [
            // BASIC
            { attackName: "Warmup Sparks - 1", attackType: "BASIC", Level1Damage: 34.4, growthPerLevel: 3.2 },
            { attackName: "Warmup Sparks - 2", attackType: "BASIC", Level1Damage: 41.2, growthPerLevel: 3.8 },
            { attackName: "Warmup Sparks - 3", attackType: "BASIC", Level1Damage: 102.8, growthPerLevel: 9.4 },
            { attackName: "Warmup Sparks - 4", attackType: "BASIC", Level1Damage: 213.4, growthPerLevel: 19.4 },
            
            { attackName: "Fire Suppression - 1", attackType: "BASIC", Level1Damage: 55.1, growthPerLevel: 5.1 },
            { attackName: "Fire Suppression - 2", attackType: "BASIC", Level1Damage: 57.2, growthPerLevel: 5.2 },
            { attackName: "Fire Suppression - 3", attackType: "BASIC", Level1Damage: 132, growthPerLevel: 12 },
            { attackName: "Fire Suppression - 4", attackType: "BASIC", Level1Damage: 340.7, growthPerLevel: 31 },
            // DASH
            { attackName: "Blazing Fire", attackType: "DASH", Level1Damage: 68.3, growthPerLevel: 6.3 },
            { attackName: "Fire Suppression", attackType: "DASH", Level1Damage: 78.8, growthPerLevel: 7.2 },
            // DODGE
            { attackName: "Backdraft", attackType: "DASH", Level1Damage: 262, growthPerLevel: 23.9 },
            // ASSIST
            { attackName: "Covering Fire", attackType: "ASSIST", Level1Damage: 120.8, growthPerLevel: 11 },
            { attackName: "Reignition", attackType: "ASSIST", Level1Damage: 383.7, growthPerLevel: 34.9 },
            // SPECIAL
            { attackName: "Raging Fire", attackType: "SPECIAL", Level1Damage: 52.6, growthPerLevel: 4.8 },
            // EX SPECIAL
            { attackName: "Fervent Fire", attackType: "EXSPECIAL", Level1Damage: 675, growthPerLevel: 61.4 },
            // CHAIN
            { attackName: "Uplifting Flame", attackType: "CHAIN", Level1Damage: 632.5, growthPerLevel: 57.5 },
            // ULT
            { attackName: "Bellowing Flame", attackType: "ULT", Level1Damage: 2103, growthPerLevel: 191.2 },
        ],
    },
    {
        characterName: "Nekomata",
        attackStats: [
            // BASIC
            { attackName: "Kitty Slash - 1", attackType: "BASIC", Level1Damage: 55.2, growthPerLevel: 5.1 },
            { attackName: "Kitty Slash - 2", attackType: "BASIC", Level1Damage: 62.6, growthPerLevel: 5.7 },
            { attackName: "Kitty Slash - 3", attackType: "BASIC", Level1Damage: 72.7, growthPerLevel: 6.7 },
            { attackName: "Kitty Slash - 4", attackType: "BASIC", Level1Damage: 170.2, growthPerLevel: 15.5 },
            { attackName: "Kitty Slash - 5", attackType: "BASIC", Level1Damage: 123.6, growthPerLevel: 11.3 },
            
            { attackName: "Crimson Blade", attackType: "BASIC", Level1Damage: 71.8, growthPerLevel: 6.6 },
            // DASH
            { attackName: "Over Here!", attackType: "DASH", Level1Damage: 35.1, growthPerLevel: 3.2 },
            // DODGE
            { attackName: "Phantom Claws", attackType: "DASH", Level1Damage: 227.9, growthPerLevel: 20.8 },
            // ASSIST
            { attackName: "Cat's Paw", attackType: "ASSIST", Level1Damage: 94.5, growthPerLevel: 8.6 },
            { attackName: "Shadow Strike", attackType: "ASSIST", Level1Damage: 300.4, growthPerLevel: 60.1 },
            // SPECIAL
            { attackName: "Surprise Attack", attackType: "SPECIAL", Level1Damage: 47.3, growthPerLevel: 4.3 },
            // EX SPECIAL
            { attackName: "Super Surprise Attack!", attackType: "EXSPECIAL", Level1Damage: 539.7, growthPerLevel: 49.1 },
            // CHAIN
            { attackName: "Claw Swipe", attackType: "CHAIN", Level1Damage: 536.2, growthPerLevel: 48.8 },
            // ULT
            { attackName: "Claw Smash", attackType: "ULT", Level1Damage: 1571.1, growthPerLevel: 142.9,  },
        ],
    },
    {
        characterName: "Zhu Yuan",
        attackStats: [
            // BASIC
            { attackName: "Don't Move! - 1", attackType: "BASIC", Level1Damage: 43.1, growthPerLevel: 4 },
            { attackName: "Don't Move! - 2", attackType: "BASIC", Level1Damage: 126.4, growthPerLevel: 11.5 },
            { attackName: "Don't Move! - 3", attackType: "BASIC", Level1Damage: 137.3, growthPerLevel: 12.5 },
            { attackName: "Don't Move! - 4", attackType: "BASIC", Level1Damage: 151, growthPerLevel: 13.8 },
            { attackName: "Don't Move! - 5", attackType: "BASIC", Level1Damage: 162.2, growthPerLevel: 14.8 },

            { attackName: "Please Do Not Resist - Physical - 1", attackType: "BASIC", Level1Damage: 53.7, growthPerLevel: 4.9 },
            { attackName: "Please Do Not Resist - Physical - 2", attackType: "BASIC", Level1Damage: 53.7, growthPerLevel: 4.9 },
            { attackName: "Please Do Not Resist - Physical - 3", attackType: "BASIC", Level1Damage: 160.9, growthPerLevel: 14.7 },
            
            { attackName: "Please Do Not Resist - Ether - 1", attackType: "BASIC", Level1Damage: 135.9, growthPerLevel: 12.4, calculatorType: "ZhuYuanOutOfStun"},
            { attackName: "Please Do Not Resist - Ether - 2", attackType: "BASIC", Level1Damage: 135.9, growthPerLevel: 12.4, calculatorType: "ZhuYuanOutOfStun" },
            { attackName: "Please Do Not Resist - Ether - 3", attackType: "BASIC", Level1Damage: 407.7, growthPerLevel: 37.7, calculatorType: "ZhuYuanOutOfStun" },

            { attackName: "Please Do Not Resist - Ether - 1 - Stunned", attackType: "BASIC", Level1Damage: 135.9, growthPerLevel: 12.4, calculatorType: "ZhuYuanInStun" },
            { attackName: "Please Do Not Resist - Ether - 2 - Stunned", attackType: "BASIC", Level1Damage: 135.9, growthPerLevel: 12.4, calculatorType: "ZhuYuanInStun" },
            { attackName: "Please Do Not Resist - Ether - 3 - Stunned", attackType: "BASIC", Level1Damage: 407.7, growthPerLevel: 37.7, calculatorType: "ZhuYuanInStun" },
            // DASH
            { attackName: "Firepower Offensive", attackType: "DASH", Level1Damage: 55.1, growthPerLevel: 5.1 },
            { attackName: "Overwhelming Firepower", attackType: "DASH", Level1Damage: 53.7, growthPerLevel: 4.9 },
            // DODGE
            { attackName: "Fire Blast", attackType: "DASH", Level1Damage: 176.8, growthPerLevel: 16.1 },
            // ASSIST
            { attackName: "Covering Shot", attackType: "ASSIST", Level1Damage: 51.4, growthPerLevel: 4.7 },
            { attackName: "Defensive Counter", attackType: "ASSIST", Level1Damage: 355.8, growthPerLevel: 71.2 },
            // SPECIAL
            { attackName: "Buckshot Blast", attackType: "SPECIAL", Level1Damage: 18.4, growthPerLevel: 1.7 },
            // EX SPECIAL
            { attackName: "Full Barrage", attackType: "EXSPECIAL", Level1Damage: 587.4, growthPerLevel: 53.4 },
            // CHAIN
            { attackName: "Eradication Mode", attackType: "CHAIN", Level1Damage: 587.5, growthPerLevel: 53.5 },
            // ULT
            { attackName: "Max Eradication Mode", attackType: "ULT", Level1Damage: 1977.6, growthPerLevel: 179.8 },
        ],
    },
    {
        characterName: "Ellen",
        attackStats: [
            // BASIC
            { attackName: "Saw Teeth Trimming - 1", attackType: "BASIC", Level1Damage: 48.8, growthPerLevel: 4.5 },
            { attackName: "Saw Teeth Trimming - 2", attackType: "BASIC", Level1Damage: 111.1, growthPerLevel: 10.1 },
            { attackName: "Saw Teeth Trimming - 3", attackType: "BASIC", Level1Damage: 297.3, growthPerLevel: 27.1 },
            
            { attackName: "Flash Freeze Trimming - 1", attackType: "BASIC", Level1Damage: 99.6, growthPerLevel: 9.1 },
            { attackName: "Flash Freeze Trimming - 2", attackType: "BASIC", Level1Damage: 184, growthPerLevel: 16.8 },
            { attackName: "Flash Freeze Trimming - 3", attackType: "BASIC", Level1Damage: 496.2, growthPerLevel: 45.2 },
            
            { attackName: "Glacial Blade Wave - 1", attackType: "BASIC", Level1Damage: 230.2, growthPerLevel: 21 },
            { attackName: "Glacial Blade Wave - 2", attackType: "BASIC", Level1Damage: 146.8, growthPerLevel: 13.4 },
            { attackName: "Glacial Blade Wave - 1 + 2", attackType: "BASIC", Level1Damage: 377, growthPerLevel: 34.4 },
            
            { attackName: "Icy Blade - Small Enemy", attackType: "BASIC", Level1Damage: 181.2, growthPerLevel: 16.5 },
            { attackName: "Icy Blade - Medium Enemy", attackType: "BASIC", Level1Damage: 220.2, growthPerLevel: 20.1 },
            { attackName: "Icy Blade - Large Enemy", attackType: "BASIC", Level1Damage: 259.2, growthPerLevel: 23.7 },
            // DASH
            { attackName: "Arctic Ambush  - Spinning Slash", attackType: "DASH", Level1Damage: 62.3, growthPerLevel: 5.7 },
            { attackName: "Arctic Ambush  - Swift Scissors", attackType: "DASH", Level1Damage: 127.6, growthPerLevel: 11.6 },
            { attackName: "Arctic Ambush  - Charged Scissors", attackType: "DASH", Level1Damage: 158.2, growthPerLevel: 14.4 },
            { attackName: "Arctic Ambush  - Swift Scissors Flash Freeze Charge Obtained", attackType: "DASH", Level1Damage: 1, growthPerLevel: 0 },
            { attackName: "Arctic Ambush  - Charged Scissors Flash Freeze Charge Obtained", attackType: "DASH", Level1Damage: 3, growthPerLevel: 0 },
            
            { attackName: "Monstrous Wave", attackType: "DASH", Level1Damage: 77, growthPerLevel: 7 },

            { attackName: "Cold Snap", attackType: "DASH", Level1Damage: 145.7, growthPerLevel: 13.3 },
            // DODGE
            { attackName: "Reef Rock", attackType: "DASH", Level1Damage: 152.6, growthPerLevel: 13.9 },
            // ASSIST
            { attackName: "Shark Sentinel", attackType: "ASSIST", Level1Damage: 121.1, growthPerLevel: 11.1 },
            { attackName: "Shark Cruiser", attackType: "ASSIST", Level1Damage: 437.9, growthPerLevel: 39.9 },
            // SPECIAL
            { attackName: "Drift", attackType: "SPECIAL", Level1Damage: 50.5, growthPerLevel: 4.6 },
            // EX SPECIAL
            { attackName: "Tail Swipe", attackType: "EXSPECIAL", Level1Damage: 377.2, growthPerLevel: 34.3 },
            { attackName: "Sharknami", attackType: "EXSPECIAL", Level1Damage: 553.3, growthPerLevel: 50.3 },
            // CHAIN
            { attackName: "Avalanche", attackType: "CHAIN", Level1Damage: 794.6, growthPerLevel: 72.3 },
            // ULT
            { attackName: "Endless Winter", attackType: "ULT", Level1Damage: 1890.8, growthPerLevel: 171.9 },
        ],
    },
    {
        characterName: "Qingyi",
        attackStats: [
            // BASIC
            { attackName: "Penultimate - 1", attackType: "BASIC", Level1Damage: 47.2, growthPerLevel: 4.3 },
            { attackName: "Penultimate - 1 Alt", attackType: "BASIC", Level1Damage: 110.3, growthPerLevel: 10.1 },
            { attackName: "Penultimate - 2", attackType: "BASIC", Level1Damage: 122.1, growthPerLevel: 11.1 },
            { attackName: "Penultimate - 3", attackType: "BASIC", Level1Damage: 17.6, growthPerLevel: 1.6 },
            { attackName: "Penultimate - 4", attackType: "BASIC", Level1Damage: 106.4, growthPerLevel: 9.7 },
            { attackName: "Penultimate - 4 Enhanced", attackType: "BASIC", Level1Damage: 234.4, growthPerLevel: 21.4 },
            
            { attackName: "Enchanted Blossoms", attackType: "BASIC", Level1Damage: 85.6, growthPerLevel: 7.8 },
            
            { attackName: "Enchanted Moonlit Blossoms - Rush Attack", attackType: "BASIC", Level1Damage: 448.7, growthPerLevel: 40.8 },
            { attackName: "Enchanted Moonlit Blossoms - Finishing Strike", attackType: "BASIC", Level1Damage: 394.4, growthPerLevel: 35.9 },
            // DASH
            { attackName: "Breach", attackType: "DASH", Level1Damage: 49.5, growthPerLevel: 4.5 },
            // DODGE
            { attackName: "Lingering Sentiments", attackType: "DASH", Level1Damage: 284, growthPerLevel: 25.9 },
            // ASSIST
            { attackName: "Wind Through the Pines", attackType: "ASSIST", Level1Damage: 133.9, growthPerLevel: 12.2 },
            { attackName: "Song of the Clear River", attackType: "ASSIST", Level1Damage: 376.4, growthPerLevel: 34.3 },
            // SPECIAL
            { attackName: "Sunlit Glory", attackType: "SPECIAL", Level1Damage: 62.4, growthPerLevel: 5.7 },
            // EX SPECIAL
            { attackName: "Moonlit Begonia", attackType: "EXSPECIAL", Level1Damage: 602.8, growthPerLevel: 54.9 },
            // CHAIN
            { attackName: "Tranquil Serenade", attackType: "CHAIN", Level1Damage: 647.9, growthPerLevel: 58.9 },
            // ULT
            { attackName: "Eight Sounds of Ganzhou", attackType: "ULT", Level1Damage: 1670.7, growthPerLevel: 151.9 },
        ],
    },
    {
        characterName: "Jane Doe",
        attackStats: [
            // BASIC
            { attackName: "Dancing Blades - 1", attackType: "BASIC", Level1Damage: 36.1, growthPerLevel: 3.3 },
            { attackName: "Dancing Blades - 2", attackType: "BASIC", Level1Damage: 62.3, growthPerLevel: 5.7 },
            { attackName: "Dancing Blades - 3", attackType: "BASIC", Level1Damage: 83.5, growthPerLevel: 7.6 },
            { attackName: "Dancing Blades - 4", attackType: "BASIC", Level1Damage: 163.4, growthPerLevel: 14.9 },
            { attackName: "Dancing Blades - 5", attackType: "BASIC", Level1Damage: 98.8, growthPerLevel: 9 },
            { attackName: "Dancing Blades - 6", attackType: "BASIC", Level1Damage: 291.3, growthPerLevel: 26.5 },
           
            { attackName: " Salchow Jump - Combo", attackType: "BASIC", Level1Damage: 300.8, growthPerLevel: 27.4 },
            { attackName: " Salchow Jump - Finishing Strike", attackType: "BASIC", Level1Damage: 161.3, growthPerLevel: 14.7 },
            // DASH
            { attackName: "Edge Jump - 1", attackType: "DASH", Level1Damage: 71.5, growthPerLevel: 6.5 },
            { attackName: "Edge Jump - 2", attackType: "DASH", Level1Damage: 71.5, growthPerLevel: 6.5 },
            // DODGE
            { attackName: "Phantom Thrust", attackType: "DASH", Level1Damage: 104.5, growthPerLevel: 9.5 },
            { attackName: "Swift Shadow - 1", attackType: "DASH", Level1Damage: 341.2, growthPerLevel: 31.1 },
            { attackName: "Swift Shadow - 2", attackType: "DASH", Level1Damage: 341.2, growthPerLevel: 31.1 },
            { attackName: "Swift Shadow Dance", attackType: "DASH", Level1Damage: 387, growthPerLevel: 35.2 },
            // ASSIST
            { attackName: "Dark Thorn", attackType: "ASSIST", Level1Damage: 119.2, growthPerLevel: 10.9 },
            { attackName: "Gale Sweep", attackType: "ASSIST", Level1Damage: 345.5, growthPerLevel: 31.5 },
            // SPECIAL
            { attackName: "Aerial Sweep", attackType: "SPECIAL", Level1Damage: 57.8, growthPerLevel: 5.3 },
            // EX SPECIAL
            { attackName: "Aerial Sweep - Tail Swipe", attackType: "EXSPECIAL", Level1Damage: 574.7, growthPerLevel: 52.3 },
            // CHAIN
            { attackName: "Flowers of Sin", attackType: "CHAIN", Level1Damage: 632.6, growthPerLevel: 57.6 },
            // ULT
            { attackName: "Final Curtain", attackType: "ULT", Level1Damage: 1470.6, growthPerLevel: 133.7 },
        ],
    },
    {
        characterName: "Seth",
        attackStats: [
            // BASIC
            { attackName: "Lightning Strike - 1", attackType: "BASIC", Level1Damage: 36.2, growthPerLevel: 3.3 },
            { attackName: "Lightning Strike - 2", attackType: "BASIC", Level1Damage: 56.5, growthPerLevel: 5.2 },
            { attackName: "Lightning Strike - 3", attackType: "BASIC", Level1Damage: 193.3, growthPerLevel: 17.6 },
            { attackName: "Lightning Strike - 4", attackType: "BASIC", Level1Damage: 97.4, growthPerLevel: 8.9 },
            
            { attackName: "Lightning Strike - Electrified - Combo", attackType: "BASIC", Level1Damage: 382.8, growthPerLevel: 34.8 },
            { attackName: "Lightning Strike - Electrified - Finisher", attackType: "BASIC", Level1Damage: 424.2, growthPerLevel: 38.6 },
            // DASH
            { attackName: "Thunder Assault", attackType: "DASH", Level1Damage: 110, growthPerLevel: 10 },
            // DODGE
            { attackName: "Retreat to Advance", attackType: "DASH", Level1Damage: 230, growthPerLevel: 21 },
            // ASSIST
            { attackName: "Armed Support", attackType: "ASSIST", Level1Damage: 100, growthPerLevel: 9.1 },
            { attackName: "Public Security Ruling", attackType: "ASSIST", Level1Damage: 428.5, growthPerLevel: 39 },
            // SPECIAL
            { attackName: "Thunder Shield Rush", attackType: "SPECIAL", Level1Damage: 69.2, growthPerLevel: 75.5 },
            // EX SPECIAL
            { attackName: "Thunder Shield Rush - High Voltage", attackType: "EXSPECIAL", Level1Damage: 646, growthPerLevel: 58.8 },
            { attackName: "Thunder Shield Rush - High Voltage - Charged", attackType: "EXSPECIAL", Level1Damage: 999.8, growthPerLevel: 90.9 },
            // CHAIN
            { attackName: "Final Judgement", attackType: "CHAIN", Level1Damage: 704.1, growthPerLevel: 64.1 },
            // ULT
            { attackName: "Justice Prevails", attackType: "ULT", Level1Damage: 2024.3, growthPerLevel: 184.1 },
        ],
    },
    {
        characterName: "Caesar",
        attackStats: [
            // BASIC
            { attackName: "Rampaging Slash - 1", attackType: "BASIC", Level1Damage: 47.2, growthPerLevel: 4.3 },
            { attackName: "Rampaging Slash - 2", attackType: "BASIC", Level1Damage: 40.9, growthPerLevel: 3.8 },
            { attackName: "Rampaging Slash - 3", attackType: "BASIC", Level1Damage: 148.3, growthPerLevel: 13.5 },
            { attackName: "Rampaging Slash - 3 Alt", attackType: "BASIC", Level1Damage: 118.4, growthPerLevel: 10.8 },
            { attackName: "Rampaging Slash - 4", attackType: "BASIC", Level1Damage: 78.8, growthPerLevel: 7.2 },
            { attackName: "Rampaging Slash - 5", attackType: "BASIC", Level1Damage: 198.6, growthPerLevel: 18.1 },
            { attackName: "Rampaging Slash - 6", attackType: "BASIC", Level1Damage: 399.9, growthPerLevel: 36.4 },
           
            { attackName: "Dead End", attackType: "BASIC", Level1Damage: 126.3, growthPerLevel: 11.5 },
            // DASH
            { attackName: "Hog Rush", attackType: "DASH", Level1Damage: 62.3, growthPerLevel: 5.7 },
            // DODGE
            { attackName: "Eye For an Eye", attackType: "DASH", Level1Damage: 193.5, growthPerLevel: 17.6 },
            // ASSIST
            { attackName: "Lane Change", attackType: "ASSIST", Level1Damage: 64.2, growthPerLevel: 5.9 },
            { attackName: "Aiding Blade", attackType: "ASSIST", Level1Damage: 407.2, growthPerLevel: 37.1 },
            // SPECIAL
            { attackName: "Shockwave Shield Bash", attackType: "SPECIAL", Level1Damage: 53.3, growthPerLevel: 53.3 },
            { attackName: "Roaring Thrust", attackType: "SPECIAL", Level1Damage: 58.8, growthPerLevel: 58.8 },
            // EX SPECIAL
            { attackName: "Parry Counter", attackType: "EXSPECIAL", Level1Damage: 387.2, growthPerLevel: 35.2 },
            { attackName: "Parry Counter - Perfect", attackType: "EXSPECIAL", Level1Damage: 387.2, growthPerLevel: 7 },
            { attackName: "Overpowered Shield Bash", attackType: "EXSPECIAL", Level1Damage: 425.7, growthPerLevel: 38.7 },
            // CHAIN
            { attackName: "Road Rage Slam", attackType: "CHAIN", Level1Damage: 638.8, growthPerLevel: 58.1 },
            // ULT
            { attackName: "Savage Smash", attackType: "ULT", Level1Damage: 2012.3, growthPerLevel: 183 },
        ],
    },
    {
        characterName: "Burnice",
        attackStats: [
            // BASIC
            { attackName: "Direct Flame Blend - 1", attackType: "BASIC", Level1Damage: 44.8, growthPerLevel: 4.1 },
            { attackName: "Direct Flame Blend - 2", attackType: "BASIC", Level1Damage: 43.5, growthPerLevel: 4 },
            { attackName: "Direct Flame Blend - 3", attackType: "BASIC", Level1Damage: 71.7, growthPerLevel: 6.6 },
            { attackName: "Direct Flame Blend - 4", attackType: "BASIC", Level1Damage: 66.6, growthPerLevel: 6.1 },
            { attackName: "Direct Flame Blend - 5", attackType: "BASIC", Level1Damage: 96.3, growthPerLevel: 8.8 },
       
            { attackName: "Mixed Flame Blend - Continuous Spray", attackType: "BASIC", Level1Damage: 125.4, growthPerLevel: 11.5 },
            { attackName: "Mixed Flame Blend - Finishing Move", attackType: "BASIC", Level1Damage: 232.8, growthPerLevel: 21.2 },
            { attackName: "Mixed Flame Blend - Total", attackType: "BASIC", Level1Damage: 358.2, growthPerLevel: 32.7 },
            // DASH
            { attackName: "Dangerous Fermentation", attackType: "DASH", Level1Damage: 67.9, growthPerLevel: 6.2 },
            // DODGE
            { attackName: "Fluttering Steps", attackType: "DASH", Level1Damage: 219.7, growthPerLevel: 20 },
            // ASSIST
            { attackName: "Energizing Specialty Drink", attackType: "ASSIST", Level1Damage: 84.4, growthPerLevel: 7.7 },
            { attackName: "Scorching Dew", attackType: "ASSIST", Level1Damage: 327.6, growthPerLevel: 29.8 },
            // SPECIAL
            { attackName: "Intense Heat Aging Method", attackType: "SPECIAL", Level1Damage: 57.8, growthPerLevel: 5.3 },
            { attackName: "Intense Heat Aging Method - Charged", attackType: "SPECIAL", Level1Damage: 62.4, growthPerLevel: 5.7 },
            // EX SPECIAL
            { attackName: "Intense Heat Stirring Method - Double Shot - Continuous Spray", attackType: "EXSPECIAL", Level1Damage: 958.1, growthPerLevel: 87.1 },
            { attackName: "Intense Heat Stirring Method - Double Shot - Fire Blast", attackType: "EXSPECIAL", Level1Damage: 287.1, growthPerLevel: 26.1 },
            { attackName: "Intense Heat Stirring Method - Continuous Spray", attackType: "EXSPECIAL", Level1Damage: 543.8, growthPerLevel: 49.5 },
            { attackName: "Intense Heat Stirring Method - Fire Blast ", attackType: "EXSPECIAL", Level1Damage: 96.7, growthPerLevel: 8.8 },
            // CHAIN
            { attackName: "Fuel-Fed Flame", attackType: "CHAIN", Level1Damage: 680.9, growthPerLevel: 61.9 },
            // ULT
            { attackName: "Glorious Inferno", attackType: "ULT", Level1Damage: 2012.2, growthPerLevel: 183 },
        ],
    },
    {
        characterName: "Yanagi",
        attackStats: [
            // BASIC
            { attackName: "Tsukuyomi Kagura - Jougen - 1", attackType: "BASIC", Level1Damage: 56.6, growthPerLevel: 5.2 },
            { attackName: "Tsukuyomi Kagura - Jougen - 2", attackType: "BASIC", Level1Damage: 99.7, growthPerLevel: 9.1 },
            { attackName: "Tsukuyomi Kagura - Jougen - 3", attackType: "BASIC", Level1Damage: 113.1, growthPerLevel: 10.3 },
            { attackName: "Tsukuyomi Kagura - Jougen - 4", attackType: "BASIC", Level1Damage: 126.6, growthPerLevel: 11.6 },
            { attackName: "Tsukuyomi Kagura - Jougen - 5", attackType: "BASIC", Level1Damage: 236.9, growthPerLevel: 21.6 },
          
            { attackName: "Tsukuyomi Kagura - Kagen - 1", attackType: "BASIC", Level1Damage: 113.1, growthPerLevel: 10.3 },
            { attackName: "Tsukuyomi Kagura - Kagen - 2", attackType: "BASIC", Level1Damage: 129.2, growthPerLevel: 11.8 },
            { attackName: "Tsukuyomi Kagura - Kagen - 3", attackType: "BASIC", Level1Damage: 72.8, growthPerLevel: 6.7 },
            { attackName: "Tsukuyomi Kagura - Kagen - 4", attackType: "BASIC", Level1Damage: 107.7, growthPerLevel: 9.8 },
            { attackName: "Tsukuyomi Kagura - Kagen - 5", attackType: "BASIC", Level1Damage: 271.8, growthPerLevel: 24.8 },
            // DASH
            { attackName: "Fleeting Flight", attackType: "DASH", Level1Damage: 50.4, growthPerLevel: 4.6 },
            // DODGE
            { attackName: "Rapid Retaliation", attackType: "DASH", Level1Damage: 231.6, growthPerLevel: 21.1 },
            // ASSIST
            { attackName: "Blade of Elegance", attackType: "ASSIST", Level1Damage: 93.6, growthPerLevel: 8.6 },
            { attackName: "Weeping Willow Stab", attackType: "ASSIST", Level1Damage: 407.1, growthPerLevel: 37.1 },
            // SPECIAL
            { attackName: "Ruten", attackType: "SPECIAL", Level1Damage: 117.4, growthPerLevel: 10.7 },
            // EX SPECIAL
            { attackName: "Gekka Ruten - Thrust", attackType: "EXSPECIAL", Level1Damage: 163.8, growthPerLevel: 14.9 },
            { attackName: "Gekka Ruten - Downward", attackType: "EXSPECIAL", Level1Damage: 377.8, growthPerLevel: 34.4 , calculatorType: "YanagiEXSpecial"},
            // CHAIN
            { attackName: "Celestial Harmony", attackType: "CHAIN", Level1Damage: 593.1, growthPerLevel: 54 },
            // ULT
            { attackName: "Raiei Tenge", attackType: "ULT", Level1Damage: 1511.8, growthPerLevel: 137.5 , calculatorType: "YanagiUltimate"},
        ],
    },
    {
        characterName: "Lighter",
        attackStats: [
            // BASIC
            { attackName: "L-Form Thundering Fist - 1", attackType: "BASIC", Level1Damage: 39.2, growthPerLevel: 3.6 },
            { attackName: "L-Form Thundering Fist - 2", attackType: "BASIC", Level1Damage: 48, growthPerLevel: 4.4 },
            { attackName: "L-Form Thundering Fist - 3", attackType: "BASIC", Level1Damage: 55.3, growthPerLevel: 5.1 },
            { attackName: "L-Form Thundering Fist - 4", attackType: "BASIC", Level1Damage: 78.9, growthPerLevel: 7.2 },
            { attackName: "L-Form Thundering Fist - 1 - Follow Up", attackType: "BASIC", Level1Damage: 86.9, growthPerLevel: 7.9 },
            { attackName: "L-Form Thundering Fist - 2 - Follow Up", attackType: "BASIC", Level1Damage: 47.7, growthPerLevel: 4.4 },
            { attackName: "L-Form Thundering Fist - 3 - Follow Up", attackType: "BASIC", Level1Damage: 58.1, growthPerLevel: 5.3 },
            { attackName: "L-Form Thundering Fist - 4 - Follow Up", attackType: "BASIC", Level1Damage: 32.8, growthPerLevel: 3 },
            { attackName: "L-Form Thundering Fist - 5 - Follow Up", attackType: "BASIC", Level1Damage: 89, growthPerLevel: 8.1 },
            { attackName: "L-Form Thundering Fist - 5 - Startup", attackType: "BASIC", Level1Damage: 163.6, growthPerLevel: 14.9 },
            { attackName: "L-Form Thundering Fist - 5 - Combo", attackType: "BASIC", Level1Damage: 122.9, growthPerLevel: 11.2 },
            { attackName: "L-Form Thundering Fist - 5 - Finisher", attackType: "BASIC", Level1Damage: 104.6, growthPerLevel: 9.6 },
            { attackName: "L-Form Thundering Fist - 5 - Startup (Morale Burst)", attackType: "BASIC", Level1Damage: 177.2, growthPerLevel: 16.2 },
            { attackName: "L-Form Thundering Fist - 5 - Combo (Morale Burst)", attackType: "BASIC", Level1Damage: 364.3, growthPerLevel: 33.2 },
            { attackName: "L-Form Thundering Fist - 5 - Finisher (Morale Burst)", attackType: "BASIC", Level1Damage: 119.7, growthPerLevel: 10.9 },
            { attackName: "L-Form Thundering Fist - 5 Powerful Finisher (Morale Burst)", attackType: "BASIC", Level1Damage: 435.4, growthPerLevel: 39.6 },
            // DASH
            { attackName: "Charging Slam", attackType: "DASH", Level1Damage: 89.9, growthPerLevel: 8.2 },
            // DODGE
            { attackName: "Blazing Flash", attackType: "DASH", Level1Damage: 186.3, growthPerLevel: 17 },
            // ASSIST
            { attackName: "Blazing Flash - Guard", attackType: "ASSIST", Level1Damage: 76.1, growthPerLevel: 6.4 },
            { attackName: "Charging Slam - Stab", attackType: "ASSIST", Level1Damage: 219.8, growthPerLevel: 20 },
            // SPECIAL
            { attackName: "", attackType: "SPECIAL", Level1Damage: 36.3, growthPerLevel: 3.3 },
            // EX SPECIAL
            { attackName: "V-Form Sunrise Uppercut - Full Distance", attackType: "EXSPECIAL", Level1Damage: 486.3, growthPerLevel: 44.3 },
            { attackName: "V-Form Sunrise Uppercut - Full Distance - Follow Up", attackType: "EXSPECIAL", Level1Damage: 292.7, growthPerLevel: 26.7 },
            // CHAIN
            { attackName: "V-Form Scorching Sun", attackType: "CHAIN", Level1Damage: 712.1, growthPerLevel: 64.8 },
            // ULT
            { attackName: "W-Form Crowned Inferno", attackType: "ULT", Level1Damage: 1508, growthPerLevel: 137.1 },
        ],
    },
    {
        characterName: "Miyabi",
        attackStats: [
            // BASIC
            { attackName: "Kazahana - 1", attackType: "BASIC", Level1Damage: 26.9, growthPerLevel: 2.5 },
            { attackName: "Kazahana - 2", attackType: "BASIC", Level1Damage: 29.6, growthPerLevel: 2.7 },
            { attackName: "Kazahana - 3", attackType: "BASIC", Level1Damage: 62.8, growthPerLevel: 5.8 },
            { attackName: "Kazahana - 4", attackType: "BASIC", Level1Damage: 96.5, growthPerLevel: 8.8 },
            { attackName: "Kazahana - 5", attackType: "BASIC", Level1Damage: 129, growthPerLevel: 11.8 },
            
            { attackName: "Shimotsuki - Charve Lvl 1", attackType: "BASIC", Level1Damage: 454.7, growthPerLevel: 41.4 },
            { attackName: "Shimotsuki - Charve Lvl 2", attackType: "BASIC", Level1Damage: 858.1, growthPerLevel: 78.1 },
            { attackName: "Shimotsuki - Charve Lvl 3", attackType: "BASIC", Level1Damage: 2141.1, growthPerLevel: 194.7 },
            // DASH
            { attackName: "Fuyubachi", attackType: "DASH", Level1Damage: 25.8, growthPerLevel: 2.4 },
            // DODGE
            { attackName: "Kan Suzume", attackType: "DASH", Level1Damage: 245.9, growthPerLevel: 22.4 },
            // ASSIST
            { attackName: "Dancing Petals", attackType: "ASSIST", Level1Damage: 104.5, growthPerLevel: 9.5 },
            { attackName: "Falling Petals", attackType: "ASSIST", Level1Damage: 337.8, growthPerLevel: 30.8 },
            // SPECIAL
            { attackName: "Miyuki", attackType: "SPECIAL", Level1Damage: 35.8, growthPerLevel: 3.3 },
            // EX SPECIAL
            { attackName: "Hisetsu", attackType: "EXSPECIAL", Level1Damage: 393.4, growthPerLevel: 35.9 },
            { attackName: "Hisetsu Follow Up", attackType: "EXSPECIAL", Level1Damage: 483.2, growthPerLevel: 44 },
            // CHAIN
            { attackName: "Spring's Call", attackType: "CHAIN", Level1Damage: 628, growthPerLevel: 57.3 },
            // ULT
            { attackName: "Lingering Snow", attackType: "ULT", Level1Damage: 2388, growthPerLevel: 217.1 },
        ],
    },
    {
        characterName: "Harumasa",
        attackStats: [
            // BASIC
            { attackName: "Cloud Piercer - 1- Additional Active Stun", attackType: "BASIC", Level1Damage: 42.4, growthPerLevel: 3.9, calculatorType: "HarumasaAdditionalActive" },
            { attackName: "Cloud Piercer - 1", attackType: "BASIC", Level1Damage: 42.4, growthPerLevel: 3.9 },
            { attackName: "Cloud Piercer - 2- Additional Active Stun", attackType: "BASIC", Level1Damage: 39.8, growthPerLevel: 3.7, calculatorType: "HarumasaAdditionalActive" },
            { attackName: "Cloud Piercer - 2", attackType: "BASIC", Level1Damage: 39.8, growthPerLevel: 3.7 },
            { attackName: "Cloud Piercer - 3- Additional Active Stun", attackType: "BASIC", Level1Damage: 70.9, growthPerLevel: 6.5, calculatorType: "HarumasaAdditionalActive" },
            { attackName: "Cloud Piercer - 3", attackType: "BASIC", Level1Damage: 70.9, growthPerLevel: 6.5 },
            { attackName: "Cloud Piercer - 4- Additional Active Stun", attackType: "BASIC", Level1Damage: 90.1, growthPerLevel: 8.2, calculatorType: "HarumasaAdditionalActive" },
            { attackName: "Cloud Piercer - 4", attackType: "BASIC", Level1Damage: 90.1, growthPerLevel: 8.2 },
            { attackName: "Cloud Piercer - 5- Additional Active Stun", attackType: "BASIC", Level1Damage: 132.9, growthPerLevel: 12.1, calculatorType: "HarumasaAdditionalActive" },
            { attackName: "Cloud Piercer - 5", attackType: "BASIC", Level1Damage: 132.9, growthPerLevel: 12.1 },
       
            { attackName: "Cloud Piercer - Drift- Additional Active Stun", attackType: "BASIC", Level1Damage: 69.5, growthPerLevel: 6.4, calculatorType: "HarumasaAdditionalActive" },
            { attackName: "Cloud Piercer - Drift", attackType: "BASIC", Level1Damage: 69.5, growthPerLevel: 6.4 },
          
            { attackName: "Falling Feather- Additional Active Stun", attackType: "BASIC", Level1Damage: 105.4, growthPerLevel: 9.6, calculatorType: "HarumasaAdditionalActive" },
            { attackName: "Falling Feather", attackType: "BASIC", Level1Damage: 105.4, growthPerLevel: 9.6 },
           
            { attackName: "Ha-Oto no Ya- Additional Active Stun", attackType: "BASIC", Level1Damage: 15.9, growthPerLevel: 1.5, calculatorType: "HarumasaAdditionalActive" },
            { attackName: "Ha-Oto no Ya", attackType: "BASIC", Level1Damage: 15.9, growthPerLevel: 1.5 },
            // DASH
            { attackName: "Hiten no Tsuru- Additional Active Stun", attackType: "DASH", Level1Damage: 80.7, growthPerLevel: 7.4, calculatorType: "HarumasaAdditionalActive" },
            { attackName: "Hiten no Tsuru", attackType: "DASH", Level1Damage: 80.7, growthPerLevel: 7.4 },
            { attackName: "Hiten no Tsuru - Slash - 1- Additional Active Stun", attackType: "DASH", Level1Damage: 162.3, growthPerLevel: 14.8, calculatorType: "HarumasaAdditionalActive" },
            { attackName: "Hiten no Tsuru - Slash - 1", attackType: "DASH", Level1Damage: 162.3, growthPerLevel: 14.8 },
            { attackName: "Hiten no Tsuru - Slash - 2- Additional Active Stun", attackType: "DASH", Level1Damage: 166.6, growthPerLevel: 15.2, calculatorType: "HarumasaAdditionalActive" },
            { attackName: "Hiten no Tsuru - Slash - 2", attackType: "DASH", Level1Damage: 166.6, growthPerLevel: 15.2 },
            { attackName: "Hiten no Tsuru - Slash - 3- Additional Active Stun", attackType: "DASH", Level1Damage: 189.6, growthPerLevel: 17.3, calculatorType: "HarumasaAdditionalActive" },
            { attackName: "Hiten no Tsuru - Slash - 3", attackType: "DASH", Level1Damage: 189.6, growthPerLevel: 17.3 },
            // DODGE
            { attackName: "Hidden Edge- Additional Active Stun", attackType: "DASH", Level1Damage: 219.6, growthPerLevel: 20, calculatorType: "HarumasaAdditionalActive" },
            { attackName: "Hidden Edge", attackType: "DASH", Level1Damage: 219.6, growthPerLevel: 20 },
            // ASSIST
            { attackName: "Braced Bow- Additional Active Stun", attackType: "ASSIST", Level1Damage: 84.3, growthPerLevel: 7.7, calculatorType: "HarumasaAdditionalActive" },
            { attackName: "Braced Bow", attackType: "ASSIST", Level1Damage: 84.3, growthPerLevel: 7.7 },
            { attackName: "Yugamae - Slash- Additional Active Stun", attackType: "ASSIST", Level1Damage: 307.1, growthPerLevel: 28, calculatorType: "HarumasaAdditionalActive" },
            { attackName: "Yugamae - Slash", attackType: "ASSIST", Level1Damage: 307.1, growthPerLevel: 28 },
            // SPECIAL
            { attackName: "Nowhere to Hide- Additional Active Stun", attackType: "SPECIAL", Level1Damage: 52.3, growthPerLevel: 4.8, calculatorType: "HarumasaAdditionalActive" },
            { attackName: "Nowhere to Hide", attackType: "SPECIAL", Level1Damage: 52.3, growthPerLevel: 4.8 },
            // EX SPECIAL
            { attackName: "Nowhere to Run- Additional Active Stun", attackType: "EXSPECIAL", Level1Damage: 449.3, growthPerLevel: 40.9, calculatorType: "HarumasaAdditionalActive" },
            { attackName: "Nowhere to Run", attackType: "EXSPECIAL", Level1Damage: 449.3, growthPerLevel: 40.9 },
            // CHAIN
            { attackName: "Kai - Hanare- Additional Active Stun", attackType: "CHAIN", Level1Damage: 517.6, growthPerLevel: 47.1, calculatorType: "HarumasaAdditionalActive" },
            { attackName: "Kai - Hanare", attackType: "CHAIN", Level1Damage: 517.6, growthPerLevel: 47.1 },
            // ULT
            { attackName: "Zanshin- Additional Active Stun", attackType: "ULT", Level1Damage: 1953.9, growthPerLevel: 177.7, calculatorType: "HarumasaAdditionalActive" },
            { attackName: "Zanshin", attackType: "ULT", Level1Damage: 1953.9, growthPerLevel: 177.7 },
        ],
    },
    {
        characterName: "Astra Yao",
        attackStats: [
            // BASIC
            { attackName: "Capriccio - 1", attackType: "BASIC", Level1Damage: 43.8, growthPerLevel: 4 },
            { attackName: "Capriccio - 2", attackType: "BASIC", Level1Damage: 59.1, growthPerLevel: 5.4 },
            { attackName: "Capriccio - 3", attackType: "BASIC", Level1Damage: 120.9, growthPerLevel: 11 },
            { attackName: "Capriccio - 3 Max", attackType: "BASIC", Level1Damage: 270.7, growthPerLevel: 24.7 },
           
            { attackName: "Interlude - 1", attackType: "BASIC", Level1Damage: 55, growthPerLevel: 5 },
            { attackName: "Interlude - 2", attackType: "BASIC", Level1Damage: 55, growthPerLevel: 5 },
            { attackName: "Interlude - 3", attackType: "BASIC", Level1Damage: 110, growthPerLevel: 10 },
            { attackName: "Interlude - 4", attackType: "BASIC", Level1Damage: 110, growthPerLevel: 10 },
            { attackName: "Interlude - 5", attackType: "BASIC", Level1Damage: 110, growthPerLevel: 10 },
           
            { attackName: "Chorus", attackType: "BASIC", Level1Damage: 220, growthPerLevel: 220 },
           
            { attackName: "Finale", attackType: "BASIC", Level1Damage: 55, growthPerLevel: 5 },
            // DASH
            { attackName: "Lunar Eclipse Melody", attackType: "DASH", Level1Damage: 80.7, growthPerLevel: 7.4 },
            // DODGE
            { attackName: "Umbrella Waltz", attackType: "DASH", Level1Damage: 110, growthPerLevel: 10 },
            // ASSIST
            { attackName: "One Luminous Sky", attackType: "ASSIST", Level1Damage: 55, growthPerLevel: 5 },
            { attackName: "Three Lifetimes of Fate", attackType: "ASSIST", Level1Damage: 304.6, growthPerLevel: 27.7 },
            // SPECIAL
            { attackName: "Windchimes & Oaths - Minimum", attackType: "SPECIAL", Level1Damage: 55, growthPerLevel: 5 },
            { attackName: "Windchimes & Oaths - Maximum", attackType: "SPECIAL", Level1Damage: 220, growthPerLevel: 20 },
            // EX SPECIAL
            { attackName: "Chord - Follow Up Tremolo", attackType: "EXSPECIAL", Level1Damage: 46, growthPerLevel: 4.2 },
            { attackName: "Chord - Follow Up Tone Cluster", attackType: "EXSPECIAL", Level1Damage: 72, growthPerLevel: 6.6 },
            // CHAIN
            { attackName: "Tipsy Concerto", attackType: "CHAIN", Level1Damage: 671.8, growthPerLevel: 61.1 },
            // ULT
            { attackName: "Fantasian Sonata", attackType: "ULT", Level1Damage: 1959.8, growthPerLevel: 178.2 },
        ],
    },
    {
        characterName: "Evelyn",
        attackStats: [
            // BASIC
            { attackName: "Razor Wire - 1", attackType: "BASIC", Level1Damage: 51.2, growthPerLevel: 4.7 },
            { attackName: "Razor Wire - 2", attackType: "BASIC", Level1Damage: 62.1, growthPerLevel: 5.7 },
            { attackName: "Razor Wire - 3", attackType: "BASIC", Level1Damage: 78.2, growthPerLevel: 7.2 },
            { attackName: "Razor Wire - 4", attackType: "BASIC", Level1Damage: 186.7, growthPerLevel: 17 },
            { attackName: "Razor Wire - 5", attackType: "BASIC", Level1Damage: 223.4, growthPerLevel: 20.4 },
          
            { attackName: "Garrote - First Form", attackType: "BASIC", Level1Damage: 226.4, growthPerLevel: 20.6 },
           
            { attackName: "Garrote - Second Form", attackType: "BASIC", Level1Damage: 245.2, growthPerLevel: 22.3 },
            // DASH
            { attackName: "Piercing Ambush", attackType: "DASH", Level1Damage: 60.5, growthPerLevel: 5.5 },
            // DODGE
            { attackName: "Strangling Reversal", attackType: "DASH", Level1Damage: 210.2, growthPerLevel: 19.2 },
            // ASSIST
            { attackName: "Fierce Blade", attackType: "ASSIST", Level1Damage: 77.1, growthPerLevel: 7.1 },
            { attackName: "Course Disruption", attackType: "ASSIST", Level1Damage: 291.6, growthPerLevel: 26.6 },
            // SPECIAL
            { attackName: "Locked Position", attackType: "SPECIAL", Level1Damage: 52.3, growthPerLevel: 4.8 },
            { attackName: "Binding Sunder - First Form - Bind", attackType: "SPECIAL", Level1Damage: 40.4, growthPerLevel: 3.7 },
            { attackName: "Binding Sunder - First Form - Explosion", attackType: "SPECIAL", Level1Damage: 34, growthPerLevel: 3.1 },
            // EX SPECIAL
            { attackName: "Binding Sunder - Final Form - Bind", attackType: "EXSPECIAL", Level1Damage: 541.2, growthPerLevel: 49.2 },
            { attackName: "Binding Sunder - First Form - Explosion", attackType: "EXSPECIAL", Level1Damage: 59.6, growthPerLevel: 5.5 },
            // CHAIN
            { attackName: "Lunalux - Snare - AA active", attackType: "CHAIN", Level1Damage: 829.3, growthPerLevel: 75.4, calculatorType: "EvelynAdditionalActive" },
            { attackName: "Lunalux - Snare - AA inactive", attackType: "CHAIN", Level1Damage: 829.3, growthPerLevel: 75.4 },
            // ULT
            { attackName: "Lunalux Garrote - AA active", attackType: "ULT", Level1Damage: 1988.5, growthPerLevel: 180.2 , calculatorType: "EvelynAdditionalActive" },
            { attackName: "Lunalux Garrote - AA inactive", attackType: "ULT", Level1Damage: 1988.5, growthPerLevel: 180.2 },
        ],
    },
    {
        characterName: "Soldier 0 Anby",
        attackStats: [
            // BASIC
            { attackName: "Penetrating Shock - 1", attackType: "BASIC", Level1Damage: 32.7, growthPerLevel: 3 },
            { attackName: "Penetrating Shock - 2", attackType: "BASIC", Level1Damage: 62.2, growthPerLevel: 5.7 },
            { attackName: "Penetrating Shock - 3 Finisher", attackType: "BASIC", Level1Damage: 80.1, growthPerLevel: 7.3 },
            { attackName: "Penetrating Shock - 3", attackType: "BASIC", Level1Damage: 39.9, growthPerLevel: 3.7 },
            { attackName: "Penetrating Shock - 4", attackType: "BASIC", Level1Damage: 154.5, growthPerLevel: 14.1 },
            { attackName: "Penetrating Shock - 5", attackType: "BASIC", Level1Damage: 148.5, growthPerLevel: 13.5 },
            // DASH
            { attackName: "Torrent", attackType: "DASH", Level1Damage: 82.5, growthPerLevel: 7.5 },
            // DODGE
            { attackName: "Ground Flash Counter", attackType: "DASH", Level1Damage: 250.6, growthPerLevel: 22.8 },
            // ASSIST
            { attackName: "Cloud Flash", attackType: "ASSIST", Level1Damage: 108.2, growthPerLevel: 9.9 },
            { attackName: "Conducting Blow", attackType: "ASSIST", Level1Damage: 407.1, growthPerLevel: 37.1 },
            // SPECIAL
            { attackName: "Celestial Thunder", attackType: "SPECIAL", Level1Damage: 59.6, growthPerLevel: 5.5 },

            { attackName: "Azure Flash - Total", attackType: "SPECIAL", Level1Damage: 210.2, growthPerLevel: 19.2 },
            { attackName: "Azure Flash - White Thunder", attackType: "SPECIAL", Level1Damage: 167.2, growthPerLevel: 15.2 },
            { attackName: "Azure Flash", attackType: "SPECIAL", Level1Damage: 43, growthPerLevel: 4 },

            { attackName: "Thunder Smite", attackType: "SPECIAL", Level1Damage: 188.1, growthPerLevel: 17.1 },
            // EX SPECIAL
            { attackName: "Sundering Bolt", attackType: "EXSPECIAL", Level1Damage: 379.6, growthPerLevel: 34.6 },
            // CHAIN
            { attackName: "Leaping Thunderstrike", attackType: "CHAIN", Level1Damage: 563.8, growthPerLevel: 51.3 },
            // ULT
            { attackName: "Voidstrike", attackType: "ULT", Level1Damage: 1734.9, growthPerLevel: 157.8 },
        ],
    },
    {
        characterName: "Pulchra",
        attackStats: [
            // BASIC
            { attackName: "Swift Strike - 1", attackType: "BASIC", Level1Damage: 35.7, growthPerLevel: 3.3 },
            { attackName: "Swift Strike - 2", attackType: "BASIC", Level1Damage: 94.1, growthPerLevel: 8.6 },
            { attackName: "Swift Strike - 3", attackType: "BASIC", Level1Damage: 167.6, growthPerLevel: 15.3 },

            { attackName: "Leaping Strike", attackType: "BASIC", Level1Damage: 135, growthPerLevel: 12.3 },
            // DASH
            { attackName: "First Strike Advantage", attackType: "DASH", Level1Damage: 48.3, growthPerLevel: 4.4 },
            // DODGE
            { attackName: "Relentless Retribution", attackType: "DASH", Level1Damage: 201.8, growthPerLevel: 18.4 },
            // ASSIST
            { attackName: "Contract - Bodyguard", attackType: "ASSIST", Level1Damage: 78.3, growthPerLevel: 7.2 },
            { attackName: "Independent Pricing", attackType: "ASSIST", Level1Damage: 307.1, growthPerLevel: 28 },
            // SPECIAL
            { attackName: "Rending Claw", attackType: "SPECIAL", Level1Damage: 25.1, growthPerLevel: 2.3 },
            { attackName: "Rending Claw - Nightmare Shadow", attackType: "SPECIAL", Level1Damage: 46.3, growthPerLevel: 4.3 },
            { attackName: "Rending Claw - Nightmare Shadow -Finishing Move", attackType: "SPECIAL", Level1Damage: 53.5, growthPerLevel: 4.9 },
            // EX SPECIAL
            { attackName: "Rending Claw - Flashstep", attackType: "EXSPECIAL", Level1Damage: 347.7, growthPerLevel: 31.7 },
            // CHAIN
            { attackName: "Hey, Didn't Expect That, Right?", attackType: "CHAIN", Level1Damage: 534.1, growthPerLevel: 48.6 },
            // ULT
            { attackName: "Oh, Time to Play?", attackType: "ULT", Level1Damage: 1393.8, growthPerLevel: 126.8 },
        ],
    },
    {
        characterName: "Trigger",
        attackStats: [
            // BASIC
            { attackName: "Cold-Bore Shot - 1", attackType: "BASIC", Level1Damage: 34.5, growthPerLevel: 3.2 },
            { attackName: "Cold-Bore Shot - 2", attackType: "BASIC", Level1Damage: 56.9, growthPerLevel: 5.2 },
            { attackName: "Cold-Bore Shot - 3", attackType: "BASIC", Level1Damage: 110.9, growthPerLevel: 10.1 },
            { attackName: "Cold-Bore Shot - 4", attackType: "BASIC", Level1Damage: 243, growthPerLevel: 22.1 },
            
            { attackName: "Silenced Shot - Shot", attackType: "BASIC", Level1Damage: 47.6, growthPerLevel: 4.4 },
            { attackName: "Silenced Shot - Counter", attackType: "BASIC", Level1Damage: 233.9, growthPerLevel: 21.3 },
            { attackName: "Silenced Shot - Finisher", attackType: "BASIC", Level1Damage: 131.2, growthPerLevel: 12 },
           
            { attackName: "Harmonizing Shot", attackType: "BASIC", Level1Damage: 95.8, growthPerLevel: 8.8 },
            
            { attackName: "Harmonizing Shot - Tartarus - Continuous ", attackType: "BASIC", Level1Damage: 67.8, growthPerLevel: 6.3 },
            { attackName: "Harmonizing Shot - Tartarus - Finisher ", attackType: "BASIC", Level1Damage: 45.2, growthPerLevel: 4.2 },
            // DASH
            { attackName: "Vengeful Specter", attackType: "DASH", Level1Damage: 51.4, growthPerLevel: 4.7 },
            // DODGE
            { attackName: "Condemned Soul", attackType: "DASH", Level1Damage: 219.7, growthPerLevel: 20 },
            // ASSIST
            { attackName: "Cold-Bore Cover Fire", attackType: "ASSIST", Level1Damage: 84.4, growthPerLevel: 7.7 },
            { attackName: "Piercing Thunder", attackType: "ASSIST", Level1Damage: 432.9, growthPerLevel: 39.4 },
            // SPECIAL
            { attackName: "Spectral Flash", attackType: "SPECIAL", Level1Damage: 71.5, growthPerLevel: 6.5 },
            // EX SPECIAL
            { attackName: "Flash Burial", attackType: "EXSPECIAL", Level1Damage: 634.4, growthPerLevel: 57.7 },
            // CHAIN
            { attackName: "Stygian Guide", attackType: "CHAIN", Level1Damage: 574.7, growthPerLevel: 52.3 },
            // ULT
            { attackName: "Underworld Requiem", attackType: "ULT", Level1Damage: 1480.5, growthPerLevel: 134.6 },
        ],
    },
    {
        characterName: "Vivian",
        attackStats: [
            // BASIC
            { attackName: "Feathered Strike - 1", attackType: "BASIC", Level1Damage: 34.1, growthPerLevel: 3.1 },
            { attackName: "Feathered Strike - 2", attackType: "BASIC", Level1Damage: 24.2, growthPerLevel: 2.2 },
            { attackName: "Feathered Strike - 3", attackType: "BASIC", Level1Damage: 76.9, growthPerLevel: 7 },
            { attackName: "Feathered Strike - 4", attackType: "BASIC", Level1Damage: 128.4, growthPerLevel: 11.7 },
           
            { attackName: "Noblweoman - Waltz", attackType: "BASIC", Level1Damage: 47.8, growthPerLevel: 4.4 },
           
            { attackName: "Fluttering Frock - Suspension", attackType: "BASIC", Level1Damage: 80.2, growthPerLevel: 7.3 },
          
            { attackName: "Featherbloom", attackType: "BASIC", Level1Damage: 220, growthPerLevel: 20 },
            // DASH
            { attackName: "Silver Thorned Melody", attackType: "DASH", Level1Damage: 59.6, growthPerLevel: 4.6 },
            // DODGE
            { attackName: "Wingblade Reverb", attackType: "DASH", Level1Damage: 236.4, growthPerLevel: 21.5 },
            // ASSIST
            { attackName: "Frostwing Guard", attackType: "ASSIST", Level1Damage: 97.3, growthPerLevel: 8.9 },
            { attackName: "Featherblade Execution", attackType: "ASSIST", Level1Damage: 373.9, growthPerLevel: 34 },
            // SPECIAL
            { attackName: "Song of Silver Wings", attackType: "SPECIAL", Level1Damage: 56.9, growthPerLevel: 5.2 },
            // EX SPECIAL
            { attackName: "Violet Requiem", attackType: "EXSPECIAL", Level1Damage: 592.6, growthPerLevel: 53.9 },
            // CHAIN
            { attackName: "Chorus of Celestial Wings", attackType: "CHAIN", Level1Damage: 658.9, growthPerLevel: 59.9 },
            // ULT
            { attackName: "Soarding Bird's Song", attackType: "ULT", Level1Damage: 1686.8, growthPerLevel: 153.4 },
        ],
    },
    {
        characterName: "Hugo",
        attackStats: [
            // BASIC
            { attackName: "Dark Abyss Quartet - 1", attackType: "BASIC", Level1Damage: 43.1, growthPerLevel: 4 },
            { attackName: "Dark Abyss Quartet - 2", attackType: "BASIC", Level1Damage: 74.1, growthPerLevel: 6.8 },
            { attackName: "Dark Abyss Quartet - 3", attackType: "BASIC", Level1Damage: 169.6, growthPerLevel: 15.5 },
            { attackName: "Dark Abyss Quartet - Slash", attackType: "BASIC", Level1Damage: 149.1, growthPerLevel: 13.6 },
            { attackName: "Dark Abyss Quartet - Shot", attackType: "BASIC", Level1Damage: 58.6, growthPerLevel: 5.4 },
            { attackName: "Dark Abyss Quartet - Charged Shot", attackType: "BASIC", Level1Damage: 118, growthPerLevel: 10.8 },
           
            { attackName: "Abyss Concerto - Slash", attackType: "BASIC", Level1Damage: 143.4, growthPerLevel: 13.1 },
            { attackName: "Abyss Concerto - Shot", attackType: "BASIC", Level1Damage: 86.7, growthPerLevel: 7.9 },
            { attackName: "Abyss Concerto - Charged Shot", attackType: "BASIC", Level1Damage: 170.6, growthPerLevel: 15.6 },
            // DASH
            { attackName: "Phantasm - Shatter", attackType: "DASH", Level1Damage: 93.5, growthPerLevel: 8.5 },
            // DODGE
            { attackName: "Phantasm - Slash", attackType: "DASH", Level1Damage: 245.9, growthPerLevel: 22.4 },
            { attackName: "Phantasm - Slash - ALT Shot", attackType: "DASH", Level1Damage: 162.1, growthPerLevel: 14.8 },
            { attackName: "Phantasm - Slash - ALT Charged Shot", attackType: "DASH", Level1Damage: 212.1, growthPerLevel: 19.3 },
            // ASSIST
            { attackName: "Elegy", attackType: "ASSIST", Level1Damage: 104.5, growthPerLevel: 9.5 },
            { attackName: "Elegy - ALT Shot", attackType: "ASSIST", Level1Damage: 124.7, growthPerLevel: 11.4 },
            { attackName: "Elegy - ALT Charged Shot", attackType: "ASSIST", Level1Damage: 163.2, growthPerLevel: 14.9 },
            { attackName: "Ace Reversal", attackType: "ASSIST", Level1Damage: 291.7, growthPerLevel: 26.6 },
            // SPECIAL
            { attackName: "Soul Hunter - Judgment", attackType: "SPECIAL", Level1Damage: 85.3, growthPerLevel: 7.8 },
            // EX SPECIAL
            { attackName: "Soul Hunter - Punishment", attackType: "EXSPECIAL", Level1Damage: 373.2, growthPerLevel: 34 },
            // CHAIN
            { attackName: "Trick of Fate", attackType: "CHAIN", Level1Damage: 701.1, growthPerLevel: 63.8 },
            // ULT
            { attackName: "Blaspheme", attackType: "ULT", Level1Damage: 1527.1, growthPerLevel: 138.9 },
        ],
    },
    {
        characterName: "Pan Yinhu",
        attackStats: [
            // BASIC
            { attackName: "Unyielding Strikes - 1", attackType: "BASIC", Level1Damage: 49.7, growthPerLevel: 4.6 },
            { attackName: "Unyielding Strikes - 2", attackType: "BASIC", Level1Damage: 49.8, growthPerLevel: 4.6 },
            { attackName: "Unyielding Strikes - 3", attackType: "BASIC", Level1Damage: 109.4, growthPerLevel: 10 },
            { attackName: "Unyielding Strikes - 4", attackType: "BASIC", Level1Damage: 211.3, growthPerLevel: 19.3 },
            // DASH
            { attackName: "Sizzling Oil Supreme", attackType: "DASH", Level1Damage: 83.4, growthPerLevel: 7.6 },
            // DODGE
            { attackName: "Moving Mountains and Seas", attackType: "DASH", Level1Damage: 219.2, growthPerLevel: 20 },
            // ASSIST
            { attackName: "Lift Your Gaze to Good Fortune", attackType: "ASSIST", Level1Damage: 91.7, growthPerLevel: 8.4 },
            { attackName: "Ride the Momentum", attackType: "ASSIST", Level1Damage: 337.4, growthPerLevel: 30.7 },
            // SPECIAL
            { attackName: "Sonic Pressure-Point Strike", attackType: "SPECIAL", Level1Damage: 62.5, growthPerLevel: 5.7 },
            { attackName: "Touch of Death - 1", attackType: "SPECIAL", Level1Damage: 97.3, growthPerLevel: 8.9 },
            { attackName: "Touch of Death - 2", attackType: "SPECIAL", Level1Damage: 97.3, growthPerLevel: 8.9 },
            { attackName: "Touch of Death - 3", attackType: "SPECIAL", Level1Damage: 97.3, growthPerLevel: 8.9 },
            // EX SPECIAL
            { attackName: "Mountainous Pulse Strike", attackType: "EXSPECIAL", Level1Damage: 384.1, growthPerLevel: 35 },
            // CHAIN
            { attackName: "Anointed with Wok Steam", attackType: "CHAIN", Level1Damage: 632.3, growthPerLevel: 57.5 },
            // ULT
            { attackName: "A Feast Fit for an Emperor!", attackType: "ULT", Level1Damage: 1627.9, growthPerLevel: 148 },
        ],
    },
    {
        characterName: "Yixuan",
        attackStats: [
            // BASIC
            { attackName: "Cirrus Strike - 1", attackType: "BASIC", Level1Damage: 45.8, growthPerLevel: 4.2 },
            { attackName: "Cirrus Strike - 2", attackType: "BASIC", Level1Damage: 65.5, growthPerLevel: 6 },
            { attackName: "Cirrus Strike - 3", attackType: "BASIC", Level1Damage: 87.1, growthPerLevel: 8 },
            { attackName: "Cirrus Strike - 4", attackType: "BASIC", Level1Damage: 104.8, growthPerLevel: 9.6 },
            { attackName: "Cirrus Strike - 5", attackType: "BASIC", Level1Damage: 113.7, growthPerLevel: 10.4 },

            { attackName: "Ink-Veil Cloud Coalescence", attackType: "BASIC", Level1Damage: 234.7, growthPerLevel: 21.4 },

            { attackName: "Auric Array", attackType: "BASIC", Level1Damage: 305.2, growthPerLevel: 27.8 , calculatorType: "YixuanBonus"},

            { attackName: "Qingming Eruption", attackType: "BASIC", Level1Damage: 110.6, growthPerLevel: 10.1, calculatorType: "YixuanBonus" },
            // DASH
            { attackName: "Skybreaker", attackType: "DASH", Level1Damage: 49.9, growthPerLevel: 4.6 },
            // DODGE
            { attackName: "Banishing Blow", attackType: "DASH", Level1Damage: 219.6, growthPerLevel: 20 },
            // ASSIST
            { attackName: "Cloudstream Shadow", attackType: "ASSIST", Level1Damage: 101.2, growthPerLevel: 9.2 },
            { attackName: "Celestial Cloud Blitz", attackType: "ASSIST", Level1Damage: 297, growthPerLevel: 27 , calculatorType: "YixuanBonus"},
            // SPECIAL
            { attackName: "Shadow-Ignition", attackType: "SPECIAL", Level1Damage: 52.1, growthPerLevel: 4.8 },
            // EX SPECIAL
            { attackName: "Ink Manifestation", attackType: "EXSPECIAL", Level1Damage: 300.3, growthPerLevel: 27.3, calculatorType: "YixuanBonus" },
            { attackName: "Ink Manifestation - Additional DMG on Full Charge", attackType: "EXSPECIAL", Level1Damage: 149.6, growthPerLevel: 13.6, calculatorType: "YixuanBonus" },
            { attackName: "Ink Manifestation - Total Damage on Full Charge", attackType: "EXSPECIAL", Level1Damage: 449.9, growthPerLevel: 40.9, calculatorType: "YixuanBonus" },
            
            { attackName: "Ink Manifestation - Celestial Cloud Blitz - Break", attackType: "EXSPECIAL", Level1Damage: 370.6, growthPerLevel: 33.7, calculatorType: "YixuanBonus" },
            { attackName: "Ink Manifestation - Qingming Eruption - Break", attackType: "EXSPECIAL", Level1Damage: 426.4, growthPerLevel: 38.8, calculatorType: "YixuanBonus" },
            
            { attackName: "Cloud-Shaper", attackType: "EXSPECIAL", Level1Damage: 671.8, growthPerLevel: 61.1, calculatorType: "YixuanBonus" },
            { attackName: "Ashen Ink Becomes Shadows", attackType: "EXSPECIAL", Level1Damage: 234.3, growthPerLevel: 21.3, calculatorType: "YixuanBonus" },
            { attackName: "Cloud-Shaper + Ashen Ink Becomes Shadows", attackType: "EXSPECIAL", Level1Damage: 1140.4, growthPerLevel: 103.7, calculatorType: "YixuanBonus" },

            { attackName: "Cloud-Shaper - AdditionalActive Stunned", attackType: "EXSPECIAL", Level1Damage: 671.8, growthPerLevel: 61.1, calculatorType: "YixuanAdditionalActiveStunned" },
            { attackName: "Ashen Ink Becomes Shadows - AdditionalActive Stunned", attackType: "EXSPECIAL", Level1Damage: 234.3, growthPerLevel: 21.3, calculatorType: "YixuanAdditionalActiveStunned" },
            { attackName: "Cloud-Shaper + Ashen Ink Becomes Shadows - AdditionalActive Stunned", attackType: "EXSPECIAL", Level1Damage: 1140.4, growthPerLevel: 103.7, calculatorType: "YixuanAdditionalActiveStunned" },
            // CHAIN
            { attackName: "Auric Ink Rush", attackType: "CHAIN", Level1Damage: 533.1, growthPerLevel: 48.5 , calculatorType: "YixuanBonus"},
            // ULT
            { attackName: "Qingming Skyshade", attackType: "ULT", Level1Damage: 1853.4, growthPerLevel: 168.5 , calculatorType: "YixuanBonus"},
            { attackName: "Talisman Suppression", attackType: "ULT", Level1Damage: 1466.2, growthPerLevel: 133.3 , calculatorType: "YixuanBonus"},
        ],
    },
    {
        characterName: "Ju Fufu",
        attackStats: [
            // BASIC
            { attackName: "Tiger Seven Forms - Flaming Claw - 1", attackType: "BASIC", Level1Damage: 42.5, growthPerLevel: 3.9 },
            { attackName: "Tiger Seven Forms - Flaming Claw - 2", attackType: "BASIC", Level1Damage: 45.2, growthPerLevel: 4.2 },
            { attackName: "Tiger Seven Forms - Flaming Claw - 3", attackType: "BASIC", Level1Damage: 31.5, growthPerLevel: 2.9 },
            { attackName: "Tiger Seven Forms - Flaming Claw - 4", attackType: "BASIC", Level1Damage: 218.4, growthPerLevel: 19.9 },
            
            { attackName: "Hu Wei", attackType: "BASIC", Level1Damage: 92.4, growthPerLevel: 8.4 },
            // DASH
            { attackName: "Tiger Seven Forms - Tiger Charge", attackType: "DASH", Level1Damage: 36.8, growthPerLevel: 3.4 },
            { attackName: "Tiger Seven Forms - Mountain King's Game", attackType: "DASH", Level1Damage: 18.4, growthPerLevel: 1.7 },
            { attackName: "Tiger Seven Forms - Mountain King's Game - Momentum", attackType: "DASH", Level1Damage: 19.2, growthPerLevel: 1.8 },
            { attackName: "Tiger Seven Forms - Mountain King's Game - Hu Wei", attackType: "DASH", Level1Damage: 92.4, growthPerLevel: 8.4 },
            // DODGE
            { attackName: "Tiger Seven Forms - Reignited Mountain", attackType: "DASH", Level1Damage: 207.8, growthPerLevel: 18.9 },
            // ASSIST
            { attackName: "Decisive Stomp", attackType: "ASSIST", Level1Damage: 75.3, growthPerLevel: 6.9 },
            { attackName: "Feral Blazing Maw", attackType: "ASSIST", Level1Damage: 407.2, growthPerLevel: 37.1 },
            // SPECIAL
            { attackName: "Tiger Seven Forms - Mountain-Descending Tiger", attackType: "SPECIAL", Level1Damage: 66.1, growthPerLevel: 6.1 },
            // EX SPECIAL
            { attackName: "Tiger Seven Forms Alt - Mountain-Descending Savage Tiger", attackType: "EXSPECIAL", Level1Damage: 526.5, growthPerLevel: 47.9 },
            // CHAIN
            { attackName: "Tiger Cauldron Collapse", attackType: "CHAIN", Level1Damage: 668.1, growthPerLevel: 60.8 },
            { attackName: "Suppressing Tiger Cauldron", attackType: "CHAIN", Level1Damage: 354.5, growthPerLevel: 32.3 },
            // ULT
            { attackName: "Tiger Seven Forms - Raging Tiger Explosion", attackType: "ULT", Level1Damage: 1663.8, growthPerLevel: 151.3 },
        ],
    },
    {
        characterName: "Yuzuha",
        attackStats: [
            // BASIC
            { attackName: "Tanuki Claws - 1", attackType: "BASIC", Level1Damage: 37.7, growthPerLevel: 3.5 },
            { attackName: "Tanuki Claws - 2", attackType: "BASIC", Level1Damage: 57.7, growthPerLevel: 5.3 },
            { attackName: "Tanuki Claws - 3", attackType: "BASIC", Level1Damage: 66, growthPerLevel: 6 },
            { attackName: "Tanuki Claws - 4", attackType: "BASIC", Level1Damage: 98.1, growthPerLevel: 9 },
            { attackName: "Tanuki Claws - 5", attackType: "BASIC", Level1Damage: 164.1, growthPerLevel: 15 },

            { attackName: "Hard Candy Shot", attackType: "BASIC", Level1Damage: 132, growthPerLevel: 12 },

            { attackName: "Sugarburst Sparkles", attackType: "BASIC", Level1Damage: 27.5, growthPerLevel: 2.5 },

            { attackName: "Sugarburst Sparkles - Max", attackType: "BASIC", Level1Damage: 308, growthPerLevel: 28 },
           
            { attackName: "Tanuki Helper - Coordinated ", attackType: "BASIC", Level1Damage: 110, growthPerLevel: 10 },
        
            { attackName: "Tanuki Helper - Auto-Attack", attackType: "BASIC", Level1Damage: 110, growthPerLevel: 10 },

            // DASH
            { attackName: "You're Outta Luck!", attackType: "DASH", Level1Damage: 69.8, growthPerLevel: 6.4 },
            // DODGE
            { attackName: "Time for Payback~", attackType: "DASH", Level1Damage: 276.9, growthPerLevel: 25.2 },
            // ASSIST
            { attackName: "Dessert Time", attackType: "ASSIST", Level1Damage: 122.9, growthPerLevel: 11.2 },
            { attackName: "We Have Cookies", attackType: "ASSIST", Level1Damage: 294.3, growthPerLevel: 26.8 },
            { attackName: "Stuffed Hard Candy Shot", attackType: "ASSIST", Level1Damage: 463.6, growthPerLevel: 42.2 },
            // SPECIAL
            { attackName: "Gummy Bombardment", attackType: "SPECIAL", Level1Damage: 50.5, growthPerLevel: 4.6 },
            // EX SPECIAL
            { attackName: "Cavity Alert", attackType: "EXSPECIAL", Level1Damage: 421, growthPerLevel: 38.3 },
            { attackName: "Cavity Alert, Right Now!", attackType: "EXSPECIAL", Level1Damage: 241.4, growthPerLevel: 22 },
            // CHAIN
            { attackName: "Prank Assault", attackType: "CHAIN", Level1Damage: 598.7, growthPerLevel: 54.5 },
            // ULT
            { attackName: "Surrender or Suffer the Mischief", attackType: "ULT", Level1Damage: 1443.2, growthPerLevel: 131.2 },
        ],
    },
    {
        characterName: "Alice",
        attackStats: [
            // BASIC
            { attackName: "Celestial Overture - 1", attackType: "BASIC", Level1Damage: 55.1, growthPerLevel: 5.1 },
            { attackName: "Celestial Overture - 2", attackType: "BASIC", Level1Damage: 88, growthPerLevel: 8 },
            { attackName: "Celestial Overture - 3", attackType: "BASIC", Level1Damage: 66.1, growthPerLevel: 6.1 },
            { attackName: "Celestial Overture - 4", attackType: "BASIC", Level1Damage: 111.9, growthPerLevel: 10.2 },
            { attackName: "Celestial Overture - 5", attackType: "BASIC", Level1Damage: 130.3, growthPerLevel: 11.9 },
            { attackName: "Celestial Overture - 5 Enchanced", attackType: "BASIC", Level1Damage: 218.3, growthPerLevel: 19.9 },

            { attackName: "Starshine Waltz - 1", attackType: "BASIC", Level1Damage: 188.9, growthPerLevel: 17.2 },
            { attackName: "Starshine Waltz - 2", attackType: "BASIC", Level1Damage: 304.4, growthPerLevel: 27.7 },
            { attackName: "Starshine Waltz - 3", attackType: "BASIC", Level1Damage: 965.7, growthPerLevel: 87.8 },
            // DASH
            { attackName: "Blade-Dancer's Gale", attackType: "DASH", Level1Damage: 75.3, growthPerLevel: 6.9 },
            // DODGE
            { attackName: "Ceremony of Swordlight", attackType: "DASH", Level1Damage: 284, growthPerLevel: 25.9 },
            // ASSIST
            { attackName: "Intertwined Stab", attackType: "ASSIST", Level1Damage: 163.3, growthPerLevel: 14.9 },
            { attackName: "Cross Riposte", attackType: "ASSIST", Level1Damage: 332.7, growthPerLevel: 30.3 },
            // SPECIAL
            { attackName: "Piercing Dawn", attackType: "SPECIAL", Level1Damage: 62.4, growthPerLevel: 5.7 },
            // EX SPECIAL
            { attackName: "Aurora Thrust - Northern Cross", attackType: "EXSPECIAL", Level1Damage: 460, growthPerLevel: 41.9 },
            { attackName: "Aurora Thrust - Southern Cross", attackType: "EXSPECIAL", Level1Damage: 532, growthPerLevel: 48.4 },
            // CHAIN
            { attackName: "Starfall Intermission", attackType: "CHAIN", Level1Damage: 666.3, growthPerLevel: 60.6 },
            // ULT
            { attackName: "Starfall Finale", attackType: "ULT", Level1Damage: 2262, growthPerLevel: 205.7 },
        ],
    },
    {
        characterName: "Seed",
        attackStats: [
            // BASIC
            { attackName: "Chrysanthemum Wheel Dance - 1", attackType: "BASIC", Level1Damage: 46.5, growthPerLevel: 4.3 },
            { attackName: "Chrysanthemum Wheel Dance - 2", attackType: "BASIC", Level1Damage: 124.1, growthPerLevel: 11.3 },
            { attackName: "Chrysanthemum Wheel Dance - 3", attackType: "BASIC", Level1Damage: 71.8, growthPerLevel: 6.6 },
            { attackName: "Chrysanthemum Wheel Dance - 4", attackType: "BASIC", Level1Damage: 358.6, growthPerLevel: 32.6 },
            
            { attackName: "Falling Petals - Total", attackType: "BASIC", Level1Damage: 1684.3, growthPerLevel: 153.3 },
            { attackName: "Falling Petals - Slaughter", attackType: "BASIC", Level1Damage: 166.6, growthPerLevel: 15.2 },
            { attackName: "Falling Petals - Downfall First Form", attackType: "BASIC", Level1Damage: 528.3, growthPerLevel: 48.1 },
            { attackName: "Falling Petals - Downfall Second Form", attackType: "BASIC", Level1Damage: 989.4, growthPerLevel: 90 },
            // DASH
            { attackName: "Magnetic Wheel Dance", attackType: "DASH", Level1Damage: 64.2, growthPerLevel: 5.9 },
            // DODGE
            { attackName: "Blossom Burst", attackType: "DASH", Level1Damage: 320.1, growthPerLevel: 29.1 },
            // ASSIST
            { attackName: "", attackType: "ASSIST", Level1Damage: 154, growthPerLevel: 14 },
            { attackName: "", attackType: "ASSIST", Level1Damage: 456, growthPerLevel: 41.5 },
            // SPECIAL
            { attackName: "Withered in Frost", attackType: "SPECIAL", Level1Damage: 47.7, growthPerLevel: 4.4 },
            // EX SPECIAL
            { attackName: "Raining Iron Petals", attackType: "EXSPECIAL", Level1Damage: 683.4, growthPerLevel: 62.2 },
            { attackName: "Raining Iron Petals - including Punch", attackType: "EXSPECIAL", Level1Damage: 850, growthPerLevel: 77.4 },
            { attackName: "Raining Iron Petals - Away", attackType: "EXSPECIAL", Level1Damage: 18.4, growthPerLevel: 1.7 },
            // CHAIN
            { attackName: "Tempest of Frosty Petals", attackType: "CHAIN", Level1Damage: 734.2, growthPerLevel: 66.8 },
            // ULT
            { attackName: "Clockwork Garden - Bloom!", attackType: "ULT", Level1Damage: 3249.7, growthPerLevel: 295.5 },
        ],
    },
    {
        characterName: "Orphie & Magus",
        attackStats: [
            // BASIC
            { attackName: "High-Pressure Flamethrower - 1", attackType: "BASIC", Level1Damage: 14.5, growthPerLevel: 1.4 },
            { attackName: "High-Pressure Flamethrower - 2", attackType: "BASIC", Level1Damage: 44.4, growthPerLevel: 4.1 },
            { attackName: "High-Pressure Flamethrower - 3", attackType: "BASIC", Level1Damage: 41.5, growthPerLevel: 3.8 },
            { attackName: "High-Pressure Flamethrower - 4", attackType: "BASIC", Level1Damage: 86.7, growthPerLevel: 7.9 },
            { attackName: "High-Pressure Flamethrower - 5", attackType: "BASIC", Level1Damage: 181.6, growthPerLevel: 16.6 },
            { attackName: "High-Pressure Flamethrower - Fire Blade", attackType: "BASIC", Level1Damage: 158.4, growthPerLevel: 14.4 },
            // DASH
            { attackName: "Rush Command", attackType: "DASH", Level1Damage: 62.3, growthPerLevel: 5.7 },
            // DODGE
            { attackName: "Counter Strike Opportunity", attackType: "DASH", Level1Damage: 257.8, growthPerLevel: 23.5 },
            // ASSIST
            { attackName: "Searing Slash", attackType: "ASSIST", Level1Damage: 113.7, growthPerLevel: 10.4 },
            { attackName: "Boiling Pierce", attackType: "ASSIST", Level1Damage: 360.9, growthPerLevel: 32.9 },
            // SPECIAL
            { attackName: "Blazing Chamber", attackType: "SPECIAL", Level1Damage: 39.5, growthPerLevel: 3.6 },
            { attackName: "Corrosive Flash", attackType: "SPECIAL", Level1Damage: 495, growthPerLevel: 45 },
            // EX SPECIAL
            { attackName: "Watch Your Step", attackType: "EXSPECIAL", Level1Damage: 280.9, growthPerLevel: 25.6 },
            { attackName: "Crimson Vortex", attackType: "EXSPECIAL", Level1Damage: 678.4, growthPerLevel: 61.7 },
            { attackName: "Heat Charge", attackType: "EXSPECIAL", Level1Damage: 389.4, growthPerLevel: 35.4 },
            { attackName: "Fiery Eruption", attackType: "EXSPECIAL", Level1Damage: 259.6, growthPerLevel: 23.6 },
            // CHAIN
            { attackName: "Overheated Barrel", attackType: "CHAIN", Level1Damage: 626.3, growthPerLevel: 57 },
            // ULT
            { attackName: "Dance With Fire", attackType: "ULT", Level1Damage: 698.7, growthPerLevel: 63.6 },
            { attackName: "Dance With Fire - Additional Extended", attackType: "ULT", Level1Damage: 465.8, growthPerLevel: 42.4 },
            { attackName: "Dance With Fire - Total", attackType: "ULT", Level1Damage: 1164.5, growthPerLevel: 106 },
        ],
    },
    {
        characterName: "Lucia",
        attackStats: [
            // BASIC
            { attackName: "Orbital Combo - 1", attackType: "BASIC", Level1Damage: 40.9, growthPerLevel: 3.8 },
            { attackName: "Orbital Combo - 2", attackType: "BASIC", Level1Damage: 27.8, growthPerLevel: 2.6 },
            { attackName: "Orbital Combo - 3", attackType: "BASIC", Level1Damage: 83.5, growthPerLevel: 7.6 },
            { attackName: "Orbital Combo - 4", attackType: "BASIC", Level1Damage: 80.1, growthPerLevel: 7.3 },
            
            { attackName: "Orbital Combo - Whim", attackType: "BASIC", Level1Damage: 172.9, growthPerLevel: 15.8 },
            { attackName: "Orbital Combo - Harmony", attackType: "BASIC", Level1Damage: 412.5, growthPerLevel: 37.5, calculatorType: "LuciaHpBonus" },
            { attackName: "Orbital Combo - Aftershock", attackType: "BASIC", Level1Damage: 550, growthPerLevel: 50 },
            // DASH
            { attackName: "Refraction", attackType: "DASH", Level1Damage: 86.3, growthPerLevel: 7.9 },
            // DODGE
            { attackName: "Stardust Echo - Whim", attackType: "DASH", Level1Damage: 248.3, growthPerLevel: 22.6 },
            { attackName: "Stardust Echo - Harmony", attackType: "DASH", Level1Damage: 385.8, growthPerLevel: 35.1, calculatorType: "LuciaHpBonus"  },
            // ASSIST
            { attackName: "Crushing Mist - Whim", attackType: "ASSIST", Level1Damage: 106.4, growthPerLevel: 9.7 },
            { attackName: "Crushing Mist - Harmony", attackType: "ASSIST", Level1Damage: 243.9, growthPerLevel: 22.2, calculatorType: "LuciaHpBonus"  },
            { attackName: "Crushing Mist - Aftershock", attackType: "ASSIST", Level1Damage: 550, growthPerLevel: 50 },
            { attackName: "Harmony of Painted Dreams", attackType: "ASSIST", Level1Damage: 327.7, growthPerLevel: 29.8 },
            // SPECIAL
            { attackName: "Symphony of the Reaper - Storm - Whim", attackType: "SPECIAL", Level1Damage: 45.9, growthPerLevel: 4.2 },
            { attackName: "Symphony of the Reaper - Storm - Harmony", attackType: "SPECIAL", Level1Damage: 183.4, growthPerLevel: 16.7, calculatorType: "LuciaHpBonus"  },
            { attackName: "Symphony of the Reaper - Storm - Aftershock", attackType: "SPECIAL", Level1Damage: 550, growthPerLevel: 50 },
            // EX SPECIAL
            { attackName: "Symphony of the Reaper - Daybreak", attackType: "EXSPECIAL", Level1Damage: 638.1, growthPerLevel: 58.1 },
            // CHAIN
            { attackName: "Stage of Brilliance", attackType: "CHAIN", Level1Damage: 616.7, growthPerLevel: 56.1 },
            // ULT
            { attackName: "Charge, Great Armor! - Charge Single Hit", attackType: "ULT", Level1Damage: 93, growthPerLevel: 8.5 },
            { attackName: "Charge, Great Armor!", attackType: "ULT", Level1Damage: 1902.7, growthPerLevel: 173 },
            { attackName: "Charge, Great Armor! - Total", attackType: "ULT", Level1Damage: 1995.7, growthPerLevel: 181.5 },
        ],
    },
    {
        characterName: "Manato",
        attackStats: [
            // BASIC
            { attackName: "Blazing Wind Slash - 1", attackType: "BASIC", Level1Damage: 28.7, growthPerLevel: 2.7 },
            { attackName: "Blazing Wind Slash - 2", attackType: "BASIC", Level1Damage: 82.7, growthPerLevel: 7.6 },
            { attackName: "Blazing Wind Slash - 3", attackType: "BASIC", Level1Damage: 134.6, growthPerLevel: 12.3 },
            { attackName: "Blazing Wind Slash - 1 Scorchwind", attackType: "BASIC", Level1Damage: 63.1, growthPerLevel: 5.9 },
            { attackName: "Blazing Wind Slash - 2 Scorchwind", attackType: "BASIC", Level1Damage: 95.5, growthPerLevel: 8.8 },
            { attackName: "Blazing Wind Slash - 3 Scorchwind", attackType: "BASIC", Level1Damage: 143.3, growthPerLevel: 13.1 },

            { attackName: "Blazing Wind - Misty Slash - 1", attackType: "BASIC", Level1Damage: 53.1, growthPerLevel: 4.9 },
            { attackName: "Blazing Wind - Misty Slash - 2", attackType: "BASIC", Level1Damage: 111.2, growthPerLevel: 10.2 },
            { attackName: "Blazing Wind - Misty Slash - 3", attackType: "BASIC", Level1Damage: 154.5, growthPerLevel: 14.1 },
            { attackName: "Blazing Wind - Misty Slash - 4", attackType: "BASIC", Level1Damage: 237.8, growthPerLevel: 21.7 },
            // DASH
            { attackName: "Radiant Blade - Zanshin", attackType: "DASH", Level1Damage: 58.7, growthPerLevel: 5.4 },
            // DODGE
            { attackName: "Radiant Blade - Battle Sweep", attackType: "DASH", Level1Damage: 198, growthPerLevel: 18 },
            // ASSIST
            { attackName: "Lone Shadow - Regroup", attackType: "ASSIST", Level1Damage: 90.7, growthPerLevel: 8.3 },
            { attackName: "Defensive Assist: Lone Shadow - Mountain Stand", attackType: "ASSIST", Level1Damage: 40, growthPerLevel: 3.7 },
            { attackName: "Lone Shadow - Breaking Fang", attackType: "ASSIST", Level1Damage: 166.7, growthPerLevel: 15.2 },
            { attackName: "Lone Shadow - Breaking Fang - Total Maximum", attackType: "ASSIST", Level1Damage: 570.1, growthPerLevel: 51.9 },
            // SPECIAL
            { attackName: " Return to Ashes", attackType: "SPECIAL", Level1Damage: 50.7, growthPerLevel: 4.7 },
            { attackName: " Return to Ashes - Charged or Successfull Block", attackType: "SPECIAL", Level1Damage: 130.7, growthPerLevel: 11.9 },
            // EX SPECIAL
            { attackName: "Return to Ashes - Fall", attackType: "EXSPECIAL", Level1Damage: 652.6, growthPerLevel: 59.4 },
            // CHAIN
            { attackName: "Blazing Eruption", attackType: "CHAIN", Level1Damage: 483.3, growthPerLevel: 44 },
            // ULT
            { attackName: "Musou Aratama", attackType: "ULT", Level1Damage: 1562.3, growthPerLevel: 142.1 },
        ],
    },


    // {
    //     characterName: "",
    //     attackStats: [
    //         // BASIC
    //         { attackName: " - ", attackType: "BASIC", Level1Damage: , growthPerLevel:  },
    //         // DASH
    //         { attackName: "", attackType: "DASH", Level1Damage: , growthPerLevel:  },
    //         // DODGE
    //         { attackName: "", attackType: "DASH", Level1Damage: , growthPerLevel:  },
    //         // ASSIST
    //         { attackName: "", attackType: "ASSIST", Level1Damage: , growthPerLevel:  },
    //         { attackName: "", attackType: "ASSIST", Level1Damage: , growthPerLevel:  },
    //         // SPECIAL
    //         { attackName: "", attackType: "SPECIAL", Level1Damage: , growthPerLevel:  },
    //         // EX SPECIAL
    //         { attackName: "", attackType: "EXSPECIAL", Level1Damage: , growthPerLevel:  },
    //         // CHAIN
    //         { attackName: "", attackType: "CHAIN", Level1Damage: , growthPerLevel:  },
    //         // ULT
    //         { attackName: "", attackType: "ULT", Level1Damage: , growthPerLevel:  },
    //     ],
    // },
];
