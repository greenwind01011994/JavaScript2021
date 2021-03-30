const data = require('./dataMock');
const Tin = require('./Tin');

const arrItems = data.split('<item>');
arrItems.splice(0, 1);

function getBody(str, pre, post) {
    const start = str.indexOf(pre) + pre.length;
    const end = str.indexOf(post);
    return str.slice(start, end).trim();
}

function getTinByItem(anItem) {
    const title = getBody(anItem, '<title>', '</title>');
    const link = getBody(anItem, '<a href="', '"><img');
    const description = getBody(anItem, '</a></br>', ']]>');
    const image = getBody(anItem, 'src="', '" ></a></br>');
    const arrTemp = link.split('-');
    const idHtml = arrTemp[arrTemp.length - 1];
    const id = idHtml.substring(0, idHtml.length - 5);
    return new Tin(id, title, description, image, link);
}

const arrTin = arrItems.map(getTinByItem); 

console.log(arrTin.length);
// viet ra cac function

//http://vnexpress.net/rss/tin-moi-nhat.rss