import Image from 'next/image'
import styles from '../styles/Footer.module.css'
import linkedin from '../public/linkedin.svg'
import github from '../public/GitHub.svg'
import leetcode from '../public/leetcode.svg'
import gfg from '../public/geeksforgeeks.svg'
import codechef from '../public/codechef.svg'
import instagram from '../public/instagram.svg'
import twitter from '../public/twitter.svg'
import snapchat from '../public/snapchat.svg'
import facebook from '../public/facebook.svg'
import Link from 'next/link'


const Footer = () => {
    return (
        <div id='personal' className={styles.container}>
            <div className={styles.info}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Email Address</h1>
                    <h1 className={styles.val}><Link className={styles.emaillink} href='mailto:seturajmatroja@gmail.com'>seturajmatroja@gmail.com</Link></h1>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Mobile no.</h1>
                    <h1 className={styles.val}>+1 (437) 808-9780</h1>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Mobile no.</h1>
                    <h1 className={styles.val}>+91 9081489780</h1>
                </div>
            </div>
            <p className={styles.resume}>Want to see my <Link className={styles.resumelink} href='https://drive.google.com/file/d/1T4rYrI476k9VIbXa05DfdyFCUKOR0TYo/view?usp=sharing' target='_blank'>Resume</Link>?</p>
            <div className={styles.socialcontainer}>
                <div className={styles.social}>
                    <div className={styles.iconcontainer}>
                        <Link href='https://www.linkedin.com/in/seturaj-matroja-72153721a/' target='_blank'>
                            <Image loading="lazy" className={styles.icons} src={linkedin} alt='linkedin' />
                        </Link>
                    </div>
                    <div className={styles.iconcontainer}>
                        <Link href='https://github.com/SETURAJ/' target='_blank'>
                            <Image loading="lazy" className={styles.icons} src={github} alt='github' />
                        </Link>
                    </div>
                    <div className={styles.iconcontainer}>
                        <Link href='https://leetcode.com/u/Seturaj/' target='_blank'>
                            <Image loading="lazy" className={styles.icons} src={leetcode} alt='leetcode' />
                        </Link>
                    </div>
                    <div className={styles.iconcontainer}>
                        <Link href='https://www.instagram.com/seturaj__28/' target='_blank'>
                            <Image loading="lazy" className={styles.icons} src={instagram} alt='instagram' />
                        </Link>
                    </div>
                    <div className={styles.iconcontainer}>
                        <Link href='https://twitter.com/seturajmatroja' target='_blank'>
                            <Image loading="lazy" className={styles.icons} src={twitter} alt='twitter' />
                        </Link>
                    </div>
                </div>
            </div>
         {/*   <p className={styles.slog}>Created by Seturaj Matroja🤔🌚</p>
            <p className={styles.version}>Version 1.1.3</p> */}
        </div>
    )
}

export default Footer