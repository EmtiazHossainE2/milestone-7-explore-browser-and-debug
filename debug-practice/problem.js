//১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে।
setTimeout(() => {
    console.log('I Love Js');
}, 3500)

// setInterval(() => {
//     console.log('Tik tik tik');
// }, 1000) 

//২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও  

const money = prompt('Give me money')
if (money === '') {
    alert('Opps ! Give me money')
}
else {
    const total = parseInt(money) + 200;
    alert(total)
    console.log(total);
}



