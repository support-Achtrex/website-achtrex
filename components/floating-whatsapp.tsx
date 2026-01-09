const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/16133664271"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl active:scale-95"
            aria-label="Chat on WhatsApp"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="h-[48px] w-[48px] transition-transform duration-300 ease-in-out"
            />
        </a>
    );
};

export default FloatingWhatsApp;
