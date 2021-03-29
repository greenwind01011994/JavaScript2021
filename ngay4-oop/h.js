// Point
// Line getLength -> do dai cua doan thang
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// Line.compare();
// them 1 san pham 

class Line {
    static compare(l1, l2) { //class method // static method
        return l1.getLength() > l2.getLength();
    }
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }

    getLength() { //instance method
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }   
}

class Triangle {
    constructor(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }

    getPerimeter() {
        const l1 = new Line(this.pointA, this.pointB);
        const l2 = new Line(this.pointA, this.pointC);
        const l3 = new Line(this.pointB, this.pointC);
        return l1.getLength() + l2.getLength() + l3.getLength();
    }
}

const p1 = new Point(0, 0);
const p2 = new Point(1, 1);
const l1 = new Line(p1, p2);
const l2 = new Line(p2, p1);

console.log(Line.compare(l2, l1));

console.log(l1.getLength());