export class Product {

    public static prev_id = 0;
    public id:number;
    
    constructor(
        public name: string,
        public sku: string=null,
        public image: File=null,
        public categories: string[]=null,
        public price: number=null,
        public date: string=null){
            this.id = ++Product.prev_id;
        }
  }