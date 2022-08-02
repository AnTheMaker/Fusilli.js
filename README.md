# Fusilli.js
## A delicious Modal (popup) library

### Not your average popup library.
Here's why:
1. It's just 1.3 KB (Yeah, go check for yourself!)
2. It helps you add simple Modals to your website in no time!
3. It can open and close Modals. That's it - no fancy animations, styles, etc. - it's as minimal as possible!
4. You can style it and extend it however you like!

Demo: [fusilli.js.org](https://fusilli.js.org)

**1. Add fusilli.js to your site**
```
<script src="https://cdn.jsdelivr.net/gh/anthemaker/fusilli.js/fusilli.min.js"></script>
```
You can use the jsdelivr CDN or host it yourself!

**2. Add a Modal to your site!**
```
<div id="modal_1" class="modal" aria-hidden="true" aria-modal="true" tabindex="-1">
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

#### Why did you create another damn Modal library?
Because I *can*. No, jokes aside for a second: I wanted to add a simple info-modal to one of my projects ([myFrontpage](https://myfront.page)) and didn't find a good, simple-to-use and lightweight library...

#### Oh no, the content of the Modal appears for a second when loading my page!
Don't worry! Just add `.modal{ display: none; }` to your CSS and you're good to go! That will prevent the modal from showing up before the `fusilli.js` script is loaded. Fusilli.js will take care of the rest!

#### How do I use it??
Scroll to the top of this page and follow the 3 steps! If you still need help, open up an issue.

#### It doesn't work!
I tested it a bit and it worked fine... If it doesn't work for you, please go ahead and open up an issue with as many details as possible!

#### But it can't do [insert advanced features here]
This library focuses on simplicity. Its main goal is to be as lightweight and minimal as possible. I won't add fancy animations, trigger-handlers or stuff like that. Please look for a different Modal library if you need all of this.

### What does "Fusilli" mean?
Hey, respect the pasta!

### Why is this popup library named after the best pasta in the world?
I guess I was hungry, sorry about that.
