*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Rubik",sans-serif;
}

body{
    height: 100%;
    background: #1f5a82;
}

.container{
    background-color: #ffffff;
    width: 400px;
    padding: 35px;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    box-shadow: 15px 30px 35px rgba(0,0,0,0.1);
    border-radius: 10px;
    -webkit-perspective: 300px;
    perspective: 300px;
}

.coin{
    height: 150px;
    width: 150px;
    position: relative;
    margin: 32px auto;
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
}
.coin img{
    width: 145px;
}
.heads, .tails{
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
}
.tails{
    transform: rotateX(180deg);
}

@keyframes spin-tails{
    0%{
        transform: rotateX(0);
    }
    100%{
        transform: rotateX(1980deg);
    }
}
@keyframes spin-heads{
    0%{
        transform: rotateX(0);
    }
    100%{
        transform: rotateX(2160deg);
    }
}

.stats{
    display: flex;
    color: #101020;
    font-weight: 500;
    padding: 20px;
    margin-bottom: 40px;
    margin-top: 55px;
    box-shadow: 0 0 20px rgba(0,139,253,0.25);
}

.stats p:nth-last-child(1) {
  margin-left: 50%;
}

.buttons{
    display: flex;
    justify-content: space-between;
}
button{
    width: 150px;
    padding: 15px 0;
    border: none;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
}

#flip-button{
    background-color: #053469;
    color: #ffffff;
}

#reset-button{
    background-color: #674706;
    color: white;
}

#flip-button:disabled{
    background-color: #e1e0ee;
    border-color: #e1e0ee;
    color: #101020;
}