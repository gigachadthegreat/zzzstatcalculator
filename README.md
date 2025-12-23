# ZZZ Stat & Damage Calculator

A web-based tool for the game *Zenless Zone Zero* designed to help players theorycraft and optimize their character builds. This calculator allows you to select characters, W-Engines, and Disk Drives to see the resulting stats, and then use those stats to calculate potential damage output against various targets.

## Features

-   **Stat Calculation**: Dynamically calculates a character's final stats based on:
    -   Character selection
    -   W-Engine selection and rank
    -   Disk Drive sets and main stats
    -   Substats
-   **Damage Simulation**: A detailed damage calculator that considers a wide range of in-game variables:
    -   **Target Stats**: Enemy DEF, RES, and Stun state.
    -   **Buffs & Debuffs**: DEF Shred, RES Reduction, Damage Taken Increase, etc.
    -   **Attacker Modifiers**: Additional damage, Skill Multipliers, and additional damage bonuses.
    -   **Special Damage Types**: Includes specific calculation modes for Rupture (Sheer) and Anomaly damage. Does currently not support Disorder damage.
    -   **Crit Modes**: Calculate damage as an always-crit, no-crit, or an average hit.
-   **Shareable Builds**: Generate and share a unique URL that contains your complete character build and calculator settings.

## How to Use

1.  **Configure Your Build**:
    -   Use the **Stat Calculator** section at the top.
    -   Select your desired **Character** and **W-Engine**.
    -   Choose your **Disk Drive** sets and the main stat for each of the six drive slots.
    -   Input the total number of times each **Substat** appears across your drives.

2.  **Review Your Stats**:
    -   The **Character Stats** section will automatically update, showing you the final stats for your build, including any temporary in-combat buffs you add in the damage calculator.

3.  **Calculate Damage**:
    -   Move to the **Damage Calculation** section.
    -   **Target Stats**: Input the stats of the enemy you are fighting (e.g., DEF is 953 for most endgame bosses).
    -   **Attacker Modifiers**: Input your character's level and the skill's damage multiplier.
    -   **Additional Stats**: Add any temporary buffs from teammates or other sources (e.g., additional ATK %, CRIT Rate %, etc.).
    -   The final **Calculated Damage** will be displayed at the bottom.

4.  **Share Your Build**:
    -   Click the **Copy Build Link** button in the header.
    -   This copies a URL to your clipboard that you can share with others. When they open the link, the calculator will be pre-filled with your exact setup.

## Tech Stack

-   **Framework**: [React](https://react.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Local Development

To run this project on your local machine, follow these steps.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/gigachadthegreat/zzzstatcalculator.git
    cd zzzstatcalculator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Contributing

Found a bug or have a suggestion for a new feature? Feel free to open an issue on the GitHub Issues page. The "Report an issue" button in the app will take you there directly.

## To add a new characters and wengines:
1. Add a character add their stats, Id, name and speciality to `src/constants/Characters.tsx`.
2. Add the characters attack stats and to `src/constants/AttackStats.tsx`.
If an attack needs any additional damage calculation, add the calculator identifier to the Attack, add the custom calculator to `src/lib/CustomCalculators.tsx` and add it to the switch-case in runCustomCalculator() in `src/components/DamageCalculator.tsx`.
1. Add w-engines name, Id, speciality, main-stat value and type to `src/constants/Wengines.tsx`. 

To get character, w-engine and Drive Disk IDs use https://zzz3.hakush.in. Open the character page, open devtools -> Network tab, Crtl + F and search for you character. You will find the characters.json which contains characters and their Ids. The same technique can be used for W-engines and Drive Disks.