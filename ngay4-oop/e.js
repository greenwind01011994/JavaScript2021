const khoa = {
    name: 'Khoa Pham',
    company: {
        name: 'KPTraining',
        address: '92 LTR'
    }
};

const giao = {
    partner: khoa
};

khoa.partner = giao;

console.log(khoa.partner.partner.partner.partner.name);