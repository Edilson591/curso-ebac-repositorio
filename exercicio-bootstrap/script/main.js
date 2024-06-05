$(function() {
    $("#telefone").mask("(00) 00000-0000")
    $("#email").mask("A", {
        translation: {
            "A":{pattern: /[\w@\-.+]/, recursive: true}
        }
    })

    $('#myForm').validate({
        messages: {
            name:"Por favor, insira seu nome",
            email:"Digite seu email corretamente",
            telefone:"insira seu telefone corretamente",
        }

    })
});