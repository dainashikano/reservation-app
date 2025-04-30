const Product = require('./model/product');

class FakeDb {

    constructor() {
        this.products = [
            {
                name: 'Phone XL',
                price: 799,
                stock: 50,
                description: 'A large phone with one of the best screens',
                heading1: 'aaaaaa',
                heading2: 'bbbbbb',
                heading3: 'cccccc',
                headingtext1: 'サンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル',
                headingtext2: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
                headingtext3: 'テキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキスト',
                coverImage: '/assets/img/phone-cover.jpg'
              },
              {
                name: 'Phone Mini',
                price: 699,
                stock: 45,
                description: 'A great phone with one of the best cameras',
                heading1: 'dddddd',
                heading2: 'eeeeee',
                heading3: 'ffffff',
                headingtext1: 'サンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル',
                headingtext2: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
                headingtext3: 'テキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキスト',
                coverImage: '/assets/img/phone-cover.jpg'
              },
              {
                name: 'Phone Standard',
                price: 299,
                stock: 30,
                description: '',
                heading1: 'ggggggg',
                heading2: 'hhhhhhh',
                heading3: 'iiiiiii',
                headingtext1: 'サンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル',
                headingtext2: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
                headingtext3: 'テキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキスト',
                coverImage: '/assets/img/phone-cover.jpg'
              },
              {
                name: 'Phone Special',
                price: 999,
                stock: 55,
                description: 'A special phone with one of the audios',
                heading1: 'jjjjjjj',
                heading2: 'kkkkkkk',
                heading3: 'lllllll',
                headingtext1: 'サンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル　サンプル　サンプルサンプル　サンプル　サンプル',
                headingtext2: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
                headingtext3: 'テキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキストテキスト　テキスト　テキスト　テキスト　テキスト',
                coverImage: '/assets/img/phone-cover.jpg'
              }
        ]
    }
    
    async cleanDb() {
        await Product.deleteMany({})
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    async initDb() {
        await this.cleanDb()
        this.pushProductsToDb()
    }
}

module.exports = FakeDb;