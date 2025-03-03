/ script.js
document.addEventListener("DOMContentLoaded", () => {
    const outputElement = document.getElementById("output");
    const playButton = document.getElementById("playButton");

    // 真心话问题和大冒险任务
    const questions = [
        "你最尴尬的一次经历是什么？",
        "你有没有暗恋过谁？",
        "你最讨厌自己的哪一点？",
        "你最害怕的事情是什么？",
        "你最想改变自己的哪一点？",
        "你最尴尬的一次表白经历是什么？",
        "你最想对谁说对不起？",
        "你最想对谁说谢谢？",
        "你最想对谁说我爱你？",
        "你最想对谁说我恨你？"
    ];

    const challenges = [
        "学猫叫三声",
        "模仿你最讨厌的人",
        "用鼻子喝一杯水",
        "用屁股写字",
        "用脚趾夹住一支笔并写下自己的名字",
        "用鼻子喝一杯水",
        "用屁股写字",
        "用脚趾夹住一支笔并写下自己的名字",
        "用鼻子喝一杯水",
        "用屁股写字"
    ];

    // 已经显示过的问题/任务
    const usedItems = [];

    playButton.addEventListener("click", () => {
        if (usedItems.length >= questions.length + challenges.length) {
            outputElement.textContent = "所有问题和任务都已完成！";
            playButton.disabled = true;
            return;
        }

        // 随机选择真心话或大冒险
        const isQuestion = Math.random() > 0.5;

        if (isQuestion) {
            // 随机选择一个未使用的问题
            const randomQuestion = getRandomItem(questions, usedItems);
            outputElement.textContent = `真心话：${randomQuestion}`;
        } else {
            // 随机选择一个未使用的任务
            const randomChallenge = getRandomItem(challenges, usedItems);
            outputElement.textContent = `大冒险：${randomChallenge}`;
        }
    });

    function getRandomItem(array, used) {
        let randomItem;
        do {
            const randomIndex = Math.floor(Math.random() * array.length);
            randomItem = array[randomIndex];
        } while (used.includes(randomItem) && used.length < array.length);

        used.push(randomItem);
        return randomItem;
    }
});