import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion'
const AnimatedRoutes = () => {

    const location = useLocation()
    return (
        <div>
            <AnimatePresence initial={true}>
                <Switch location={location} key={location.pathname}>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/contact" component={Contact} />

                </Switch>
            </AnimatePresence>
        </div>
    )
}

export default AnimatedRoutes