function needToPay() {
    let borrow = parseInt(document.getElementById("borrow").value);
    let month = parseInt(document.getElementById("month").value);
    let principal= borrow/month;
    let rate=parseFloat(document.getElementById("rate").value);
    let ratemoney=0;
    let pay=0;
    for(let i=0;i<month;i++){
        ratemoney=(borrow-principal)/month*rate/100;
        pay=principal+ratemoney;
    }document.getElementById("pay").innerHTML="Khách hàng phải trả trong mỗi tháng " +pay + " triệu đồng"
}
