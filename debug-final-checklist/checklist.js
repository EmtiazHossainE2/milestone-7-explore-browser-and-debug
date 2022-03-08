//ডিবাগ চেকলিস্ট
//১.console tab utilities API লিখে গুগলে সার্চ দাও। তারপরেও সেই সার্চ রেজাল্টে গিয়ে ৩০-৪৫ মিনিট ধরে ধরে যা যা আছে সেগুলা পড়ো। 
/* 
Console Utilities API reference 
The Console Utilities API contains a collection of convenience functions for performing common tasks: selecting and inspecting DOM elements, displaying data in readable format, stopping and starting the profiler, and monitoring DOM events.

    * $_ returns the value of the most recently evaluated expression.
    * The $0, $1, $2, $3 and $4 commands work as a historical reference to the last five DOM elements inspected within the Elements panel or the last five JavaScript heap objects selected in the Profiles panel. $0 returns the most recently selected element or JavaScript object, $1 returns the second most recently selected one, and so on.
    * $(selector, [startNode]) --> $(selector) returns the reference to the first DOM element with the specified CSS selector. When called with one argument, this function is an alias for the document.querySelector() function.
    * $$(selector, [startNode]) --> $$(selector) returns an array of elements that match the given CSS selector. This command is equivalent to calling document.querySelectorAll().The following example uses $$() to create an array of all <img> elements in the current document and displays the value of each element's src property:

    let images = $$('img');
    for (let each of images) {
    console.log(each.src);
    }

    ***---- Note: Press Shift + Enter in the console to start a new line without executing the script. ----****
    * clear() clears the console of its history.
    * copy(object) copies a string representation of the specified object to the clipboard.

    copy($0);

    * debug(function)
    When the specified function is called, the debugger is invoked and breaks inside the function on the Sources panel allowing to step through the code and debug it.
    
    debug(getData);

    Use undebug(fn) to stop breaking on the function, or use the UI to disable all breakpoints.

    * dir(object) displays an object-style listing of all the specified object's properties. This method is an alias for the Console API's console.dir() method.
    * dirxml(object) prints an XML representation of the specified object, as seen in the Elements tab. This method is equivalent to the console.dirxml() method.
    * JavaScript heap objects
     https://felixgerschau.com/static/b452488bd7eeac0405c48f164da6280d/c1b63/stack-heap-pointers.png 

    * getEventListeners(object)
    * keys(object)   returns an array containing the names of the properties belonging to the specified object. To get the associated values of the same properties, use values().
    For example, suppose your application defined the following object:

    let player1 = { "name": "Ted", "level": 42 };
    Assuming player1 was defined in the global namespace (for simplicity), typing keys(player1) and values(player1) in the console results keys and value ;
    * monitor(function) ,Use unmonitor(function) to cease monitoring. 
    * monitorEvents(object[, events])
    * 
    * mouse	--> "mousedown", "mouseup", "click", "dblclick", "mousemove", "mouseover", "mouseout", "mousewheel"
    * 
    * key	"keydown", "keyup", "keypress", "textInput"
    * 
    * touch	"touchstart", "touchmove", "touchend", "touchcancel"
    * 
    * control	"resize", "scroll", "zoom", "focus", "blur", "select", "change", "submit", "reset"
    * profile([name]) and profileEnd([name])
    * profile() starts a JavaScript CPU profiling session with an optional name. profileEnd() completes the profile and displays the results in the Profile panel. 
    * 
*/
// To start profiling:

profile("My profile")

//To stop profiling and display the results in the Profiles panel:
profileEnd("My profile")

/* 
queryObjects(Constructor)
The scope of queryObjects() is the currently-selected execution context in the console.

**table(data[, columns])
*/
//Log object data with table formatting by passing in a data object in with optional column headings. For example, to display a list of names using a table in the console, you would do:

let names = [
    { firstName: "John", lastName: "Smith" },
    { firstName: "Jane", lastName: "Doe" },
];
table(names);
//undebug(function)
//unmonitor(function)
//unmonitorEvents(window);
//values(object) returns an array containing the values of all properties belonging to the specified object.

values(object);