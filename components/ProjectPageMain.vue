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
          >
            <image-comparator
              :image-old-path="item.visualContent.sourceOld"
              :image-new-path="item.visualContent.sourceNew"
              :comparator-disclaimer="item.visualContent.sourceCaption"
            />
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
import ImageComparator from './ImageComparator.vue'
 
Vue.use(VueObserveVisibility)

export default {
  components: { 
    ImageComparator
  },
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
}
</script>
