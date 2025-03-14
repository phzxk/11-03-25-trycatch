// const nome = "Pedro"; // nome da variável // ("const") só leitura


// try  { // inicia compilação e tudo que estiver no bloco de baixo
//     nome = "Messi"; 
// } catch (err) { // (catch) = vai capturar o erro e mandar para  variável - essa linha inicia o bloco de notas do catch (err) - variável
//     console.error("Ops! A variável somente leitura 'nome' não pode ser alterada. Veja o erro: " + err); // (console.error) - vai mandar um texto que está na linha, e o ("err") recebe a captura e erro do catch
// } // encerra o bloco de notas do catch

// console.log("Teste");

// nome = "Pedro"; 

// console.log("Teste2");


// quando voce executa um codigo ilegal, ele trava e não deixa continuar a execução do script

function fazerLogin(){ //linha que declara função fazer login
    let usuario = document.getElementById("txtLogin"); // ela vai receber o elemento inteiro e vai receber o ("txtUsuario")
    let senha = document.getElementById("txtSenha"); // declaração do tipo temporaria a qual ela vai receber o ("txtSenha")
    try { //inicia a tentativa de execução de tudo que estiver dentro do bloco try 
    if (usuario.value !== "usuario123"){
        usuario.focus(); //vai verificar o valor do elemento usuario (txtLogin), quando tem ! significa que é diferente, == + ! totalmente diferente, == diferente
          throw new Error ("Erro: Usuario invalido."); // "throw" - lançar um novo erro, existe vários tipos de erro
          } // encerra o bloco de codigos do if usuario
    if (senha.value !== "senha123") {
        senha.focus();  //validar se o que foi digitado é diferene de "senha123," se for diferente vai aparecer a mensagem de error, se for a certa aparece a de login realizado co sucesso

        throw new Error ("Erro: Senha Incorreta")
    }// encerra o bloco de codigos do if senha



        console.log("Login realizado com sucesso.");
    } catch (erro){ // vai capturar o erro que forem lançados dentro do "try" e enviar para  variavel erro
        console.error(erro.message); // enviar a mensagem de erro no console
    } // fecha o bloco de codigos do catch

} // encerra o bloco de codigos da função fazer login

    
