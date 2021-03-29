/*
*
**
***
****
*****
    *
   **
  ***
 ****
*****
i la so Dong
j la so cot
1 - 5
2 - 4
3 - 2 
i + j >= soDong + 1
*/



function veHinh1(soDong) {
    for (let i = 1; i < soDong; i++) {
        let s ='';
        for(let j = 1; j <= soDong; j++) {
           // if(j<=i) s+= '*' // để mô hình hoá, ta phải viết cách khác          
            const dieuKien = j <= i; // j <= i nghĩa là i = j;
            s += dieuKien ? '*' : ' '
            
        }
        console.log(s);
    }
}
//ta truyên tham số là function vào để xử lý chỗ khác nhau veHinh1 và veHinh2 là veHinh
//veHinh2(5)
/*
        *
       ***
      ***** 
     *******
    dòng 1 -> khoảng cách <= 0
    dòng 2 -> khoảng cách <= 1
    dong 3 -> khoảng cách <= 2
    dòng 4 -> khoảng cách <= 3

    |j - soDong| <= i - 1
        soDong = 4;
*/
function veHinh2(soDong) {
    for(let i = 1; i <= soDong; i++) {
        let s = '';
        for(let j = 1; j <= soDong; j++) {
            /*const dieuKien = j <= i;
            s += (i + j >= soDong +1) ? '*' : ' '
            */ //để mô hình hoá ta viết cách khác giống veHinh1
           const dieuKien = i + j >= soDong + 1;
           s +=dieuKien ? '*' : ' ';

        }
        console.log(s);
    }
}
// **** để mô hình hoá lại thì phải có điểm chung, nếu chưa giống nhau thì phải đưa nó đến dạng gần giống nhau đến mức có thể mô hình hoá được
/*
function veHinh(soDong, checkPoint) {    //checkPoint là check từng điểm 1
    for(let i = 1; i <= soDong; i++) {
        let s = '';
        for(let j = 1; j <= soDong; j++) {
           const dieuKien = checkPoint(i, j, soDong); //hình 1 không có soDong nên ta truyền 3 tham số dư soDong
           s +=dieuKien ? '*' : ' ';

        }
        console.log(s);
    }
}
//n là soDong
//2 cách

console.log('        ');
veHinh(5, function(i, j, n) {       //ta có thể đặt biến khác (n, j, i) về thứ tự thì không thay đổi thì n đây mang ý nghĩa i theo checkPoint(i, j, soDong)
    return i >= j;                  // tuân theo thứ tự các tham số chứ không tuân theo các biến vì ở đây minh khai báo function nên thích đặt sao cũng được, đặt giống để dễ dàng đối chiếu   
});
console.log('        ');
veHinh(5, (i, j, n) => i >= j);


//chạy hình 1
//trong thân hàm ta không dùng n thì với JavaScrip ta có thể xoá n đi
//veHinh(5, (i, j) => i >= j);

//chạy hình 2
//veHinh2(5);
//veHinh(5, (i, j, n) => i + j >= n +1);

*/

/*
        *
       ***
      *****
     *******
      *****
       ***
        *
    soDong = 7 (soDong luon % 2 = 1) 
*/
//so sánh code veHinh và VeHinh3 khác nhau ở đâu
// số cột và số dòng chưa chắc bằng nhau nên truyền thêm 1 faction nữa xác định

// 
function veHinh3(soDong) {
    for( let i = 1; i <= soDong; i++) {
        let s = ' ';
        const soCot = soDong * 2 -1;
        for(let j = 1; j <= soCot; j++) {
            const dieuKien = Math.abs(j - soDong) <= i -1;
            s += dieuKien ? '*' : ' ';
        }
        console.log(s);
    }
}
//dùng function veHinh mới để in 3 hình trên
//1 function giải quyết 3 bài toán

function veHinh(soDong, checkPoint, getSoCot) { //ta có thể thêm 1 function getSoCot
    for(let i = 1; i <= soDong; i++) {
        let s = '';
        //const soCot = soDong;             // với sự thay đổi, ta có đc sự khác nhau mà có thể mô hình hoá được
                                          //đó là soCot = soDong * 2 -1, còn const soCot = soDong;
        const soCot = getSoCot(soDong);
        for(let j = 1; j <= soCot; j++) {
           const dieuKien = checkPoint(i, j, soDong);
           s +=dieuKien ? '*' : ' ';

        }
        console.log(s);
    }
}
//chú ý => nghĩa là bằng (=)
//hình 1
//veHinh(5, (i, j) => i >= j, soDong => soDong ); //soDong => soCot là một function

//hình 2
//veHinh(5, (i, j, n) => i + j >= n +1, soDong => soDong);

//hình 3
//veHinh(5, (i, j, n) => Math.abs(j - n) <= i -1, soDong =>soDong *2 -1) 


//in 3 hình 
/*
veHinh(5, (i, j) => j <= i, soDong => soDong);
veHinh(5, (i, j, n) => i + j >= n + 1, soDong => soDong);
veHinh(5, (i, j, n) => Math.abs(j - n) <= i - 1, soDong => soDong);
*/
// hầu hết các function đề có soDong = soCot thì ta truyền vào soDong => soDong
//còn nếu soDong != soCot thì ta không nên truyền vào.


//khi đến hình thứ 3 ta xử lý sao
//trong javascrip ta khai báo 3 tham số nhưng truyền 2 tham số vẫn được, tham số truyên truyền vào sẽ thành undefined(getSoCot)
// nếu getSoCot(soDong) là undefined thì soDong => soCot
//còn nếu getSoCot(soDong) có giá trị thì mình mới gọi nó và truyền soCot
//mình gọi như sau :

function veHinh(soDong, checkPoint, getSoCot) { //ta có thể thêm 1 function getSoCot
    for(let i = 1; i <= soDong; i++) {
        let s = '';
        const soCot = !getSoCot ? soDong : getSoCot(soDong);
        //nếu getSoCot là undefined thì !getSoCot tương đường với true tra về biểu thức thứ 1 là soDong => soCot
        //nếu getSoCot là undefined thì !getSoCot tương đường với false trả về biểu thức thứ 2 
        for(let j = 1; j <= soCot; j++) {
           const dieuKien = checkPoint(i, j, soDong);
           s +=dieuKien ? '*' : ' ';

        }
        console.log(s);
    }
}
veHinh(5, (i, j) => j <= i);
veHinh(5, (i, j, n) => i + j >= n + 1);
veHinh(5, (i, j, n) => Math.abs(j - n) <= i - 1, soDong => soDong * 2 - 1);


