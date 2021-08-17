function customGrid(dimension){
    let str = '';
        for (let i=0; i<dimension; i++) {
            for (let i=0; i<dimension; i++ ) {
                str+='*'
                console.log('computing, please wait ')
            }
            str+='\n'
        }
        return str
}
let input = parseInt(prompt('please enter the grid dimension that you want to create!'))
console.log(customGrid(input))