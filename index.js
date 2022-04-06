// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw this way')
        }
    }
}



// Constructor Function
function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0};
    let computeOptimumLocation = function(factor) {
        defaultLocation.x += 1
        defaultLocation.y += 7
    };
    this.getDefaultLocation = function() {
        return defaultLocation
    };
    this.draw = function() {
        computeOptimumLocation(0.1)
        // defaultLocation
        // this.radius
        console.log('draw that way')
    };
    Object.defineProperty(this, 'defaultLocation', 
    {get: function() {
        return defaultLocation;
    },
    set: function(value) {
        if (!value.x || !value.y)
            throw new Error('Invalid location.');
    }})
}

const Circle1 = new Function('radius', 
                `this.radius = radius,
                this.draw = function() {
                    console.log('draw that way')
                }`)

const circle = new Circle(10)
circle.defaultLocation
circle.draw()

circle.location = {x: 1}
circle['location'] = {x: 2}

const propertyName = 'center-location'
// circle['center-location']
circle[propertyName] = {x:3}

delete circle.location

// for (let key in circle) {
//     if (typeof circle[key] !== 'function')
//         console.log(key, circle[key])
// }

const keysCircle = Object.keys(circle)
console.log(keysCircle)

if ('radius' in circle)
    console.log('Circle has \'radius\'')

Circle.call({}, 1)
Circle.apply({}, [1,2,3])

const another = new Circle(2)

let x = {value: 10}
let y = x

x.value = 20
y.value = 30

let obj = {value: 10}

function increase(obj) {
    obj.value++
    // console.log('inside:', obj)
}

increase(obj)
// console.log('outside:', obj)