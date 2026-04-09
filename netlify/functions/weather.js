exports.handler = async function () {
  try {
    // Dados atuais de Ilhéus
    const previsao = {
      atual: {
        temp: 26,
        condicao: "Parcialmente ensolarado",
        max: 31,
        min: 23
      },
      dias: [
        {
          nome: "Hoje",
          condicao: "Ensolarado",
          max: 31,
          min: 23
        },
        {
          nome: "Amanhã",
          condicao: "Sol entre nuvens",
          max: 30,
          min: 23
        },
        {
          nome: "Sábado",
          condicao: "Ensolarado a parcialmente nublado",
          max: 30,
          min: 23
        }
      ]
    };

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(previsao)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        erro: "Erro ao carregar previsão",
        detalhe: error.message
      })
    };
  }
};
