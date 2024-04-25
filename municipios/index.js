async function getApiIBGE() {
    try {
      const info = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios`) 
      const jsonInfo = await info.json()
      console.log(jsonInfo)
      teste(jsonInfo)
    } catch (error) {
      console.error(error)
    }
  }