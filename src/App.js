import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import { useHistory, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Modal from './components/Modal';


function App() {

  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const location = useLocation();

  const resetData = () => {
    setHidePopup(false)
    setPizza({ base: "", toppings: [] })
  }

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  const hoverVariants = {
    hover: {
      scale: [1.0, 1.1, 1, 1.1],
      textShadow: '0px 0px 8px white',
      boxShadow: '0px 0px 8px white',
      transition: {
        yoyo: Infinity
      }
    }
  }
  const hoverOnLi = {
    color: '#f8e112',
    scale: 1.3,
    originX: 0
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: '100vw'
    },
    visible: {
      opacity: 1,
      x: '0',
      transition: {
        type: 'spring',
        mass: 0.5,
        damping: 8,
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: 'easeInOut',
        duration: 0.2
      }
    }

  };

  const [hidePopup, setHidePopup] = useState(false)

  const controlPopUp = () => {
    setTimeout(() => {
      setHidePopup(true)
    }, [3000])
  }




  return (
    <>
      <Header useHistory={useHistory}
        resetData={resetData}
      />
      {hidePopup && <Modal

        hidePopup={hidePopup}
        controlPopUp={controlPopUp}
        useHistory={useHistory}
        setHidePopup={setHidePopup}
        resetData={resetData}

      />}
      <AnimatePresence
        exitBeforeEnter
        location={location}
        key={location.key}
        onExitComplete={()=>console.log("gone")}
        
      >
        <Switch>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} hoverOnBox={hoverVariants} hoverOnLi={hoverOnLi} containerVariants={containerVariants}
              location={location}

              setHidePopup={setHidePopup}

            />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} hoverOnBox={hoverVariants} hoverOnLi={hoverOnLi} containerVariants={containerVariants} controlPopUp={controlPopUp}
             setHidePopup={setHidePopup}
            />
          </Route>
          <Route path="/order">
            <Order pizza={pizza} containerVariants={containerVariants} useState={useState} controlPopUp={controlPopUp}
              setHidePopup={setHidePopup}
              hidePopup={hidePopup}
            />

          </Route>
          <Route path="/">
            <Home hoverOnBox={hoverVariants} useState={useState} containerVariants={containerVariants}
              setHidePopup={setHidePopup}
              resetData={resetData}

            />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;