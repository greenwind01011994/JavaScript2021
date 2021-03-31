class PhepTinh {        //class PhepTinh vào models
    constructor(tenPhepTinh, soA, soB) {
        this.tenPhepTinh = tenPhepTinh;
        this.soA = soA;
        this.soB = soB;
    }
    _getChuoiPhepTinh() {
        const {tenPhepTinh, soA, soB} = this
        if (tenPhepTinh ==='CONG') return `${soA} + ${soB}`;
        if (tenPhepTinh ==='TRU') return  `${soA} - ${soB}`;
        if (tenPhepTinh ==='NHAN') return `${soA} * ${soB}`;
        return `${soA} / ${soB}`;
    }
    getResultString() {
        const chuoiPhepTinh = this._getChuoiPhepTinh     //không nên gọi getChuoiPhepTinh vì nó sẽ hiểu là function ở ngoài 
        const result = eval(chuoiPhepTinh);
        return `${chuoiPhepTinh} = ${result}`;
    }
}
module.exports = Tinh;