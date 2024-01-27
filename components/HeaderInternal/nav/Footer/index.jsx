import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <motion.li
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    <Link href='/policies/privacy-policy'>Privacy Policy</Link>
                </motion.li>
            </ul>
            <ul>
                <motion.li 
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                        <Link href='/policies/terms-and-conditions'>Terms & Conditions</Link>
                </motion.li>
            </ul>
            <ul>
                <motion.li 
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    <Link href='/policies/cookie-policy'> Cookie Policy</Link>
                </motion.li>
            </ul>
        </div>
    )
}
