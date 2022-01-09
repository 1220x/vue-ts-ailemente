function add(x, y) {
    if (Number(x) == x && Number(y) == y) {
        return Number(x) + Number(y)
    }

    return x + y
}

// 判断传入的值和预期是否相等
function expect(ret) {
    return {
        toBe(arg) {
            if (!(ret == arg)) {
                throw Error(`预期和实际不符，预期是${arg}，实际是${ret}`)
            }
        }
    }
}

function test(title, fn) {
    try {
        fn();
        console.log(title, '测试通过');
    } catch(e) {
        console.log(e);
        console.error(title, '测试失败');
    }
}

test('测试数字相加',()=>{ expect(add(1, '2')).toBe(3)});