# Fusilli.js
## a delicious Modal (popup) library

### Not your average popup library.
Here's why:
1. It's just 1.3 KB (Yeah, go check for yourself!)
2. It helps you add simple Modals to your website in notime!
3. It can open and close Modals. That's it - no fancy animations, styles, etc. - it's as minimal as possible!
4. You can style it and extend it however you like!

Demo: [anthemaker.github.io/Fusilli.js](https://anthemaker.github.io/Fusilli.js/)

## But how do I use it anyways?
You can count from 1 to 3, right? Because it's really that simple!

**1. Add fusilli.js to your site**
```
<script src="https://cdn.jsdelivr.net/gh/anthemaker/fusilli.js/fusilli.min.js"></script>
```
You can use the jsdelivr CDN or host it yourself!

**2. Add a Modal to your site!**
```
<div id="modal_1" class="modal" aria-hidden="true">
  <div class="modal_box">
    Look ma, I made a Modal!
  </div>
</div>
```
Remember to give them unique IDs if you put multiple Modals on one site!

**3. Trigger the Modal**
```
<button onclick="openModal(document.getElementById('modal_1'));">Open the Modal!</button>
```

Boom, that's it! Simple, isn't it?

## The functions™

### openModal(element)
Guess what this function does! Correct, it opens up a Modal!

Example: `openModal(document.getElementById('modal_1'));`

This will open up the Modal with the id "modal_1"

### closeModal(element)
This closes a given Modal! WOW!

Example: `closeModal(document.getElementById('modal_1'));`

This will close the Modal with the id "modal_1" if it's currently opened

## FAQs
Every `README` need a FAQ section. Just kidding, I was simply bored.

#### Why?
That's not even a full question! Learn english, stranger

#### Why did you create another damn Modal library?
Because I *can*. No, jokes aside for a second: I wanted to add a simple info-modal to my current project ([myFront.page](https://myfront.page)) and didn't find a good, simple-to-use and lightweight library...

#### Ahh, the content of the Modal appears for a second when loading my page!
Don't worry! Just add `.modal{ display: none; }` to your CSS and you're good to go!

#### How do I use it??
Scroll to the top of this page and follow the 3 steps! If you still didn't get it, open up an issue.

#### I can't count to 3
Go to school

#### It doesn't work!
I tested it a bit and it worked fine... If it doesn't work for you, please go ahead and open up an issue!

#### But it can't do X
This library's focus is simplicity. It's main goal is to be lightweight and minimal. I won't add fancy animations, trigger-handlers or stuff like that. Please look for a different Modal library if you need all that stuff.

### What does "Fusilli" mean?
Hey, respect the pasta!

### Why is this popup library named after the best pasta in the world?
I guess I was hungry

#### Hello
That's not a question. What's up?

#### I'm bored
I know. Otherwise you wouldn't scroll  till the very end of a `README` file  of a random JavaScript Modal library created by a 17yo dude. Get a life :P
