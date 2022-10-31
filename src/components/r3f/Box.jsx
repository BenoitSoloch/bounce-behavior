import {useThree} from "@react-three/fiber";
import {useCompoundBody} from "@react-three/cannon";
import {useDrag} from "@use-gesture/react";
import {RoundedBox} from "@react-three/drei";

export default function Box({ setIsDragging, args }) {
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;

    const [box, api] = useCompoundBody(() => ({
        shapes: [
            { type: 'Plane', position: [0, -((args[1]/2) - 0.4), 0], rotation: [-Math.PI / 2, 0, 0] },
            { type: 'Plane', position: [0, ((args[1]/2) - 0.4), 0], rotation: [Math.PI / 2, 0, 0] },
            { type: 'Plane', position: [-((args[0]/2) - 0.4), 0, 0], rotation: [0, Math.PI / 2, 0] },
            { type: 'Plane', position: [((args[0]/2) - 0.4), 0, 0], rotation: [0, -Math.PI / 2, 0] },
            { type: 'Plane', position: [0, 0, -((args[2]/2) - 0.4)], rotation: [0, 0, 0] },
            { type: 'Plane', position: [0, 0, ((args[2]/2) - 0.4)], rotation: [0, -Math.PI, 0] }
        ]
    }))

    const bind = useDrag(({ active, movement: [x, y, z] }) => {
            if (active)
                api.position.set(x / aspect, -y / aspect, 0)

            setIsDragging(active);
        },
        { delay: false }
    );

    return (
        <RoundedBox ref={box} args={args} radius={0.4} smoothness={10} {...bind()}>
            <meshPhysicalMaterial transmission={1} roughness={0} thickness={3} envMapIntensity={4} />
        </RoundedBox>
    )
}