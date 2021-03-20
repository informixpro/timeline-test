<template>
  <section class="h-full p-8">
    <div class="bg-gray-50 h-full flex flex-col justify-center">
      <h1 class="text-xl text-center font-bold text-primary pt-6 pb-8">Timeline</h1>

      <div class="flex flex-col">

        <div class="hidden md:flex self-center">
          <svg-icon name="timeline-start" :width="117" :height="36" class="block text-primary"/>
        </div>

        <div v-for="event in events" :key="event.id" class="Timeline-item relative inline-flex items-center self-center my-3 md:my-0">
          <div class="Timeline-divider px-5 hidden md:block">
            <svg-icon name="timeline-divider" :width="117" :height="45" class="text-primary"/>
          </div>
          <div class="Timeline-body md:absolute w-full text-center">
            <svg-icon :name="event.icon" :width="22" :height="22" class="inline-block"  />
            <h2 class="text-sm font-bold text-primary">{{ event.header }}</h2>
            <p class="text-xs">{{ event.body }}</p>
          </div>
        </div>

        <div class="hidden md:flex self-center">
          <svg-icon name="timeline-start" :width="117" :height="36" class="text-primary transform rotate-180"/>
        </div>

      </div>
    </div>
  </section>
</template>

<script>

import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'TimeLine',
  components: {
    SvgIcon
  },
  data() {
    return {
      events: [
        {
          id: 1,
          header: '25 Apr',
          body: 'Facere laudantium optio porro, qui quidem rerum',
          icon: 'cloud-download'
        },
        {
          id: 2,
          header: '10 Jul',
          body: 'Porro provident quidem sit sunt unde veniam?',
          icon: 'globe-light'
        },
        {
          id: 3,
          header: '12 - 13 May',
          body: 'Assumenda dolore dolorem nesciunt placeat',
          icon: 'paper-plane'
        },
        {
          id: 4,
          header: '9 Nov',
          body: 'Qui quos voluptatibus. Ad consectetur, corporis ',
          icon: 'user-regular'
        },
        {
          id: 5,
          header: '31 Sep',
          body: 'Lorem ipsum dolor sit amet, consectetur ',
          icon: 'heart-regular'
        },
      ]
    }
  }
}
</script>

<style lang="scss">

.Timeline-item {

  &:nth-child(odd) {
    .Timeline-divider {

    }

    .Timeline-body {
      right: 100%;
    }
  }

  &:nth-child(even) {
    .Timeline-divider {
      transform: rotateY(180deg);
    }

    .Timeline-body {
      left: 100%;
    }
  }
}

</style>
