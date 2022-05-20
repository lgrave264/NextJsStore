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
                    <h3>About West-mec</h3>
                    <p id="aboutBox">Western Maricopa Education Center (West-MEC) is a public school district that provides industry-standard career training programs for both high school and adult students in Phoenix, Arizona. West-MEC focuses solely on innovative career and technical education programs that prepare students with the advanced skills necessary to enter the workforce and pursue continuing education at our education center.</p>
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
