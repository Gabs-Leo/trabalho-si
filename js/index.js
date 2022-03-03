const myForm = document.querySelector("#myForm");
const myFile = document.querySelector("#myFile");
const result = document.querySelector("#result");

//Função que transforma texto em objetos.
//Propriedades são separadas através do delimiter.
const parseText = (text, delimiter = ",") => {
    const headers = text.slice(0, text.indexOf("\n")).split(delimiter);
    for(i = 0; i < headers.length; i++){
        if(headers[i].includes("\r")){
            headers[i] = headers[i].replace("\r", "");
        }
    }
    console.log(headers);
    const rows = text.slice(text.indexOf("\n") + 1).split("\n");

    const list = rows.map((i) => {
        const values = i.split(delimiter);
        const el = headers.reduce((object, header, index) => {
            if(values[index].includes("\r")){
                values[index] = values[index].replace("\r", "");
            }
            object[header] = values[index];
            return object;
        }, {});
        return el;
    });
    return list;
}

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = myFile.files[0];
    const reader = new FileReader();

    reader.onload = (i) => {
        const text = i.target.result;
        const data = parseText(text);
        console.log(data);
        proccessData(data);
    }

    reader.readAsText(input);
});

//Função executada para cada objeto dos dados obtidos
const proccessData = (data) => {
    for(i = 0; i < data.length; i++){
        
    }
};