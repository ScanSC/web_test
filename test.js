class Game {
    constructor(name, type, price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

let games = [];
games.push(new Game("Rainbow Six : Siege", "fps", 7));
games.push(new Game("Stray", "enigme, aventure", 25));
games.push(new Game("No Man Sky", "aventure, exploration", 30));

function switch_bop(img_id) {
    let image = document.getElementById(img_id);
    if (image.getAttribute('src') === 'images/bop_open.png') {
        image.setAttribute('src', 'images/bop_close.png');
    } else {
        image.setAttribute('src', 'images/bop_open.png');
    }
};
