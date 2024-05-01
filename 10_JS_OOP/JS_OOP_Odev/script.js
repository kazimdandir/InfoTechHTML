// Sipariş ve Müşteri Listeleri
let orders = [];
let customers = [];

// Sipariş Ekleme Fonksiyonu
function addOrder() {
    // Form bilgilerini al
    const customerName = document.getElementById("customerName").value;
    const customerSurname = document.getElementById("customerSurname").value;
    const customerBalance = parseFloat(document.getElementById("customerBalance").value);
    const productName = document.getElementById("productName").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const price = parseFloat(document.getElementById("price").value);

    // Sipariş toplamını hesapla ve göster
    const orderTotal = quantity * price;
    document.getElementById("customerTotal").innerHTML = `${customerName} ${customerSurname}'ın toplam sipariş tutarı: ${orderTotal}`;

    // Yeni sipariş nesnesi oluştur
    const order = {
        customerName: customerName,
        customerSurname: customerSurname,
        productName: productName,
        quantity: quantity,
        price: price
    };

    // Sipariş listesine ekle
    orders.push(order); //push(), bir diziye yeni öğeler eklemek için kullanılır.

    // Müşteri daha önce eklenmemişse, müşteri listesine ekle ve seçim kutusunu güncelle
    if (!customers.includes(customerName)) { //includes(), bir dizinin belirli bir öğeyi içerip içermediğini kontrol etmek için kullanılır.
        customers.push(customerName);
        updateCustomerSelect();
    }

    // Siparişleri görüntüle
    displayOrders();
}

// Müşteri Seçim Kutusu Güncelleme Fonksiyonu
function updateCustomerSelect() {
    const selectElement = document.getElementById("customerSelect");
    selectElement.innerHTML = "<option value=''>Müşteri Seçiniz</option>";
    
    customers.forEach(customer => {
        const option = document.createElement("option"); //document.createElement(), belirtilen bir HTML etiketi adında yeni bir HTML öğesi oluşturur.
        option.value = customer; //value özelliği, <option> öğesinin değerini belirtir. 
        option.text = customer; //text özelliği ise <option> öğesinin metin içeriğini belirtir. 
        selectElement.appendChild(option); //appendChild(), belirtilen bir HTML öğesini başka bir HTML öğesine eklemek için kullanılır. 
    });
}

// Siparişleri Görüntüleme Fonksiyonları
function displayOrders() {
    const tableBody = document.getElementById("orderDetails");
    tableBody.innerHTML = "";

    orders.forEach(order => {
        const row = `<tr>
                        <td>${order.customerName}</td>
                        <td>${order.customerSurname}</td>
                        <td>${order.productName}</td>
                        <td>${order.quantity}</td>
                        <td>${order.price}</td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}

function displayCustomerOrders() {
    const selectedCustomer = document.getElementById("customerSelect").value;

    const customerOrders = orders.filter(order => order.customerName === selectedCustomer); //filter(), bir dizi üzerinde filtreleme yapmak için kullanılır. Belirtilen bir koşulu sağlayan tüm öğeleri içeren yeni bir dizi döndürür.

    const tableBody = document.getElementById("orderDetails");
    tableBody.innerHTML = "";

    customerOrders.forEach(order => {
        const row = `<tr>
                        <td>${order.customerName}</td>
                        <td>${order.customerSurname}</td>
                        <td>${order.productName}</td>
                        <td>${order.quantity}</td>
                        <td>${order.price}</td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}
