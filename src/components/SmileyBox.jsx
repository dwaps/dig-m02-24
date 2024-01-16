import {useState} from "react";

import styles from "./SmileyBox.module.scss";
import Smiley from "./Smiley";

/**
 * @param {Object} props
 * @param {import("../App").Smiley[]} props.smileys
 */
export default function SmileyBox({smileys}) {
    const [selectedSmileyIndex, setSelectedSmileyIndex] = useState(null);

    const handleSelectSmiley = index => setSelectedSmileyIndex(index);

    return (
        <>
            <div className={styles.smileyBox}>
                {smileys.map((smiley, index) => (
                    <Smiley
                        key={index}
                        smiley={smiley}
                        isSelected={index === selectedSmileyIndex}
                        onClick={() => handleSelectSmiley(index)}
                    />
                ))}
            </div>

            {selectedSmileyIndex !== null && (
                <h2>
                    Je s'appelle {smileys[selectedSmileyIndex].label} !
                </h2>
            )}
        </>
    );
}