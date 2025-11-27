// Botón con id="btnTop" 
const btnsubir = document.getElementById("btnsubir");
if (btnsubir) { 
    btnsubir.addEventListener("click", () => { 
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}