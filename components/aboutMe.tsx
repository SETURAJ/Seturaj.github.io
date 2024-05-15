import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

const AboutMe = () => {
  var name = {
    init: {
      y: "100%"
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 1
      }
    }
  }

  var lines = {
    init: {
      x: "-100%"
    },
    init2: {
      x: "100%"
    },
    animate: {
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.me}>
        <div className={styles.wordContainer}>
          <motion.div variants={name} initial="init" animate="animate" className={styles.box}>
            <h1 className={styles.myname}>Seturaj</h1>
          </motion.div>
          <motion.div variants={lines} initial="init" animate="animate" className={styles.line}></motion.div>
        </div>
        <div className={styles.wordContainer}>
          <motion.div variants={name} initial="init" animate="animate" className={styles.box}>
            <h1 className={styles.myname}>Matroja</h1>
          </motion.div>
          <motion.div variants={lines} initial="init2" animate="animate" className={styles.line}></motion.div>
        </div>
      </div>
      <div className={styles.cardContent}>

      </div>
      <div className={styles.titlesCont}>
        <h5 className={styles.titleItem}>Software Developer</h5>
        <h5 className={styles.titleItem}>Student</h5>
        <h5 className={styles.titleItem}>Gaming</h5>
        <h5 className={styles.titleItem}>Phonk Lover</h5>
        {/* <h5 className={styles.titleItem}>Designer</h5> */}
      </div>
    </div>
  )
}

export default AboutMe