//?? npm install komutu ile gerekli paketler kurulur. Python pip e benziyor.
//?? Githuba kod gönderirken bu indirilen paketler ayrı tutulur çünkü dosya boyutları çok fazla.
//?? npm yerine yarn kullanılabilir.

//?? konsola yazdırma işlemi.

console.log('Hello World!!')

//?? Değişken tanımlama.

var sample = 'sample'   //! var = variable 
console.log(sample)
sample = 'sample2'      //! bir değişkenin değeri var kullanmadan değiştirilebilir.
console.log(sample)

//sample1 = 'sample1'     //! var kullanılmadan değişken olusturulamaz.
//console.log(sample1)    //! hata verir.

var sample1
console.log(sample1)     //! undefined değerini verir. Bir değişken tanımlanmadıysa bu çıktıyı verir.
sample1 = 'sample1'
console.log(sample1)     //! sonradan değer verilebilir.

console.log("===============================")

//!! var eskiden kullanılan bir değişken tanımlama yöntemidir.
//!! var bir global değişken tanımlar. fonksiyonların dışında tanımlandıysa fonksiyon içinde farklı bir değer verdiğinizde dışarıdaki değer de değşir.
var message = 'hello'
console.log(message)
message = 'HELLOOO'

{
    var message = 'world' //! daha önceden tanımlanmış değer de değişti. başına var koyup koymamanız birşey değiştirmez.
    console.log(message)
}
console.log(message)

//!! köşeli parentez fonksiyon gibi çalışır.
//!! 2 farklı yerde message değişkeni konsola yazdırıldı fakat ikiside aynı mesajı döndürdü.

console.log("===============================")

//?? let ile değişken tanımlama.

//!! let ile tanımlanan değişkenlerde bu durum geçerli değildir.
//!! let bir değişken tanımlar. fonksiyonların dışında tanımlandıysa fonksiyon içinde farklı bir değer verdiğinizde dışarıdaki değer değişmez.
//!! let in değerinin değişmemesi için tekrardan tanımlama yapılması gerekmektedir. 

let message1 = 'hello'
console.log(message1)

message1 = 'HELLOOOO'

{
    let message1 = 'world' //! let ile tanımlamasaydık dışarıdaki değer de değişirdi.
    console.log(message1)  //! let ile tekrar tanımlandığı için fonksiyon içinde yapılan değişiklikler dışarıdaki değişkeni etkilemez.
}
console.log(message1)

//!! 2 yazdırma işlemi de farklı çıktı verdi.

console.log("===============================")

//?? const ile değişken tanımlama.

//!! const ile tanımlanan değişkenler değiştirilemez.
//!! 1 defa tanımlanır ve değiştirilemez.

const message2 = 'hello'
//message2 = 'HELLO'      //! değeri değiştiremedimiz için hata verir.
console.log(message2)

{
    const message2 = 'world'  //! const ile tekrar tanımlamasaydık hata vermesine neden olurduk.
    console.log(message2)
}

console.log(message2)

//* spoiler alert for marvel what if 
//!!! const marvel ın what if dizisinde doctor strange in değiştirmeye çalıştığı sabit noktaya benziyor. 
//* spoiler alert for marvel what if

console.log("===============================")

//?? array tanımlama
//!! python list ile benziyor. bir liste oluşturmaya yarar.

let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]
console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

//!! for ile döngü açtık ve konutKredileri.length kadar döndürdük.
//!! lenght pythondaki len e karşılık geliyor.
//!! i = 0 ise 
//!! i++ i nin değeri 1 artırılıyor ama i nin arttırılmadan önceki değerini döndürüyor.
//!! ++i i nin değeri 1 artırılıyor ve i nin anlık değerini bize veriyor.

/* let i = 0, j = 0
console.log(++i);  //  1
console.log(j++);  //  0
console.log(i);    //  1
console.log(j);    //  1
 */
