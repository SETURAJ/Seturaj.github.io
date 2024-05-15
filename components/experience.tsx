import styles from '../styles/Experience.module.css'
import Image from 'next/image'
import isro from '../public/isro.svg'
import intel from '../public/intel.png'
import Link from 'next/link';
import { motion } from 'framer-motion';

const Experience = () => {
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
                staggerChildren: 0.1,
                ease: "easeInOut",
                when: "beforeChildren"
            }
        },
        exit: {
            scale: 0.5,
            opacity: 0
        }
    }

    const title = {
        init: {
            color: "rgb(0,0,0)"
        },
        inView: {
           color: "rgb(255, 255, 255)",
           transition: {
                duration: 1,
                ease: "easeInOut"
            }
        },
        exit: {
            color: "rgb(0,0,0)"
        }
    }
    
    const cards = {
        init: {
            x: "200%"
        },
        inView: {
            x: 0,
            transition: {
                duration: 1,
                type: "spring",
                ease: "easeInOut"
            }
        }
    }
    return (
        <div id='experience' className={styles.excontainer}>
            <motion.div viewport={{ once: true }} variants={main} initial="init" whileInView="inView" className={styles.background}>
                <motion.div className={styles.titleCont}>
                    <motion.h1 variants={title} className={styles.title}>Experience</motion.h1>
                </motion.div>
                <motion.div className={styles.cards}>
                    <motion.div variants={cards} className={styles.card}>
                        <div className={styles.info2}>
                            <div className={styles.mainInfo}>
                                <div className={styles.details}>
                                    <h1 className={styles.company}>ISRO(Indian Space Research Organisation) </h1>
                                    <h2 className={styles.title_company}>Research and Development Intern</h2>
                                    <div className={styles.detailsCont}>
                                        <h2 className={styles.dates}>December 2022 - April 2023</h2>
                                       {/* <Link className={styles.certificate} href="https://drive.google.com/file/d/1VjyrH3OTywtqrtzI6nQw_dlTfwBHJvpj/view" target="_blank">Certificate</Link> */}
                                    </div>
                                </div>
                                <div className={styles.imgContainer}>
                                    <Image loading="lazy" className={styles.img} src={isro} alt="isro logo"/>
                                </div>
                            </div>
                            <div className={styles.about}>
                                <p className={styles.points}>Curated a Software toolkit for precise harmful algal bloom detection in the Indian Ocean, leveraging extensive 25-year
datasets from Oceansat Satellite achieving an 87% accuracy and 12% data reduction by data cleaning.</p>
                                <p className={styles.points}>Utilized CNNs to identify bloom patterns, considering environmental factors like temperature, wind dynamics, and nutrient
levels; deployed the prototype on Google Earth Engine and integrated it into ISRO SAC servers for enhanced functionality</p>
                             {/*   <p className={styles.points}>Learn the fundamentals of deep neural networks, probability graphic
            models, dimension reduction, and causal inference.</p> */}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={cards} className={styles.card}>
                        <div className={styles.info2}>
                            <div className={styles.mainInfo}>
                                <div className={styles.details}>
                                    <h1 className={styles.company}>Intel Corporation</h1>
                                    <h2 className={styles.title_company}>Software Intern and Mentor for Intel® Digital Readiness Program</h2>
                                    <div className={styles.detailsCont}>
                                        <h2 className={styles.dates}>May 2022 - October 2022</h2>
                                        {/* <Link className={styles.certificate} href="https://drive.google.com/file/d/1aVG5rSuJZ6AqWcCH9JQFlQecG-_rjnKF/view?usp=share_link" target="_blank">Certificate</Link> */}
                                    </div>
                                </div>
                                <div className={styles.imgContainer}>
                                    <Image loading="lazy" className={styles.img} src={intel} alt="intel logo"/>
                                </div>
                            </div>
                            <div className={styles.about}>
                                <p className={styles.points}>Enhanced software solutions, contributing to robust web applications using diverse web frameworks and RESTful APIs.</p>
                                <p className={styles.points}>Collaborated with team members in an agile environment on prototypes and components, ensuring alignment with project
goals and deadlines.</p>
                                <p className={styles.points}>Worked as a Mentor for Intel AI for Youth program.</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Experience