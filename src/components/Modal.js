import React from "react";
import { motion, AnimatePresence } from "framer-motion";



const Modal = ({ hidePopup, setHidePopup, useHistory, resetData }) => {
    const history = useHistory()
    const modalVariants = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: '200'
            }

        }
    }

    return (
        <AnimatePresence exitBeforeEnter onExitComplete={() => setHidePopup(false)}>
            <motion.div className="popUp"
                variants={modalVariants}
                exit={{
                    opacity: 0
                }}
                style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                }}>
                <motion.div className="innerBox"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    style={{
                        backgroundColor: "white",
                        width: '350px',
                        height: '150px',
                        marginTop: '150px',
                        borderRadius: '15px'


                    }}>
                    <p>Want to make another Pizza?</p>

                    <button onClick={() => {
                        resetData()
                        history.push('/')
                        console.log(hidePopup)
                    }} className="btn">Start Again</button>


                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Modal;