function verificar() {

    var data= new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.getElementById('res')
    var foto = document.getElementById('foto')

    if ( fano.value.length == 0 || fano.value > ano ){
       window.alert('[erro] verifique novamente os valores informados')

     }else {
         var fsex =document.getElementsByName('radsex')
         var idade = ano - Number(fano.value) 
         var genero= ''
         var img = document.getElementById('img')
    
     if( fsex[0].checked ){
         genero='homem'

         if(idade >=0 && idade<10 ){
         //criança
         img.src= ('foto-bebe-m.png')

         }else if (idade <21){
         //jovem
         img.src=('foto-jovem-m.png')

         }else if (idade <45){
         //adulto
         img.src=('foto-adulto-m.png')

         }else {
         //idoso
         img.src=('foto-idoso-m.png')
         }


     }else if(fsex[1].checked){
         genero='mulher'
          if(idade >=0 && idade<10 ){
         //criança
         img.src=('foto-bebe-f.png')
         }else if (idade <21){
         //jovem
         img.src=('foto-jovem-f.png')
         }else if (idade <45){
         //adulto
         img.src=('foto-adulto-f.png')
         }else {
         //idoso
         img.src=('foto-idoso-f.png')
         
         }
        }
         res.innerHTML =(`Vc é ${genero} de  ${idade} anos`)
         res.style.textAlign= 'right'
     
    }
}
