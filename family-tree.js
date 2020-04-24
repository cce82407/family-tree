class FamilyTree {
  constructor (name) {
    if (typeof name !== 'string' || !name){
      throw Error
    }
    this.value = name
    this.children = []
    
  }
  insert(childName){
    const child = new FamilyTree(`${childName}`)
    this.children.push(child)

    
  }
  familySize(){
    return this.children.length + 1
  }
  findMember(memberToFind){
      return this.children.filter(x => x.value === memberToFind)[0]
    }
  
  log(){}
}

const test = new FamilyTree('pops')
test.insert('Mike')
test.insert('Susy')
console.log(test)
console.log(test.children[1])
module.exports = FamilyTree;

let test2 = test.children.filter(x => x.value === 'Susy')[0]
console.log(test2)