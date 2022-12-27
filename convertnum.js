const obj = {
            10: 'a',
            11: 'b',
            12: 'c',
            13: 'd',
            14: 'e',
            15: 'f'
    };

    let arr = '';
    function convert(n, m) {
        if(n < 0){
                console.log('Please enter positive value')
        }else if(m == 8 || m == 10 || m == 16 ){
                let rmnd = n % m;
                const eql = Math.floor(n / m);
                const rmndToStr = rmnd > 9 ? obj[`${rmnd}`] : `${rmnd}`;
                if (eql > 0) {
                        convert(eql, m);
                }
                arr = arr + rmndToStr;
                return;
        }else{
           
                console.log('Please enter 8, 10 or 16')
        }    
    }
    convert(2000, 25);
    convert(-2000, 25);
    convert(2000, 8);
    convert(2000, 10);
    convert(2000, 16);
    console.log(arr);
