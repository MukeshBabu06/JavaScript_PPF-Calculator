 function calculatePPF(){
    const investment=parseFloat(document.getElementById('investment').value);
    const time=parseFloat(document.getElementById('time').value);
    const rate=parseFloat(document.getElementById('rate').value);
    
    const interest=rate/100
   
    const totalinvestment= investment*time 
    const maturity= investment*(((Math.pow((1+interest),time)-1)/interest)*(1+interest));             
    const Totinterest= maturity-totalinvestment

    document.getElementById('firstinvest').innerText=`₹${totalinvestment.toFixed(0)}`;
    document.getElementById('TotInt').innerText=`₹${Totinterest.toFixed(0)}`;
    document.getElementById('TotAmt').innerText=`₹${maturity.toFixed(0)}`;
}

function Reset(){
  document.getElementById('firstinvest').innerText=`₹${""}`;
  document.getElementById('TotInt').innerText=`₹${""}`;
  document.getElementById('TotAmt').innerText=`₹${""}`;
}
var txt = new Array("tim","kim","jim")
console.log(txt )
+ 50 - 50

for(let i=0 ;i<5;i++)
  {
  setTimeout(function(){ console.log(i) }, i);
  }

  for(var i=0 ;i<5;i++)
    {
    setTimeout(function(){ console.log(i) }, i);
    }

    console.log("A")
    setTimeout(function(){ console.log("B") }, 0);
    console.log("C")
    setTimeout(function(){ console.log("D") }, 1000);

    function TnS_add(a,b)
{
return a + b;
}
function TnS_spreadadd(...nums){
var count = 0 ;
for(let num of nums)
{
count += num ;
}
return count ;
}

console.log(TnS_add(10,20,40) , TnS_spreadadd(10,20,40))

function TnS_add(a,b)
{
return a + b;
}
console.log(TnS_add(10,100,20,90,56,76))

function TnS_outer(){
  var a = 10 ;
  function TnS_inner(){
  var b= 10 ;
  return a + b ;
  }
  return TnS_inner();
  }
  console.log(TnS_outer());












/* M = P [ ( { (1 + i) ^ n } - 1 ) / i ] 


A = P * [(1 + r)^n - 1] / r

I = A − (P * n)

In which:

M = Maturity benefit

P = Annual installments

i = Interest rate

n = Number of years 

M= Rs 1,00,000 [({(1+0.071)^15}-1)/i] = Rs 27,12,139 */

/* function calculatePPF() {
    const investment = parseFloat(document.getElementById("investment").value);
    const interest = parseFloat(document.getElementById("interest").value) / 100;
    const years = parseFloat(document.getElementById("years").value);
    let totalInterest = 0;
    let totalAmount = 0;
  
    for (let i = 0; i < years; i++) {
      const interestAmount = (investment * interest * (i + 1)) / 12;
      totalInterest += interestAmount;
      totalAmount += investment + interestAmount;
    }
  
    const maturityAmount = totalAmount + totalInterest;
    document.getElementById("result").innerHTML = `Maturity Amount: ₹${maturityAmount.toFixed(2)}`;
  }
   */