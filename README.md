# JustAModal
## Don't worry - it's just another Modal library

### No, it's not just another Modal library!
Here's why:
1. It's just 1.23 KB (Yeah, go check for yourself!)
2. It helps you add simple Modals to your website in notime!
3. It can open and close Modals. That's it - no fancy animations, styles, etc. - as minimal as possible
4. You can style it and extend it however you like!

## But how do I use it anyways?
You can count from 1 to 3, right? Because it's really that simple!

**1. Add justamodal to your site**
```
<script src="https://cdn.jsdelivr.net/gh/anthemaker/justamodal/justamodal.min.js"></script>
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

#### How do I use it??
Scroll to the top of this page and follow the 3 steps! If you still didn't get it, open up an issue.

#### I can't count to 3
Go to school

#### It doesn't work!
I tested it a bit and it worked fine... If it shouldn't work for you, please go ahead and open up an issue!

#### But it can't do X
This library's focus is simplicity. It's main goal is to be lightweight and minimal. I won't add fancy animations, trigger-handlers or stuff like that. Please look for a different Modal library if you need all that stuff.

#### Hello
Thta's not a question. What's up?

#### I'm bored
I know. Otherwise you wouldn't scroll  till the very end of a `README` file  of a random JavaScript Modal library created by a 17yo dude. Get a life!
