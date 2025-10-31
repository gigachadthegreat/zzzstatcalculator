import type { CharacterAttack } from "./types";

export const Attacks: CharacterAttack[] = [
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
    {
        characterName: "Piper",
        attackStats: [
            // BASIC
            { attackName: "Basic: Load Up and Roll Out - 1", attackType: "BASIC", Level1Damage: 59, growthPerLevel: 5.4 },
            { attackName: "Basic: Load Up and Roll Out - 2", attackType: "BASIC", Level1Damage: 78.8, growthPerLevel: 7.2 },
            { attackName: "Basic: Load Up and Roll Out - 3", attackType: "BASIC", Level1Damage: 150.1, growthPerLevel: 13.7 },
            { attackName: "Basic: Load Up and Roll Out - 4", attackType: "BASIC", Level1Damage: 320.6, growthPerLevel: 29.2 },
            // DASH
            { attackName: "Dash: Pedal to the Metal", attackType: "DASH", Level1Damage: 90.1, growthPerLevel: 8.2 },
            // DODGE
            { attackName: "Dodge: Power Drift", attackType: "DASH", Level1Damage: 269, growthPerLevel: 24.5 },
            // ASSIST
            { attackName: "Quick Assist: Brake Tap", attackType: "ASSIST", Level1Damage: 130, growthPerLevel: 11.9 },
            { attackName: "Assist Follow-Up: Overtaking Maneuver", attackType: "ASSIST", Level1Damage: 400.5, growthPerLevel: 36.5 },
            // SPECIAL
            { attackName: "Special: Tire Spin", attackType: "SPECIAL", Level1Damage: 271.7, growthPerLevel: 23.7 },
            { attackName: "Special: One Trillion Tons 1 Charge", attackType: "SPECIAL", Level1Damage: 93.4, growthPerLevel: 8.5 },
            { attackName: "Special: One Trillion Tons 2 Charge", attackType: "SPECIAL", Level1Damage: 103.4, growthPerLevel: 9.4 },
            { attackName: "Special: One Trillion Tons 3 Charge", attackType: "SPECIAL", Level1Damage: 235, growthPerLevel: 21.4 },
            // EX SPECIAL
            { attackName: "EX Special: Engine Spin", attackType: "EXSPECIAL", Level1Damage: 93.5, growthPerLevel: 8.6 },
            { attackName: "EX Special: Really Heavy", attackType: "EXSPECIAL", Level1Damage: 612.9, growthPerLevel: 55.8 },
            // CHAIN
            { attackName: "Chain: Buckle Up", attackType: "CHAIN", Level1Damage: 652.3, growthPerLevel: 59.3 },
            // ULT
            { attackName: "Ultimate: Hold On Tight", attackType: "ULT", Level1Damage: 1660.4, growthPerLevel: 151 },
        ],
    },
    {
        characterName: "Billy",
        attackStats: [
            // BASIC
            { attackName: "Basic: Full Firepower - Standing Fire", attackType: "BASIC", Level1Damage: 68, growthPerLevel: 6.2 },
            { attackName: "Basic: Full Firepower - Standing Bullet", attackType: "BASIC", Level1Damage: 7.6, growthPerLevel: 0.7 },
            { attackName: "Basic: Full Firepower - Crouching Fire", attackType: "BASIC", Level1Damage: 61.8, growthPerLevel: 5.7 },
            { attackName: "Basic: Full Firepower - Crouching Bullet", attackType: "BASIC", Level1Damage: 12.7, growthPerLevel: 1.2 },
            { attackName: "Basic: Full Firepower - Rolling Shot ", attackType: "BASIC", Level1Damage: 61.8, growthPerLevel: 5.7 },
            { attackName: "Basic: Full Firepower - Finishing Shot", attackType: "BASIC", Level1Damage: 49.5, growthPerLevel: 4.5 },
            // DASH
            { attackName: "Dash: Starlight Sanction - 360-degree Shot", attackType: "DASH", Level1Damage: 63.1, growthPerLevel: 5.8 },
            { attackName: "Dash: Starlight Sanction - Straight Shot", attackType: "DASH", Level1Damage: 39, growthPerLevel: 3.6 },
            // DODGE
            { attackName: "Dodge: Fair Fight", attackType: "DASH", Level1Damage: 221.4, growthPerLevel: 20.2 },
            // ASSIST
            { attackName: "Quick Assist: Power of Teamwork", attackType: "ASSIST", Level1Damage: 93.4, growthPerLevel: 8.5 },
            { attackName: "Assist Follow-Up: Fatal Shot", attackType: "ASSIST", Level1Damage: 388.8, growthPerLevel: 35.4 },
            // SPECIAL
            { attackName: "Special: Stand Still - 1", attackType: "SPECIAL", Level1Damage: 24.2, growthPerLevel: 2.2 },
            { attackName: "Special: Stand Still - 2", attackType: "SPECIAL", Level1Damage: 51.7, growthPerLevel: 4.7 },
            { attackName: "Special: Stand Still - 3", attackType: "SPECIAL", Level1Damage: 50.1, growthPerLevel: 4.6 },
            // EX SPECIAL
            { attackName: "EX Special: Clearance Time", attackType: "EXSPECIAL", Level1Damage: 543.8, growthPerLevel: 49.5 },
            // CHAIN
            { attackName: "Chain: Starlight Mirage", attackType: "CHAIN", Level1Damage: 735.2, growthPerLevel: 66.9 },
            // ULT
            { attackName: "Ultimate: Starlight Sparkle", attackType: "ULT", Level1Damage: 1597.7, growthPerLevel: 145.3 },
        ],
    },
    {
        characterName: "Anton",
        attackStats: [
            // BASIC
            { attackName: "Basic: Enthusiastic Drills - 1", attackType: "BASIC", Level1Damage: 67.8, growthPerLevel: 6.2 },
            { attackName: "Basic: Enthusiastic Drills - 2", attackType: "BASIC", Level1Damage: 92.3, growthPerLevel: 8.4 },
            { attackName: "Basic: Enthusiastic Drills - 3", attackType: "BASIC", Level1Damage: 109.3, growthPerLevel: 9.9 },
            { attackName: "Basic: Enthusiastic Drills - 4", attackType: "BASIC", Level1Damage: 229.1, growthPerLevel: 20.9 },
            { attackName: "Basic: Enthusiastic Drills (Burst Mode) - 1", attackType: "BASIC", Level1Damage: 240.9, growthPerLevel: 262.8 },
            { attackName: "Basic: Enthusiastic Drills (Burst Mode) - 2", attackType: "BASIC", Level1Damage: 469.2, growthPerLevel: 511.9 },
            { attackName: "Basic: Enthusiastic Drills (Burst Mode) - 3", attackType: "BASIC", Level1Damage: 456.9, growthPerLevel: 498.6 },
            // DASH
            { attackName: "Dash:  Fire With Fire", attackType: "DASH", Level1Damage: 68.4, growthPerLevel: 6.3 },
            // DODGE
            { attackName: "Dodge: Retaliation", attackType: "DASH", Level1Damage: 271.2, growthPerLevel: 24.7 },
            { attackName: "Dodge: Overload Drill (Burst Mode)", attackType: "DASH", Level1Damage: 465.4, growthPerLevel: 42.4 },
            // ASSIST
            { attackName: "Quick Assist: Shoulder-To-Shoulder", attackType: "ASSIST", Level1Damage: 263.4, growthPerLevel: 24 },
            { attackName: "Quick Assist: Protective Drill (Burst Mode)", attackType: "ASSIST", Level1Damage: 365.4, growthPerLevel: 33.3 },
            { attackName: "Assist Follow-Up: Limit Burst", attackType: "ASSIST", Level1Damage: 325.8, growthPerLevel: 29.7 },
            // SPECIAL
            { attackName: "Special: Spin, Bro!", attackType: "SPECIAL", Level1Damage: 44.2, growthPerLevel: 4.1 },
            { attackName: "Special: Explosive Drill (Burst Mode)", attackType: "SPECIAL", Level1Damage: 231.4, growthPerLevel: 21.1 },
            // EX SPECIAL
            { attackName: "EX Special: Smash the Horizon, Bro!", attackType: "EXSPECIAL", Level1Damage: 195.1, growthPerLevel: 17.8 },
            // CHAIN
            { attackName: "Chain: Go Go Go!", attackType: "CHAIN", Level1Damage: 640.7, growthPerLevel: 58.3 },
            // ULT
            { attackName: "Ultimate: Go Go Go Go Go!", attackType: "ULT", Level1Damage: 1816.4, growthPerLevel: 165.2 },
        ],
    },
    {
        characterName: "Corin",
        attackStats: [
            // BASIC
            { attackName: "Basic: Wipeout - 1", attackType: "BASIC", Level1Damage: 82, growthPerLevel: 7.5 },
            { attackName: "Basic: Wipeout - 2", attackType: "BASIC", Level1Damage: 76.6, growthPerLevel:  7},
            { attackName: "Basic: Wipeout - 3", attackType: "BASIC", Level1Damage: 179.2, growthPerLevel: 16.3 },
            { attackName: "Basic: Wipeout - 4", attackType: "BASIC", Level1Damage: 233.4, growthPerLevel: 21.3 },
            { attackName: "Basic: Wipeout - 5", attackType: "BASIC", Level1Damage: 421.2, growthPerLevel: 38.3 },
            // DASH
            { attackName: "Dash: Oopsy-Daisy!", attackType: "DASH", Level1Damage: 96.7, growthPerLevel: 8.8 },
            // DODGE
            { attackName: "Dodge: Nope!", attackType: "DASH", Level1Damage: 271.2, growthPerLevel: 24.8 },
            // ASSIST
            { attackName: "Quick Assist: Emergency Measures", attackType: "ASSIST", Level1Damage: 215, growthPerLevel: 19.6 },
            { attackName: "Assist Follow-Up: Quick Sweep", attackType: "ASSIST", Level1Damage: 547.5, growthPerLevel: 49.5 },
            // SPECIAL
            { attackName: "Special: Clean Sweep - Spinning Slash", attackType: "SPECIAL", Level1Damage: 66.7, growthPerLevel: 6.1 },
            { attackName: "Special: Clean Sweep - Extended Slash Maximum", attackType: "SPECIAL", Level1Damage: 37.5, growthPerLevel: 3.5 },
            { attackName: "Special: Clean Sweep - Explosion DMG", attackType: "SPECIAL", Level1Damage: 25, growthPerLevel: 2.3 },
            // EX SPECIAL
            { attackName: "EX Special: Beware the Skirt - Spinning Slash", attackType: "EXSPECIAL", Level1Damage: 345.1, growthPerLevel: 31.4 },
            { attackName: "EX Special: Beware the Skirt - Extended Slash Maximum", attackType: "EXSPECIAL", Level1Damage: 1035.1, growthPerLevel: 94.2 },
            { attackName: "EX Special: Beware the Skirt - Explosion DMG", attackType: "EXSPECIAL", Level1Damage: 345.1, growthPerLevel: 31.4 },
            // CHAIN
            { attackName: "Chain: Sorry...", attackType: "CHAIN", Level1Damage: 687.3, growthPerLevel: 62.5 },
            // ULT
            { attackName: "Ultimate: Very, Very Sorry!", attackType: "ULT", Level1Damage: 2028.8, growthPerLevel: 184.5 },
        ],
    },
    {
        characterName: "Grace",
        attackStats: [
            // BASIC
            { attackName: "Basic: High-Pressure Spike - 1", attackType: "BASIC", Level1Damage: 55.1, growthPerLevel: 5.1 },
            { attackName: "Basic: High-Pressure Spike - 2", attackType: "BASIC", Level1Damage: 59.7, growthPerLevel: 5.5 },
            { attackName: "Basic: High-Pressure Spike - 3", attackType: "BASIC", Level1Damage: 124.8, growthPerLevel: 11.4 },
            { attackName: "Basic: High-Pressure Spike - 4", attackType: "BASIC", Level1Damage: 186.3, growthPerLevel: 17 },
            { attackName: "Basic: High-Pressure Spike - 5", attackType: "BASIC", Level1Damage: 40.3, growthPerLevel: 3.7 },
            // DASH
            { attackName: "Dash: Quick Inspection", attackType: "DASH", Level1Damage: 33.3, growthPerLevel: 3.1 },
            // DODGE
            { attackName: "Dodge: Violation Penalty", attackType: "DASH", Level1Damage: 164.2, growthPerLevel: 15 },
            // ASSIST
            { attackName: "Quick Assist: Incident Management", attackType: "ASSIST", Level1Damage: 45.5, growthPerLevel: 4.2 },
            { attackName: "Assist Follow-Up: Counter Volt Needle", attackType: "ASSIST", Level1Damage: 359.2, growthPerLevel: 32.7 },
            // SPECIAL
            { attackName: "Special: Obstruction Removal", attackType: "SPECIAL", Level1Damage: 42.1, growthPerLevel: 3.9 },
            // EX SPECIAL
            { attackName: "EX Special: Supercharged Obstruction Removal", attackType: "EXSPECIAL", Level1Damage: 333.8, growthPerLevel: 30.4 },
            // CHAIN
            { attackName: "Chain: Collaborative Construction", attackType: "CHAIN", Level1Damage: 571.3, growthPerLevel: 52 },
            // ULT
            { attackName: "Ultimate: Demolition Blast - Beware", attackType: "ULT", Level1Damage: 1478.8, growthPerLevel: 134.4 },
        ],
    },
    {
        characterName: "Soldier 11",
        attackStats: [
            // BASIC
            { attackName: "Basic: Warmup Sparks - 1", attackType: "BASIC", Level1Damage: 34.4, growthPerLevel: 3.2 },
            { attackName: "Basic: Warmup Sparks - 2", attackType: "BASIC", Level1Damage: 41.2, growthPerLevel: 3.8 },
            { attackName: "Basic: Warmup Sparks - 3", attackType: "BASIC", Level1Damage: 102.8, growthPerLevel: 9.4 },
            { attackName: "Basic: Warmup Sparks - 4", attackType: "BASIC", Level1Damage: 213.4, growthPerLevel: 19.4 },
            
            { attackName: "Basic: Fire Suppression - 1", attackType: "BASIC", Level1Damage: 55.1, growthPerLevel: 5.1 },
            { attackName: "Basic: Fire Suppression - 2", attackType: "BASIC", Level1Damage: 57.2, growthPerLevel: 5.2 },
            { attackName: "Basic: Fire Suppression - 3", attackType: "BASIC", Level1Damage: 132, growthPerLevel: 12 },
            { attackName: "Basic: Fire Suppression - 4", attackType: "BASIC", Level1Damage: 340.7, growthPerLevel: 31 },
            // DASH
            { attackName: "Dash: Blazing Fire", attackType: "DASH", Level1Damage: 68.3, growthPerLevel: 6.3 },
            { attackName: "Dash: Fire Suppression", attackType: "DASH", Level1Damage: 78.8, growthPerLevel: 7.2 },
            // DODGE
            { attackName: "Dodge: Backdraft", attackType: "DASH", Level1Damage: 262, growthPerLevel: 23.9 },
            // ASSIST
            { attackName: "Quick Assist: Covering Fire", attackType: "ASSIST", Level1Damage: 120.8, growthPerLevel: 11 },
            { attackName: "Assist Follow-Up: Reignition", attackType: "ASSIST", Level1Damage: 383.7, growthPerLevel: 34.9 },
            // SPECIAL
            { attackName: "Special: Raging Fire", attackType: "SPECIAL", Level1Damage: 52.6, growthPerLevel: 4.8 },
            // EX SPECIAL
            { attackName: "EX Special: Fervent Fire", attackType: "EXSPECIAL", Level1Damage: 675, growthPerLevel: 61.4 },
            // CHAIN
            { attackName: "Chain: Uplifting Flame", attackType: "CHAIN", Level1Damage: 632.5, growthPerLevel: 57.5 },
            // ULT
            { attackName: "Ultimate: Bellowing Flame", attackType: "ULT", Level1Damage: 2103, growthPerLevel: 191.2 },
        ],
    },
    {
        characterName: "Nekomata",
        attackStats: [
            // BASIC
            { attackName: "Basic: Kitty Slash - 1", attackType: "BASIC", Level1Damage: 55.2, growthPerLevel: 5.1 },
            { attackName: "Basic: Kitty Slash - 2", attackType: "BASIC", Level1Damage: 62.6, growthPerLevel: 5.7 },
            { attackName: "Basic: Kitty Slash - 3", attackType: "BASIC", Level1Damage: 72.7, growthPerLevel: 6.7 },
            { attackName: "Basic: Kitty Slash - 4", attackType: "BASIC", Level1Damage: 170.2, growthPerLevel: 15.5 },
            { attackName: "Basic: Kitty Slash - 5", attackType: "BASIC", Level1Damage: 123.6, growthPerLevel: 11.3 },
            
            { attackName: "Basic: Crimson Blade", attackType: "BASIC", Level1Damage: 71.8, growthPerLevel: 6.6 },
            // DASH
            { attackName: "Dash: Over Here!", attackType: "DASH", Level1Damage: 35.1, growthPerLevel: 3.2 },
            // DODGE
            { attackName: "Dodge: Phantom Claws", attackType: "DASH", Level1Damage: 227.9, growthPerLevel: 20.8 },
            // ASSIST
            { attackName: "Quick Assist: Cat's Paw", attackType: "ASSIST", Level1Damage: 94.5, growthPerLevel: 8.6 },
            { attackName: "Assist Follow-Up: Shadow Strike", attackType: "ASSIST", Level1Damage: 300.4, growthPerLevel: 60.1 },
            // SPECIAL
            { attackName: "Special: Surprise Attack", attackType: "SPECIAL", Level1Damage: 47.3, growthPerLevel: 4.3 },
            // EX SPECIAL
            { attackName: "EX Special: Super Surprise Attack!", attackType: "EXSPECIAL", Level1Damage: 539.7, growthPerLevel: 49.1 },
            // CHAIN
            { attackName: "Chain: Claw Swipe", attackType: "CHAIN", Level1Damage: 536.2, growthPerLevel: 48.8 },
            // ULT
            { attackName: "Ultimate: Claw Smash", attackType: "ULT", Level1Damage: 1571.1, growthPerLevel: 142.9 },
        ],
    },
    {
        characterName: "Zhu Yuan",
        attackStats: [
            // BASIC
            { attackName: "Basic: Don't Move! - 1", attackType: "BASIC", Level1Damage: 43.1, growthPerLevel: 4 },
            { attackName: "Basic: Don't Move! - 2", attackType: "BASIC", Level1Damage: 126.4, growthPerLevel: 11.5 },
            { attackName: "Basic: Don't Move! - 3", attackType: "BASIC", Level1Damage: 137.3, growthPerLevel: 12.5 },
            { attackName: "Basic: Don't Move! - 4", attackType: "BASIC", Level1Damage: 151, growthPerLevel: 13.8 },
            { attackName: "Basic: Don't Move! - 5", attackType: "BASIC", Level1Damage: 162.2, growthPerLevel: 14.8 },

            { attackName: "Basic: Please Do Not Resist Physical - 1", attackType: "BASIC", Level1Damage: 53.7, growthPerLevel: 4.9 },
            { attackName: "Basic: Please Do Not Resist Physical - 2", attackType: "BASIC", Level1Damage: 53.7, growthPerLevel: 4.9 },
            { attackName: "Basic: Please Do Not Resist Physical - 3", attackType: "BASIC", Level1Damage: 160.9, growthPerLevel: 14.7 },
            
            { attackName: "Basic: Please Do Not Resist Ether - 1", attackType: "BASIC", Level1Damage: 135.9, growthPerLevel: 12.4 },
            { attackName: "Basic: Please Do Not Resist Ether - 2", attackType: "BASIC", Level1Damage: 135.9, growthPerLevel: 12.4 },
            { attackName: "Basic: Please Do Not Resist Ether - 3", attackType: "BASIC", Level1Damage: 407.7, growthPerLevel: 37.7 },
            // DASH
            { attackName: "Dash: Firepower Offensive", attackType: "DASH", Level1Damage: 55.1, growthPerLevel: 5.1 },
            { attackName: "Dash: Overwhelming Firepower", attackType: "DASH", Level1Damage: 53.7, growthPerLevel: 4.9 },
            // DODGE
            { attackName: "Dodge: Fire Blast", attackType: "DASH", Level1Damage: 176.8, growthPerLevel: 16.1 },
            // ASSIST
            { attackName: "Quick Assist: Covering Shot", attackType: "ASSIST", Level1Damage: 51.4, growthPerLevel: 4.7 },
            { attackName: "Assist Follow-Up: Defensive Counter", attackType: "ASSIST", Level1Damage: 355.8, growthPerLevel: 71.2 },
            // SPECIAL
            { attackName: "Special: Buckshot Blast", attackType: "SPECIAL", Level1Damage: 18.4, growthPerLevel: 1.7 },
            // EX SPECIAL
            { attackName: "EX Special: Full Barrage", attackType: "EXSPECIAL", Level1Damage: 587.4, growthPerLevel: 53.4 },
            // CHAIN
            { attackName: "Chain: Eradication Mode", attackType: "CHAIN", Level1Damage: 587.5, growthPerLevel: 53.5 },
            // ULT
            { attackName: "Ultimate: Max Eradication Mode", attackType: "ULT", Level1Damage: 1977.6, growthPerLevel: 179.8 },
        ],
    },
    {
        characterName: "Ellen",
        attackStats: [
            // BASIC
            { attackName: "Basic: Saw Teeth Trimming - 1", attackType: "BASIC", Level1Damage: 48.8, growthPerLevel: 4.5 },
            { attackName: "Basic: Saw Teeth Trimming - 2", attackType: "BASIC", Level1Damage: 111.1, growthPerLevel: 10.1 },
            { attackName: "Basic: Saw Teeth Trimming - 3", attackType: "BASIC", Level1Damage: 297.3, growthPerLevel: 27.1 },
            
            { attackName: "Basic: Flash Freeze Trimming - 1", attackType: "BASIC", Level1Damage: 99.6, growthPerLevel: 9.1 },
            { attackName: "Basic: Flash Freeze Trimming - 2", attackType: "BASIC", Level1Damage: 184, growthPerLevel: 16.8 },
            { attackName: "Basic: Flash Freeze Trimming - 3", attackType: "BASIC", Level1Damage: 496.2, growthPerLevel: 45.2 },
            
            { attackName: "Basic: Glacial Blade Wave - 1", attackType: "BASIC", Level1Damage: 230.2, growthPerLevel: 21 },
            { attackName: "Basic: Glacial Blade Wave - 2", attackType: "BASIC", Level1Damage: 146.8, growthPerLevel: 13.4 },
            { attackName: "Basic: Glacial Blade Wave - 1 + 2", attackType: "BASIC", Level1Damage: 377, growthPerLevel: 34.4 },
            
            { attackName: "Basic: Icy Blade - Small Enemy", attackType: "BASIC", Level1Damage: 181.2, growthPerLevel: 16.5 },
            { attackName: "Basic: Icy Blade - Medium Enemy", attackType: "BASIC", Level1Damage: 220.2, growthPerLevel: 20.1 },
            { attackName: "Basic: Icy Blade - Large Enemy", attackType: "BASIC", Level1Damage: 259.2, growthPerLevel: 23.7 },
            // DASH
            { attackName: "Dash: Arctic Ambush  - Spinning Slash", attackType: "DASH", Level1Damage: 62.3, growthPerLevel: 5.7 },
            { attackName: "Dash: Arctic Ambush  - Swift Scissors", attackType: "DASH", Level1Damage: 127.6, growthPerLevel: 11.6 },
            { attackName: "Dash: Arctic Ambush  - Charged Scissors", attackType: "DASH", Level1Damage: 158.2, growthPerLevel: 14.4 },
            { attackName: "Dash: Arctic Ambush  - Swift Scissors Flash Freeze Charge Obtained", attackType: "DASH", Level1Damage: 1, growthPerLevel: 0 },
            { attackName: "Dash: Arctic Ambush  - Charged Scissors Flash Freeze Charge Obtained", attackType: "DASH", Level1Damage: 3, growthPerLevel: 0 },
            
            { attackName: "Dash: Monstrous Wave", attackType: "DASH", Level1Damage: 77, growthPerLevel: 7 },

            { attackName: "Dash: Cold Snap", attackType: "DASH", Level1Damage: 145.7, growthPerLevel: 159 },
            // DODGE
            { attackName: "Dodge: Reef Rock", attackType: "DASH", Level1Damage: 152.6, growthPerLevel: 13.9 },
            // ASSIST
            { attackName: "Quick Assist: Shark Sentinel", attackType: "ASSIST", Level1Damage: 121.1, growthPerLevel: 11.1 },
            { attackName: "Assist Follow-Up: Shark Cruiser", attackType: "ASSIST", Level1Damage: 437.9, growthPerLevel: 39.9 },
            // SPECIAL
            { attackName: "Special: Drift", attackType: "SPECIAL", Level1Damage: 50.5, growthPerLevel: 4.6 },
            // EX SPECIAL
            { attackName: "EX Special: Tail Swipe", attackType: "EXSPECIAL", Level1Damage: 377.2, growthPerLevel: 34.3 },
            { attackName: "EX Special: Sharknami", attackType: "EXSPECIAL", Level1Damage: 553.3, growthPerLevel: 50.3 },
            // CHAIN
            { attackName: "Chain: Avalanche", attackType: "CHAIN", Level1Damage: 794.6, growthPerLevel: 72.3 },
            // ULT
            { attackName: "Ultimate: Endless Winter", attackType: "ULT", Level1Damage: 1890.8, growthPerLevel: 171.9 },
        ],
    },
    {
        characterName: "Qingyi",
        attackStats: [
            // BASIC
            { attackName: "Basic: Penultimate - 1", attackType: "BASIC", Level1Damage: 47.2, growthPerLevel: 4.3 },
            { attackName: "Basic: Penultimate - 1 Alt", attackType: "BASIC", Level1Damage: 110.3, growthPerLevel: 10.1 },
            { attackName: "Basic: Penultimate - 2", attackType: "BASIC", Level1Damage: 122.1, growthPerLevel: 11.1 },
            { attackName: "Basic: Penultimate - 3", attackType: "BASIC", Level1Damage: 17.6, growthPerLevel: 1.6 },
            { attackName: "Basic: Penultimate - 4", attackType: "BASIC", Level1Damage: 106.4, growthPerLevel: 9.7 },
            { attackName: "Basic: Penultimate - 4 Enhanced", attackType: "BASIC", Level1Damage: 234.4, growthPerLevel: 21.4 },
            
            { attackName: "Basic: Enchanted Blossoms", attackType: "BASIC", Level1Damage: 85.6, growthPerLevel: 7.8 },
            
            { attackName: "Basic: Enchanted Moonlit Blossoms - Rush Attack", attackType: "BASIC", Level1Damage: 448.7, growthPerLevel: 40.8 },
            { attackName: "Basic: Enchanted Moonlit Blossoms - Finishing Strike", attackType: "BASIC", Level1Damage: 394.4, growthPerLevel: 35.9 },
            // DASH
            { attackName: "Dash: Breach", attackType: "DASH", Level1Damage: 49.5, growthPerLevel: 4.5 },
            // DODGE
            { attackName: "Dodge: Lingering Sentiments", attackType: "DASH", Level1Damage: 284, growthPerLevel: 25.9 },
            // ASSIST
            { attackName: "Quick Assist: Wind Through the Pines", attackType: "ASSIST", Level1Damage: 133.9, growthPerLevel: 12.2 },
            { attackName: "Assist Follow-Up: Song of the Clear River", attackType: "ASSIST", Level1Damage: 376.4, growthPerLevel: 34.3 },
            // SPECIAL
            { attackName: "Special: Sunlit Glory", attackType: "SPECIAL", Level1Damage: 62.4, growthPerLevel: 5.7 },
            // EX SPECIAL
            { attackName: "EX Special: Moonlit Begonia", attackType: "EXSPECIAL", Level1Damage: 602.8, growthPerLevel: 54.9 },
            // CHAIN
            { attackName: "Chain: Tranquil Serenade", attackType: "CHAIN", Level1Damage: 647.9, growthPerLevel: 58.9 },
            // ULT
            { attackName: "Ultimate: Eight Sounds of Ganzhou", attackType: "ULT", Level1Damage: 1670.7, growthPerLevel: 151.9 },
        ],
    },
    {
        characterName: "Jane Doe",
        attackStats: [
            // BASIC
            { attackName: "Basic: Dancing Blades - 1", attackType: "BASIC", Level1Damage: 36.1, growthPerLevel: 3.3 },
            { attackName: "Basic: Dancing Blades - 2", attackType: "BASIC", Level1Damage: 62.3, growthPerLevel: 5.7 },
            { attackName: "Basic: Dancing Blades - 3", attackType: "BASIC", Level1Damage: 83.5, growthPerLevel: 7.6 },
            { attackName: "Basic: Dancing Blades - 4", attackType: "BASIC", Level1Damage: 163.4, growthPerLevel: 14.9 },
            { attackName: "Basic: Dancing Blades - 5", attackType: "BASIC", Level1Damage: 98.8, growthPerLevel: 9 },
            { attackName: "Basic: Dancing Blades - 6", attackType: "BASIC", Level1Damage: 291.3, growthPerLevel: 26.5 },
           
            { attackName: "Basic:  Salchow Jump - Combo", attackType: "BASIC", Level1Damage: 300.8, growthPerLevel: 27.4 },
            { attackName: "Basic:  Salchow Jump - Finishing Strike", attackType: "BASIC", Level1Damage: 161.3, growthPerLevel: 14.7 },
            // DASH
            { attackName: "Dash: Edge Jump - 1", attackType: "DASH", Level1Damage: 71.5, growthPerLevel: 6.5 },
            { attackName: "Dash: Edge Jump - 2", attackType: "DASH", Level1Damage: 71.5, growthPerLevel: 6.5 },
            // DODGE
            { attackName: "Dodge: Phantom Thrust", attackType: "DASH", Level1Damage: 104.5, growthPerLevel: 9.5 },
            { attackName: "Dodge: Swift Shadow - 1", attackType: "DASH", Level1Damage: 341.2, growthPerLevel: 31.1 },
            { attackName: "Dodge: Swift Shadow - 2", attackType: "DASH", Level1Damage: 341.2, growthPerLevel: 31.1 },
            { attackName: "Dodge: Swift Shadow Dance", attackType: "DASH", Level1Damage: 387, growthPerLevel: 35.2 },
            // ASSIST
            { attackName: "Quick Assist: Dark Thorn", attackType: "ASSIST", Level1Damage: 119.2, growthPerLevel: 10.9 },
            { attackName: "Assist Follow-Up: Gale Sweep", attackType: "ASSIST", Level1Damage: 345.5, growthPerLevel: 31.5 },
            // SPECIAL
            { attackName: "Special: Aerial Sweep", attackType: "SPECIAL", Level1Damage: 57.8, growthPerLevel: 5.3 },
            // EX SPECIAL
            { attackName: "EX Special: Aerial Sweep - Tail Swipe", attackType: "EXSPECIAL", Level1Damage: 574.7, growthPerLevel: 52.3 },
            // CHAIN
            { attackName: "Chain: Flowers of Sin", attackType: "CHAIN", Level1Damage: 632.6, growthPerLevel: 57.6 },
            // ULT
            { attackName: "Ultimate: Final Curtain", attackType: "ULT", Level1Damage: 1470.6, growthPerLevel: 133.7 },
        ],
    },
    {
        characterName: "Seth",
        attackStats: [
            // BASIC
            { attackName: "Basic: Lightning Strike - 1", attackType: "BASIC", Level1Damage: 36.2, growthPerLevel: 3.3 },
            { attackName: "Basic: Lightning Strike - 2", attackType: "BASIC", Level1Damage: 56.5, growthPerLevel: 5.2 },
            { attackName: "Basic: Lightning Strike - 3", attackType: "BASIC", Level1Damage: 193.3, growthPerLevel: 17.6 },
            { attackName: "Basic: Lightning Strike - 4", attackType: "BASIC", Level1Damage: 97.4, growthPerLevel: 8.9 },
            
            { attackName: "Basic: Lightning Strike - Electrified - ", attackType: "BASIC", Level1Damage: 382.8, growthPerLevel: 34.8 },
            { attackName: "Basic: Lightning Strike - Electrified - ", attackType: "BASIC", Level1Damage: 424.2, growthPerLevel: 38.6 },
            // DASH
            { attackName: "Dash: Thunder Assault", attackType: "DASH", Level1Damage: 110, growthPerLevel: 10 },
            // DODGE
            { attackName: "Dodge: Retreat to Advance", attackType: "DASH", Level1Damage: 230, growthPerLevel: 21 },
            // ASSIST
            { attackName: "Quick Assist: Armed Support", attackType: "ASSIST", Level1Damage: 100, growthPerLevel: 9.1 },
            { attackName: "Assist Follow-Up: Public Security Ruling", attackType: "ASSIST", Level1Damage: 428.5, growthPerLevel: 39 },
            // SPECIAL
            { attackName: "Special: Thunder Shield Rush", attackType: "SPECIAL", Level1Damage: 69.2, growthPerLevel: 75.5 },
            // EX SPECIAL
            { attackName: "EX Special: Thunder Shield Rush - High Voltage", attackType: "EXSPECIAL", Level1Damage: 646, growthPerLevel: 704.8 },
            { attackName: "EX Special: Thunder Shield Rush - High Voltage - Charged", attackType: "EXSPECIAL", Level1Damage: 999.8, growthPerLevel: 1090.7 },
            // CHAIN
            { attackName: "Chain: Final Judgement", attackType: "CHAIN", Level1Damage: 704.1, growthPerLevel: 64.1 },
            // ULT
            { attackName: "Ultimate: Justice Prevails", attackType: "ULT", Level1Damage: 2024.3, growthPerLevel: 184.1 },
        ],
    },
    {
        characterName: "Caesar",
        attackStats: [
            // BASIC
            { attackName: "Basic: Rampaging Slash - 1", attackType: "BASIC", Level1Damage: 47.2, growthPerLevel: 4.3 },
            { attackName: "Basic: Rampaging Slash - 2", attackType: "BASIC", Level1Damage: 40.9, growthPerLevel: 3.8 },
            { attackName: "Basic: Rampaging Slash - 3", attackType: "BASIC", Level1Damage: 148.3, growthPerLevel: 13.5 },
            { attackName: "Basic: Rampaging Slash - 3 Alt", attackType: "BASIC", Level1Damage: 118.4, growthPerLevel: 10.8 },
            { attackName: "Basic: Rampaging Slash - 4", attackType: "BASIC", Level1Damage: 78.8, growthPerLevel: 7.2 },
            { attackName: "Basic: Rampaging Slash - 5", attackType: "BASIC", Level1Damage: 198.6, growthPerLevel: 18.1 },
            { attackName: "Basic: Rampaging Slash - 6", attackType: "BASIC", Level1Damage: 399.9, growthPerLevel: 36.4 },
           
            { attackName: "Basic: Dead End", attackType: "BASIC", Level1Damage: 126.3, growthPerLevel: 11.5 },
            // DASH
            { attackName: "Dash: Hog Rush", attackType: "DASH", Level1Damage: 62.3, growthPerLevel: 5.7 },
            // DODGE
            { attackName: "Dodge: Eye For an Eye", attackType: "DASH", Level1Damage: 193.5, growthPerLevel: 17.6 },
            // ASSIST
            { attackName: "Quick Assist: Lane Change", attackType: "ASSIST", Level1Damage: 64.2, growthPerLevel: 5.9 },
            { attackName: "Assist Follow-Up: Aiding Blade", attackType: "ASSIST", Level1Damage: 407.2, growthPerLevel: 37.1 },
            // SPECIAL
            { attackName: "Special: Shockwave Shield Bash", attackType: "SPECIAL", Level1Damage: 53.3, growthPerLevel: 53.3 },
            { attackName: "Special: Roaring Thrust", attackType: "SPECIAL", Level1Damage: 58.8, growthPerLevel: 58.8 },
            // EX SPECIAL
            { attackName: "EX Special: Parry Counter", attackType: "EXSPECIAL", Level1Damage: 387.2, growthPerLevel: 387.2 },
            { attackName: "EX Special: Parry Counter - Perfect", attackType: "EXSPECIAL", Level1Damage: 387.2, growthPerLevel: 387.2 },
            { attackName: "EX Special: Overpowered Shield Bash", attackType: "EXSPECIAL", Level1Damage: 425.7, growthPerLevel: 425.7 },
            // CHAIN
            { attackName: "Chain: Road Rage Slam", attackType: "CHAIN", Level1Damage: 638.8, growthPerLevel: 58.1 },
            // ULT
            { attackName: "Ultimate: Savage Smash", attackType: "ULT", Level1Damage: 2012.3, growthPerLevel: 183 },
        ],
    },
    {
        characterName: "Burnice",
        attackStats: [
            // BASIC
            { attackName: "Basic: Direct Flame Blend - 1", attackType: "BASIC", Level1Damage: 44.8, growthPerLevel: 4.1 },
            { attackName: "Basic: Direct Flame Blend - 2", attackType: "BASIC", Level1Damage: 43.5, growthPerLevel: 4 },
            { attackName: "Basic: Direct Flame Blend - 3", attackType: "BASIC", Level1Damage: 71.7, growthPerLevel: 6.6 },
            { attackName: "Basic: Direct Flame Blend - 4", attackType: "BASIC", Level1Damage: 66.6, growthPerLevel: 6.1 },
            { attackName: "Basic: Direct Flame Blend - 5", attackType: "BASIC", Level1Damage: 96.3, growthPerLevel: 8.8 },
       
            { attackName: "Basic: Mixed Flame Blend - Continuous Spray", attackType: "BASIC", Level1Damage: 125.4, growthPerLevel: 11.5 },
            { attackName: "Basic: Mixed Flame Blend - Finishing Move", attackType: "BASIC", Level1Damage: 232.8, growthPerLevel: 21.2 },
            { attackName: "Basic: Mixed Flame Blend - Total", attackType: "BASIC", Level1Damage: 358.2, growthPerLevel: 32.7 },
            // DASH
            { attackName: "Dash: Dangerous Fermentation", attackType: "DASH", Level1Damage: 67.9, growthPerLevel: 6.2 },
            // DODGE
            { attackName: "Dodge: Fluttering Steps", attackType: "DASH", Level1Damage: 219.7, growthPerLevel: 20 },
            // ASSIST
            { attackName: "Quick Assist: Energizing Specialty Drink", attackType: "ASSIST", Level1Damage: 84.4, growthPerLevel: 7.7 },
            { attackName: "Assist Follow-Up: Scorching Dew", attackType: "ASSIST", Level1Damage: 327.6, growthPerLevel: 29.8 },
            // SPECIAL
            { attackName: "Special: Intense Heat Aging Method", attackType: "SPECIAL", Level1Damage: 57.8, growthPerLevel: 5.3 },
            { attackName: "Special: Intense Heat Aging Method - Charged", attackType: "SPECIAL", Level1Damage: 62.4, growthPerLevel: 5.7 },
            // EX SPECIAL
            { attackName: "EX Special: Intense Heat Stirring Method - Double Shot - Continuous Spray", attackType: "EXSPECIAL", Level1Damage: 958.1, growthPerLevel: 87.1 },
            { attackName: "EX Special: Intense Heat Stirring Method - Double Shot - Fire Blast", attackType: "EXSPECIAL", Level1Damage: 287.1, growthPerLevel: 26.1 },
            { attackName: "EX Special: Intense Heat Stirring Method - Continuous Spray", attackType: "EXSPECIAL", Level1Damage: 543.8, growthPerLevel: 49.5 },
            { attackName: "EX Special: Intense Heat Stirring Method - Fire Blast ", attackType: "EXSPECIAL", Level1Damage: 96.7, growthPerLevel: 8.8 },
            // CHAIN
            { attackName: "Chain: Fuel-Fed Flame", attackType: "CHAIN", Level1Damage: 680.9, growthPerLevel: 61.9 },
            // ULT
            { attackName: "Ultimate: Glorious Inferno", attackType: "ULT", Level1Damage: 2012.2, growthPerLevel: 183 },
        ],
    },
    {
        characterName: "Yanagi",
        attackStats: [
            // BASIC
            { attackName: "Basic: Tsukuyomi Kagura - Jougen - 1", attackType: "BASIC", Level1Damage: 56.6, growthPerLevel: 5.2 },
            { attackName: "Basic: Tsukuyomi Kagura - Jougen - 2", attackType: "BASIC", Level1Damage: 99.7, growthPerLevel: 9.1 },
            { attackName: "Basic: Tsukuyomi Kagura - Jougen - 3", attackType: "BASIC", Level1Damage: 113.1, growthPerLevel: 10.3 },
            { attackName: "Basic: Tsukuyomi Kagura - Jougen - 4", attackType: "BASIC", Level1Damage: 126.6, growthPerLevel: 11.6 },
            { attackName: "Basic: Tsukuyomi Kagura - Jougen - 5", attackType: "BASIC", Level1Damage: 236.9, growthPerLevel: 21.6 },
          
            { attackName: "Basic: Tsukuyomi Kagura - Kagen - 1", attackType: "BASIC", Level1Damage: 113.1, growthPerLevel: 10.3 },
            { attackName: "Basic: Tsukuyomi Kagura - Kagen - 2", attackType: "BASIC", Level1Damage: 129.2, growthPerLevel: 11.8 },
            { attackName: "Basic: Tsukuyomi Kagura - Kagen - 3", attackType: "BASIC", Level1Damage: 72.8, growthPerLevel: 6.7 },
            { attackName: "Basic: Tsukuyomi Kagura - Kagen - 4", attackType: "BASIC", Level1Damage: 107.7, growthPerLevel: 9.8 },
            { attackName: "Basic: Tsukuyomi Kagura - Kagen - 5", attackType: "BASIC", Level1Damage: 271.8, growthPerLevel: 24.8 },
            // DASH
            { attackName: "Dash: Fleeting Flight", attackType: "DASH", Level1Damage: 50.4, growthPerLevel: 4.6 },
            // DODGE
            { attackName: "Dodge: Rapid Retaliation", attackType: "DASH", Level1Damage: 231.6, growthPerLevel: 21.1 },
            // ASSIST
            { attackName: "Quick Assist: Blade of Elegance", attackType: "ASSIST", Level1Damage: 93.6, growthPerLevel: 8.6 },
            { attackName: "Assist Follow-Up: Weeping Willow Stab", attackType: "ASSIST", Level1Damage: 407.1, growthPerLevel: 37.1 },
            // SPECIAL
            { attackName: "Special: Ruten", attackType: "SPECIAL", Level1Damage: 117.4, growthPerLevel: 10.7 },
            // EX SPECIAL
            { attackName: "EX Special: Gekka Ruten - Thrust", attackType: "EXSPECIAL", Level1Damage: 163.8, growthPerLevel: 14.9 },
            { attackName: "EX Special: Gekka Ruten - Downward", attackType: "EXSPECIAL", Level1Damage: 377.8, growthPerLevel: 34.4 },
            // CHAIN
            { attackName: "Chain: Celestial Harmony", attackType: "CHAIN", Level1Damage: 593.1, growthPerLevel: 54 },
            // ULT
            { attackName: "Ultimate: Raiei Tenge", attackType: "ULT", Level1Damage: 1511.8, growthPerLevel: 137.5 },
        ],
    },
    {
        characterName: "Lighter",
        attackStats: [
            // BASIC
            { attackName: "Basic: L-Form Thundering Fist - 1", attackType: "BASIC", Level1Damage: 39.2, growthPerLevel: 3.6 },
            { attackName: "Basic: L-Form Thundering Fist - 2", attackType: "BASIC", Level1Damage: 48, growthPerLevel: 4.4 },
            { attackName: "Basic: L-Form Thundering Fist - 3", attackType: "BASIC", Level1Damage: 55.3, growthPerLevel: 5.1 },
            { attackName: "Basic: L-Form Thundering Fist - 4", attackType: "BASIC", Level1Damage: 78.9, growthPerLevel: 7.2 },
            { attackName: "Basic: L-Form Thundering Fist - 1 - Follow Up", attackType: "BASIC", Level1Damage: 86.9, growthPerLevel: 7.9 },
            { attackName: "Basic: L-Form Thundering Fist - 2 - Follow Up", attackType: "BASIC", Level1Damage: 47.7, growthPerLevel: 4.4 },
            { attackName: "Basic: L-Form Thundering Fist - 3 - Follow Up", attackType: "BASIC", Level1Damage: 58.1, growthPerLevel: 5.3 },
            { attackName: "Basic: L-Form Thundering Fist - 4 - Follow Up", attackType: "BASIC", Level1Damage: 32.8, growthPerLevel: 3 },
            { attackName: "Basic: L-Form Thundering Fist - 5 - Follow Up", attackType: "BASIC", Level1Damage: 89, growthPerLevel: 8.1 },
            { attackName: "Basic: L-Form Thundering Fist - 5 - Startup", attackType: "BASIC", Level1Damage: 163.6, growthPerLevel: 14.9 },
            { attackName: "Basic: L-Form Thundering Fist - 5 - Combo", attackType: "BASIC", Level1Damage: 122.9, growthPerLevel: 11.2 },
            { attackName: "Basic: L-Form Thundering Fist - 5 - Finisher", attackType: "BASIC", Level1Damage: 104.6, growthPerLevel: 9.6 },
            { attackName: "Basic: L-Form Thundering Fist - 5 - Startup (Morale Burst)", attackType: "BASIC", Level1Damage: 177.2, growthPerLevel: 16.2 },
            { attackName: "Basic: L-Form Thundering Fist - 5 - Combo (Morale Burst)", attackType: "BASIC", Level1Damage: 364.3, growthPerLevel: 33.2 },
            { attackName: "Basic: L-Form Thundering Fist - 5 - Finisher (Morale Burst)", attackType: "BASIC", Level1Damage: 119.7, growthPerLevel: 10.9 },
            { attackName: "Basic: L-Form Thundering Fist - 5 Powerful Finisher (Morale Burst)", attackType: "BASIC", Level1Damage: 435.4, growthPerLevel: 39.6 },
            // DASH
            { attackName: "Dash: Charging Slam", attackType: "DASH", Level1Damage: 89.9, growthPerLevel: 8.2 },
            // DODGE
            { attackName: "Dodge: Blazing Flash", attackType: "DASH", Level1Damage: 186.3, growthPerLevel: 17 },
            // ASSIST
            { attackName: "Quick Assist: Blazing Flash - Guard", attackType: "ASSIST", Level1Damage: 76.1, growthPerLevel: 6.4 },
            { attackName: "Assist Follow-Up: Charging Slam - Stab", attackType: "ASSIST", Level1Damage: 219.8, growthPerLevel: 20 },
            // SPECIAL
            { attackName: "Special: ", attackType: "SPECIAL", Level1Damage: 36.3, growthPerLevel: 3.3 },
            // EX SPECIAL
            { attackName: "EX Special: V-Form Sunrise Uppercut - Full Distance", attackType: "EXSPECIAL", Level1Damage: 486.3, growthPerLevel: 44.3 },
            { attackName: "EX Special: V-Form Sunrise Uppercut - Full Distance - Follow Up", attackType: "EXSPECIAL", Level1Damage: 292.7, growthPerLevel: 26.7 },
            // CHAIN
            { attackName: "Chain: V-Form Scorching Sun", attackType: "CHAIN", Level1Damage: 712.1, growthPerLevel: 64.8 },
            // ULT
            { attackName: "Ultimate: W-Form Crowned Inferno", attackType: "ULT", Level1Damage: 1508, growthPerLevel: 137.1 },
        ],
    },
    {
        characterName: "Miyabi",
        attackStats: [
            // BASIC
            { attackName: "Basic: Kazahana - 1", attackType: "BASIC", Level1Damage: 26.9, growthPerLevel: 2.5 },
            { attackName: "Basic: Kazahana - 2", attackType: "BASIC", Level1Damage: 29.6, growthPerLevel: 2.7 },
            { attackName: "Basic: Kazahana - 3", attackType: "BASIC", Level1Damage: 62.8, growthPerLevel: 5.8 },
            { attackName: "Basic: Kazahana - 4", attackType: "BASIC", Level1Damage: 96.5, growthPerLevel: 8.8 },
            { attackName: "Basic: Kazahana - 5", attackType: "BASIC", Level1Damage: 129, growthPerLevel: 11.8 },
            
            { attackName: "Basic: Shimotsuki - Charve Lvl 1", attackType: "BASIC", Level1Damage: 454.7, growthPerLevel: 41.4 },
            { attackName: "Basic: Shimotsuki - Charve Lvl 2", attackType: "BASIC", Level1Damage: 858.1, growthPerLevel: 78.1 },
            { attackName: "Basic: Shimotsuki - Charve Lvl 3", attackType: "BASIC", Level1Damage: 2141.1, growthPerLevel: 194.7 },
            // DASH
            { attackName: "Dash: Fuyubachi", attackType: "DASH", Level1Damage: 25.8, growthPerLevel: 2.4 },
            // DODGE
            { attackName: "Dodge: Kan Suzume", attackType: "DASH", Level1Damage: 245.9, growthPerLevel: 22.4 },
            // ASSIST
            { attackName: "Quick Assist: Dancing Petals", attackType: "ASSIST", Level1Damage: 104.5, growthPerLevel: 9.5 },
            { attackName: "Assist Follow-Up: Falling Petals", attackType: "ASSIST", Level1Damage: 337.8, growthPerLevel: 30.8 },
            // SPECIAL
            { attackName: "Special: Miyuki", attackType: "SPECIAL", Level1Damage: 35.8, growthPerLevel: 3.3 },
            // EX SPECIAL
            { attackName: "EX Special: Hisetsu", attackType: "EXSPECIAL", Level1Damage: 393.4, growthPerLevel: 35.9 },
            { attackName: "EX Special: Hisetsu Follow Up", attackType: "EXSPECIAL", Level1Damage: 483.2, growthPerLevel: 44 },
            // CHAIN
            { attackName: "Chain: Spring's Call", attackType: "CHAIN", Level1Damage: 628, growthPerLevel: 57.3 },
            // ULT
            { attackName: "Ultimate: Lingering Snow", attackType: "ULT", Level1Damage: 2388, growthPerLevel: 217.1 },
        ],
    },
    {
        characterName: "Harumasa",
        attackStats: [
            // BASIC
            { attackName: "Basic: Cloud Piercer - 1", attackType: "BASIC", Level1Damage: 42.4, growthPerLevel: 3.9 },
            { attackName: "Basic: Cloud Piercer - 2", attackType: "BASIC", Level1Damage: 39.8, growthPerLevel: 3.7 },
            { attackName: "Basic: Cloud Piercer - 3", attackType: "BASIC", Level1Damage: 70.9, growthPerLevel: 6.5 },
            { attackName: "Basic: Cloud Piercer - 4", attackType: "BASIC", Level1Damage: 90.1, growthPerLevel: 8.2 },
            { attackName: "Basic: Cloud Piercer - 5", attackType: "BASIC", Level1Damage: 132.9, growthPerLevel: 12.1 },
       
            { attackName: "Basic: Cloud Piercer - Drift", attackType: "BASIC", Level1Damage: 69.5, growthPerLevel: 6.4 },
          
            { attackName: "Basic: Falling Feather", attackType: "BASIC", Level1Damage: 105.4, growthPerLevel: 9.6 },
           
            { attackName: "Basic: Ha-Oto no Ya", attackType: "BASIC", Level1Damage: 15.9, growthPerLevel: 1.5 },
            // DASH
            { attackName: "Dash: Hiten no Tsuru", attackType: "DASH", Level1Damage: 80.7, growthPerLevel: 7.4 },
            { attackName: "Dash: Hiten no Tsuru - Slash - 1", attackType: "DASH", Level1Damage: 162.3, growthPerLevel: 14.8 },
            { attackName: "Dash: Hiten no Tsuru - Slash - 2", attackType: "DASH", Level1Damage: 166.6, growthPerLevel: 15.2 },
            { attackName: "Dash: Hiten no Tsuru - Slash - 3", attackType: "DASH", Level1Damage: 189.6, growthPerLevel: 17.3 },
            // DODGE
            { attackName: "Dodge: Hidden Edge", attackType: "DASH", Level1Damage: 219.6, growthPerLevel: 20 },
            // ASSIST
            { attackName: "Quick Assist: Braced Bow", attackType: "ASSIST", Level1Damage: 84.3, growthPerLevel: 7.7 },
            { attackName: "Assist Follow-Up: Yugamae - Slash", attackType: "ASSIST", Level1Damage: 307.1, growthPerLevel: 28 },
            // SPECIAL
            { attackName: "Special: Nowhere to Hide", attackType: "SPECIAL", Level1Damage: 52.3, growthPerLevel: 4.8 },
            // EX SPECIAL
            { attackName: "EX Special: Nowhere to Run", attackType: "EXSPECIAL", Level1Damage: 449.3, growthPerLevel: 40.9 },
            // CHAIN
            { attackName: "Chain: ", attackType: "CHAIN", Level1Damage: 517.6, growthPerLevel: 47.1 },
            // ULT
            { attackName: "Ultimate: ", attackType: "ULT", Level1Damage: 1953.9, growthPerLevel: 177.7 },
        ],
    },
    {
        characterName: "Astra Yao",
        attackStats: [
            // BASIC
            { attackName: "Basic: Capriccio - 1", attackType: "BASIC", Level1Damage: 43.8, growthPerLevel: 4 },
            { attackName: "Basic: Capriccio - 2", attackType: "BASIC", Level1Damage: 59.1, growthPerLevel: 5.4 },
            { attackName: "Basic: Capriccio - 3", attackType: "BASIC", Level1Damage: 120.9, growthPerLevel: 11 },
            { attackName: "Basic: Capriccio - 3 Max", attackType: "BASIC", Level1Damage: 270.7, growthPerLevel: 24.7 },
           
            { attackName: "Basic: Interlude - 1", attackType: "BASIC", Level1Damage: 55, growthPerLevel: 5 },
            { attackName: "Basic: Interlude - 2", attackType: "BASIC", Level1Damage: 55, growthPerLevel: 5 },
            { attackName: "Basic: Interlude - 3", attackType: "BASIC", Level1Damage: 110, growthPerLevel: 10 },
            { attackName: "Basic: Interlude - 4", attackType: "BASIC", Level1Damage: 110, growthPerLevel: 10 },
            { attackName: "Basic: Interlude - 5", attackType: "BASIC", Level1Damage: 110, growthPerLevel: 10 },
           
            { attackName: "Basic: Chorus", attackType: "BASIC", Level1Damage: 220, growthPerLevel: 220 },
           
            { attackName: "Basic: Finale", attackType: "BASIC", Level1Damage: 55, growthPerLevel: 5 },
            // DASH
            { attackName: "Dash: Lunar Eclipse Melody", attackType: "DASH", Level1Damage: 80.7, growthPerLevel: 7.4 },
            // DODGE
            { attackName: "Dodge: Umbrella Waltz", attackType: "DASH", Level1Damage: 110, growthPerLevel: 10 },
            // ASSIST
            { attackName: "Quick Assist: One Luminous Sky", attackType: "ASSIST", Level1Damage: 55, growthPerLevel: 5 },
            { attackName: "Assist Follow-Up: Three Lifetimes of Fate", attackType: "ASSIST", Level1Damage: 304.6, growthPerLevel: 27.7 },
            // SPECIAL
            { attackName: "Special: Windchimes & Oaths - Minimum", attackType: "SPECIAL", Level1Damage: 55, growthPerLevel: 5 },
            { attackName: "Special: Windchimes & Oaths - Maximum", attackType: "SPECIAL", Level1Damage: 220, growthPerLevel: 20 },
            // EX SPECIAL
            { attackName: "Special: Chord - Follow Up Tremolo", attackType: "EXSPECIAL", Level1Damage: 46, growthPerLevel: 4.2 },
            { attackName: "Special: Chord - Follow Up Tone Cluster", attackType: "EXSPECIAL", Level1Damage: 72, growthPerLevel: 6.6 },
            // CHAIN
            { attackName: "Chain: Tipsy Concerto", attackType: "CHAIN", Level1Damage: 671.8, growthPerLevel: 61.1 },
            // ULT
            { attackName: "Ultimate: Fantasian Sonata", attackType: "ULT", Level1Damage: 1959.8, growthPerLevel: 178.2 },
        ],
    },
    {
        characterName: "Evelyn",
        attackStats: [
            // BASIC
            { attackName: "Basic: Razor Wire - 1", attackType: "BASIC", Level1Damage: 51.2, growthPerLevel: 4.7 },
            { attackName: "Basic: Razor Wire - 2", attackType: "BASIC", Level1Damage: 62.1, growthPerLevel: 5.7 },
            { attackName: "Basic: Razor Wire - 3", attackType: "BASIC", Level1Damage: 78.2, growthPerLevel: 7.2 },
            { attackName: "Basic: Razor Wire - 4", attackType: "BASIC", Level1Damage: 186.7, growthPerLevel: 17 },
            { attackName: "Basic: Razor Wire - 5", attackType: "BASIC", Level1Damage: 223.4, growthPerLevel: 20.4 },
          
            { attackName: "Basic: Garrote - First Form", attackType: "BASIC", Level1Damage: 226.4, growthPerLevel: 20.6 },
           
            { attackName: "Basic: Garrote - Second Form", attackType: "BASIC", Level1Damage: 245.2, growthPerLevel: 22.3 },
            // DASH
            { attackName: "Dash: Piercing Ambush", attackType: "DASH", Level1Damage: 60.5, growthPerLevel: 5.5 },
            // DODGE
            { attackName: "Dodge: Strangling Reversal", attackType: "DASH", Level1Damage: 210.2, growthPerLevel: 19.2 },
            // ASSIST
            { attackName: "Quick Assist: Fierce Blade", attackType: "ASSIST", Level1Damage: 77.1, growthPerLevel: 7.1 },
            { attackName: "Assist Follow-Up: Course Disruption", attackType: "ASSIST", Level1Damage: 291.6, growthPerLevel: 26.6 },
            // SPECIAL
            { attackName: "Special: Locked Position", attackType: "SPECIAL", Level1Damage: 52.3, growthPerLevel: 4.8 },
            { attackName: "Special: Binding Sunder - First Form - Bind", attackType: "SPECIAL", Level1Damage: 40.4, growthPerLevel: 3.7 },
            { attackName: "Special: Binding Sunder - First Form - Explosion", attackType: "SPECIAL", Level1Damage: 34, growthPerLevel: 3.1 },
            // EX SPECIAL
            { attackName: "EX Special: ", attackType: "EXSPECIAL", Level1Damage: 541.2, growthPerLevel: 49.2 },
            { attackName: "EX Special: ", attackType: "EXSPECIAL", Level1Damage: 59.6, growthPerLevel: 5.5 },
            // CHAIN
            { attackName: "Chain: Lunalux - Snare", attackType: "CHAIN", Level1Damage: 829.3, growthPerLevel: 75.4 },
            // ULT
            { attackName: "Ultimate: Lunalux Garrote", attackType: "ULT", Level1Damage: 1988.5, growthPerLevel: 180.2 },
        ],
    },
    {
        characterName: "Soldier 0 Anby",
        attackStats: [
            // BASIC
            { attackName: "Basic: Penetrating Shock - 1", attackType: "BASIC", Level1Damage: 32.7, growthPerLevel: 3 },
            { attackName: "Basic: Penetrating Shock - 2", attackType: "BASIC", Level1Damage: 62.2, growthPerLevel: 5.7 },
            { attackName: "Basic: Penetrating Shock - 3 Finisher", attackType: "BASIC", Level1Damage: 80.1, growthPerLevel: 7.3 },
            { attackName: "Basic: Penetrating Shock - 3", attackType: "BASIC", Level1Damage: 39.9, growthPerLevel: 3.7 },
            { attackName: "Basic: Penetrating Shock - 4", attackType: "BASIC", Level1Damage: 154.5, growthPerLevel: 14.1 },
            { attackName: "Basic: Penetrating Shock - 5", attackType: "BASIC", Level1Damage: 148.5, growthPerLevel: 13.5 },
            // DASH
            { attackName: "Dash: Torrent", attackType: "DASH", Level1Damage: 82.5, growthPerLevel: 7.5 },
            // DODGE
            { attackName: "Dodge: Ground Flash Counter", attackType: "DASH", Level1Damage: 250.6, growthPerLevel: 22.8 },
            // ASSIST
            { attackName: "Quick Assist: Cloud Flash", attackType: "ASSIST", Level1Damage: 108.2, growthPerLevel: 9.9 },
            { attackName: "Assist Follow-Up: Conducting Blow", attackType: "ASSIST", Level1Damage: 407.1, growthPerLevel: 37.1 },
            // SPECIAL
            { attackName: "Special: Celestial Thunder", attackType: "SPECIAL", Level1Damage: 59.6, growthPerLevel: 5.5 },

            { attackName: "Special: Azure Flash - Total", attackType: "SPECIAL", Level1Damage: 210.2, growthPerLevel: 19.2 },
            { attackName: "Special: Azure Flash - White Thunder", attackType: "SPECIAL", Level1Damage: 167.2, growthPerLevel: 15.2 },
            { attackName: "Special: Azure Flash", attackType: "SPECIAL", Level1Damage: 43, growthPerLevel: 4 },

            { attackName: "Special: Thunder Smite", attackType: "SPECIAL", Level1Damage: 188.1, growthPerLevel: 17.1 },
            // EX SPECIAL
            { attackName: "EX Special: Sundering Bolt", attackType: "EXSPECIAL", Level1Damage: 379.6, growthPerLevel: 34.6 },
            // CHAIN
            { attackName: "Chain: Leaping Thunderstrike", attackType: "CHAIN", Level1Damage: 563.8, growthPerLevel: 51.3 },
            // ULT
            { attackName: "Ultimate: Voidstrike", attackType: "ULT", Level1Damage: 1734.9, growthPerLevel: 157.8 },
        ],
    },
    {
        characterName: "Pulchra",
        attackStats: [
            // BASIC
            { attackName: "Basic: Swift Strike - 1", attackType: "BASIC", Level1Damage: 35.7, growthPerLevel: 3.3 },
            { attackName: "Basic: Swift Strike - 2", attackType: "BASIC", Level1Damage: 94.1, growthPerLevel: 8.6 },
            { attackName: "Basic: Swift Strike - 3", attackType: "BASIC", Level1Damage: 167.6, growthPerLevel: 15.3 },

            { attackName: "Basic: Leaping Strike", attackType: "BASIC", Level1Damage: 135, growthPerLevel: 12.3 },
            // DASH
            { attackName: "Dash: First Strike Advantage", attackType: "DASH", Level1Damage: 48.3, growthPerLevel: 4.4 },
            // DODGE
            { attackName: "Dodge: Relentless Retribution", attackType: "DASH", Level1Damage: 201.8, growthPerLevel: 18.4 },
            // ASSIST
            { attackName: "Quick Assist: Contract - Bodyguard", attackType: "ASSIST", Level1Damage: 78.3, growthPerLevel: 7.2 },
            { attackName: "Assist Follow-Up: Independent Pricing", attackType: "ASSIST", Level1Damage: 307.1, growthPerLevel: 28 },
            // SPECIAL
            { attackName: "Special: Rending Claw", attackType: "SPECIAL", Level1Damage: 25.1, growthPerLevel: 2.3 },
            { attackName: "Special: Rending Claw - Nightmare Shadow", attackType: "SPECIAL", Level1Damage: 46.3, growthPerLevel: 4.3 },
            { attackName: "Special: Rending Claw - Nightmare Shadow -Finishing Move", attackType: "SPECIAL", Level1Damage: 53.5, growthPerLevel: 4.9 },
            // EX SPECIAL
            { attackName: "EX Special: Rending Claw - Flashstep", attackType: "EXSPECIAL", Level1Damage: 347.7, growthPerLevel: 31.7 },
            // CHAIN
            { attackName: "Chain: Hey, Didn't Expect That, Right?", attackType: "CHAIN", Level1Damage: 534.1, growthPerLevel: 48.6 },
            // ULT
            { attackName: "Ultimate: Oh, Time to Play?", attackType: "ULT", Level1Damage: 1393.8, growthPerLevel: 126.8 },
        ],
    },
    {
        characterName: "Trigger",
        attackStats: [
            // BASIC
            { attackName: "Basic: Cold-Bore Shot - 1", attackType: "BASIC", Level1Damage: 34.5, growthPerLevel: 3.2 },
            { attackName: "Basic: Cold-Bore Shot - 2", attackType: "BASIC", Level1Damage: 56.9, growthPerLevel: 5.2 },
            { attackName: "Basic: Cold-Bore Shot - 3", attackType: "BASIC", Level1Damage: 110.9, growthPerLevel: 10.1 },
            { attackName: "Basic: Cold-Bore Shot - 4", attackType: "BASIC", Level1Damage: 243, growthPerLevel: 22.1 },
            
            { attackName: "Basic: Silenced Shot - Shot", attackType: "BASIC", Level1Damage: 47.6, growthPerLevel: 4.4 },
            { attackName: "Basic: Silenced Shot - Counter", attackType: "BASIC", Level1Damage: 233.9, growthPerLevel: 21.3 },
            { attackName: "Basic: Silenced Shot - Finisher", attackType: "BASIC", Level1Damage: 131.2, growthPerLevel: 12 },
           
            { attackName: "Basic: Harmonizing Shot", attackType: "BASIC", Level1Damage: 95.8, growthPerLevel: 8.8 },
            
            { attackName: "Basic: Harmonizing Shot - Tartarus - Continuous ", attackType: "BASIC", Level1Damage: 67.8, growthPerLevel: 6.3 },
            { attackName: "Basic: Harmonizing Shot - Tartarus - Finisher ", attackType: "BASIC", Level1Damage: 45.2, growthPerLevel: 4.2 },
            // DASH
            { attackName: "Dash: Vengeful Specter", attackType: "DASH", Level1Damage: 51.4, growthPerLevel: 4.7 },
            // DODGE
            { attackName: "Dodge: Condemned Soul", attackType: "DASH", Level1Damage: 219.7, growthPerLevel: 20 },
            // ASSIST
            { attackName: "Quick Assist: Cold-Bore Cover Fire", attackType: "ASSIST", Level1Damage: 84.4, growthPerLevel: 7.7 },
            { attackName: "Assist Follow-Up: Piercing Thunder", attackType: "ASSIST", Level1Damage: 432.9, growthPerLevel: 39.4 },
            // SPECIAL
            { attackName: "Special: Spectral Flash", attackType: "SPECIAL", Level1Damage: 71.5, growthPerLevel: 6.5 },
            // EX SPECIAL
            { attackName: "EX Special: Flash Burial", attackType: "EXSPECIAL", Level1Damage: 634.4, growthPerLevel: 57.7 },
            // CHAIN
            { attackName: "Chain: Stygian Guide", attackType: "CHAIN", Level1Damage: 574.7, growthPerLevel: 52.3 },
            // ULT
            { attackName: "Ultimate: Underworld Requiem", attackType: "ULT", Level1Damage: 1480.5, growthPerLevel: 134.6 },
        ],
    },
    {
        characterName: "Vivian",
        attackStats: [
            // BASIC
            { attackName: "Basic: Feathered Strike - 1", attackType: "BASIC", Level1Damage: 34.1, growthPerLevel: 3.1 },
            { attackName: "Basic: Feathered Strike - 2", attackType: "BASIC", Level1Damage: 24.2, growthPerLevel: 2.2 },
            { attackName: "Basic: Feathered Strike - 3", attackType: "BASIC", Level1Damage: 76.9, growthPerLevel: 7 },
            { attackName: "Basic: Feathered Strike - 4", attackType: "BASIC", Level1Damage: 128.4, growthPerLevel: 11.7 },
           
            { attackName: "Basic: Noblweoman - Waltz", attackType: "BASIC", Level1Damage: 47.8, growthPerLevel: 4.4 },
           
            { attackName: "Basic: Fluttering Frock - Suspension", attackType: "BASIC", Level1Damage: 80.2, growthPerLevel: 7.3 },
          
            { attackName: "Basic: Featherbloom", attackType: "BASIC", Level1Damage: 220, growthPerLevel: 20 },
            // DASH
            { attackName: "Dash: Silver Thorned Melody", attackType: "DASH", Level1Damage: 59.6, growthPerLevel: 4.6 },
            // DODGE
            { attackName: "Dodge: Wingblade Reverb", attackType: "DASH", Level1Damage: 236.4, growthPerLevel: 21.5 },
            // ASSIST
            { attackName: "Quick Assist: Frostwing Guard", attackType: "ASSIST", Level1Damage: 97.3, growthPerLevel: 8.9 },
            { attackName: "Assist Follow-Up: Featherblade Execution", attackType: "ASSIST", Level1Damage: 373.9, growthPerLevel: 34 },
            // SPECIAL
            { attackName: "Special: Song of Silver Wings", attackType: "SPECIAL", Level1Damage: 56.9, growthPerLevel: 5.2 },
            // EX SPECIAL
            { attackName: "EX Special: Violet Requiem", attackType: "EXSPECIAL", Level1Damage: 592.6, growthPerLevel: 53.9 },
            // CHAIN
            { attackName: "Chain: Chorus of Celestial Wings", attackType: "CHAIN", Level1Damage: 658.9, growthPerLevel: 59.9 },
            // ULT
            { attackName: "Ultimate: Soarding Bird's Song", attackType: "ULT", Level1Damage: 1686.8, growthPerLevel: 153.4 },
        ],
    },
    {
        characterName: "Hugo",
        attackStats: [
            // BASIC
            { attackName: "Basic: Dark Abyss Quartet - 1", attackType: "BASIC", Level1Damage: 43.1, growthPerLevel: 4 },
            { attackName: "Basic: Dark Abyss Quartet - 2", attackType: "BASIC", Level1Damage: 74.1, growthPerLevel: 6.8 },
            { attackName: "Basic: Dark Abyss Quartet - 3", attackType: "BASIC", Level1Damage: 169.6, growthPerLevel: 15.5 },
            { attackName: "Basic: Dark Abyss Quartet - Slash", attackType: "BASIC", Level1Damage: 149.1, growthPerLevel: 13.6 },
            { attackName: "Basic: Dark Abyss Quartet - Shot", attackType: "BASIC", Level1Damage: 58.6, growthPerLevel: 5.4 },
            { attackName: "Basic: Dark Abyss Quartet - Charged Shot", attackType: "BASIC", Level1Damage: 118, growthPerLevel: 10.8 },
           
            { attackName: "Basic: Abyss Concerto - Slash", attackType: "BASIC", Level1Damage: 143.4, growthPerLevel: 13.1 },
            { attackName: "Basic: Abyss Concerto - Shot", attackType: "BASIC", Level1Damage: 86.7, growthPerLevel: 7.9 },
            { attackName: "Basic: Abyss Concerto - Charged Shot", attackType: "BASIC", Level1Damage: 170.6, growthPerLevel: 15.6 },
            // DASH
            { attackName: "Dash: Phantasm - Shatter", attackType: "DASH", Level1Damage: 93.5, growthPerLevel: 8.5 },
            // DODGE
            { attackName: "Dodge: Phantasm - Slash", attackType: "DASH", Level1Damage: 245.9, growthPerLevel: 22.4 },
            { attackName: "Dodge: Phantasm - Slash - ALT Shot", attackType: "DASH", Level1Damage: 162.1, growthPerLevel: 14.8 },
            { attackName: "Dodge: Phantasm - Slash - ALT Charged Shot", attackType: "DASH", Level1Damage: 212.1, growthPerLevel: 19.3 },
            // ASSIST
            { attackName: "Quick Assist: Elegy", attackType: "ASSIST", Level1Damage: 104.5, growthPerLevel: 9.5 },
            { attackName: "Quick Assist: Elegy - ALT Shot", attackType: "ASSIST", Level1Damage: 124.7, growthPerLevel: 11.4 },
            { attackName: "Quick Assist: Elegy - ALT Charged Shot", attackType: "ASSIST", Level1Damage: 163.2, growthPerLevel: 14.9 },
            { attackName: "Assist Follow-Up: Ace Reversal", attackType: "ASSIST", Level1Damage: 291.7, growthPerLevel: 26.6 },
            // SPECIAL
            { attackName: "Special: Soul Hunter - Judgment", attackType: "SPECIAL", Level1Damage: 85.3, growthPerLevel: 7.8 },
            // EX SPECIAL
            { attackName: "EX Special: Soul Hunter - Punishment", attackType: "EXSPECIAL", Level1Damage: 373.2, growthPerLevel: 34 },
            // CHAIN
            { attackName: "Chain: Trick of Fate", attackType: "CHAIN", Level1Damage: 701.1, growthPerLevel: 63.8 },
            // ULT
            { attackName: "Ultimate: Blaspheme", attackType: "ULT", Level1Damage: 1527.1, growthPerLevel: 138.9 },
        ],
    },
    {
        characterName: "Pan Yinhu",
        attackStats: [
            // BASIC
            { attackName: "Basic: Unyielding Strikes - 1", attackType: "BASIC", Level1Damage: 49.7, growthPerLevel: 4.6 },
            { attackName: "Basic: Unyielding Strikes - 2", attackType: "BASIC", Level1Damage: 49.8, growthPerLevel: 4.6 },
            { attackName: "Basic: Unyielding Strikes - 3", attackType: "BASIC", Level1Damage: 109.4, growthPerLevel: 10 },
            { attackName: "Basic: Unyielding Strikes - 4", attackType: "BASIC", Level1Damage: 211.3, growthPerLevel: 19.3 },
            // DASH
            { attackName: "Dash: Sizzling Oil Supreme", attackType: "DASH", Level1Damage: 83.4, growthPerLevel: 7.6 },
            // DODGE
            { attackName: "Dodge: Moving Mountains and Seas", attackType: "DASH", Level1Damage: 219.2, growthPerLevel: 20 },
            // ASSIST
            { attackName: "Quick Assist: Lift Your Gaze to Good Fortune", attackType: "ASSIST", Level1Damage: 91.7, growthPerLevel: 8.4 },
            { attackName: "Assist Follow-Up: Ride the Momentum", attackType: "ASSIST", Level1Damage: 337.4, growthPerLevel: 30.7 },
            // SPECIAL
            { attackName: "Special: Sonic Pressure-Point Strike", attackType: "SPECIAL", Level1Damage: 62.5, growthPerLevel: 5.7 },
            { attackName: "Special: Touch of Death - 1", attackType: "SPECIAL", Level1Damage: 97.3, growthPerLevel: 8.9 },
            { attackName: "Special: Touch of Death - 2", attackType: "SPECIAL", Level1Damage: 97.3, growthPerLevel: 8.9 },
            { attackName: "Special: Touch of Death - 3", attackType: "SPECIAL", Level1Damage: 97.3, growthPerLevel: 8.9 },
            // EX SPECIAL
            { attackName: "EX Special: Mountainous Pulse Strike", attackType: "EXSPECIAL", Level1Damage: 384.1, growthPerLevel: 35 },
            // CHAIN
            { attackName: "Chain: Anointed with Wok Steam", attackType: "CHAIN", Level1Damage: 632.3, growthPerLevel: 57.5 },
            // ULT
            { attackName: "Ultimate: A Feast Fit for an Emperor!", attackType: "ULT", Level1Damage: 1627.9, growthPerLevel: 148 },
        ],
    },
    {
        characterName: "Yixuan",
        attackStats: [
            // BASIC
            { attackName: "Basic: Cirrus Strike - 1", attackType: "BASIC", Level1Damage: 45.8, growthPerLevel: 4.2 },
            { attackName: "Basic: Cirrus Strike - 2", attackType: "BASIC", Level1Damage: 65.5, growthPerLevel: 6 },
            { attackName: "Basic: Cirrus Strike - 3", attackType: "BASIC", Level1Damage: 87.1, growthPerLevel: 8 },
            { attackName: "Basic: Cirrus Strike - 4", attackType: "BASIC", Level1Damage: 104.8, growthPerLevel: 9.6 },
            { attackName: "Basic: Cirrus Strike - 5", attackType: "BASIC", Level1Damage: 113.7, growthPerLevel: 10.4 },

            { attackName: "Basic: Ink-Veil Cloud Coalescence", attackType: "BASIC", Level1Damage: 234.7, growthPerLevel: 21.4 },

            { attackName: "Basic: Auric Array", attackType: "BASIC", Level1Damage: 305.2, growthPerLevel: 27.8 },

            { attackName: "Basic: Qingming Eruption", attackType: "BASIC", Level1Damage: 110.6, growthPerLevel: 10.1 },
            // DASH
            { attackName: "Dash: Skybreaker", attackType: "DASH", Level1Damage: 49.9, growthPerLevel: 4.6 },
            // DODGE
            { attackName: "Dodge: Banishing Blow", attackType: "DASH", Level1Damage: 219.6, growthPerLevel: 20 },
            // ASSIST
            { attackName: "Quick Assist: Cloudstream Shadow", attackType: "ASSIST", Level1Damage: 101.2, growthPerLevel: 9.2 },
            { attackName: "Assist Follow-Up: Celestial Cloud Blitz", attackType: "ASSIST", Level1Damage: 297, growthPerLevel: 27 },
            // SPECIAL
            { attackName: "Special: Shadow-Ignition", attackType: "SPECIAL", Level1Damage: 52.1, growthPerLevel: 4.8 },
            // EX SPECIAL
            { attackName: "EX Special: Ink Manifestation", attackType: "EXSPECIAL", Level1Damage: 300.3, growthPerLevel: 27.3 },
            { attackName: "EX Special: Ink Manifestation - Additional DMG on Full Charge", attackType: "EXSPECIAL", Level1Damage: 149.6, growthPerLevel: 13.6 },
            { attackName: "EX Special: Ink Manifestation - Total Damage on Full Charge", attackType: "EXSPECIAL", Level1Damage: 449.9, growthPerLevel: 40.9 },
            
            { attackName: "EX Special: Ink Manifestation - Celestial Cloud Blitz - Break", attackType: "EXSPECIAL", Level1Damage: 370.6, growthPerLevel: 33.7 },
            { attackName: "EX Special: Ink Manifestation - Qingming Eruption - Break", attackType: "EXSPECIAL", Level1Damage: 426.4, growthPerLevel: 38.8 },
            
            { attackName: "EX Special: Cloud-Shaper", attackType: "EXSPECIAL", Level1Damage: 671.8, growthPerLevel: 61.1 },
            { attackName: "EX Special: Ashen Ink Becomes Shadows", attackType: "EXSPECIAL", Level1Damage: 234.3, growthPerLevel: 21.3 },
            { attackName: "EX Special: Cloud-Shaper + Ashen Ink Becomes Shadows", attackType: "EXSPECIAL", Level1Damage: 1140.4, growthPerLevel: 103.7 },
            // CHAIN
            { attackName: "Chain: Auric Ink Rush", attackType: "CHAIN", Level1Damage: 533.1, growthPerLevel: 48.5 },
            // ULT
            { attackName: "Ultimate: Qingming Skyshade", attackType: "ULT", Level1Damage: 1853.4, growthPerLevel: 168.5 },
            { attackName: "Ultimate: Talisman Suppression", attackType: "ULT", Level1Damage: 1466.2, growthPerLevel: 133.3 },
        ],
    },
    {
        characterName: "Ju Fufu",
        attackStats: [
            // BASIC
            { attackName: "Basic: Tiger Seven Forms - Flaming Claw - 1", attackType: "BASIC", Level1Damage: 42.5, growthPerLevel: 3.9 },
            { attackName: "Basic: Tiger Seven Forms - Flaming Claw - 2", attackType: "BASIC", Level1Damage: 45.2, growthPerLevel: 4.2 },
            { attackName: "Basic: Tiger Seven Forms - Flaming Claw - 3", attackType: "BASIC", Level1Damage: 31.5, growthPerLevel: 2.9 },
            { attackName: "Basic: Tiger Seven Forms - Flaming Claw - 4", attackType: "BASIC", Level1Damage: 218.4, growthPerLevel: 19.9 },
            
            { attackName: "Basic: Hu Wei", attackType: "BASIC", Level1Damage: 92.4, growthPerLevel: 8.4 },
            // DASH
            { attackName: "Dash: Tiger Seven Forms - Tiger Charge", attackType: "DASH", Level1Damage: 36.8, growthPerLevel: 3.4 },
            { attackName: "Dash: Tiger Seven Forms - Mountain King's Game", attackType: "DASH", Level1Damage: 18.4, growthPerLevel: 1.7 },
            { attackName: "Dash: Tiger Seven Forms - Mountain King's Game - Momentum", attackType: "DASH", Level1Damage: 19.2, growthPerLevel: 1.8 },
            { attackName: "Dash: Tiger Seven Forms - Mountain King's Game - Hu Wei", attackType: "DASH", Level1Damage: 92.4, growthPerLevel: 8.4 },
            // DODGE
            { attackName: "Dodge: Tiger Seven Forms - Reignited Mountain", attackType: "DASH", Level1Damage: 207.8, growthPerLevel: 18.9 },
            // ASSIST
            { attackName: "Quick Assist: Decisive Stomp", attackType: "ASSIST", Level1Damage: 75.3, growthPerLevel: 6.9 },
            { attackName: "Assist Follow-Up: Feral Blazing Maw", attackType: "ASSIST", Level1Damage: 407.2, growthPerLevel: 37.1 },
            // SPECIAL
            { attackName: "Special: Tiger Seven Forms - Mountain-Descending Tiger", attackType: "SPECIAL", Level1Damage: 66.1, growthPerLevel: 6.1 },
            // EX SPECIAL
            { attackName: "EX Special: Tiger Seven Forms Alt - Mountain-Descending Savage Tiger", attackType: "EXSPECIAL", Level1Damage: 526.5, growthPerLevel: 47.9 },
            // CHAIN
            { attackName: "Chain: Tiger Cauldron Collapse", attackType: "CHAIN", Level1Damage: 668.1, growthPerLevel: 60.8 },
            { attackName: "Chain: Suppressing Tiger Cauldron", attackType: "CHAIN", Level1Damage: 354.5, growthPerLevel: 32.3 },
            // ULT
            { attackName: "Ultimate: Tiger Seven Forms - Raging Tiger Explosion", attackType: "ULT", Level1Damage: 1663.8, growthPerLevel: 151.3 },
        ],
    },
    {
        characterName: "Yuzuha",
        attackStats: [
            // BASIC
            { attackName: "Basic: Tanuki Claws - 1", attackType: "BASIC", Level1Damage: 37.7, growthPerLevel: 3.5 },
            { attackName: "Basic: Tanuki Claws - 2", attackType: "BASIC", Level1Damage: 57.7, growthPerLevel: 5.3 },
            { attackName: "Basic: Tanuki Claws - 3", attackType: "BASIC", Level1Damage: 66, growthPerLevel: 6 },
            { attackName: "Basic: Tanuki Claws - 4", attackType: "BASIC", Level1Damage: 98.1, growthPerLevel: 9 },
            { attackName: "Basic: Tanuki Claws - 5", attackType: "BASIC", Level1Damage: 164.1, growthPerLevel: 15 },

            { attackName: "Basic: Hard Candy Shot", attackType: "BASIC", Level1Damage: 132, growthPerLevel: 12 },

            { attackName: "Basic: Sugarburst Sparkles", attackType: "BASIC", Level1Damage: 27.5, growthPerLevel: 2.5 },

            { attackName: "Basic: Sugarburst Sparkles - Max", attackType: "BASIC", Level1Damage: 308, growthPerLevel: 28 },
           
            { attackName: "Basic: Tanuki Helper - Coordinated ", attackType: "BASIC", Level1Damage: 110, growthPerLevel: 10 },
        
            { attackName: "Basic: Tanuki Helper - Auto-Attack", attackType: "BASIC", Level1Damage: 110, growthPerLevel: 10 },

            // DASH
            { attackName: "Dash: You're Outta Luck!", attackType: "DASH", Level1Damage: 69.8, growthPerLevel: 6.4 },
            // DODGE
            { attackName: "Dodge: Time for Payback~", attackType: "DASH", Level1Damage: 276.9, growthPerLevel: 25.2 },
            // ASSIST
            { attackName: "Quick Assist: Dessert Time", attackType: "ASSIST", Level1Damage: 122.9, growthPerLevel: 11.2 },
            { attackName: "Assist Follow-Up: We Have Cookies", attackType: "ASSIST", Level1Damage: 294.3, growthPerLevel: 26.8 },
            { attackName: "Assist Follow-Up: Stuffed Hard Candy Shot", attackType: "ASSIST", Level1Damage: 463.6, growthPerLevel: 42.2 },
            // SPECIAL
            { attackName: "Special: Gummy Bombardment", attackType: "SPECIAL", Level1Damage: 50.5, growthPerLevel: 4.6 },
            // EX SPECIAL
            { attackName: "EX Special: Cavity Alert", attackType: "EXSPECIAL", Level1Damage: 421, growthPerLevel: 38.3 },
            { attackName: "EX Special: Cavity Alert, Right Now!", attackType: "EXSPECIAL", Level1Damage: 241.4, growthPerLevel: 22 },
            // CHAIN
            { attackName: "Chain: Prank Assault", attackType: "CHAIN", Level1Damage: 598.7, growthPerLevel: 54.5 },
            // ULT
            { attackName: "Ultimate: Surrender or Suffer the Mischief", attackType: "ULT", Level1Damage: 1443.2, growthPerLevel: 131.2 },
        ],
    },
    {
        characterName: "Alice",
        attackStats: [
            // BASIC
            { attackName: "Basic: Celestial Overture - 1", attackType: "BASIC", Level1Damage: 55.1, growthPerLevel: 5.1 },
            { attackName: "Basic: Celestial Overture - 2", attackType: "BASIC", Level1Damage: 88, growthPerLevel: 8 },
            { attackName: "Basic: Celestial Overture - 3", attackType: "BASIC", Level1Damage: 66.1, growthPerLevel: 6.1 },
            { attackName: "Basic: Celestial Overture - 4", attackType: "BASIC", Level1Damage: 111.9, growthPerLevel: 10.2 },
            { attackName: "Basic: Celestial Overture - 5", attackType: "BASIC", Level1Damage: 130.3, growthPerLevel: 11.9 },
            { attackName: "Basic: Celestial Overture - 5 Enchanced", attackType: "BASIC", Level1Damage: 218.3, growthPerLevel: 19.9 },

            { attackName: "Basic: Starshine Waltz - 1", attackType: "BASIC", Level1Damage: 188.9, growthPerLevel: 17.2 },
            { attackName: "Basic: Starshine Waltz - 2", attackType: "BASIC", Level1Damage: 304.4, growthPerLevel: 27.7 },
            { attackName: "Basic: Starshine Waltz - 3", attackType: "BASIC", Level1Damage: 965.7, growthPerLevel: 87.8 },
            // DASH
            { attackName: "Dash: Blade-Dancer's Gale", attackType: "DASH", Level1Damage: 75.3, growthPerLevel: 6.9 },
            // DODGE
            { attackName: "Dodge: Ceremony of Swordlight", attackType: "DASH", Level1Damage: 284, growthPerLevel: 25.9 },
            // ASSIST
            { attackName: "Quick Assist: Intertwined Stab", attackType: "ASSIST", Level1Damage: 163.3, growthPerLevel: 14.9 },
            { attackName: "Assist Follow-Up: Cross Riposte", attackType: "ASSIST", Level1Damage: 332.7, growthPerLevel: 30.3 },
            // SPECIAL
            { attackName: "Special: Piercing Dawn", attackType: "SPECIAL", Level1Damage: 62.4, growthPerLevel: 5.7 },
            // EX SPECIAL
            { attackName: "EX Special: Aurora Thrust - Northern Cross", attackType: "EXSPECIAL", Level1Damage: 460, growthPerLevel: 41.9 },
            { attackName: "EX Special: Aurora Thrust - Southern Cross", attackType: "EXSPECIAL", Level1Damage: 532, growthPerLevel: 48.4 },
            // CHAIN
            { attackName: "Chain: Starfall Intermission", attackType: "CHAIN", Level1Damage: 666.3, growthPerLevel: 60.6 },
            // ULT
            { attackName: "Ultimate: Starfall Finale", attackType: "ULT", Level1Damage: 2262, growthPerLevel: 205.7 },
        ],
    },
    {
        characterName: "Seed",
        attackStats: [
            // BASIC
            { attackName: "Basic: Chrysanthemum Wheel Dance - 1", attackType: "BASIC", Level1Damage: 46.5, growthPerLevel: 4.3 },
            { attackName: "Basic: Chrysanthemum Wheel Dance - 2", attackType: "BASIC", Level1Damage: 124.1, growthPerLevel: 11.3 },
            { attackName: "Basic: Chrysanthemum Wheel Dance - 3", attackType: "BASIC", Level1Damage: 71.8, growthPerLevel: 6.6 },
            { attackName: "Basic: Chrysanthemum Wheel Dance - 4", attackType: "BASIC", Level1Damage: 358.6, growthPerLevel: 32.6 },
            
            { attackName: "Basic: Falling Petals - Total", attackType: "BASIC", Level1Damage: 1684.3, growthPerLevel: 153.3 },
            { attackName: "Basic: Falling Petals - Slaughter", attackType: "BASIC", Level1Damage: 166.6, growthPerLevel: 15.2 },
            { attackName: "Basic: Falling Petals - Downfall First Form", attackType: "BASIC", Level1Damage: 528.3, growthPerLevel: 48.1 },
            { attackName: "Basic: Falling Petals - Downfall Second Form", attackType: "BASIC", Level1Damage: 989.4, growthPerLevel: 90 },
            // DASH
            { attackName: "Dash: Magnetic Wheel Dance", attackType: "DASH", Level1Damage: 64.2, growthPerLevel: 5.9 },
            // DODGE
            { attackName: "Dodge: Blossom Burst", attackType: "DASH", Level1Damage: 320.1, growthPerLevel: 29.1 },
            // ASSIST
            { attackName: "Quick Assist: ", attackType: "ASSIST", Level1Damage: 154, growthPerLevel: 14 },
            { attackName: "Assist Follow-Up: ", attackType: "ASSIST", Level1Damage: 456, growthPerLevel: 41.5 },
            // SPECIAL
            { attackName: "Special: Withered in Frost", attackType: "SPECIAL", Level1Damage: 47.7, growthPerLevel: 4.4 },
            // EX SPECIAL
            { attackName: "EX Special: Raining Iron Petals", attackType: "EXSPECIAL", Level1Damage: 683.4, growthPerLevel: 62.2 },
            { attackName: "EX Special: Raining Iron Petals - including Punch", attackType: "EXSPECIAL", Level1Damage: 850, growthPerLevel: 77.4 },
            { attackName: "EX Special: Raining Iron Petals - Away", attackType: "EXSPECIAL", Level1Damage: 18.4, growthPerLevel: 1.7 },
            // CHAIN
            { attackName: "Chain: Tempest of Frosty Petals", attackType: "CHAIN", Level1Damage: 734.2, growthPerLevel: 66.8 },
            // ULT
            { attackName: "Ultimate: Clockwork Garden - Bloom!", attackType: "ULT", Level1Damage: 3249.7, growthPerLevel: 295.5 },
        ],
    },
    {
        characterName: "Orphie & Magus",
        attackStats: [
            // BASIC
            { attackName: "Basic: High-Pressure Flamethrower - 1", attackType: "BASIC", Level1Damage: 14.5, growthPerLevel: 1.4 },
            { attackName: "Basic: High-Pressure Flamethrower - 2", attackType: "BASIC", Level1Damage: 44.4, growthPerLevel: 4.1 },
            { attackName: "Basic: High-Pressure Flamethrower - 3", attackType: "BASIC", Level1Damage: 41.5, growthPerLevel: 3.8 },
            { attackName: "Basic: High-Pressure Flamethrower - 4", attackType: "BASIC", Level1Damage: 86.7, growthPerLevel: 7.9 },
            { attackName: "Basic: High-Pressure Flamethrower - 5", attackType: "BASIC", Level1Damage: 181.6, growthPerLevel: 16.6 },
            { attackName: "Basic: High-Pressure Flamethrower - Fire Blade", attackType: "BASIC", Level1Damage: 158.4, growthPerLevel: 14.4 },
            // DASH
            { attackName: "Dash: Rush Command", attackType: "DASH", Level1Damage: 62.3, growthPerLevel: 5.7 },
            // DODGE
            { attackName: "Dodge: Counter Strike Opportunity", attackType: "DASH", Level1Damage: 257.8, growthPerLevel: 23.5 },
            // ASSIST
            { attackName: "Quick Assist: Searing Slash", attackType: "ASSIST", Level1Damage: 113.7, growthPerLevel: 10.4 },
            { attackName: "Assist Follow-Up: Boiling Pierce", attackType: "ASSIST", Level1Damage: 360.9, growthPerLevel: 32.9 },
            // SPECIAL
            { attackName: "Special: Blazing Chamber", attackType: "SPECIAL", Level1Damage: 39.5, growthPerLevel: 3.6 },
            { attackName: "Special: Corrosive Flash", attackType: "SPECIAL", Level1Damage: 495, growthPerLevel: 45 },
            // EX SPECIAL
            { attackName: "EX Special: Watch Your Step", attackType: "EXSPECIAL", Level1Damage: 280.9, growthPerLevel: 25.6 },
            { attackName: "EX Special: Crimson Vortex", attackType: "EXSPECIAL", Level1Damage: 678.4, growthPerLevel: 61.7 },
            { attackName: "EX Special: Heat Charge", attackType: "EXSPECIAL", Level1Damage: 389.4, growthPerLevel: 35.4 },
            { attackName: "EX Special: Fiery Eruption", attackType: "EXSPECIAL", Level1Damage: 259.6, growthPerLevel: 23.6 },
            // CHAIN
            { attackName: "Chain: Overheated Barrel", attackType: "CHAIN", Level1Damage: 626.3, growthPerLevel: 57 },
            // ULT
            { attackName: "Ultimate: Dance With Fire", attackType: "ULT", Level1Damage: 698.7, growthPerLevel: 63.6 },
            { attackName: "Ultimate: Dance With Fire - Additional Extended", attackType: "ULT", Level1Damage: 465.8, growthPerLevel: 42.4 },
            { attackName: "Ultimate: Dance With Fire - Total", attackType: "ULT", Level1Damage: 1164.5, growthPerLevel: 106 },
        ],
    },
    {
        characterName: "Lucia",
        attackStats: [
            // BASIC
            { attackName: "Basic: Orbital Combo - 1", attackType: "BASIC", Level1Damage: 40.9, growthPerLevel: 3.8 },
            { attackName: "Basic: Orbital Combo - 2", attackType: "BASIC", Level1Damage: 27.8, growthPerLevel: 2.6 },
            { attackName: "Basic: Orbital Combo - 3", attackType: "BASIC", Level1Damage: 83.5, growthPerLevel: 7.6 },
            { attackName: "Basic: Orbital Combo - 4", attackType: "BASIC", Level1Damage: 80.1, growthPerLevel: 7.3 },
            
            { attackName: "Basic: Orbital Combo - Whim", attackType: "BASIC", Level1Damage: 172.9, growthPerLevel: 15.8 },
            { attackName: "Basic: Orbital Combo - Harmony", attackType: "BASIC", Level1Damage: 412.5, growthPerLevel: 37.5 },
            { attackName: "Basic: Orbital Combo - Aftershock", attackType: "BASIC", Level1Damage: 550, growthPerLevel: 50 },
            // DASH
            { attackName: "Dash: Refraction", attackType: "DASH", Level1Damage: 86.3, growthPerLevel: 7.9 },
            // DODGE
            { attackName: "Dodge: Stardust Echo - Whim", attackType: "DASH", Level1Damage: 248.3, growthPerLevel: 22.6 },
            { attackName: "Dodge: Stardust Echo - Harmony", attackType: "DASH", Level1Damage: 385.8, growthPerLevel: 35.1 },
            // ASSIST
            { attackName: "Quick Assist: Crushing Mist - Whim", attackType: "ASSIST", Level1Damage: 106.4, growthPerLevel: 9.7 },
            { attackName: "Quick Assist: Crushing Mist - Harmony", attackType: "ASSIST", Level1Damage: 243.9, growthPerLevel: 22.2 },
            { attackName: "Quick Assist: Crushing Mist - Aftershock", attackType: "ASSIST", Level1Damage: 550, growthPerLevel: 50 },
            { attackName: "Assist Follow-Up: Harmony of Painted Dreams", attackType: "ASSIST", Level1Damage: 327.7, growthPerLevel: 29.8 },
            // SPECIAL
            { attackName: "Special: Symphony of the Reaper - Storm - Whim", attackType: "SPECIAL", Level1Damage: 45.9, growthPerLevel: 4.2 },
            { attackName: "Special: Symphony of the Reaper - Storm - Harmony", attackType: "SPECIAL", Level1Damage: 183.4, growthPerLevel: 16.7 },
            { attackName: "Special: Symphony of the Reaper - Storm - Aftershock", attackType: "SPECIAL", Level1Damage: 550, growthPerLevel: 50 },
            // EX SPECIAL
            { attackName: "EX Special: Symphony of the Reaper - Daybreak", attackType: "EXSPECIAL", Level1Damage: 638.1, growthPerLevel: 58.1 },
            // CHAIN
            { attackName: "Chain: Stage of Brilliance", attackType: "CHAIN", Level1Damage: 616.7, growthPerLevel: 56.1 },
            // ULT
            { attackName: "Ultimate: Charge, Great Armor! - Charge Single Hit", attackType: "ULT", Level1Damage: 93, growthPerLevel: 8.5 },
            { attackName: "Ultimate: Charge, Great Armor!", attackType: "ULT", Level1Damage: 1902.7, growthPerLevel: 173 },
            { attackName: "Ultimate: Charge, Great Armor! - Total", attackType: "ULT", Level1Damage: 1995.7, growthPerLevel: 181.5 },
        ],
    },
    {
        characterName: "Manato",
        attackStats: [
            // BASIC
            { attackName: "Basic: Blazing Wind Slash - 1", attackType: "BASIC", Level1Damage: 28.7, growthPerLevel: 2.7 },
            { attackName: "Basic: Blazing Wind Slash - 2", attackType: "BASIC", Level1Damage: 82.7, growthPerLevel: 7.6 },
            { attackName: "Basic: Blazing Wind Slash - 3", attackType: "BASIC", Level1Damage: 134.6, growthPerLevel: 12.3 },
            { attackName: "Basic: Blazing Wind Slash - 1 Scorchwind", attackType: "BASIC", Level1Damage: 63.1, growthPerLevel: 5.9 },
            { attackName: "Basic: Blazing Wind Slash - 2 Scorchwind", attackType: "BASIC", Level1Damage: 95.5, growthPerLevel: 8.8 },
            { attackName: "Basic: Blazing Wind Slash - 3 Scorchwind", attackType: "BASIC", Level1Damage: 143.3, growthPerLevel: 13.1 },

            { attackName: "Basic: Blazing Wind - Misty Slash - 1", attackType: "BASIC", Level1Damage: 53.1, growthPerLevel: 4.9 },
            { attackName: "Basic: Blazing Wind - Misty Slash - 2", attackType: "BASIC", Level1Damage: 111.2, growthPerLevel: 10.2 },
            { attackName: "Basic: Blazing Wind - Misty Slash - 3", attackType: "BASIC", Level1Damage: 154.5, growthPerLevel: 14.1 },
            { attackName: "Basic: Blazing Wind - Misty Slash - 4", attackType: "BASIC", Level1Damage: 237.8, growthPerLevel: 21.7 },
            // DASH
            { attackName: "Dash: Radiant Blade - Zanshin", attackType: "DASH", Level1Damage: 58.7, growthPerLevel: 5.4 },
            // DODGE
            { attackName: "Dodge: Radiant Blade - Battle Sweep", attackType: "DASH", Level1Damage: 198, growthPerLevel: 18 },
            // ASSIST
            { attackName: "Quick Assist: Lone Shadow - Regroup", attackType: "ASSIST", Level1Damage: 90.7, growthPerLevel: 8.3 },
            { attackName: "Defensive Assist: Lone Shadow - Mountain Stand", attackType: "ASSIST", Level1Damage: 40, growthPerLevel: 3.7 },
            { attackName: "Assist Follow-Up: Lone Shadow - Breaking Fang", attackType: "ASSIST", Level1Damage: 166.7, growthPerLevel: 15.2 },
            { attackName: "Assist Follow-Up: Lone Shadow - Breaking Fang - Total Maximum", attackType: "ASSIST", Level1Damage: 570.1, growthPerLevel: 51.9 },
            // SPECIAL
            { attackName: "Special:  Return to Ashes", attackType: "SPECIAL", Level1Damage: 50.7, growthPerLevel: 4.7 },
            { attackName: "Special:  Return to Ashes - Charged or Successfull Block", attackType: "SPECIAL", Level1Damage: 130.7, growthPerLevel: 11.9 },
            // EX SPECIAL
            { attackName: "EX Special: Return to Ashes - Fall", attackType: "EXSPECIAL", Level1Damage: 652.6, growthPerLevel: 59.4 },
            // CHAIN
            { attackName: "Chain: Blazing Eruption", attackType: "CHAIN", Level1Damage: 483.3, growthPerLevel: 44 },
            // ULT
            { attackName: "Ultimate: Musou Aratama", attackType: "ULT", Level1Damage: 1562.3, growthPerLevel: 142.1 },
        ],
    },


    // {
    //     characterName: "",
    //     attackStats: [
    //         // BASIC
    //         { attackName: "Basic:  - ", attackType: "BASIC", Level1Damage: , growthPerLevel:  },
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
