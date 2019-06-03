export class Product {

    public static prev_id = 0;
    public id:number;
    
    constructor(
        public sku: string,
        public name: string,
        public image: string,
        public categories: string[],
        public price: number,
        public date: string,){
            this.id = ++Product.prev_id;
        }
  }