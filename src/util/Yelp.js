const apiKey = '60q2wJq9bduZ-NEPD0miejp8daZqs_m0oEJ62KexENx7HAwrztoVN9lHWwl2-zcEd3vbEFOq2U4uAMpowY4xFPA8jzq8BwiNykm045xvTTXV1-ifbZrty6BjLo6VWnYx'

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
                Authorization: `Bearer ${apiKey}`
               }
     }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    location: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                   }
          });
        }
      });
  }
};

export default Yelp;
