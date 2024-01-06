        let n1 ,n2;
         let result = document.querySelector("#plane");

        //result images
        let won = document.createElement("img");
        won.setAttribute("src","You-Won-6-1-2024.png");
        won.setAttribute("id","status");

        let lose = document.createElement("img");
        lose.setAttribute("src","You-Lose-6-1-2024.png");
        lose.setAttribute("id","status");

        let draw = document.createElement("img");
        draw.setAttribute("src","DRAW-6-1-2024.png");
        draw.setAttribute("id","status");


        // images for player side
        let rockimg = document.createElement("div");
        rockimg.setAttribute("id","rock-img");
        rockimg.setAttribute("class","img");
        let pepimg = document.createElement("div");
        pepimg.setAttribute("id","pep-img");
        pepimg.setAttribute("class","img");
        let sisimg = document.createElement("div");
        sisimg.setAttribute("id","sis-img");
        sisimg.setAttribute("class","img");

        //images for pc side
        let rockpc = document.createElement("div");
        rockpc.setAttribute("id","rock-img");
        rockpc.setAttribute("class","img-pc");
        let peppc = document.createElement("div");
        peppc.setAttribute("id","pep-img");
        peppc.setAttribute("class","img-pc");
        let sispc = document.createElement("div");
        sispc.setAttribute("id","sis-img");
        sispc.setAttribute("class","img-pc");

            
        function rnd(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        }
        function rock(){
            let choose = document.querySelector("#choose");
            choose.style.display = "none";
            n1 = 1;
            n2 = rnd(1,3);
            document.querySelector("#screen").append(rockimg);
            pc();

            setTimeout(() => {
                result.style.display = "flex";
                over();
            },1000);
       }
        function pep(){
            let choose = document.querySelector("#choose");
            choose.style.display = "none";
            n1 = 2;
            n2 = rnd(1,3);
            document.querySelector("#screen").append(pepimg);
            pc();

            setTimeout(() => {
                result.style.display = "flex";
                over();
            },1000);
        }
        function sis(){
            let choose = document.querySelector("#choose");
            choose.style.display = "none";
            n1 = 3;
            n2 = rnd(1,3);
            document.querySelector("#screen").append(sisimg);
            pc();

            setTimeout(() => {
                result.style.display = "flex";
                over();
            },1000);
        }

        function pc(){
            if(n2==1){
                document.querySelector("#screen").prepend(rockpc);       //rock -  1
            }                                                            //paper - 2
            if(n2==2){                                                   //sisor - 3
                document.querySelector("#screen").prepend(peppc);
            }
            if(n2==3){
                document.querySelector("#screen").prepend(sispc);
            }
        }
        
        function over(){
            if(n1 == n2){
                document.getElementById("plane").prepend(draw);
            }
            else if(n1 == 1 && n2 == 2){
                document.getElementById("plane").prepend(lose);
            }
            else if(n1 == 2 && n2 == 1){
                document.getElementById("plane").prepend(won);
            }
            else if(n1 == 2 && n2 == 3){
                document.getElementById("plane").prepend(lose);
            }
            else if(n1 == 3 && n2 == 2){
                document.getElementById("plane").prepend(won);
            }
            else if(n1 == 3 && n2 == 1){
                document.getElementById("plane").prepend(lose);
            }
            else if(n1 == 1 && n2 == 3){
                document.getElementById("plane").prepend(won);
            }

        }

        function reset(){
            result.style.display = "none";
            rockimg.remove();
            pepimg.remove();
            sisimg.remove();
            rockpc.remove();
            peppc.remove();
            sispc.remove();
            won.remove();
            lose.remove();
            draw.remove();

            choose.style.display = "flex";
        }