import React from "react";
import { motion, useCycle } from "framer-motion"
const Loader = () => {

    const loaderVariants = {
        animateOne: {
            x: [20, -20],
            y: [0, 20],
            transition: {

                x: {
                    duration: 0.4,
                    yoyo: Infinity
                },
                y: {
                    duration: 0.3,
                    yoyo: Infinity,
                    ease: 'easeOut'
                }
            }
        },
        animateTwo: {
            x: 0,
            y: [0, -20],
            transition: {
                y: {
                    duration: 0.2,
                    ease: "easeOut",
                    yoyo: Infinity
                }
            }
        }
    }

    const [animation, cycleAnimation] = useCycle("animateOne", "animateTwo")

    return (
        <>
            <motion.div className="loader"
                style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'white', 
                    margin: "30px auto"
                }}
                variants={loaderVariants}
                animate={animation}
            ></motion.div>
            <div style={{cursor: 'pointer'}} onClick={() => cycleAnimation()}>Cycle Animation</div>
        </>
    );
}

export default Loader;