if (document.body.classList.contains("body-temas-skins")) {
    inpSkinCachorro.onchange = (e) => {
        const [file] = inpSkinCachorro.files;
        if (file) {
            cachorroPreview.src = URL.createObjectURL(file);
        }
    };

    inpSkinOnca.onchange = (e) => {
        const [file] = inpSkinOnca.files;
        if (file) {
            oncaPreview.src = URL.createObjectURL(file);
        }
    };

    inpFundoTabuleiro.onchange = (e) => {
        const [file] = inpFundoTabuleiro.files;
        if (file) {
            tabuleiroPreview.src = URL.createObjectURL(file);
        }
    };

    inpFundoPlacar.onchange = (e) => {
        const [file] = inpFundoPlacar.files;
        if (file) {
            placarPreview.src = URL.createObjectURL(file);
        }
    };
}

if (document.body.classList.contains("body-anuncios")) {
    inpAnuncioImg.onchange = (e) => {
        const [file] = inpAnuncioImg.files;
        if (file) {
            anuncioPreview.src = URL.createObjectURL(file);
        }
    };
}
