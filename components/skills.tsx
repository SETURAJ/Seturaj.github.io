import Image from 'next/image'
import styles from '../styles/Skills.module.css'
import Clang from '../public/C++.svg'
import Javascript from '../public/Javascript.svg'
import Python from '../public/Python.svg'
import MongoDB from '../public/MongoDB.svg'
import MySQL from '../public/MySQL.svg'
import ReactJS from '../public/ReactJS.svg'
import NodeJS from '../public/NodeJS.svg'
import ExpressJS from '../public/ExpressJS.svg'
import Flask from '../public/Flask.svg'
import GitHub from '../public/GitHub.svg'
import Link from 'next/link'
import amazon from '../public/Amazon_icon.svg'
import pytorch from '../public/pytorch-icon.svg'
import next from '../public/next-js.svg'
import { motion } from 'framer-motion'

const Skills = () => {
    var parent = {
        init: {
            x: 0
        },
        animate: {
            x: 0,
            transistion: {
                staggerChildren: 1,
            }
        }
    }
    var border = {
        init: {
            opacity: 0,
            scale: 0.8,
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
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

    const main = {
        init: {
            scale: 0.5,
            y: 100
        },
        inView: {
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            }
        },
        exit: {
            scale: 0.5,
            opacity: 0
        }
    }

    return (
        <div id='skills&certificates' className={styles.container}>
            <div className={styles.main}>
                <div className={styles.skill}>
                    <motion.h1 viewport={{ once: true }} variants={title} initial="init" whileInView="inView" exit="exit" className={styles.title}>Skills</motion.h1>
                    <div className={styles.cont}>
                        <motion.div viewport={{ once: true }} variants={parent} initial="init" whileInView="animate" className={styles.logos}>
                            <motion.div variants={border} className={styles.card}>
                                <Image loading="lazy" className={styles.logo} src={Clang} alt='C++ logo' />
                            </motion.div>
                            <motion.div variants={border} className={styles.card}>
                                <Image loading="lazy" className={styles.logo} src={Javascript} alt='Javascript logo' />
                            </motion.div>
                            <motion.div variants={border} className={styles.card}>
                                <Image loading="lazy" className={styles.logo} src={Python} alt='Python logo' />
                            </motion.div>
                           
                            <motion.div variants={border} className={styles.card}>
                                <Image loading="lazy" className={styles.logo} src={pytorch} alt='Pytorch logo' />
    </motion.div> 
                            <motion.div variants={border} className={styles.card}>
                                <Image loading="lazy" className={styles.logo} src={next} alt='NextJs logo' />
                            </motion.div>
                            <motion.div variants={border} className={styles.card}>
                                <Image loading="lazy" className={styles.logo} src={MongoDB} alt='MongoDB logo' />
                            </motion.div>
                            <motion.div variants={border} className={styles.card}>
                                <Image loading="lazy" className={styles.logo} src={MySQL} alt='MySQL logo' />
                            </motion.div>
                            <motion.div variants={border} className={styles.card}>
                                <Image loading="lazy" className={styles.logo} src={ReactJS} alt='ReactJS logo' />
                            </motion.div>
                            <motion.div variants={border} className={styles.card}>
                                <Image loading="lazy" className={styles.logo} src={NodeJS} alt='NodeJS logo' />
                            </motion.div>
                           <motion.div variants={border} className={styles.card}>
                                <Image loading="lazy" className={styles.logo} src={ExpressJS} alt='ExpressJS logo' />
    </motion.div> 
                            <motion.div variants={border} className={styles.card}>
                                <Image loading="lazy" className={styles.logo} src={Flask} alt='Flask logo' />
                            </motion.div>
                            <motion.div variants={border} className={styles.card}>
                                <Image loading="lazy" className={styles.logo} src={GitHub} alt='GitHub logo' />
                            </motion.div>
                        </motion.div>
                    </div>
                </div> 
                <div className={styles.certificates}>
                    <motion.h1 viewport={{ once: true }} variants={title} initial="init" whileInView="inView" exit="exit" className={styles.title}>Certificates</motion.h1>
                    <div className={styles.content}>
                        <motion.div viewport={{ once: true }} variants={main} initial="init" whileInView="inView" exit="exit" className={styles.certificate}>
                            <div className={styles.certicard}>
                                <Image loading="lazy" className={styles.certilogo} src={amazon} alt='Amazon logo' />
                            </div>
                            <div className={styles.certiinfo}>
                                <h2 className={styles.certificate_title}>Amazon Machine Learning Summer School</h2>
                                <h3 className={styles.certificate_issue}>Issued by Amazon</h3>
                                <Link className={styles.credentials} href='https://drive.google.com/file/d/1dZTVPZM1_CrNzo7QBNJuZwthdZ6lRL0L/view?usp=sharing' target='_blank' >Show credentials</Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills