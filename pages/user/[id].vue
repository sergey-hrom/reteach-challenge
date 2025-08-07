<template>
  <AwesomeArticle>
    <h1>User profile</h1>
    <p v-if="pending">Loading...</p>
    <div v-else>
      <p><b>Name:</b> {{ user.name }}</p>
      <p><b>Username:</b> {{ user.username }}</p>
      <p><b>Address:</b> {{ userAddress }}</p>
      <p class="contact"><b>Contact Info:</b></p>
      <ul>
        <li v-for="contact in contactLinks" :key="contact.label">
          <b>{{ contact.label }}: </b>
          <a :href="contact.link">{{ contact.displayLink }}</a>
        </li>
      </ul>
    </div>
  </AwesomeArticle>
</template>

<script setup>
// 2. SSR vs SPA Change the Nuxt configuration to behave in SPA mode, and compare the behavior when previously using the SSR mode.

// nuxt.config.js -> ssr: false
// Differences are pretty straight forward:
// 1) SSR - pages are rendered on the server; SPA - pages are rendered on the client after JS loads
// 2) SSR - faster first rendering; SPA - slower first rendering
// in other words, SSR gives you ready-to-go HTML, with SPA it's blank HTML until JS loads and runs, so it affects users as well,
// e.g. in dev tools set slow internet connection, with SSR you see page "instantly", with SPA you see a blank page first
// 3) obviously, SEO works better for SSR

const route = useRoute();
const userId = computed(() => route.params.id);

const contactLinks = computed(() => {
  if (!user.value) return [];
  const { email, website, phone } = user.value;
  return [
    { label: 'Email', link: `mailto:${email}`, displayLink: email },
    { label: 'Website', link: `https://${website}`, displayLink: website },
    { label: 'Phone', link: `tel:${phone}`, displayLink: phone },
  ];
});

const userAddress = computed(() => {
  if (!user.value?.address) return '-';
  const { street, suite, city, zipcode } = user.value.address;
  return `${street}, ${suite}, ${city}, ${zipcode}`;
});

const { data: user, pending } = useFetch(`https://jsonplaceholder.typicode.com/users/${userId.value}`);

// const { data: user, pending } = useAsyncData(`user-${userId.value}`, () =>
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}`).then((res) => res.json())
// );
</script>

<style scoped>
.contact {
  margin-bottom: 4px;
}

ul {
  margin-top: 0;
}

a {
  text-decoration: none;
  color: #000;
}

a:hover {
  text-decoration: underline;
}
</style>
