import './cv.css';
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CVContent from './cvContent';

const EnvelopedCV = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({target: ref});
    useEffect(() => {
        window.scrollTo(0,0);
    },[])
    function Flap(){
        const zPosAnim = useTransform(scrollYProgress, [0, 0.1, 0.35], [4, 2, 1]);
        const bgColour = useTransform(scrollYProgress, [0, 0.05, 0.2], ["#a18565", "#3e352a",  "#7d6a55"]);
        const rotation = useTransform(scrollYProgress, [0, 0.05, 0.2], ["0deg", "90deg", "180deg"]);
        const scaleFlap = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0.8]);

        const flapStyles = {
            clipPath: "polygon(25% 55%, 75% 55%, 100% 10%, 100% 0, 0 0, 0 10%)",
            width: "100%",
            height: "90%",
            transformOrigin: "top",
            boxShadow: "2px 4px 4px 4px black",
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: "8px",
        }

        return(
            <motion.div
            className="flapDiv"
            style={{
                ...flapStyles,
                zIndex: zPosAnim,
                backgroundColor: bgColour,
                rotateX: rotation,
                scale: scaleFlap
            }}
            ></motion.div>
        )
    }
    function Front(){
        const zPosAnim = useTransform(scrollYProgress, [0, 0.85, 0.95], [3, 3, 2]);
        const bgColour = useTransform(scrollYProgress, [0, 0.6], ["rgb(153, 127, 98)", "#7d6a55"]);
        const frontStyles = {
            width: "100%",
            height: "105%",
            clipPath: 'polygon(50% 25%, 100% 10%, 100% 100%, 0 100%, 0 10%)',
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: "10px",
        }
        return(
            <motion.div
            style={{
                ...frontStyles,
                zIndex: zPosAnim,
                backgroundColor: bgColour
            }}
            ></motion.div>
        )
    }
    function Back(){
        const backStyles = {
            zIndex: 1,
            boxShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 150px 10px',
            width: "100%",
            height: "100%",
            backgroundColor: "#7d6a55",
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: "10px",
        }
        return(
            <motion.div
            style={{
                ...backStyles
            }}
            ></motion.div>
        )
    }
    function Envelope(){
        const zPosAnim = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 4, 1]);
        const envStyles = {
            width: "100%",
            height: "100%",
            position: "sticky",
            top:0,
            left: 0,
            
        }
        return(
            <motion.div
            style={{
                ...envStyles,
                zIndex: zPosAnim,
                // scale: envScale
            }}>
                <Flap />
                <Back />
                <Front />
                <Letter />
                
            </motion.div>
        )
    }
    function Letter(){
        const zPosAnim = useTransform(scrollYProgress, [0, 0.8], [2, 3]);
        const letterHeight = useTransform(scrollYProgress, [0, 0.5, 0.8], ["100%", "150%", "250%"]);
        const letterScale = useTransform(scrollYProgress, [0, 0.8], [0.7, 1]);
        const topAnim = useTransform(scrollYProgress, [0, 0.4, 0.8], ["120px", "-450px", "0px"]);
        const shadowAnim = useTransform(scrollYProgress, [0, 1], ["0px 0px 0px 0px rgb(75, 74, 74)", "2px 2px 8px 4px rgb(75, 74, 74)"]);
        const marginTopLetter = useTransform(scrollYProgress, [0.4, 1], ["0px", "-200px"])
        const letterStyles = {
            backgroundColor: "white",
            overflowY: "scroll",
            overflowX: "hidden",
            padding: "1%",
            position: "absolute",
            right:0,
            left:0,
            width: "auto",
            height: letterHeight,
            marginTop: marginTopLetter
        }
        return(
            <motion.div
            style={{
                ...letterStyles,
                zIndex: zPosAnim,
                scale: letterScale,
                top: topAnim,
                boxShadow: shadowAnim
            }}
            >
                <CVContent />
            </motion.div>
        )
    }

    return(
        <div ref={ref}  className="envelopeMain">
            <motion.div className="envContainer">
                <Envelope />
            </motion.div>
        </div>
    ) 
};

export default EnvelopedCV;