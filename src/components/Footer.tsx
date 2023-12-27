export default function Footer() {

    const onToggleTheme = () => {
        console.log('Trigger Toggle Theme')
    }

    return (
        <footer className="w-full border-t-2">
            <div className="container mx-auto flex items-center justify-between px-5 md:px-0 py-5">
                <p className="font-medium text-base text-xl text-purple-800 text-center">Coded by @iniadnan.dev</p>
                <div>
                    <button type="button" onClick={onToggleTheme}>Toggle Theme</button>
                </div>
            </div>
        </footer>
    )
}