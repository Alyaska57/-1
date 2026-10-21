const flag = document.getElementById( "flag");
flag.addEventListener("click", change);
function change(){
    if (document.querySelector(".name").innerHTML == "Мария"){
        document.querySelector(".given").innerHTML = "GU MVD ROSSII PO G. MOSKVE";
        document.querySelector(".lastname").innerHTML = "Kirsanova";
        document.querySelector(".name").innerHTML = "Mariia";
        document.querySelector(".secondname").innerHTML = "Sergeevna";
        document.querySelector(".gender").innerHTML = "F &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 21.02.2007";
        document.querySelector(".place").innerHTML = "Moscow";
    } else{
        document.querySelector(".given").innerHTML = "ГУ МВД ПО Г. МОСКВЕ";
        document.querySelector(".lastname").innerHTML = "Кирсанова";
        document.querySelector(".name").innerHTML = "Мария";
        document.querySelector(".secondname").innerHTML = "Сергеевна";
        document.querySelector(".gender").innerHTML = "Ж &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 21.02.2007";
        document.querySelector(".place").innerHTML = "Москва";
    }
}