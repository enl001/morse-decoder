const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result=[];
    let i=0;
    let length=10;
    arr = expr.split('**********');    
    for(let a of arr)
    {
        let start=0;
        let end=length;        
        while(start<=a.length-1){
            let l = a.substring(start,end);            
            let index = l.indexOf('1');
            result[i++]= parse(l.substring(index));            
            start=end;
            end+=length;            
        }
        result[i++] = ' ';
    }
    return (result.join('').trim());
}

function parse(word){
    let start=0;
    let end=2;        
    let result ='';  
    while(start<=word.length-1){
      let s = word.substring(start,end);
      switch(s)
      {
        case '10':
        result+='.';
        break;
        case '11':
        result+='-';
        break;
      }
      start=end;
      end+=2;
    }    
    return MORSE_TABLE[result];
  }

module.exports = {
    decode
}