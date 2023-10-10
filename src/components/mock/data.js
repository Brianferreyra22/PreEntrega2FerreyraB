const list = [
    {id: '01', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/Hr1R8T9z/1.png'},
    {id: '02', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/c6KbDvDT/2.png'},
    {id: '03', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/N2rCLnyZ/3.png'},
    {id: '04', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/kDkhL7zC/4.png'},
    {id: '05', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/nsHWTT5Q/5.png'},
    {id: '06', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/PL2R7YsV/6.png'},
    {id: '07', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/r0sP2sqV/7.png'},
    {id: '08', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/1ndYmSzp/8.png'},
    {id: '09', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/ykcrHwCZ/9.png'},
    {id: '10', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/dh9H7r1Q/10.png'},
    {id: '11', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/nXxSc0nw/11.png'},
    {id: '12', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/LqCxDSLr/12.png'},
    {id: '13', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/TyYkn1LV/13.png'},
    {id: '14', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/628Y1PhT/14.png'},
    {id: '15', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/k6Lfryjs/15.png'},
    {id: '16', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/D4s57bHT/16.png'},
    {id: '17', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/Bt1mTd6V/17.png'},
    {id: '18', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/1fGMTwD0/18.png'},
    {id: '19', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/JsRKW0Qf/19.png'},
    {id: '20', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/mPVjZ4Xt/20.png'},
    {id: '21', name: 'billetera', category:  'billeteras', stock: '5', price: '2500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/XZJ8pPmx/21.png'},
    {id: '22', name: 'ruana', category:  'ruanas', stock: '5', price: '3500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/Hj2d1pFf/1.png'},
    {id: '23', name: 'ruana', category:  'ruanas', stock: '5', price: '3500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/TKZXJhWW/2.png'},
    {id: '24', name: 'ruana', category:  'ruanas', stock: '5', price: '3500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/yk8BVMHW/3.png'},
    {id: '25', name: 'ruana', category:  'ruanas', stock: '5', price: '3500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/Xp1WXsjL/4.png'},
    {id: '26', name: 'ruana', category:  'ruanas', stock: '5', price: '3500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/75CkzSbk/5.png'},
    {id: '27', name: 'ruana', category:  'ruanas', stock: '5', price: '3500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/cKwG9ZQk/6.png'},
    {id: '28', name: 'ruana', category:  'ruanas', stock: '5', price: '3500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/TLxMBS0d/7.png'},
    {id: '29', name: 'ruana', category:  'ruanas', stock: '5', price: '3500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/hQPFtdNN/8.png'},
    {id: '30', name: 'ruana', category:  'ruanas', stock: '5', price: '3500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/N9xqt4C1/9.png'},
    {id: '31', name: 'ruana', category:  'ruanas', stock: '5', price: '3500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/t7XG5K7D/10.png'},
    {id: '32', name: 'ruana', category:  'ruanas', stock: '5', price: '3500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/232RX0ZY/11.png'},
    {id: '33', name: 'ruana', category:  'ruanas', stock: '5', price: '3500', description: 'lorenlorenloren', img: 'https://i.postimg.cc/rKsX651r/12.png'},
    {id: '34', name: 'turbante', category:  'turbantes', stock: '5', price: '1800', description: 'lorenlorenloren', img: 'https://i.postimg.cc/Z9GKnVL2/1.png'},
    {id: '33', name: 'turbante', category:  'turbantes', stock: '5', price: '1800', description: 'lorenlorenloren', img: 'https://i.postimg.cc/sQ5fh76X/2.png'},
    {id: '33', name: 'turbante', category:  'turbantes', stock: '5', price: '1800', description: 'lorenlorenloren', img: 'https://i.postimg.cc/0Kf8txq1/3.png'},
    {id: '33', name: 'turbante', category:  'turbantes', stock: '5', price: '1800', description: 'lorenlorenloren', img: 'https://i.postimg.cc/4HZfbyq1/4.png'},
    {id: '33', name: 'turbante', category:  'turbantes', stock: '5', price: '1800', description: 'lorenlorenloren', img: 'https://i.postimg.cc/dDKrSBK5/5.png'},
    {id: '33', name: 'turbante', category:  'turbantes', stock: '5', price: '1800', description: 'lorenlorenloren', img: 'https://i.postimg.cc/Thqg8Ddf/6.png'},
    {id: '33', name: 'turbante', category:  'turbantes', stock: '5', price: '1800', description: 'lorenlorenloren', img: 'https://i.postimg.cc/HVY5Tkn5/7.png'},
]

export const getProducts =() => {
    return new Promise ( (resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if (error){
                reject("no hay, intente mas tarde")
            } else{
                resolve(list)
            }
        },2000)
    })
}

export const getItem = (id) => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(list.find((item)=> item.id === id ))
        },2000)
    })
}