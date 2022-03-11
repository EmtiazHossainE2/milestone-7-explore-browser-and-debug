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








 */