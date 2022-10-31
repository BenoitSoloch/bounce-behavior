import {SButtonReturn, SHeader, SHeaderCenter, SHeaderLeft, SHeaderRight} from "../styles/components/SNavbar";
import {STitle} from "../styles/default";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {AiOutlineLeft} from 'react-icons/ai'
import {useFileStore} from "../App";

export default function Navbar(){

    const location = useLocation();
    const [isVisualizer, setIsVisualizer] = useState(false);
    const { resetBalls, resetBox } = useFileStore();
    const navigate = useNavigate();

    useEffect(() => {
        location.pathname === "/visualizer" ? setIsVisualizer(true) : setIsVisualizer(false);
    }, [location]);

    const onClick = () => {
        resetBox();
        resetBalls();
        navigate('/');
    }

    return(
        <SHeader>
            <SHeaderLeft>
                {
                    isVisualizer && (

                     <SButtonReturn onClick={onClick}><AiOutlineLeft/>Return</SButtonReturn>
                    )
                }
            </SHeaderLeft>
            <SHeaderCenter>
                <STitle>Bounce 3D Visualizer</STitle>
            </SHeaderCenter>
            <SHeaderRight>
            </SHeaderRight>
        </SHeader>
    )
}