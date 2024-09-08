#utf-8
#language: pt

Funcionalidade: testePreencherAbas - Cadastro dos dados no Portal
    Cenário: Preencher e navegar pelas abas do formulário
        Dado que acesso o portal Vehicle Insurance Application 
        Quando clico no botao Automobile
        E preencho os dados obrigatorios na aba Enter Vehicle Data
        E preencho os dados obrigatorios na aba Enter Insurant Data
        E preencho os dados obrigatorios na aba Enter Product Data
        Então escolho a faixa de preço na aba Select Price Option