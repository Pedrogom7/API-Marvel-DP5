class confApi {
  url = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b07e2d0a58c78202a510243d72f8bbb7&hash=7bd7de8c7700a92f3f0fa1dd0cc4ec8f';
  public async get() {
    const response = await fetch(this.url);
    const responseJson = await response.json();
    return responseJson
  }
}

export default new confApi();

