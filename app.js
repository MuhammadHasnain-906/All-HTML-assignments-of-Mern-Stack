var a = document.getElementById('ul')

function btn(){
var add = document.getElementById('addtodo')
var li = document.createElement('li')
var textinsert = document.createTextNode(add.value)
li.appendChild(textinsert)
a.appendChild(li)
add.value = ''
var del = document.createElement('button')
var delbtn = document.createTextNode('Delete')
del.appendChild(delbtn)
li.appendChild(del)
del.setAttribute('onclick','Delete(this)') 
var editbtn = document.createElement('button')
var editbtntext = document.createTextNode('Edit')
editbtn.appendChild(editbtntext)
li.appendChild(editbtn)
editbtn.setAttribute('onclick','Edit(this)')
editbtn.setAttribute('style','background-color:rgb(8, 6, 133)');
editbtn.style.color='white';
editbtn.style.marginLeft='400px';
editbtn.style.border='1px solid rgb(8, 6, 133)';
editbtn.style.fontSize='16px';
editbtn.style.borderRadius='3px';
editbtn.style.display='grid';
editbtn.style.marginTop='-23px';


del.setAttribute('style','background-color:rgb(8, 6, 133)');
del.style.color='white';
del.style.marginLeft='330px';
del.style.border='1px solid rgb(8, 6, 133)';
del.style.fontSize='16px';
del.style.borderRadius='3px';
del.style.display='grid';
del.style.marginTop='-20px';



}
// editbtntext.className('abcd')
function Delete(e){
e.parentNode.remove()

}

document.querySelector('Edit').className="abcd";
console.log('abcd')



function Edit(e){
    var a = prompt('Enter value which you wanna edit',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue =a
}
