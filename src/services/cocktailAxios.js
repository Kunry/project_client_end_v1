import InitAxios from "./initAxios";

class CocktailAxios extends InitAxios {
  constructor() {
    super('/cocktail')
  }

  getAllCocktails(query) {
    return this.axios.get(`/?offset=${query.page}`).then((response) => response.data)
  }

  getOneCocktailById(id) {
    return this.axios.get(`/${id}`).then((response) => response.data);
  }

  createCocktail(body) {
    return this.axios.post('/', body).then((response) => response.data);
  }

  updateCocktail(id, body) {
    return this.axios.put(`/${id}`, body).then((response) => response.data);
  }

  deleteCocktail(id) {
    return this.axios.delete(`/${id}`).then((response) => response.data);
  }
}

export default CocktailAxios;