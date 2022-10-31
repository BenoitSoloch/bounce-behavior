import {useState} from "react";
import {Physics} from "@react-three/cannon";
import Box from "./Box";
import {Environment, OrbitControls} from "@react-three/drei";
import Spheres from "./Spheres";

export default function Scene({boxArgs, balls}){
    const [isDragging, setIsDragging] = useState(false);

    return(
        <>
            <Physics gravity={[0, 0, 0]}>
                <Box setIsDragging={setIsDragging} args={boxArgs}/>
                <Spheres color="#ECB365" balls={balls}/>

                <Environment preset="studio" />
            </Physics>

            <OrbitControls minZoom={10} maxZoom={50} enabled={!isDragging} />
        </>
    )
}