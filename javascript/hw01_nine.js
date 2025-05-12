document.write(`<table>`);
        for(var i = 1; i < 10; i++){
            document.write(`<tr>`);
            for(var j = 2; j < 10; j++){
                document.write(`<td>`);
                document.write(`${j} &times; ${i} = ${i*j}<br>`);
                document.write(`</td>`);
            }
            document.write(`</tr>`);
        }
document.write(`</table>`);