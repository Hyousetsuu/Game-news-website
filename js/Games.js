let MainGame = document.getElementById("Main-Games");

async function getDataGame() {
  try {
    let respons = await fetch(
      "https://6548e280dd8ebcd4ab23ccc4.mockapi.io/game"
    );
    let data = await respons.json();

    console.log(data);

    data.map((item) => {
      let dataGame = `
    <div class="Games">
                <a href="${item.game_url}">
                <img src="${item.thumbnail}" alt="">
                <div>
                <h3>${item.title}</h3>
                <p>${item.short_description}</p>
                </div>
                </a>
            </div>
        `;

      MainGame.innerHTML += dataGame;
    });
  } catch (error) {
    console.log(error);
  }
}

getDataGame();
