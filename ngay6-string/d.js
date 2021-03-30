const item = `<title>
Bể bơi dát vàng trong biệt thự nơi tổng thống Putin nghỉ dưỡng
</title>
<description>
<![CDATA[
<a href="http://dulich.vnexpress.net/tin-tuc/anh-video/be-boi-dat-van
g-trong-biet-thu-noi-tong-thong-putin-nghi-duong-3634646.html"><img w
idth=130 height=100 src="https://i-dulich.vnecdn.net/2017/08/30/1-150
4063223_180x108.jpg" ></a></br>Biệt thự Sellgren xây trên khu đất rộn
g 1.500 m2, có đá lát bể bơi được dát vàng, spa dưới lòng đất, phòng
làm việc rộng hơn một căn hộ.
]]>
</description>
<pubDate>Wed, 30 Aug 2017 20:03:00 +0700</pubDate>
<link>
http://dulich.vnexpress.net/tin-tuc/anh-video/be-boi-dat-vang-trong-biet-thu-noi-tong-thong-putin-nghi-duong-3634646.html
</link>
<guid>
http://dulich.vnexpress.net/tin-tuc/anh-video/be-boi-dat-vang-trong-biet-thu-noi-tong-thong-putin-nghi-duong-3634646.html
</guid>
<slash:comments>0</slash:comments>
</item>`;

class Tin {
    constructor(id, title, description, image, link) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.link = link;
    }
}

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

console.log(getTinByItem(item));

// console.log(getBody(item, '<title>', '</title>'));
// console.log(getBody(item, '<a href="', '"><img'));
// console.log(getBody(item, '</a></br>', ']]>'));