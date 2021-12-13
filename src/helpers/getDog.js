const getDog = async (breedId) => {
        //let url;
        /*if (breedId === 0 || breedId === undefined) {
          url = `https://api.thedogapi.com/v1/images/search`;
        } else {
          url = `https://api.TheDogAPI.com/v1/images/search?breed_ids=${breedId}`;
        }*/
        const url = !breedId === 0 || breedId === undefined
            ? `https://api.thedogapi.com/v1/images/search`
            : `https://api.TheDogAPI.com/v1/images/search?breed_ids=${breedId}`;
        
        
        const res = await fetch(url);
        if (!res.ok) {
          const { url, status, statusText } = res;
          throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
        }
        const [data] = await res.json();

        let {url: image, breeds:[breed] } = data;
        
        //console.log(data);

        if(!breed){
            breed = {
                id:0,
                name:'randow'
            }
        }

        const dog = {
            image,
            breed,
        };

        return dog;
};

export default getDog;
