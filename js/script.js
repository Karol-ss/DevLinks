var toggleMode = () => {
    const html = document.documentElement;

    html.classList.toggle("light");

    const  isLight = html.classList.contains("light");
    const srcValue = isLight ? "../img/fotoPerfilClaro.png" : "../img/fotoPerfil.jpg";
    const altValue = isLight ? "Imagem de perfil com um cachorro do telemarketing com óculos escuros" : "Imagem de um cachorro do telemarketing";


    document.querySelector("#profile img").setAttribute("src",srcValue);
    document.querySelector("#profile img").setAttribute("alt",altValue)



};