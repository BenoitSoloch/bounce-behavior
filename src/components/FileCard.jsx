import {
    SCloseButton,
    SFileCard,
    SFileCardDescription,
    SFileCardName, SFileIcon, SFileIconImg,
    SFileZoneLeft,
    SFileZoneMiddle, SFileZoneRight
} from "../styles/components/SFileCard";
import FileIcon from '../assets/file.png'
import {MdOutlineClose} from 'react-icons/md'
import {motion} from "framer-motion";

export default function FileCard({filename, clumpsNb, onClose, state}) {

    return(
        <SFileCard
            as={motion.div} disabled={!state}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0,opacity: 1 }}
            exit={{ y: -20,opacity: 0 }}
        >
            <SFileZoneLeft>
                <SFileIcon>
                    <SFileIconImg src={FileIcon}/>
                </SFileIcon>
            </SFileZoneLeft>
            <SFileZoneMiddle>
                <SFileCardName>{filename}</SFileCardName>
                <SFileCardDescription>{clumpsNb} ball{clumpsNb > 1 && 's'} detected</SFileCardDescription>
            </SFileZoneMiddle>
            <SFileZoneRight>
                <SCloseButton onClick={onClose}><MdOutlineClose/></SCloseButton>
            </SFileZoneRight>
        </SFileCard>
    )
}