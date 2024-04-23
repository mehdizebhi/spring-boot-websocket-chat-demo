<template>
  <q-page>
    <div class="column justify-end">
      <div class="q-pa-md row justify-center">
        <q-scroll-area class="items-end" style="width: 100%; max-width: 1000px; height: 520px;">
          <q-chat-message
            name="me"
            avatar="https://cdn.quasar.dev/img/avatar3.jpg"
            :text="['hey, how are you?']"
            stamp="7 minutes ago"
            size="5"
            sent
            bg-color="amber-7"
          />
          <q-chat-message
            name="Jane"
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="[
          'doing fine, how r you?',
          'I just feel like typing a really, really, REALLY long message to annoy you...'
        ]"
            size="5"
            stamp="4 minutes ago"
            text-color="white"
            bg-color="primary"
          />
          <q-chat-message
            name="Jane"
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['Did it work?']"
            stamp="1 minutes ago"
            size="5"
            text-color="white"
            bg-color="primary"
          />
        </q-scroll-area>
      </div>
      <div class="row bg-grey-10 self-center q-px-lg q-mb-md justify-between items-center" style="width: 700px; height: 60px; border-radius: 20px;">
        <div class="col-11">
          <q-input v-model="text" rounded borderless placeholder="Type Message..." />
        </div>
        <div class="q-gutter-sm">
          <q-btn round color="secondary" icon="send" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      text: ""
    };
  }
});
</script>
