import css from './Main.module.css'
import { ImHome2 } from 'react-icons/im'
import { BsEnvelopeFill } from 'react-icons/bs'

function Main() {
    return (
        <main className={css.container}>
            <section>
                <article className={css.leftBox1}>
                    <p>Michaela Andreasson</p>
                    <p><ImHome2/> Ryttarvägen 8, 444 41 Stenungsund</p>
                    <p> <BsEnvelopeFill/> mi-and@outlook.com</p>
                    <hr/>
                </article>
                <article className={css.leftBox2}>
                    <h2>Om mig</h2>
                    <p>
                        Efter 11 år inom barnomsorgen så var
                        det dags att hitta på något annat, men
                        det har lärt mig att vara flexibel, lyhörd
                        och problemlösare. Även som tränare
                        har jag lärt mig att vara strukturerad
                        och att driva framåt.</p>

                    <h2>Personligt</h2>
                    <p>
                        Jag studerar till webbutvecklare i
                        Mölndal. Jag ser mig själv som ambitiös, jordnära och en nyfiken person. Kan
                        även leverera en sväng om på isbanan.</p>

                    <h2>Ambitioner</h2>
                    <p>Mina ambitioner inom IT är att kunna
                        Sätta ihop tex en hemsida på beställning. Även att jobba på både backend och frontend
                        intresserar mig.</p>

                    <p>Jag tycker det är lustfyllt att få vara
                        kreativ i mitt arbete. Jag är positiv till
                        att testa på nya saker för att utöka min kunskapsbank.
                    </p>
                    <hr/>
                </article>
                <article className={css.leftBox3}>
                    <h2>Följ mig</h2>
                    <p>LinkedId</p>
                    <p>GitHub</p>
                </article>
            </section>
            <section>
                <article className={css.rightBox1}>
                    <h2>Utbildning</h2>
                    <p>Augusti 2021 - Oktober 2022
                        Studerar nu Webbutveckling på Campus Mölndal. Vi lär oss om: HTML5, CSS, JavaScript, UI/UX,
                        ReactJS, NodeJS, ExpressJS, MongoDB, MERN, NoSQL, SQL, TypeScript, RestAPI, API, Mongoose,
                        frontend, backend, fullstack och APL 8 veckor.</p>

                    <p>Augusti 2008 - 2010
                        Fritidsledarutbildningen, Ljungskile Folkhögskola</p>

                    <p>Augusti 2005 - 2008
                        Barn och fritidsprogrammet, Nösnäs Gymnasiet</p>

                    <p>April 2006
                        Konståkningstränare, steg1 och steg 2
                    </p>
                    <hr/>
                </article>
                <article className={css.rightBox2}>
                    <h2>ARBETSLIVSERFARENHET</h2>
                    <p>Barnskötare, Stenungsunds kommun
                        2011-2020
                        IT-ansvarig ta hand om frågor kring Unikum, hjälpa kollegor med it-frågor, omsorg, pedagogisk
                        verksamhet, kontakt med föräldrar, soc, kommun.
                    </p>
                    <p>
                        Konståkningstränare, Stenungsunds Konståkningsklubb
                        2004-2013
                        Tränat barn/ungdomar/vuxna, planera/genomföra shower, pedagogiskt planerande, dialog med
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