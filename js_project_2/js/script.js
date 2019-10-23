let textInput = document.querySelector('#text-input');

const key = {
    'a' : 'z',	
    'b' : 'y',
    'c' : 'x',	
    'd' : 'w',	
    'e' : 'v',	
    'f' : 'u',	
    'g' : 't',	
    'h' : 's',	
    'i' : 'r',	
    'j' : 'q',	
    'k' : 'p',	
    'l' : 'o',	
    'm' : 'n',	
    'n' : 'm',	
    'o' : 'l',	
    'p' : 'k',	
    'q' : 'j',	
    'r' : 'i',
    's' : 'h',	
    't' : 'g',	
    'u' : 'f',
    'v' : 'e',	
    'w' : 'd',	
    'x' : 'c',	
    'y' : 'b',
    'z' : 'a'
}

document.querySelector('button').onclick = () => {

    let str = textInput.value;
    let str2 = '';
    
    for (let i = 0; i < str.length; i++) {

        if(key[str[i]]) {
            str2 += key[str[i]];
        }
        else {
            str2 += str[i];
        }
    }
    document.querySelector('#out').textContent = str2;
}





























