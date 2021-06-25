let types = new Map()
types.set('iphone', 'mobile')
types.set('kingfisher', 'bird')
types.set('benz','car')

// Entries, Keys and Values
a = types.entries()
console.log(a)
console.log(types.keys())
console.log(types.values())

// Finding using get and has
console.log(types.get('bmw'))
console.log(types.has('cat'))

console.log(types.get('benz'))
console.log(types.has('dog'))
// Size of a set
console.log(types.size)

// Clearing can be done using types.clear()

// Looping: 1st way
console.log(types.entries())
for(let [key,value] of types)
console.log(key+ ' is a/an ' + value)

//Looping: 2nd Way
types.forEach((keys,values)=>{
    console.log(keys,values)
});