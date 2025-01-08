import {back} from "../services/back"

type DevisType = {
  name: string,
  email: string,
  tel: string,
  adresse: string,
  title: string,
  description: string
}

export const httpDeviService = {
  index: async() => {
    const devis = await back("/devis_list")

    return devis
  },

  create: async(devis: DevisType) => {
    const {name, email, tel, adresse, title, description} = devis

    const body = new FormData();
    
    body.append('name', name)
    body.append('email', email)
    body.append('tel', tel)
    body.append('adresse', adresse)
    body.append('title', title)
    body.append('description', description)

    const result = await back("/devi/store", {
      method: 'POST',
      body
    })

    return result
  }
}