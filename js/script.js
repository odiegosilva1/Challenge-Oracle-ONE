
    

function encriptar(){
    var str = document.getElementById('str').value;
    limpaInput();
    
    /**
     * Para retira acentos e caracteres utilzando replace, também coloca tudo em minusculo;
     * para maiores informaçoes segue o link
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
     * https://blog.dbins.com.br/remover-acentos-e-caracteres-especiais-com-javascript
     */
    var inputCripot = str.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase();
    
    var mensEncript = inputCripot.replace(/e/g, 'enter');
    mensEncript = mensEncript.replace(/i/g, 'imes');
    mensEncript = mensEncript.replace(/a/g, 'ai');
    mensEncript = mensEncript.replace(/o/g, 'ober');
    mensEncript = mensEncript.replace(/u/g, 'ufat');
    
    document.getElementById('resultado').value = mensEncript;
    
    }
    
    
    
    function limpaInput(){
        document.getElementById('str').value='';
    }
    
    /**
     * Pegamos o texo ques esta encriptado e percorreremos o caminha contrario
     */
    function desencriptar(){
    
        var str = document.getElementById('str').value;
    
        var mensDesenEncript = str.replace(/enter/g, 'e');
        mensDesenEncript = mensDesenEncript.replace(/imes/g, 'i');
        mensDesenEncript = mensDesenEncript.replace(/ai/g, 'a');
        mensDesenEncript = mensDesenEncript.replace(/ober/g, 'o');
        mensDesenEncript = mensDesenEncript.replace(/ufat/g, 'u');
    
    
        document.getElementById('resultado').value = mensDesenEncript;
        limpaInput();
    
    }
    /**
     * Função para copiar o texto 
     * Rererencia
     * https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
     */
    function copiarMensagem() {
        
        var copyText = document.getElementById("resultado");
        
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
       
        navigator.clipboard.writeText(copyText.value);
        document.getElementById("resultado").value = 'Texto Copiado!';
       
      }
      
    
     
