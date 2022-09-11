function show_certificate(num) {
    var cerificate_links = [
        "media/lgmsoc21.png",
        "media/bvest21.png",
        "media/gcloud.png",
        "media/ltc.png",
        "media/nasa21.png",
        "media/gwoc21.png",
        "media/GSSoC2022.png",
        "media/basil_certificate.jpg",
    ];

    document.getElementById("myModal").style.display = "block";
    document.getElementById("img01").src = cerificate_links[num];
}

function close_modal() {
    document.getElementById("myModal").style.display = "none";
}