import { AppState } from "../AppState.js";

export class Homes {

    constructor(data) {
        this.creator = data.creator.name
        this.description = data.description
        this.bathrooms = data.bathrooms
        this.bedrooms = data.bedrooms
        this.levels = data.levels
        this.year = data.year
        this.price = data.price
        this.imgUrl = data.imgUrl
    }


    get activeHomeTemplate() {
        return `
         <div class="col-md-4 pb-3">
       <div class="d-flex justify-content-center">
           <div class="card" style="width: 18rem">
               <img src="${this.imgUrl}" class="card-img-top" alt="..." />
               <div class="card-body">
                   <h4 class="card-title">${this.creator}</h4>
                <h5 class="card-title">${this.description}</h5>
                   <p>${this.bathrooms} bathrooms</p>
                   <p>${this.bedrooms} bedrooms</p>
                   <p>It has ${this.levels} levels</p>
                   <p>$${this.price}</p>
                   <p>It was built in ${this.year}</p>
                   <div class="d-flex justify-content-end">
                   <button class="btn btn-outline-danger">Demolish</button>
    </div>
                </div>
           </div>
       </div>
   </div>
            `
    }
}


// bathrooms: 2
// bedrooms 3
// createdAt "2023-05-11T21:41:07.979Z"
// creator{ _id: '63f7d6202d1cf882287f12e2', name: 'Charles Francis Xavier', picture: 'https://media.tumblr.com/73b6bbb5a253780cfa957f4afd8d9e86/tumblr_inline_mqe0j8cDgp1qz4rgp.gif', id: '63f7d6202d1cf882287f12e2' }
// creatorId:"63f7d6202d1cf882287f12e2"
// description:"Super sick house"
// id:"645d60f381faf24223ae886b"
// imgUrl:"https://floorcentral.com/wp-content/uploads/2014/07/sick-house-syndrome.jpg"
// levels :2
// price : 230000
// updatedAt : "2023-05-11T21:41:07.979Z"
// year : 2003
// __v :0
// _id: "645d60