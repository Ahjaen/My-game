var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17, w18, w19, w20, w21, w22, w23, w24, w25, w26, w27;
var thief, cop1, cop2
var diamond


function preload(){

}

function setup(){
    createCanvas(600,600)

    w1 = createSprite(300, 2, 300, 5)
    w2 = createSprite(50, 2, 100, 5)
    w3 = createSprite(550, 2, 100, 5)
    w4 = createSprite(300, 598, 600, 5)
    w5 = createSprite(2, 300, 5, 600)
    w6 = createSprite(598, 200, 5, 400)
    w7 = createSprite(598, 550, 5, 100)
    w8 = createSprite(250, 50, 200, 5)
    w9 = createSprite(152, 224, 5, 350)
    w10 = createSprite(75, 240, 150, 5)
    w11= createSprite(455, 158, 120, 5)
    w12 = createSprite(515, 223, 5, 135)
    w13 = createSprite(387, 230, 260, 5)
    w14 = createSprite(259.5, 260, 5, 60)
    w15 = createSprite(545, 350, 110, 5)
    w16 = createSprite(488, 380, 5, 120)
    w17 = createSprite(440, 325, 5, 70)
    w18 = createSprite(378, 290, 130, 5)
    // w19 = createSprite()
    // w20 = createSprite()
    // w21 = createSprite()
    // w22 = createSprite()
    // w23 = createSprite()
    // w24 = createSprite()
    // w25 = createSprite()
    // w26 = createSprite()
    // w27 = createSprite()

    thief = createSprite(124, 20, 12, 12)

}

function draw(){
    

    drawSprites()
}