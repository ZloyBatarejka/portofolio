const myProjectsCards = [
  {
    image: require("./img/cards/myproj/todo.jpg"),
    title: "TODO",
    desc: "To-Do list. Built with React, based on firebase.",
    repo: "https://github.com/ZloyBatarejka/TODO",
    page: "https://zloybatarejka.github.io/TODO/",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/typing.jpg"),
    title: "ST",
    desc: "Speed typing app, 3 options: 1,2,3 min",
    repo: "https://github.com/ZloyBatarejka/ST",
    page: "https://zloybatarejka.github.io/ST/type.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/ask.jpg"),
    title: "ASkme",
    desc: "Askme project. Firebase host/database. Check info for password",
    repo: "https://github.com/ZloyBatarejka/ASKme",
    page: "https://askme-a22dc.firebaseapp.com/",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/ctulhu.jpg"),
    title: "Ctulhu",
    desc: "Ctulhu bestiary. Dynamic page.",
    repo: "https://github.com/ZloyBatarejka/Ctulhu",
    page: "https://zloybatarejka.github.io/Ctulhu/index.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/lightbox.jpg"),
    title: "lightbox",
    desc: "Image lightbox, arrow keys and buttons to slide.",
    repo: "https://github.com/ZloyBatarejka/Lightbox",
    page: "https://zloybatarejka.github.io/Lightbox/image.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/boxShadow.jpg"),
    title: "BoxShadow",
    desc: "Shadow box sand-box. Range controllers.",
    repo: "https://github.com/ZloyBatarejka/BoxShadow",
    page: "https://zloybatarejka.github.io/BoxShadow/test.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/calculator.jpg"),
    title: "Calculator",
    desc: "Simple calculator. Built with CSS Grid.",
    repo: "https://github.com/ZloyBatarejka/Calc",
    page: "https://zloybatarejka.github.io/Calc/test.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/keycode.jpg"),
    title: "KeyCode",
    desc: "Press key to get Key, Code, Key code.",
    repo: "https://github.com/ZloyBatarejka/EventCode",
    page: "https://zloybatarejka.github.io/EventCode/timer.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/mouseover.jpg"),
    title: "MouseOver",
    desc: "Move mouse over squares to change their color.",
    repo: "https://github.com/ZloyBatarejka/mouseOver",
    page: "https://zloybatarejka.github.io/mouseOver/mouse.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/witcher.jpg"),
    title: "Witcher",
    desc: `"Choose your figher" simulator`,
    repo: "https://github.com/ZloyBatarejka/Witcher",
    page: "https://zloybatarejka.github.io/Witcher/index.html",
    id: (Math.random() * 1e8).toString(16)
  }
];
const tutorialProjectCards = [
  {
    image: require("./img/cards/myproj/quiz.jpg"),
    title: "Quiz",
    desc: `React tutorial project`,
    repo: "https://github.com/ZloyBatarejka/quiz",
    page: "https://zloybatarejka.github.io/quiz",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/tictactoe.jpg"),
    title: "TicTacToe",
    desc: `TicTacToe with scoreboard`,
    repo: "https://github.com/ZloyBatarejka/tictactoe",
    page: "https://zloybatarejka.github.io/tictactoe/ttt.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/revolution.jpg"),
    title: "Revo",
    desc: `Animate by scrolling. (ScrollMagic library)`,
    repo: "https://github.com/ZloyBatarejka/scroll",
    page: "https://zloybatarejka.github.io/scroll/test.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/bird.jpg"),
    title: "Bird",
    desc: `Flappy bird game. Use any key to jump.`,
    repo: "https://github.com/ZloyBatarejka/bird",
    page: "https://zloybatarejka.github.io/bird/test.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/clock.jpg"),
    title: "Clock",
    desc: `Analog clock`,
    repo: "https://github.com/ZloyBatarejka/clock",
    page: "https://zloybatarejka.github.io/clock/test.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/dots.jpg"),
    title: "Dots",
    desc: `Floating dots`,
    repo: "https://github.com/ZloyBatarejka/dots",
    page: "https://zloybatarejka.github.io/dots/test.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/menu.jpg"),
    title: "Menu",
    desc: `Circle menu`,
    repo: "https://github.com/ZloyBatarejka/menu",
    page: "https://zloybatarejka.github.io/menu/timer.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/password.jpg"),
    title: "Password",
    desc: `Random password generator`,
    repo: "https://github.com/ZloyBatarejka/password",
    page: "https://zloybatarejka.github.io/password/pass.html",
    id: (Math.random() * 1e8).toString(16)
  },

  {
    image: require("./img/cards/myproj/music.jpg"),
    title: "Music",
    desc: `Press colored button to get sound`,
    repo: "https://github.com/ZloyBatarejka/sound",
    page: "https://zloybatarejka.github.io/sound/index.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/snake.jpg"),
    title: "Snake",
    desc: `Snake game, canvas tutorial project`,
    repo: "https://github.com/ZloyBatarejka/snake",
    page: "https://zloybatarejka.github.io/snake/test.html",
    id: (Math.random() * 1e8).toString(16)
  }
];
const landingProjectCards = [
  {
    image: require("./img/cards/myproj/solomusic.jpg"),
    title: "Solomusic",
    desc: `Practising flexbox and custom grid`,
    repo: "https://github.com/ZloyBatarejka/solomusic",
    page: "https://zloybatarejka.github.io/solomusic/solo.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/red.jpg"),
    title: "Reds",
    desc: `Practising SASS`,
    repo: "https://github.com/ZloyBatarejka/reds",
    page: "https://zloybatarejka.github.io/reds/test.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/bootstrain.jpg"),
    title: "Bootstrain",
    desc: `Practising bootstrap`,
    repo: "https://github.com/ZloyBatarejka/bootstrain",
    page: "https://zloybatarejka.github.io/bootstrain/index.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/bt4.jpg"),
    title: "Bt4Again",
    desc: `Practising bootstrap`,
    repo: "https://github.com/ZloyBatarejka/bt4again",
    page: "https://zloybatarejka.github.io/bt4again/index.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/maddyson.jpg"),
    title: "Maddyson",
    desc: `Practising bootstrap`,
    repo: "https://github.com/ZloyBatarejka/maddyson",
    page: "https://zloybatarejka.github.io/maddyson/index.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/no.jpg"),
    title: "No-no",
    desc: `Practising bootstrap`,
    repo: "https://github.com/ZloyBatarejka/no-no",
    page: "https://zloybatarejka.github.io/no-no/index.html",
    id: (Math.random() * 1e8).toString(16)
  },
  {
    image: require("./img/cards/myproj/again.jpg"),
    title: "Here we go",
    desc: `Practising bootstrap`,
    repo: "https://github.com/ZloyBatarejka/herewego",
    page: "https://zloybatarejka.github.io/herewego/index.html",
    id: (Math.random() * 1e8).toString(16)
  }
];
export { myProjectsCards, tutorialProjectCards, landingProjectCards };
