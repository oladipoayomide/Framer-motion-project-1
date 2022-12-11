import React from 'react';
import { motion } from 'framer-motion';
const Header = ({ useHistory, resetData }) => {
  const history = useHistory();

  const titleVariant = {
    hidden: { y: -250 },
    visible: {
      y: -10,
      transition: {
        delay: 0.2, type: 'spring', stiffness: 120
      }
    }
  }

  const svgVariants = {
    hidden: {
      opacity: 0,
      rotate: -180
    },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 2,
   
      }
    }
  }

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1, transition: {
        duration: 3,
        ease: 'easeInOut'
      }
    }
  }

  return (

    <header>
      <div onClick={() => {
        history.push('/');
        resetData();
      }} className="logo">
        <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
          variants={svgVariants}
          initial='hidden'
          animate='visible'
          drag="x"
          dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}
          dragElastic={0.8}
        >
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            fill="none"
            variants={pathVariants}
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>

      <motion.div className="title"
        variants={titleVariant}
        initial="hidden"
        animate="visible"
      >
        <h1 style={{ cursor: 'pointer' }} onClick={() => {
          history.push('/');
          resetData();
        }}

        >Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;