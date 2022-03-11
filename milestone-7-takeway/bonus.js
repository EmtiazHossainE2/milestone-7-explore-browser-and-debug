/* মাইলস্টোন ৭ টেকএওয়ে  

 এই মাইলস্টোন থেকে তুমি যদি পাঁচটা জিনিস শিখতে চাও তাহলে নিচের এই পাঁচটি জিনিস আরেকবার ভালো করে দেখে নাও- 



 ১. অল্প করে হলেও জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেই সম্পর্কে ধারণা নেয়া লাগবে। 

JavaScript, like any other programming language, can be implemented anywhere, provided there is a compiler or interpreter. Usually hosted in an environment. Often it can be our most widely used browser or any other application program (such as Node JS). Where JavaScript is hosted there is a JavaScript engine (V8 Engine, Spider Monkey etc ) whose work is to execute JavaScript code. The code executes and runs in a few steps - first it goes through the parser, then the code is read line by line and if there is an error in the code it gives an error. The code is then converted into machine code, which our computer can actually understand. Finally our code runs. 



২. ছোট করে হলেও ব্রাউজার কিভাবে কাজ করে সেটা জানতে হবে। একদম সব বুঝে উড়ায় ফেলার দরকার নাই। তবে একটু হলেও জানতে হবে। 

When the web browser fetches data from an internet connected server, it uses a piece of software called a rendering engine to translate that data into text and images. This data is written in Hypertext Markup Language (HTML) and web browsers read this code to create what we see.

৩. একটা url এর মধ্যে কী কী পার্টস থাকে। কোনটাকে কি বলে সেটা তোমাকে জানতে হবে। 
 five parts: the scheme, subdomain, top-level domain, second-level domain, and subdirectory. 
                    https://web.programming-hero.com/dashboard 
            1.https  -> scheme
            2. web   -> subdomain
            3. programming-hero  -> second-level domain
            4. com    ->  top-level domain
            5. dashboard -> subdirectory

৪. ব্রাউজারে গিয়ে location API দিয়ে কিভাবে url এর ডিফারেন্ট পার্টস দেখানো যেতে পারে সেটা কিছুটা বুঝতে হবে। 


৫. local storage আর session storage এর মধ্যে পার্থক্য কি। কখন কোনটা ইউজ করতে হয়। 

localStorage and sessionStorage are web storage objects that allow key / value pairs to be stored in the browser. Local storage data is shared between different tabs and windows in the browser. It does not expire data even after browser restart and OS reboot. Close / open the browser or open the same page in a different window. You will see that you can access the data in the local storage. Or will move to the browser. We can get / set data in local storage as an object if we want. I can even delete data. sessionStorage exists only in the Browser Current tab. There will be separate storage on another tab of the same page.


এই মাইলস্টোন থেকে তুমি যদি আরো দশটা জিনিস এ খেয়াল রাখতে চাও তাহলে সেগুলা হবে। 

১. What is JavaScript সেটা গুগলে সার্চ দিয়ে একটু দেখে নাও। 

    JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

২. setTimeout এবং setInterval কিভাবে কাজ করে। এই দুইটার মধ্যে ডিফারেন্স কি ? 

    setTimeout() Execute a specific block of code once after a specified time has elapsed. setInterval() Execute a specified block of code repeatedly with a fixed time delay between each call.

৩. history api কিভাবে ইউজ করে  

    The DOM Window object provides access to the browser's session history (not to be confused for WebExtensions history) through the history object. It exposes useful methods and properties that let you navigate back and forth through the user's history, and manipulate the contents of the history stack .

    https://developer.mozilla.org/en-US/docs/Web/API/History_API

৪. alert, prompt, confirm এই তিনটা এর মধ্যে ডিফারেন্স কি। কখন কোনটা ইউজ করতে হয়। সেই জিনিসগুলা একটু দেখে ফেলো। .

৫. গুগলে সার্চ দিয়ে devtool এর ডকুমেন্টেশন খুঁজে বের করে সেগুলা পড়া। 

৬. টাইপস্ক্রিপ্ট আর জাভাস্ক্রিপ্ট এর মধ্যে ডিফারেন্স কি কি 

    TypeScript and JavaScript, there are many similarities. Both are employed to create interactive web pages. 
    But in comparing TypeScript vs JavaScript, JavaScript is a lightweight, interpreted, dynamic language for web design. It is utilized in web app development for augmenting HTML web pages.
    
    Is your JS code hard to understand?
    Tired of solving errors at compile-time?
    Want to decrease code complexity and get code organization?
    Then you might want to consider TypeScript.

In contrast, TypeScript acts as a superset of JavaScript.This states that Typescript is JavaScript + some other traits.

৭. event loop লুপ কি জিনিস। এই রিলেটেড পুরা জিনিসটা আজকে অনেকেই বুঝবে না। তাও আরেকবার দেখে রাখবে। 

    javascript single threaded, synchronised language। মানে হচ্ছে, আমাদের কোড যখন ব্রাউজারে রান হয় তখন ব্রাউজার ইঞ্জিন ফাইলের একবারে উপর থেকে কোড রিড করতে করতে নিচের দিকে নামে । যতক্ষণ না প্রথম লাইন কমপ্লিট হচ্ছে ততক্ষণ পরবর্তী লাইনে যাচ্ছে না। এতে দেখা যায় পারফরম্যান্সে সমস্যা হয়৷ কেননা কোনো লুপ বা জটিল কোনো কোড ফাইলের শুরুতে পড়ে বসলে নিচের কোড তখন অপেক্ষার প্রহর গুনতে থাকে আর দোয়া-দরুদ পড়তে থাকে, কখন উপরের কোড কমপ্লিট হবে, কখন তার কাছে আসবে। এই সমস্যা থেকে উত্তোলনের জন্য উদ্ভব হলো asynchronous function এর।
    যখন কোনো async ফাইংশান কল করা হয় তখন ব্রাইজারের কাজ সাধারণের থেকে একটু বেড়ে যায়।
    ব্রাউজার ইঞ্জিন তখন তিনটি প্রধান ভাগে ভাগ হয়ে যায়৷
    প্রথম, call stack,
    দ্বিতীয়, webapi,
    এবং সর্বশেষ, callback queue.
    call stack এর কাজ হচ্ছে যখন এখানে কোনো নরমাল function কল হবে তখন তাকে সরাসরি কনসোলে প্রিন্ট করে দিবে। কিন্তু যখন কোনো async function এখানে আসবে তখন সেই function কে web api এর কাছে পাঠিয়ে দিবে। web api তার কাজ শেষ করে পাঠিয়ে দিবে callback queue এর কাছে। তারপর callback queue এই function গুলোকে নিয়ে বসে থাকবে (কারণ সে একটু লেজি টাইপের)। ঠিক এখানেই event loop এর কাজ। event loop এর অবস্থান call stack আর callback queue এর মধ্যবর্তী স্থানে। সে কি করে, প্রথমে দেখে call stack এ কোনো চলমান বা নরমাল বা sync task আছে কিনা যদি থাকে তাহলে সে অপেক্ষায় থাকবে কিন্তু যদি না থাকে তাহলে সে callback queue এর কাছে যাবে এবং তারকাছে যে যে task বা function আছে সেগুলোকে সিরিয়াল ওয়াইজ callback queue থেকে call stack এর কাছে পাঠিয়ে দিবে। এবং যতগুলো task আছে সবগুলোকে loop করে করে call stack এর কাছে পাঠাবে এজন্যই মুলত এটাকে event loop বলা হয়। আর শেষে call stack তার ডিউটি অনুযায়ী আউটপুট প্রিন্ট করবে।

৮. accessibility কি জিনিস? 
    Accessibility is the practice of making your websites usable by as many people as possible. We traditionally think of this as being about people with disabilities, but the practice of making sites accessible also benefits other groups such as those using mobile devices, or those with slow network connections.
    Semantic HTML, which improves accessibility, also improves SEO, making your site more findable.
    Caring about accessibility demonstrates good ethics and morals, which improves your public image.
    Other good practices that improve accessibility also make your site more usable by other groups, such as mobile phone users or those on low network speed. In fact, everyone can benefit from many such improvements.

৯. call stack কি জিনিস? 
    call stack এর কাজ হচ্ছে যখন এখানে কোনো নরমাল function কল হবে তখন তাকে সরাসরি কনসোলে প্রিন্ট করে দিবে। 
    A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

        1.When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
        2.Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
        3.When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
        4.If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.  

১০. Regular এক্সপ্রেশন কি কাজে লাগে? 





 */