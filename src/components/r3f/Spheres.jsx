import {useSphere} from "@react-three/cannon";

export default function Spheres({ count = 5, balls,  ...materialProps }){
    const sphereSize = 0.5;
    const [ref] = useSphere((index) => ({
        mass: 1,
        position: balls[index].position,
        args: [sphereSize],
        material: { friction: 0, restitution: 1 }
    }))

    return (
        <instancedMesh castShadow receiveShadow ref={ref} args={[null, null, balls.length]}>
            <sphereGeometry args={[sphereSize, 32, 32]} />
            <meshPhysicalMaterial {...materialProps} roughness={0} toneMapped={false} />
        </instancedMesh>
    )
}