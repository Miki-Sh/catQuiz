// クイズの問題文
const quiz = [
    {   question :"ねこ様がしっぽを立てておられる時のお気持ちは？",
        answers : ["怒り", "警戒中", "嬉しい", "退屈"],
        correct : "嬉しい"
    }, {
        question :"ねこ様がゆっくり瞬きをされるのはなぜ？",
        answers : ["ドライアイ", "愛情表現", "威嚇している", "馬鹿にしている"],
        correct : "愛情表現"
    }, {
        question :"ねこ様が足でしきりにふみふみなさっているのはなぜ？",
        answers : ["童心にかえりリラックスしている", 
                "お宝探しをしている", 
                "縄張りを示している", 
                "足蹴にしている"],
        correct : "童心にかえりリラックスしている"
    }, {
        question :"ねこ様が頭突きをされる理由として、間違っているものは？",
        answers : ["マーキング", "愛情表現", "ケンカを売っている", "目上の方へのご挨拶"],
        correct : "ケンカを売っている"
    }


];
const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// クイズの設定
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex ++;
    };
};
setupQuiz();

// ボタンをクリックした時の動作
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent) {
        alert("正解");
        score ++;
    } else {
        alert("不正解");
    }

    quizIndex ++;

    if(quizIndex < quizLength) {
        setupQuiz();
    } else {
        alert("終了！,あなたの正解数は" + score + "/" + quizLength + "です！");
    }
};

let handleIndex = 0;
while (handleIndex < buttonLength) {
    $button[handleIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handleIndex++;
};
