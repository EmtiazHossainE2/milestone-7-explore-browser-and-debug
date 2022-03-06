//১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে।
setTimeout(() => {
    console.log('I Love Js');
}, 3500)

// setInterval(() => {
//     console.log('Tik tik tik');
// }, 1000) 

//২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও  

/* const money = prompt('Give me money')
if (money === '') {
    alert('Opps ! Give me money')
}
else {
    const total = parseInt(money) + 200;
    alert(total)
    console.log(total);
} */

//৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 
const link = confirm('Do you want to see your website location ?')
if (link) {
    console.log('index.html');
}
else {
    console.log('see you soon');
}

//৪. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে লিখে ফেলো।  
/* 
Cookies are text files with small pieces of data — like a username and password — that are used to identify your computer as you use a computer network. Specific cookies known as HTTP cookies are used to identify specific users and improve your web browsing experience.
    1. Session management : For example, cookies let websites recognize users and recall their individual login information and preferences, such as sports news versus politics.
    2. Personalization  : Customized advertising is the main way cookies are used to personalize your sessions.
    3. Tracking : Shopping sites use cookies to track items users previously viewed, allowing the sites to suggest other goods they might like and keep items in shopping carts while they continue shopping.
*/

/* 
৫. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে। (নিজের মতো করে লিখবে )

    1. localStorage persists until explicitly deleted.sessionStorage, changes are only available per tab. 
    2. while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends.
    3. localStorage - use for long term use.sessionStorage - use when you need to store somthing that changes or somthing temporary
*/
