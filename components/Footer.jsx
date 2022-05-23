import { AiFillGithub } from 'react-icons/ai';
import { DiNpm } from 'react-icons/di';
import { SiNetlify,SiGmail } from 'react-icons/si';
import styles from '../styles/footer.module.css';
const foote = () => {
    return (<>
        <div>
            <div className={styles.footer_distributed}>
                <div className={styles.footer_left}>
                    <h3>Links</h3>
                    <div className={styles.footer_links}>
                    <a href="">Homepage</a><br/>
                    <a href="https://github.com/lgrave264">MyHub</a><br/>
                    <a href="https://github.com/lgrave264/portfolio"><AiFillGithub size={30} color={'white'}/></a><br/>
                    <a href="https://app.netlify.com/teams/lpgra256/overview"><SiNetlify size={30} color={'white'}/></a>
                    </div>
                </div>
                <div  className={styles.center}>
                    <h3>About PizelTs</h3>
                    <p id={styles.aboutBox}>PixelTs is an NFT web store where you can browser a various amount of NFts. Not just any NFTs, we specialize in pixel NFTs for those who find it either hard,annoying or tedious of finding the good ones, our inventory rotates once a week so make sure to check what we have as it will change in the near future. All of our NFTs are legit and are copyrighted.</p>
                </div>
                <div id="rightfoot" className={styles.footer_right}>
                    <div className={styles.footer_company_about}>
                        <h3>Social</h3>
                        <a href="https://github.com/lgrave264"><AiFillGithub size={30} color={'white'}/></a><br/>
                        <a href="https://www.npmjs.com/~lpgra256"><DiNpm size={30} color={'white'}/></a><br/>
                        <a href="https://app.netlify.com/teams/lpgra256/overview"><SiNetlify size={30} color={'white'}/></a><br/>
                        <a href="mailto: lpgra256@gmail.com"><SiGmail size={30} color={'white'}/></a><br/>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default foote
