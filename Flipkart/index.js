/** 
let Electronicproduct = [
    {
      img_src:"https://rukminim2.flixcart.com/image/312/312/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70",
      name: "TOp Mirrorless Cameras",
      price:"From ₹589"
    },
    {
     img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/printer/9/k/v/-original-imagzyb57srxtshf.jpeg?q=70",
      name: "Printers",
      price:"From ₹3999"
    },
    {
      img_src:"	https://rukminim1.flixcart.com/image/280/280/pendr…ndisk-blade64-original-imadz5em37gghfkd.jpeg?q=80",
      name: "Pendrives & SD Cards",
      price:"From ₹289"
    
    },
    ,
    {
      img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/projector/m/n/f/-original-imagtr8nqhfnzpsh.jpeg?q=70",
      name: "Projector",
      price:"From ₹6990"
    },
    ,
    {
      img_src:"https://rukminim2.flixcart.com/image/200/200/ktn9pjk0/mini-ups/d/i/f/qhm-660-quantum-original-imag6y54rshnu6ag.jpeg?q=70",
      name: "UPS & Router UPS",
      price:"From ₹999"
    },
    {
      img_src:"https://rukminim2.flixcart.com/image/200/200/xif0q/monitor/c/0/n/-original-imagrgv53gdsxhyb.jpeg?q=70",
      name: "Samsung Monitors",
      price:"From ₹9999"
    },
    {
     img_src:"https://rukminim2.flixcart.com/image/200/200/kpsnzww0/external-hard-drive/ssd/t/9/7/portable-ssd-sdssde30-1t00-g25-sandisk-original-imag3xx564jxpgrb.jpeg?q=70",
      name: "Sandisk Extreme Portable",
      price:"From ₹5,799"
    },
    {
      img_src:"https://rukminim2.flixcart.com/image/200/200/l4pxk7k0/usb-gadget/g/8/v/dlk5526cg-11-philips-original-imagfjxzfsgu7nvu.jpeg?q=70",
      name: "USB Gadgets",
      price:"From ₹179"
    },
    {
     img_src:"https://rukminim2.flixcart.com/image/200/200/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70",
      name: "Best of Shavers",
      price:"From ₹1,649"
    },
     {
     img_src:"https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/n/t/k/-original-imagteuabzz4fmzv.jpeg?q=70",
      name: "Washing machines",
      price:"From ₹24,990"
    },
  ]


let leftpartcardcontainer = document.querySelector(left-part-card-container)
let renderproduct = "";
console.log(Electronicproduct)
Electronicproduct.forEach(el => {

renderproduct +=
<div >
    <img src="${el.img_src}"/>
    <h3 class="card-product-name">${el.name}</h3>
    <p class="card-product-price">From ₹${el.price}289</p>
</div>
})

leftpartcardcontainer.innerHTML = renderproduct;

**/

let cardbtnright = document.getElementById("card-btn-right")
let cardbtnleft = document.getElementById("card-btn-left")
let leftpartcardcontainer = document.getElementById("left-part-card-container")

cardbtnright.addEventListener("click",function(right){
  console.log("check")
 

})

cardbtnleft.addEventListener("click",function(){
 

})

