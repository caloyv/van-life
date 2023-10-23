import './css/Footer.css'

export default function Footer() {
    const yearNow = new Date().getFullYear();
    return (
        <footer>
            <p>Ⓒ {yearNow} #VANLIFE</p>
        </footer>
    )
}