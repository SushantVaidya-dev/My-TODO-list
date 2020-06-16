// create text node

// var h=document.createElement('h1')
// var myValue=document.createTextNode('hello world')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)


// While loop

// var val = 5
// while(val>0){
//     console.log(val)
//     val--;
// }





var ul = document.getElementById('list')
var li 

var addButton = document.getElementById('add')
addButton.addEventListener('click',addItem)

var remButton = document.getElementById('remove')
remButton.addEventListener('click',remItem)

function remItem(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
       while (li[index] && li[index].children[0].checked) {
           ul.removeChild(li[index])

       }
        
    }
    
}

function addItem(){
    var input = document.querySelector('input')
    var item = input.value
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)
    if(item==''){
        return false
    }else{
        //create li
        li=document.createElement('li')
        //create checkbox
        var checkbox = document.createElement('input')
        checkbox.type='checkbox'
        checkbox.setAttribute('class','check')
        
        //create label
        var label = document.createElement('label')
        label.setAttribute('class','label')

        //add elements on webpage
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0])
        li.className='visual'
        
    }
    input.value=''
}
