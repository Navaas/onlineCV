import css from './Main.module.css'
import {ImHome2} from 'react-icons/im'
import {BsEnvelopeFill, BsTelephoneFill, BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {IoIosSchool} from 'react-icons/io'
import {MdWork} from 'react-icons/md'
import profile from '../../utils/image/micand.png'


function Main() {
    return (
        <main className={css.container}>
            <section>
                <article className={css.imageBox}>
                    <img src={profile} alt="profile" className={css.image}/>
                </article>
                <article className={css.leftBox1}>
                    <h2>Kontakta mig</h2>
                    <p><BsTelephoneFill/> 0768271703</p>
                    <p><ImHome2/> Ryttarvägen 8, 444 41 Stenungsund</p>
                    <p><BsEnvelopeFill/> mi-and@outlook.com</p>
                    <hr/>
                </article>
                <article className={css.leftBox2}>
                    <h2>Om mig</h2>
                    <p>
                        Jag är snart färdig utbildad fullstack utvecklare vid Camups Mölndal. Tidigare arbetade
                        jag inom barnomsorgen men kände att det var dags för något nytt. </p>

                    <p>Jag har skapat fullstack project enligt MERN och har erfarenhet av både frontend och baeckend,
                        arbetat med databaser i MongoDB och restAPI.</p>
                    <p>Är intresserad av att fördjupa mina kunskaper i backend och arbeta med cleancod. Som person är
                        jag noggrann, flexibel, strukturerad, nyfiken på nya saker och har nära till skratt.</p>
                    <hr/>
                </article>
                <article className={css.leftBox3}>
                    <h2>Följ mig</h2>
                    <BsLinkedin className={css.icon}/>
                    <FaGithubSquare className={css.icon}/>
                </article>
            </section>
            <section>
                <article className={css.rightBox1}>
                    <h2><IoIosSchool/> Utbildning</h2>
                    <p className={css.education}>Webbutvecklare Campus Mölndal <br/>Augusti 2021 - Oktober 2022 </p>
                    <p> HTML5, CSS, JavaScript, UI/UX,
                        ReactJS, NodeJS, ExpressJS, MongoDB, MERN, NoSQL, SQL, TypeScript, RestAPI, API, Mongoose,
                        fullstack och APL 8 veckor.</p>
                    <p>Har skapat ett fullstack projekt, en enklare variant av Facebook. Arbetat enligt MERN, med både
                        JavaScript och TypeScript. Även skapat manuella och automatiska tester med Insomnia/Postman</p>
                    <p className={css.education}>Augusti 2008 - 2010</p>
                    <p>Fritidsledarutbildningen, Ljungskile Folkhögskola</p>

                    <p className={css.education}>Augusti 2005 - 2008</p>
                    <p>Barn och fritidsprogrammet, Nösnäs Gymnasiet</p>

                    <p className={css.education}>April 2006</p>
                    <p>Konståkningstränare, steg1 och steg 2
                    </p>
                    <hr/>
                </article>
                <article className={css.rightBox2}>
                    <h2><MdWork/> Arbetslivserfarenhet</h2>
                    <p className={css.education}>Barnskötare, Stenungsunds kommun
                        2011-2021</p>
                    <p>IT-ansvarig ta hand om frågor kring Unikum, hjälpa kollegor med it-frågor, omsorg, pedagogisk
                        verksamhet, kontakt med föräldrar, soc, kommun.
                    </p>
                    <p className={css.education}>
                        Konståkningstränare, Stenungsunds Konståkningsklubb
                        2004-2013</p>
                    <p>Tränat barn/ungdomar/vuxna, planera/genomföra shower, pedagogiskt planerande, dialog med
                        föräldrar/tränare/åkare. Komponera tävlingsprogram/musik/outfit.
                    </p>
                    <hr/>
                </article>
                <article className={css.rightBox3}>
                    <h2>Övrigt</h2>
                    <p>Svenska, Modersmål</p>
                    <p>Engelska, Goda kunskaper tal/skrift</p>
                    <p>TAKK (Tecken som stöd), Goda kunskaper</p>
                    <p>Körkort, behörighet B</p>
                </article>
            </section>
        </main>
    )
}

export default Main