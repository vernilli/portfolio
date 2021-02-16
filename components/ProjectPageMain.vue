<template>
  <div>
    <div 
      v-for="(item, index) in content"
      :key="index"
    >
      <div class="container">
        <div class="project-page__section">
          <h2 
            v-if="item.heading"
            :id="item.id"
            v-observe-visibility="{
              callback: headingVisibilityChanged,
              throttle: 300
            }"
          >
            {{ item.heading }}
          </h2>
          <p 
            v-for="(paragraph, index) in item.paragraphs"
            :key="index"
            v-html="paragraph"
          />

          <div 
            v-if="
              item.visualContent && 
              item.visualContent.contentType === 'btn'
            "
            class="pb-5"
          >
            <vv-button 
              :text="item.visualContent.sourceCaption" 
              :title="item.visualContent.sourceCaption"
              :path="item.visualContent.source"
            />
          </div>

          <div 
            v-if="
              item.visualContent && 
              item.visualContent.contentType === 'comparison'
            "
            class="project-page__img-comp d-none d-md-block pb-5"
          >
            <p>
              <em>{{ item.visualContent.usage }}</em>
            </p>
            <div class="project-page__img-comp__container">
              <div class="project-page__img-comp__img">
                <img :src="item.visualContent.sourceNew">
              </div>
              <div class="project-page__img-comp__img project-page__img-comp__overlay">
                <img :src="item.visualContent.sourceOld">
              </div>
            </div>
            <p>
              {{ item.visualContent.sourceCaption }}
            </p>
            <p>
              <em>{{ item.visualContent.usage }}</em>
            </p>
          </div>
        </div>

        <div v-if="item.subsections">
          <div 
            v-for="(section, index) in item.subsections"
            :key="index"
            class="project-page__section"
          >
            <h3 
              v-if="section.heading" 
              :id="section.id"
              v-observe-visibility="{
                callback: headingVisibilityChanged,
                throttle: 300
              }"
            >
              {{ section.heading }}
            </h3>

            <p 
              v-for="(paragraph, index) in section.paragraphs"
              :key="index"
              v-html="paragraph"
            />

            <div v-if="section.visualContent">
              <figure 
                v-if="section.visualContent.contentType === 'img'"
                :class="{
                  'project-page__section__img--same': section.visualContent.style === 'same',
                  'project-page__section__img--larger': section.visualContent.style === 'larger',
                }"
              >
                <img 
                  :src="section.visualContent.source" 
                  :alt="section.visualContent.imgAlt"
                  :title="section.visualContent.imgAlt"
                >
                <figcaption 
                  class="project-page__section__img-caption"
                  v-html="section.visualContent.sourceCaption"
                />
              </figure>
            </div>

          </div>
        </div>
      </div>

      <div
        v-if="item.visualContent"
      >
        <figure 
          v-if="item.visualContent.contentType === 'img'"
          :class="`project-page__section__img--${item.visualContent.style}`"
        >
          <img 
            :src="item.visualContent.source" 
            :alt="item.visualContent.imgAlt"
            :title="item.visualContent.imgAlt"
          >
          <figcaption 
            class="project-page__section__img-caption"
            v-html="item.visualContent.sourceCaption"
          />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'
 
Vue.use(VueObserveVisibility)

export default {
  name: 'project-page-main',
  props: {
    content: Array,
  },
  methods: {
    headingVisibilityChanged: function(isVisible, el) {
      if(isVisible) {
        var visibleItemId = el.target.id
        this.$emit('heading-visible-id', visibleItemId)
      }
    },
  },
  mounted() {
    function initComparisons() {
      var x, i;
      /*find all elements with an "overlay" class:*/
      x = document.getElementsByClassName('project-page__img-comp__overlay');
      for (i = 0; i < x.length; i++) {
        /*once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function:*/
        compareImages(x[i]);
      }
      function compareImages(img) {
        var slider, img, clicked = 0, w, h;
        /*get the width and height of the img element*/
        w = img.offsetWidth;
        h = img.offsetHeight;
        /*set the width of the img element to 50%:*/
        img.style.width = (w / 2) + 'px';
        /*create slider:*/
        slider = document.createElement('DIV');
        slider.setAttribute('class', 'project-page__img-comp__slider');
        /*insert slider*/
        img.parentElement.insertBefore(slider, img);
        /*position the slider in the middle:*/
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + 'px';
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + 'px';
        /*execute a function when the mouse button is pressed:*/
        slider.addEventListener('mousedown', slideReady);
        /*and another function when the mouse button is released:*/
        window.addEventListener('mouseup', slideFinish);
        /*or touched (for touch screens:*/
        slider.addEventListener('touchstart', slideReady);
        /*and released (for touch screens:*/
        window.addEventListener('touchstop', slideFinish);
        function slideReady(e) {
          /*prevent any other actions that may occur when moving over the image:*/
          e.preventDefault();
          /*the slider is now clicked and ready to move:*/
          clicked = 1;
          /*execute a function when the slider is moved:*/
          window.addEventListener('mousemove', slideMove);
          window.addEventListener('touchmove', slideMove);
        }
        function slideFinish() {
          /*the slider is no longer clicked:*/
          clicked = 0;
        }
        function slideMove(e) {
          var pos;
          /*if the slider is no longer clicked, exit this function:*/
          if (clicked == 0) return false;
          /*get the cursor's x position:*/
          pos = getCursorPos(e)
          /*prevent the slider from being positioned outside the image:*/
          if (pos < 0) pos = 0;
          if (pos > w) pos = w;
          /*execute a function that will resize the overlay image according to the cursor:*/
          slide(pos);
        }
        function getCursorPos(e) {
          var a, x = 0;
          e = e || window.event;
          /*get the x positions of the image:*/
          a = img.getBoundingClientRect();
          /*calculate the cursor's x coordinate, relative to the image:*/
          x = e.pageX - a.left;
          /*consider any page scrolling:*/
          x = x - window.pageXOffset;
          return x;
        }
        function slide(x) {
          /*resize the image:*/
          img.style.width = x + 'px';
          /*position the slider:*/
          slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + 'px';
        }
      }
    }
    initComparisons();
  },
}
</script>
