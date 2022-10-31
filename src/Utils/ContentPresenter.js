

export default class ContentPresenter {
    constructor(content){
        this.content = content;
    }

    parseNewLine = () => {

        const content =  this.content.replace(/\\\\\\\\n/g, "${1}")
            //.replace(/(?:\r\n|\r|\n)/g, "\n")
            .replace(/\\n/g, '\n')
            .replace(/\\\"/g, '\"')
            .replace(/\$\{1\}/g,'\\n')

        return content;
    }

    parseCode = () => {
        const textArr = new Array()
        let line = this.parseNewLine().toString();


        while( true ){
            let obj = line.split('$code$');

            let obj2 = obj[1].split('$-code$');

            textArr.push({type: "text", content: obj[0]});
            textArr.push({type: "code", content: obj2[0]});

            if(!obj2[1].includes('$code$')){
                textArr.push({type: "text", content: obj2[1]});
                break;
            } else {
                line = obj2[1];
            }
            
        }

        return textArr;
    }

    parseCodeV2 = () => {
        const textArr = [];
        let line = this.parseNewLine().toString();

        let list = line.split('$code$')

        textArr.push({type: "text", content: list[0]});
        for(let i = 1; i < list.length; i++){
            let l = list[i].split('$-code$')
            textArr.push({type: "code", content: l[0]});
            textArr.push({type: "text", content: l[1]});
        }

        return textArr;
    }

    presentContent = () => {
        let content = this.parseCodeV2();
        //console.log(content);
        return content;

    }

};


function test(){
    const parser = new ContentPresenter("Esta es la intro\\n\\n$code$#include <stdio.h>\\n\\nint main(){\\n    printf(\\\"Hola mundo\\\\\\\\n\\\");\\n    return 0;\\n}$-code$\\n\\nEsta es la conclusión");
    let line = parser.presentContent();
    
    console.log(line)
}

//test();

