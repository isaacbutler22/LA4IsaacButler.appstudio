let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']
let withSal = petNames
withSal.push('sal')
console.log(withSal)
console.log(`The third pets name is ${withSal[2]}`)
let withSalLength = withSal.length
console.log(`The array has ${withSalLength} names in it`)
withSal.pop()
