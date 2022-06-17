import css from './Header.module.css'

function Header() {
    return (
        <header className={css.header}>
            <h1 className={css.headerText}>Michaela Andreasson</h1>
            <p className={css.smallHeaderText}>Fullstack utvecklare</p>
        </header>
    )
}


export default Header