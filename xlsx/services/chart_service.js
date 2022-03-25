const countProperties = (data) => {
    let labels = Array.from(new Set(data));
    let result = {labels: labels, values: []};

    for(let i = 0; i < labels.length; i++){
        result.values.push(0);
    }

    for(let i = 0; i < data.length; i++){
        for(let j = 0; j < labels.length; j++){
            if(labels[j] === data[i]){
                result.values[j] += 1;
            }
        }
    }

    return result;
}