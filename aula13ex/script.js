function verificar(){
  var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')

   if(fano.value.length == 0 || fano.value > ano ){
       window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
      var gênero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
    
      if(fsex[0].checked){
          gênero = 'Homem'
          if (idade >= 0 && idade < 10){
              //criança
              img.setAttribute('src','imagem/bebe-M.jpg' )
          }else if (idade < 21){
              //jovem
              img.setAttribute('src', 'imagem/jovem-M.jpg')
          }else if (idade < 50){
              //adulto
              img.setAttribute('src', 'imagem/adulto-M.jpg')
          }else{
              //idoso
              img.setAttribute('src', 'imagem/idoso-M.jpg')
          }
      }else if (fsex[1].checked){
          gênero = 'Mulher'
          if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'imagem/bebe-F.jpg')
        }else if (idade < 21){
            //jovem
            img.setAttribute('src', 'imagem/jovem-F.jpg')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'imagem/adulto-F.jpg')
        }else{
            //idoso
            img.setAttribute('src', 'imagem/idoso-F.jpg')
        }
      }
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos. `
      res.appendChild(img)
   }
}