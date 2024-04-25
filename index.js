async function getApiIBGE() {
    try {
      const info = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`) 
      const jsonInfo = await info.json()
      console.log(jsonInfo)
    } catch (error) {
      console.error(error)
    }
  }
  


 

  getApiIBGE();


  
