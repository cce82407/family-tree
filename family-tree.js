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
  
  log(){
    let tree = `-- ${this.value}\n`
    for (let i = 0; i < this.children.length; i++){
      tree += `---- ${this.children[i].value}\n`
      if (this.children[i].children){
        for(let j = 0; j <this.children[i].children.length; j++){
            tree += `------ ${this.children[i].children[j].value}\n`
        }
      }
    }
    return tree
  }
}

//This is the suite of testing I did for this problem at different times while solving. 
// const test = new FamilyTree('pops')
// test.insert('Mike')
// test.insert('Susy')
// //console.log(test)
// //console.log(test.children[1])
// const susy = test.children[1]
// susy.insert('Jennifer')
// susy.insert('Arnold')
// const mike = test.children[0]
// mike.insert('Adrianna')
// mike.insert('Bethany')
// mike.insert('Chad')
// test.insert('Damien')
// //console.log(mike)
// //console.log(susy)
// console.log(test)
// // console.log(test.value)
// // console.log(test.children[0].value)
// // console.log(test.children[0].children[0].value)
// const famTree = test.log()
// console.log(famTree)

module.exports = FamilyTree;

//let test2 = test.children.filter(x => x.value === 'Susy')[0]
//console.log(test2)