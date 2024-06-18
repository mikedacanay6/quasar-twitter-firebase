<template>
  <q-page>
    <div>
      <q-input
        v-model="ph"
        placeholder="What is Happening?!"
        bordered
        class="q-pa-sm q-mx-md newTweet"
        maxlength="500"
        bottom-slots
        counter
        dark
        autogrow
      >
        <template v-slot:before>
          <q-avatar size="lg">
            <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
          </q-avatar>
        </template>
      </q-input>
      <q-btn
        flat
        rounded
        color="primary"
        icon="public"
        label="Everyone can reply"
        class="q-mx-xl q-pa-sm"
        dense
        no-caps
      />
      <q-separator class="bg-grey-9 q-ma-xl" inset="inset" spaced="md" />
      <div class="flex justify-between items-center q-mx-xl q-py-sm">
        <div>
          <q-btn icon="image" round color="primary" flat size="12px" />
          <q-btn icon="gif" round color="primary" flat size="12px" />
          <q-btn icon="ballot" round color="primary" flat size="12px" />
          <q-btn icon="mood" round color="primary" flat size="12px" />
          <q-btn icon="pending_actions" round color="primary" flat size="12px" />
        </div>
        <q-btn
          rounded
          color="primary"
          size="12px"
          label="Post"
          class="q-px-md q-py-sm"
          :disable="isText"
          @click="addTweet"
        />
      </div>
    </div>

    <q-separator class="bg-grey-9" spaced="md" />

    <q-list bordered separator dark>
      <transition-group
        appear
        enter-active-class="animated fadeIn slow"
        leave-active-class="animated fadeOut slow"
      >
        <q-item dark class="q-py-sm" clickable v-for="xweet in xweets" :key="xweet.id">
          <q-item-section avatar top>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <div class="flex justify-between items-center">
                <div>
                  <strong class="q-pr-sm">Qjin</strong>
                  <span class="text-grey-7">@NMIXX_Kyujin &bull; {{ formatRelativeDate(xweet.date) }}</span>
                </div>

                <q-btn-dropdown flat icon="more_horiz" dense round class="no-dropdown">
                  <q-item clickable v-close-popup @click="deleteTweet(xweet)" class="q-pa-sm bg-black" dark>
                    <q-item-section avatar class="q-px-xs">
                      <q-icon name="delete" flat avatar size="xs"/>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Delete this post</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-btn-dropdown>
              </div>
            </q-item-label>
            <q-item-label>
              {{ xweet.content }}
            </q-item-label>

            <div class="flex justify-between q-mt-sm xIcon">
              <q-btn flat icon="fa-regular fa-comment" size="sm" rounded label="4k"/>
              <q-btn flat icon="fa-solid fa-retweet" size="sm" rounded label="1.6k" />
              <q-btn @click="toggledLike(xweet)" flat :icon="xweet.liked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'" size="sm" :color="xweet.liked ? 'red' : 'none'" rounded label="16k" />
              <q-btn flat icon="fa-solid fa-chart-simple" size="sm" rounded label="1M" />
            </div>
          </q-item-section>
        </q-item>
      </transition-group>

        <!-- ####################FOR EXAMPLE ONLY########################## -->

      <q-item dark class="q-py-sm" clickable>
        <q-item-section avatar top>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
          </q-avatar>
        </q-item-section>


        <q-item-section>
          <q-item-label>
              <div class="flex justify-between items-center">
                <div>
                  <strong class="q-pr-sm">Qjin</strong>
                  <span class="text-grey-7">@NMIXX_Kyujin &bull; {{ formatRelativeDate(xweets[1].date) }}</span>
                </div>

                <q-btn-dropdown flat icon="more_horiz" dense round class="no-dropdown">
                  <q-item clickable v-close-popup @click="deleteTweet(xweets)" class="q-pa-sm bg-black" dark>
                    <q-item-section avatar class="q-px-xs">
                      <q-icon name="delete" flat avatar size="xs"/>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Delete this post</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-btn-dropdown>
              </div>
            </q-item-label>
          <q-item-label>
            Come join us for an NMIXX live later @7PM!! #NSWER #NMIXX #KYUJIN
            <div class="q-gutter-xs row q-py-sm justify-start" style="max-width: 460px;">
              <div class="col-5">
                <q-img ratio="1" src="https://pbs.twimg.com/media/GPsuPjvaIAIc8_D?format=jpg&name=360x360" />
              </div>
              <div class="col-5">
                <q-img ratio="1" src="https://pbs.twimg.com/media/GPsuPjxbUAAAhNr?format=jpg&name=small" />
              </div>
              <div class="col-5">
                <q-img ratio="1" src="https://pbs.twimg.com/media/GPsuPjwawAANt9Z?format=jpg&name=360x360" />
              </div>
              <div class="col-5">
                <q-img ratio="1" src="https://pbs.twimg.com/media/GPsuPjvaIAM9tW3?format=jpg&name=360x360" />
              </div>
            </div>
          </q-item-label>

          <div class="flex justify-between q-mt-sm xIcon">
            <q-btn flat icon="fa-regular fa-comment" size="sm" round label="4k" />
            <q-btn flat icon="fa-solid fa-retweet" size="sm" round label="1.6k" />
            <q-btn flat icon="fa-regular fa-heart" size="sm" round label="16k"/>
            <q-btn flat icon="fa-solid fa-chart-simple" size="sm" round label="1M" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { collection, query, onSnapshot, orderBy, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import db from 'src/boot/firebase';
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { formatDistance } from 'date-fns';
import { date } from "quasar";

defineOptions({
  name: 'PageHome',
});

const ph = ref('');

const xweets = ref([
  {
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit eligendi, nihil beatae sint hic, suscipit enim laboriosam cum ipsa quidem saepe modi assumenda? Blanditiis minima dolorem eligendi. Eum, accusamus temporibus.',
    date: 1718427685887,
    liked: false,
    id: 'id1'
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit eligendi, nihil beatae sint hic, suscipit enim laboriosam cum ipsa quidem saepe modi assumenda? Blanditiis minima dolorem eligendi. Eum, accusamus temporibus.',
    date: 1718428123632,
    liked: true,
    id: 'id2'
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit eligendi, nihil beatae sint hic, suscipit enim laboriosam cum ipsa quidem saepe modi assumenda? Blanditiis minima dolorem eligendi. Eum, accusamus temporibus.',
    date: 1718429711041,
    liked: false,
    id: 'id3'
  },
]);

const toggledLike = (xweet) => {
  const washingtonRef = doc(db, "xweets", xweet.id);

  updateDoc(washingtonRef, {
  liked: !xweet.liked
});
}

const formatRelativeDate = (timestamp) => {
  return formatDistance(new Date(timestamp), new Date(), { addSuffix: true });
};

const isText = computed(() => {
  return ph.value.trim() === '';
});

const addTweet = () => {
  // xweets.value.unshift({ content: ph.value, date: Date.now() })
  const docRef = addDoc(collection(db, "xweets"), {
  content: ph.value,
  date: Date.now(),
  liked: false
  });
  console.log("Document written with ID: ", docRef.id);

  ph.value = ''
}

const deleteTweet = (xweet) => {
  deleteDoc(doc(db, "xweets", xweet.id));
}

onMounted(() => {
      const q = query(collection(db, "xweets"), orderBy("date", "asc"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          let xweetChange = change.doc.data()
          xweetChange.id = change.doc.id
          if (change.type === "added") {
            console.log("New tweet: ", xweetChange);
            xweets.value.unshift(xweetChange)
          }
          if (change.type === "modified") {
            console.log("Modified tweet: ", xweetChange);
            // Update the specific document in cities array
            let index = xweets.value.findIndex(xweet => xweet.id === xweetChange.id)
            Object.assign(xweets.value[index], xweetChange)
          }
          if (change.type === "removed") {
            console.log("Removed tweet: ", xweetChange);
            // Remove the specific document from cities array
            let index = xweets.value.findIndex(xweet => xweet.id === xweetChange.id)
            xweets.value.splice(index, 1)
          }
        });
      });

    // Cleanup the listener when the component is unmounted
    onBeforeUnmount(() => {
    unsubscribe();
  });
});

</script>

<style>
.newTweet {
  textarea {
    font-size: 19px;
    line-height: 1.4 !important;
  }
}

.xIcon {
  margin-left: -5px;
}

.no-dropdown .q-btn-dropdown__arrow-container{
  display: none;
}
</style>
