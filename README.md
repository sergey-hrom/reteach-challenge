# Frontend Coding Challenge

This project is a basic Nuxt 3 (https://nuxt.com/docs/getting-started/introduction) project which uses some free API data to fetch a list of users and display their information in a list.

By clicking on one of the list's element, we are redirected to the user's profile, which misses the call to the user information at the moment.

The website is voluntarily not well-designed and you don't have to work on this part.

## Tasks

### 1. Responsive

Change the current layout to bring some responsive behaviour. Only implement a single solution, but try to think of different solutions that could be used to achieve responsiveness.

### 2. SSR vs SPA

Implement the call to the user's information when navigating to their profile using a [Nuxt built-in hook](https://nuxt.com/docs/4.x/getting-started/data-fetching).
Use the following endpoint: <code>https://jsonplaceholder.typicode.com/users/{id}</code>

- Display a few information, but do not add too many styling.
- Change the Nuxt configuration to behave in SPA (single-page-application) mode, and compare the behavior when previously using the SSR (server-side-rendering - default) mode.

### 3. Page loading performance

Navigate to the `/gallery` page which contains a list of photos. This page is meant to be publicly accessible.

- What would be your first recommendation(s) or approach(es) to guide a small team of developers (or one developer) who are working on improving the loading performance of the Gallery page? (up to 2-3)
  Try to suggest something that the team can easily align on and let them find their own solutions to implement it.
  Optionally, include a brief code draft or example to illustrate how to begin applying your recommendation.
- What would be **your own top recommendations** (up to 3) if **you** were responsible for optimizing the page? Implement a few of these recommendations directly in code, focusing on those you consider most impactful.

### 4. Architecture reflection and decision

The Gallery currently fetches its data from `/api/gallery`, using a [Nuxt server route](https://nuxt.com/docs/guide/directory-structure/server#api-routes) which acts as a minimal Backend-for-Frontend (BFF).

- Improve the current implementation - but focus on making a decision for a quick first iteration.
  You can choose one of the following approach as example:
  - Continue with the current setup (BFF)
  - Move the all logic into the client-side
  - Use a static site generation (SSG) approach
  - Any other approach that can simplify or quickly optimize the current implementation
- (Bonus) **Could Nuxt be used as a full backend?** In what scenarios would that make sense, and what might be the limitations?

### (Bonus) Accessibility

What can you say regarding the actual accessibility of the website?
Where would you start if you were to improve it? You can present a rough plan of action or a few code examples.

The code will then need to be present in a public repository and you will provide us the GitHub link when you are done with it.

## Goal

The goal of the exercise is not to invest too much time to search or implement the perfect solution but rather to discuss the pros and cons of the different approaches on the different tasks.

There are no right or wrong answers.

Therefore, please try to not:

- Add too many extra elements
- Add too many extra styling

Feel free to ask any questions if anything is not clear!

## Setup

Install the dependencies:

```bash
# npm or pnpm or yarn or
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Initial views

### Home

<img src="assets/img/desktop/desktop_home_1512x982.png" alt="desktop home 1512x982" />

### Filter on User List

<img src="assets/img/desktop/desktop_home_filter_1512x982.png" alt="desktop home 1512x982" />

### Footer

<img src="assets/img/desktop/desktop_home_footer_1512x982.png" alt="desktop home 1512x982" />

### User Profile

<img src="assets/img/desktop/desktop_user_profile_1512x982.png" alt="desktop user profile 1512x982" />

---

### Mobile

<p>
  <img src="assets/img/mobile/mobile_home_360x780.png" alt="mobile home 360x780" width="320" />
  <img src="assets/img/mobile/mobile_home_filter_360x780.png" alt="mobile home 360x780"  width="320" hspace="10"  />
</p>
<p>
  <img src="assets/img/mobile/mobile_home_footer_360x780.png" alt="mobile home footer 360x780"  width="320" />
  <img src="assets/img/mobile/mobile_user_profile_360x780.png" alt="mobile user profile 360x780" width="320" hspace="10"  />
</p>
