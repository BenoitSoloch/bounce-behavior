import {
    SInstructions,
    SInstructionsDescriptions,
    SInstructionsTitle,
    SUnderlay
} from "../styles/components/SVisualizer";

export default function Underlay() {
    return (
        <SUnderlay>
            <SInstructions>
                <SInstructionsTitle>Instructions</SInstructionsTitle>
                <SInstructionsDescriptions>
                    ● Drag pointer on the box to move the box<br/>
                    ● Drag pointer out of the box to rotate the 3D scene<br/>
                    ● Drag with right click to move the 3D scene<br/>
                    ● Scroll to zoom in/out
                </SInstructionsDescriptions>
            </SInstructions>
        </SUnderlay>
    )
}