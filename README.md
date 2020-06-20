# JustAModal
##Don't worry - it's just another Modal library

### No, it's not just another Modal library!
Here's why:
1. It's just 1.23 KB (Yeah, go check for yourself!)
2. It helps you add simple Modals to your website in notime!
3. It can open and close Modals. That's it - no fancy animations, styles, etc. - as minimal as possible
4. You can style it and extend it however yuo like!

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
