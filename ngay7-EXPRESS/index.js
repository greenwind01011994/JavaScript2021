const express = require('express');      ///1. require thư viện vào, nếu không '' thì nó sẽ hiểu là express nằm trong node-modules 
const reload = require('reload');

const app = express();  ///2. tạo ra express
reload(app);
app.set('view engine', 'ejs');

app.use(express.static('./public'))

app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/index.html');
    res.render('a');
});

app.get('/chao/:name', (req, res) => {  ///4. ta truyên vào ('/ 1 route = link (//là 1), (req(// chứa thông tin người dùng gửi lên), res(// chứa các phương thức đáp trả req) => log(''))
    const name = req.params.name;
    res.send('Chao ' + name); /// send chỉ 1 lần thì không bị lỗi
});///app.get  có 2 tham số '/chao/:name' và () =>{}// đây cũng là function. 
///nếu function quá dài thì tách ra như sau:
/*
    const handler = (req,res) =>{
        res.send('Chao ' + name);
    }
    app.get('/',handler);///-> /chao/:name /:age  nghĩa là truy cập web theo form thì nó trả lại đúng thế

    app.get('/hello/:name/:age', (req, res) => {
    const name = req.params.name;
    const age = req.params.age;
    res.send('xin chào toi la ${name}, ${age} tuoi '); /// 1 rout in nhiều link khác 
});
    // viết gọn hơn
    app.get('/hello/:name/:age', (req, res) => {
    const {name,age} = req.params;
    res.send('xin chào toi la ${name}, ${age} tuoi '); /// 1 rout in nhiều link khác 
});

    //ở đây mình còn rout nữa 
    app.get('/tinh/:tenPhepTinh/:soA/:soB', (req, res) => {
    //tenPhepTinh CONG TRU NHAN CHIA
    //so tu nhien
    //instance
    //locallhost: 3000/tinh/CONG/3/4 -> '3 + 4 = 7'
    
    //khi có function dài, code dài thì không khuyến khích viết vào trong đây, ta tạo ra class
});
    class Tinh {
        constructor(tenPhepTinh, soA, soB) {
            //trong này thì gán
            this.tenPhepTinh = tenPhepTinh;
            this.soA = soA;
            this.soB = soB;
        }
        get ResulString() {
            // ở đây return '3 + 4 = 7'
            let chuoiPhepTinh;
            if(this.tenPhepTinh ==='CONG') chuoiPhepTinh = `${this.soA} + {this.soB}`
            
            //cách viết ngắn hơn đẹp hơn
            let chuoiPhepTinh;
            const {tenPhepTinh, soA, soB} = this
            chuoiPhepTinh = `${soA} /${soB}`
            if tenPhepTinh ==='CONG') chuoiPhepTinh = `${soA} + ${soB}`;
            if tenPhepTinh ==='TRU') chuoiPhepTinh = `${soA} - ${soB}`;
            if tenPhepTinh ==='NHAN') chuoiPhepTinh = `${soA} * ${soB}`;
            const result = eval(chuoiPhepTinh);
            return `${chuoiPhepTinh} = ${result};

            //return `${chuoiPhepTinh} = ${eval(chuoiPhepTinh)}`
            //mặt định phép tính là chia vì nếu không phải phếp tinh cộng trừ nhân chia thì sẽ không bị lỗi            
        }
    }
    const pt = new Tinh('CONG', 10, 11);
    console.log(pt.getResultString());

    //chúng ta có thể tách code cho đẹp
    getChuoiPhepTinh() {
        let chuoiPhepTinh;
        const {tenPhepTinh, soA, soB} = this
        chuoiPhepTinh = `${soA} /${soB}`
        if (tenPhepTinh ==='CONG') chuoiPhepTinh = `${soA} + ${soB}`;
        if (tenPhepTinh ==='TRU') chuoiPhepTinh = `${soA} - ${soB}`;
        if (tenPhepTinh ==='NHAN') chuoiPhepTinh = `${soA} * ${soB}`;
        return chuoiPhepTinh;
    }
    getResultString() {
        const chuoiPhepTinh = this.getChuoiPhepTinh     //không nên gọi getChuoiPhepTinh vì nó sẽ hiểu là function ở ngoài 
        const result = eval(chuoiPhepTinh);
        return `${chuoiPhepTinh} = ${result};
    }

    //làm gọn và đẹp hơn nũa. đây là cách tách hàm 
    getChuoiPhepTinh() {
        const {tenPhepTinh, soA, soB} = this
        if (tenPhepTinh ==='CONG') return `${soA} + ${soB}`;
        if (tenPhepTinh ==='TRU') return  `${soA} - ${soB}`;
        if (tenPhepTinh ==='NHAN') return `${soA} * ${soB}`;
        return `${soA} / ${soB}`;
    }
    getResultString() {
        const chuoiPhepTinh = this.getChuoiPhepTinh     //không nên gọi getChuoiPhepTinh vì nó sẽ hiểu là function ở ngoài 
        const result = eval(chuoiPhepTinh);
        return `${chuoiPhepTinh} = ${result}`;
    }
    //chạy
    const a = new Tinh('CONG', 3, 4);
    console.log(a.getResultString());
*/ 

app.get('/tinh/:tenPhepTinh/:soA/:soB', (req, res) => {     //5. tách nó ra class dễ xử lý và đẹp, được cái là chúng ta tập hợp các phương thức mà hay sử dụng trong lớp đối tượng
                                                            //lại 1 chỗ để kiểm tra 1 lượt  và tái sử dụng nhiều chỗ, khi muốn sử dụng phương thức thì tạo new object và gọi thôi
    const { tenPhepTinh, soA, soB } = req.params;
    const pt = new PhepTinh(tenPhepTinh, soA, soB);
    res.send(pt.getResultString());
});// ta tạo ra 1 thư mục controllers (function controllers) và models (các phép tính)  để  tách function ra 1 file khác 

// localhost:3000/CONG/4/5 -> '4 + 5 = 9'

app.get('/x', (req, res) => res.send('HIHIHIHI'));
app.get('*', (req, res) => res.send('404 Not found'));  ///6. nếu nhập sai link thì trả về. và không để trên trước vì nó sẽ nhảy vào đây hết
app.listen(3000, () => console.log('Server started'));  ///3. app.listen(8080);trách post 8080. tới đây là tạo 1 server đắp trả (chưa theo ý mình muốn)

class PhepTinh {        //class PhepTinh vào models
    constructor(tenPhepTinh, soA, soB) {
        this.tenPhepTinh = tenPhepTinh;
        this.soA = soA;
        this.soB = soB;
    }
    getResultString() {
        const calString = this.getCalString();
        return `${calString} = ${eval(calString)}`
    }
    getCalString() {
        const { tenPhepTinh, soA, soB } = this;
        if (tenPhepTinh === 'CONG') return `${soA} + ${soB}`;
        if (tenPhepTinh === 'TRU') return `${soA} - ${soB}`;
        if (tenPhepTinh === 'NHAN') return `${soA} * ${soB}`;
        return `${soA} / ${soB}`;
    }
}
/*
///khi tạo fouder controller và models thì ta làm theo cách này 2 trực tiếp req
app.get('/tinh/:tenPhepTinh/:soA/:soB', require('./controllers/tinhController')); /// (./) ta được phép truy cập vào các file fouder khác cùng cấp và lúc này chưa chạy, chưa biết tính ở đâu
//tạo tạo models
app.listen(3000);
*/