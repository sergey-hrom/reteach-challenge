<template>
  <div>
    <h2>Gallery</h2>
    <div v-for="(user, index) in visibleUsers" :key="`${user.name}-${index}`">
      <hr v-if="index" />
      <h3>{{ user.name }}</h3>
      <div class="gallery">
        <img
            v-for="img in user.photos"
            :key="img"
            :src="img"
            :alt="img"
            class="photo"
            loading="lazy"
        />
      </div>
    </div>

    <button
        v-if="visibleCount < formattedUsers.length"
        class="pagination"
        @click="visibleCount++"
    >
      Show More
    </button>
  </div>
</template>

<script setup>
// 3. Page loading performance
// 1) Adding loading="lazy" attribute is the most obvious option

// 2) Implement pagination or infinite scroll: it not only reduces initial load and memory usage, but it's also better
// for UX perspective

// 3) Unnecessary calculations for computed properties:
// "users" - it's not used at all, why is it even defined, it's a traversal of almost 400 elements
// "sortByUser" - I don't see any reason why the backend can't handle this, it's just additional calculations for the
// frontend and a full traversal


// 4. Architecture
// Well, it's a static data, so there is absolutely no need in BFF, it's just unnecessary for static data + it increases
// runtime overhead. SSG is the best option here: page loads instantly, no extra fetch is needed on page load, I mean
// it's definitely a real performance improvement

// const {data: images, pending, error } = await useFetch('/api/gallery', { lazy: true });
import images from '/assets/galery/gallery-db.json';

const formattedUsers = computed(() => {
  if (!images) return [];
  const groupedUsers = images.reduce((acc, img) => {
    if (!acc[img.userId]) acc[img.userId] = { name: img.userName, photos: []};
    // also kinda no need to push the whole object, image url is enough
    acc[img.userId].photos.push(img.picture);
    return acc;
  }, {});

  return Object.values(groupedUsers);
});
console.log('📟 - formattedUsers → ', formattedUsers.value);

const visibleCount = ref(1);
const visibleUsers = computed(() => formattedUsers.value.slice(0, visibleCount.value));


// const users = computed(() => {
//   const userMap = [];
//   images.value.forEach((img) => {
//     if (!userMap[img.userId]) {
//       userMap[img.userId] = [];
//     }
//     userMap[img.userId].push(img);
//   });
//   return userMap;
// });
// console.log('📟 - users → ', users);

// const userIds = users.value.results.map((user) => user.login.uuid);
// if (error.value) {
//   console.error('Failed to load images:', error.value);
// }
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
.photo {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.pagination {
  margin-top: 2rem;
  font-size: 1.25rem;
  border: 2px solid #000;
  padding: 4px 8px;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  transition: 0.3s;
}

.pagination:hover {
  background: #000;
  color: #fff;
}
</style>
