<template>
    <div class="wrapper">
        <div class="blog-name">Butterfly</div>
        <div class='text'>
            {{pageText}}
            <span ref='cursor' class='cursorBlink'>|</span>
        </div>
        <div class='arrow'></div>
    </div>
</template>

<script>
    export default {
        name: "my-demo",
        data () {
            return {
                text: ['今日事，今日毕。', '人之进学在于思，思则能知是与非。', '年年岁岁花相似，岁岁年年人不同。', '春种一粒粟，秋收万颗子。',
                    '锲而不舍，金石可镂。——荀子', '　　锲而不舍，金石可镂。——荀子', '愿你的生命有够多的云翳，造成一个美丽的黄昏。', '为着后来的回忆，小心着意的描你现在的图画。',
                    '要说别人脑子有病，脑子有病的前提是必须有个脑子。', '为中华而努力读书！一包中华好多钱啊！', '如果帅可以当饭吃，那我的帅可以让13亿人吃饱了。', '我的工作啊，价格便宜量又足。',
                    '从小学到大学，唯一不变的就是一颗不想念书的心。', '想咬你一口，可惜我是回民。', '生活不只有眼前的苟且，还有读不懂的诗和到不了的远方。'],
                pageText: '人之进学在于思，思则能知是与非。'
            }
        },
        mounted () {
            setTimeout(() => {
                this.initPageText()
            }, 1500)
            // this.$nextTick(function () {
            //   this.initPageText()
            // })
        },
        methods: {
            initPageText () {
                let random = Math.floor(Math.random() * this.text.length)
                while (this.textRandom === random) {
                    random = Math.floor(Math.random() * this.text.length)
                }
                this.textRandom = random
                let text = this.text[random]
                for (let i = 0; i < text.length; i++) {
                    setTimeout(() => {
                        this.pageText += text[i]
                        if (i === text.length - 1) {
                            setTimeout(() => {
                                this.delPageText()
                            }, 2200)
                        }
                    }, i * 200)
                }
            },
            delPageText () {
                // let i = 0
                for (let i = 0; i < this.pageText.length; i++) {
                    setTimeout(() => {
                        this.pageText = this.pageText.substring(0, this.pageText.length - 1)
                        if (this.pageText.length === 0) {
                            setTimeout(() => {
                                this.initPageText()
                            }, 1500)
                        }
                    }, i * 70)
                }
            },
        }
    }
</script>

<style scoped>
    .wrapper {
        background-image: url(../public/img/index.jpg);
        height: 100vh;
        background-attachment: fixed;
        background-position: center center;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        display: flex;
        justify-content: center;
    }
    .blog-name {
        position: absolute;
        top: 40%;
        color: #eeeeee;
        font-size: .7rem;
        font-weight: bold;
    }
    .text {
        position: absolute;
        top: 50%;
        max-width: 70%;
        font-size: .48rem;
        color: #eeeeee;
    }
    .cursorBlink {
        animation: animate-blink 1s infinite steps(1);
    }
    @keyframes animate-blink {
        50% {color: transparent;}
    }
    .arrow {
        background-image: url(../public/img/index.jpg);
        background-repeat: no-repeat;
        background-size: 40% 40%;
        background-position: center center;
        width: 1.5rem;
        height: 1.5rem;
        opacity: .5;
        cursor: pointer;
        position: absolute;
        bottom: 0;
        animation: animate-bounce-up 1.5s linear infinite;
    }
    @keyframes animate-bounce-up {
        25% {transform: translateY(-10%);}
        50% {transform: translateY(-30%);opacity: 1;}
        75% {transform: translateY(-10%);}
        100% {transform: translateY(0);opacity: .5;}
    }
</style>
