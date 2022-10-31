import {Canvas} from "@react-three/fiber";
import {useEffect, useState, Suspense} from "react";
import {useFileStore} from "../App";
import {useNavigate} from "react-router-dom";
import Underlay from "../components/Underlay";
import Loader from "../components/r3f/Loader";
import Scene from "../components/r3f/Scene";

export default function Visualizer(){

    const [boxArgs, setBoxArgs] = useState([8, 8, 8]);
    const { balls, box } = useFileStore();
    const navigate = useNavigate();

    useEffect(() => {
        if(!box)
            navigate('/');
        else
            setBoxArgs(box.size);
    }, []);

    return(
        <>
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 30], fov: 30, near: 1, far: 150}}>
                <Suspense fallback={<Loader />}>
                    <Scene boxArgs={boxArgs} balls={balls}/>
                </Suspense>
            </Canvas>
            <Underlay />
        </>
    )
}