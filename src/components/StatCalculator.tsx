import { useEffect, useState } from "react";

import {
    type SelectedDrives,
    type statTypeKeys,
    Speciality,
    StatType,
    DriveStats,
    numberOfPossibleSubstats,
    type SeletedSubstats,
} from "../constants/types";

import { Characters } from "../constants/Characters";
import { Wengines } from "../constants/Wengines";

import ProgressBar from "./ProgressBar";
import RangeSlider from "./RangeSlider";

import { getSortedList } from "../lib/Utility";

function StatCalculator({
    characterName,
    onCharacterChange,

    wengineName,
    onWengineChange,

    selectedDrives,
    onDriveChange,

    selectedSubstats,
    onSubstatChange,
}: {
    characterName: string;
    onCharacterChange: (characterName: string) => void;

    wengineName: string;
    onWengineChange: (wengineName: string) => void;

    selectedDrives: SelectedDrives;
    onDriveChange: (drivePosition: keyof SelectedDrives, driveValue: statTypeKeys | boolean) => void;

    selectedSubstats: SeletedSubstats;
    onSubstatChange: (stat: string, count: number) => void;
}) {
    // const [selectedCharacter, setSelectedCharacterName] = useState<string>(Characters[0].name);
    const [substatCount, setSubstatCount] = useState<number>(0);

    useEffect(() => {
        const substatCount = Object.values(selectedSubstats).reduce((a, b) => a + b, 0);
        setSubstatCount(substatCount);
    }, [selectedSubstats]);

    const substatColors = {
        HP_PERCENT: "#00A000", // green
        HP_FLAT: "#40C040", // lighter green
        ATTACK_PERCENT: "#FF0000", // red
        ATTACK_FLAT: "#FF6666", // lighter red
        DEFENSE_PERCENT: "#0000FF", // blue
        DEFENSE_FLAT: "#6666FF", // lighter blue
        CRIT_RATE: "#FFD700", // yellow
        CRIT_DAMAGE: "#FFA500", // orange
        ANOMALY_PROFICIENCY_FLAT: "#800080", // purple
        PEN_FLAT: "#404040", // dark grey
    };

    const handeCharacterChange = (newCharacterName: string) => {
        onCharacterChange(newCharacterName);
    };

    const handeWengineChange = (newWengineName: string) => {
        onWengineChange(newWengineName);
    };

    const handleDriveChange = (drivePosition: keyof SelectedDrives, driveValue: statTypeKeys | boolean) => {
        onDriveChange(drivePosition, driveValue);
    };

    const handleSubstatChange = (stat: string, count: number) => {
        const newSubstats = { ...selectedSubstats, [stat]: count };
        const substatCount = Object.values(newSubstats).reduce((a, b) => a + b, 0);

        if (substatCount <= numberOfPossibleSubstats) {
            onSubstatChange(stat, count);

            setSubstatCount(substatCount);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <div className="space-y-6">
                    <div className="p-4 border rounded-lg bg-gray-50">
                        <h2 className="text-xl font-bold mb-4">Character & W-Engine</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-2 font-semibold">Character</label>
                                <select
                                    value={characterName}
                                    onChange={(e) => handeCharacterChange(e.target.value)}
                                    className="w-full p-2 border rounded bg-white"
                                >
                                    {Object.keys(Speciality).map((speciality) => (
                                        <optgroup label={speciality} key={speciality}>
                                            {getSortedList(
                                                Characters.filter((character) => character.speciality === speciality).map(
                                                    (character) => character.name
                                                )
                                            ).map((characterName) => (
                                                <option key={characterName} value={characterName}>
                                                    {characterName}
                                                </option>
                                            ))}
                                        </optgroup>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 font-semibold">W-Engine</label>
                                <select
                                    value={wengineName}
                                    onChange={(e) => handeWengineChange(e.target.value)}
                                    className="w-full p-2 border rounded bg-white"
                                >
                                    {Object.keys(Speciality).map((speciality) => (
                                        <optgroup label={speciality} key={speciality}>
                                            {getSortedList(
                                                Wengines.filter((wengine) => wengine.speciality === speciality).map(
                                                    (wengine) => wengine.name
                                                )
                                            ).map((wengineName) => (
                                                <option key={wengineName} value={wengineName}>
                                                    {wengineName}
                                                </option>
                                            ))}
                                        </optgroup>
                                    ))}
                                    <optgroup label="NONE" key="NONE">
                                        <option key="None" value="None">
                                            None
                                        </option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 border rounded-lg bg-gray-50">
                        <h2 className="text-xl font-bold mb-4">Drive Stats</h2>
                        <div className="grid grid-cols-1  gap-4">
                            <div className="flex items-center gap-2">
                                <label htmlFor="drive1">Drive 1 enabled</label>
                                <input
                                    id="drive1"
                                    type="checkbox"
                                    className="h-4 w-4"
                                    checked={selectedDrives.drive1Enabled}
                                    onChange={() => handleDriveChange("drive1Enabled", !selectedDrives.drive1Enabled)}
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <label htmlFor="drive2">Drive 2 enabled</label>
                                <input
                                    id="drive2"
                                    type="checkbox"
                                    className="h-4 w-4"
                                    checked={selectedDrives.drive2Enabled}
                                    onChange={() => handleDriveChange("drive2Enabled", !selectedDrives.drive2Enabled)}
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <label htmlFor="drive3">Drive 3 enabled</label>
                                <input
                                    id="drive3"
                                    type="checkbox"
                                    className="h-4 w-4"
                                    checked={selectedDrives.drive3Enabled}
                                    onChange={() => handleDriveChange("drive3Enabled", !selectedDrives.drive3Enabled)}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1  gap-4 mt-4">
                            <div>
                                <label className="block mb-2 font-semibold">Drive 4</label>
                                <select
                                    value={selectedDrives.drive4}
                                    onChange={(e) => handleDriveChange("drive4", e.target.value as statTypeKeys)}
                                    className="w-full p-2 border rounded bg-white"
                                >
                                    <option value={StatType.NONE}>None</option>
                                    {(Object.keys(DriveStats.Drive4) as Array<keyof typeof DriveStats.Drive4>).map((stat) => (
                                        <option key={stat} value={stat}>
                                            {stat.replace(/_/g, " ")}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 font-semibold">Drive 5</label>
                                <select
                                    value={selectedDrives.drive5}
                                    onChange={(e) => handleDriveChange("drive5", e.target.value as statTypeKeys)}
                                    className="w-full p-2 border rounded bg-white"
                                >
                                    <option value={StatType.NONE}>None</option>
                                    {(Object.keys(DriveStats.Drive5) as Array<keyof typeof DriveStats.Drive5>).map((stat) => (
                                        <option key={stat} value={stat}>
                                            {stat.replace(/_/g, " ")}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 font-semibold">Drive 6</label>
                                <select
                                    value={selectedDrives.drive6}
                                    onChange={(e) => handleDriveChange("drive6", e.target.value as statTypeKeys)}
                                    className="w-full p-2 border rounded bg-white"
                                >
                                    <option value={StatType.NONE}>None</option>
                                    {(Object.keys(DriveStats.Drive6) as Array<keyof typeof DriveStats.Drive6>).map((stat) => (
                                        <option key={stat} value={stat}>
                                            {stat.replace(/_/g, " ")}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1  gap-4 mt-4">
                            <label className="block mb-2 font-semibold">Drive 2 piece effects</label>

                            <div>
                                <select
                                    value={selectedDrives.drive2psc1}
                                    onChange={(e) => handleDriveChange("drive2psc1", e.target.value as statTypeKeys)}
                                    className="w-full p-2 border rounded bg-white"
                                >
                                    <option value="NONE">None</option>
                                    {Object.keys(DriveStats.Drive2Psc1).map((stat) => (
                                        <option key={stat} value={stat}>
                                            {stat.replace(/_/g, " ")}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <select
                                    value={selectedDrives.drive2psc2}
                                    onChange={(e) => handleDriveChange("drive2psc2", e.target.value as statTypeKeys)}
                                    className="w-full p-2 border rounded bg-white"
                                >
                                    <option value="NONE">None</option>
                                    {Object.keys(DriveStats.Drive2Psc2).map((stat) => (
                                        <option key={stat} value={stat}>
                                            {stat.replace(/_/g, " ")}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <select
                                    value={selectedDrives.drive2psc3}
                                    onChange={(e) => handleDriveChange("drive2psc3", e.target.value as statTypeKeys)}
                                    className="w-full p-2 border rounded bg-white"
                                >
                                    <option value="NONE">None</option>
                                    {Object.keys(DriveStats.Drive2Psc3).map((stat) => (
                                        <option key={stat} value={stat}>
                                            {stat.replace(/_/g, " ")}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 border rounded-lg bg-gray-50">
                <h2 className="text-xl font-bold mb-4">Substats</h2>

                <div className="flex items-center gap-4 mb-4">
                    <label className="font-semibold">
                        Total Substat Rolls: {substatCount} / {numberOfPossibleSubstats}
                    </label>
                    <div className="grow">
                        <ProgressBar
                            maximum={numberOfPossibleSubstats}
                            amount={Object.values(selectedSubstats)}
                            colors={Object.values(substatColors)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 mt-6">
                    {Object.keys(selectedSubstats).map((substat) => (
                        <div key={substat} className="grid grid-cols-[1fr,auto,auto] items-center gap-4">
                            <div className="flex items-center justify-between">
                                <label className="block font-medium text-sm mr-2">
                                    {substat.replace(/_/g, " ")} (+
                                    {DriveStats.SubstatValues[substat as keyof typeof DriveStats.SubstatValues]})
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    max={numberOfPossibleSubstats}
                                    value={selectedSubstats[substat as keyof typeof selectedSubstats]}
                                    onChange={(e) => handleSubstatChange(substat, parseInt(e.target.value) || 0)}
                                    className="p-1 border rounded bg-white w-16 text-center"
                                />
                            </div>
                            <RangeSlider
                                maxValue={numberOfPossibleSubstats}
                                value={selectedSubstats[substat as keyof typeof selectedSubstats]}
                                onChange={(value) => handleSubstatChange(substat, value || 0)}
                                unavailableValue={substatCount}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StatCalculator;
