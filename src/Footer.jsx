function CreteFooter({jetons}) {
    return (
        <div className={`footer ${jetons === 0 ? 'footerdisabled' : ''}`}>ПОПОВНИ СВІЙ</div>
    )
}

export default CreteFooter