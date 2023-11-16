import {useCallback, useState} from "react";
import FileCard from "./FileCard";
import {
    SBrowse,
    SButton,
    SCard,
    SCardText,
    SCardTitle,
    SDivContainerBot, SDivContainerTop,
    SDragDropZone,
    SUploadImg
} from "../styles/components/SCard";
import upload from '../assets/upload.png'
import {useDropzone} from "react-dropzone";
import {AnimatePresence, AnimateSharedLayout, LayoutGroup, motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useFileStore} from "../App";
import {demoFile} from "../datas/demoFile";

export default function Card() {

    const { setBalls, setBox } = useFileStore();

    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [state, setState] = useState(false);

    const onDemoClicked = () => {
        setState(true);
        setFile({
            filename: "demoFile.json",
            size: 0,
            type: "type",
            balls: demoFile.balls,
            box: demoFile.box,
            clumpsNb: demoFile.balls.length
        });

        console.log('before Balls:', demoFile.balls);
        console.log('before Box:', demoFile.box);
    }

    const onCloseClicked = () => {
        setState(false);
        setFile(null);
    }

    const onButtonClicked = () => {
        console.log('before Balls:', file.balls);
        console.log('before Box:', file.box);

        // setBalls(file.balls);
        // setBox(file.box);
        setBalls(demoFile.balls);
        setBox(demoFile.box);

        navigate('visualizer');
    }

    const onDrop = useCallback(acceptedFiles => {

        if(acceptedFiles.length === 0){
            toast.error("Wrong file extension!")
        }
        else if(acceptedFiles.length === 1){
            const reader = new FileReader()
            console.log(acceptedFiles[0])

            reader.onabort = () => toast.error('File reading was aborted')
            reader.onerror = () => toast.error('File reading has failed')
            reader.onload = () => {
                const jsonData = JSON.parse(reader.result);
                setState(true);
                setFile({
                    filename: acceptedFiles[0].name,
                    size: acceptedFiles[0].size,
                    type: acceptedFiles[0].type,
                    balls: jsonData.balls,
                    box: jsonData.box,
                    clumpsNb: jsonData.balls.length
                });
            }
            reader.readAsText(acceptedFiles[0])
        }
        else{
            toast.error("Too much files dropped!")
        }
    }, [])
    const {getRootProps, getInputProps, isDragActive, open} = useDropzone(
        {
            onDrop,
            noClick: true,
            accept:{'application/json': ['.json']}
        }
    )

    return (
        <LayoutGroup>
            <SCard
                as={motion.div}
                layout
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0,opacity: 1 }}
                exit={{ y: -20,opacity: 0 }}
            >
                <SDivContainerTop as={motion.div} layout>
                    <SCardTitle>Upload file to visualize</SCardTitle>
                    <SCardText>Upload file containing balls data to visualize their behavior</SCardText>
                    <SDragDropZone active={isDragActive} {...getRootProps()} >
                        <input {...getInputProps()} />
                        <SUploadImg alt={"upload"} src={upload} />
                        {
                            isDragActive ? (
                                <span>Release to drop the files here</span>
                            ) : (
                                <>
                                    <span><SBrowse onClick={open}>Browse</SBrowse> <span>or drag & drop a .json file</span></span>
                                    <span>or use the <SBrowse onClick={onDemoClicked}>Demo File</SBrowse></span>
                                </>
                            )
                        }
                    </SDragDropZone>
                </SDivContainerTop>
                <AnimatePresence>
                {
                    state && (
                        <SDivContainerBot
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1
                            }}
                            exit={{ opacity: 0 }}
                        >
                            <FileCard
                                filename={file ? file.filename : ""}
                                clumpsNb={file ? file.clumpsNb : 0}
                                onClose={onCloseClicked}
                                state={state}
                            />
                            {/*<hr/>*/}
                            <SButton
                                as={motion.button}
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0,opacity: 1 }}
                                exit={{ y: -20,opacity: 0 }}
                                onClick={onButtonClicked}
                            >
                                Visualize
                            </SButton>
                        </SDivContainerBot>
                    )
                }
                </AnimatePresence>
            </SCard>
        </LayoutGroup>
    )
}