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
            let rmnd = n % m;
            const eql = Math.floor(n / m);
            const rmndToStr = rmnd > 9 ? obj[`${rmnd}`] : `${rmnd}`;
            if (eql > 0) {
                    convert(eql, m);
            }
            arr = arr + rmndToStr;
            return;
    }

    convert(2000, 10);
    console.log(arr)