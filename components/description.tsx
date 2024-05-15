import styles from '../styles/Description.module.css'
import { motion } from 'framer-motion'
import { useRef } from 'react';

const Description = () => {
    const ref = useRef<any>();
    const container = {
        init: {
            opacity: 0,
            scale: 1.1,
        },
        inView: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        },
        exit: {
            scale: 1.1,
            opacity: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        }
    }

    const title = {
        init: {
            x: -100,
            opacity: 0
        },
        inView: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.1,
                type: "spring",
                stiffness: 100
            }
        },
        exit: {
            x: -100,
            opacity: 0,
            transition: {
                duration: 0.8,
                delay: 0.1,
                type: "spring",
                stiffness: 100
            }
        }
    }

    return (
        <div id='aboutme' className={styles.descontainer}>
            <div className={styles.cont}>
                <motion.h1  
                    variants={title}
                    initial="init"
                    whileInView="inView"
                    exit="exit"
                    viewport={{ once: true }}
                    className={styles.title}>
                    About me
                </motion.h1>
                <motion.p
                    variants={container} initial="init" whileInView="inView"
                    className={styles.des}
                    viewport={{ once: true }}
                    >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    👋 Hello there! I'm Seturaj Matroja, a graduate student at the University of Waterloo, currently working towards my Master's degree in Computer Engineering. I would love to connect with you and explore how my expertise and passion can add value to your team and your goals. Let's connect and explore opportunities to collaborate!
                </motion.p>
            </div>
        </div>
    )
}

export default Description