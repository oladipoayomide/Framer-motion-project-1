import React from 'react';
import { motion } from "framer-motion";




const Order = ({ pizza, containerVariants, controlPopUp }) => {

  const childVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      trasition: {
        delay: 0
      }
    }

  }

  controlPopUp()


  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >

      {(<motion.h2 >Thank for your  order :</motion.h2>)}

      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div className="child"
        variants={childVariants}
      >

        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}

      </motion.div>

      
    </motion.div>
  )
}

export default Order;