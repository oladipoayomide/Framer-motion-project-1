import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Base = ({ addBase, pizza, hoverOnBox, hoverOnLi, containerVariants, location }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  const nextVariants = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: { stiffness: 120, type: 'spring' }
    }
  }

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial="hidden" animate="visible" exit="exit"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={hoverOnLi}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          initial="hidden"
          visible='visible'
          variants={nextVariants}
        >

          <Link to="/toppings">
            <motion.button
              variants={hoverOnBox}
              whileHover="hover"
            >Next</motion.button>
          </Link>
        </motion.div>
      )}
      

    </motion.div>
  )
}

export default Base;