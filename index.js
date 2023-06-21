//-----Mac Book Default price store in variable--------//
const macBookPrice = parseFloat(document.getElementById("best-price").innerText);
//--------memory section start-----//
//---memory size and memory cost store in variable----//
const memory8GB = document.getElementById("memory-8gb");
const memory16GB = document.getElementById("memory-16gb");
const memoryCost= document.getElementById("memory-cost");
//-----click handeler for memory button----//
memory8GB.addEventListener("click",function(){
    memoryCost.innerText = "50";

}
);
memory16GB.addEventListener("click",function(){
    memoryCost.innerText = "180";
}
);
//--memory section end -----//
//---storage section start----//
const ssd256GB= document.getElementById("ssd-256gb");
const ssd512GB= document.getElementById("ssd-512gb");
const ssd1TB= document.getElementById("ssd-1tb");
const ssdCost= document.getElementById("ssd-cost");

ssd256GB.addEventListener("click",function(){
ssdCost.innerText='0';
updateTotal();
}
);
ssd512GB.addEventListener("click",function(){
    ssdCost.innerText='100';
    updateTotal();
    }
    );
    ssd1TB.addEventListener("click",function(){
        ssdCost.innerText='180';
        updateTotal();
        }
        );
        //---storage section end---//
        //---shipping section start---//

        const freeShipping= document.getElementById("shipping-free");
        const expressShipping= document.getElementById("shipping-express");
        const shippingCharge= document.getElementById("shipping-cost");
        
        freeShipping.addEventListener("click",function(){
            shippingCharge.innerText='0';
            updateTotal();
            }
            );
            expressShipping.addEventListener("click",function(){
                shippingCharge.innerText='20';
                updateTotal();
                }
                );
//---shipping section end---//
//---update total and promocode section start---//

const totalPrice= document.getElementById("total");
const grandTotal= document.getElementById("grand-total");

//---function declaration for total and grand total price calculation with promocode----//
function updateTotal(){
    const memoryPrice= parseFloat(memoryCost.innerText);
    const ssdPrice= parseFloat(ssdCost.innerText);
    const expressShipping= parseFloat(shippingCharge.innerText);

    const total=macBookPrice + memoryPrice + ssdPrice +expressShipping;
     
    totalPrice.innerText = total;
    grandTotal.innerText = total;


//---promo code calculation---//

const discount = total/5;
const totalAfterDiscount = total - discount;
const promoCode= 'fatama';
const promoInput = document.getElementById("promo-input");
if (promoInput.value == promoCode){
    grandTotal.innerText = totalAfterDiscount;
};

//---clear promo code input---//

promoInput.value = '';

};


document.getElementById("apply-promo").addEventListener("click",function(){
    updateTotal();
 }
);

/*----------update total and promocode section end-------------*/