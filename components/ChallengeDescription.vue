<template>
  <div>
    <p>
      This project is a basic
      <a
        href="https://nuxt.com/docs/getting-started/introduction"
        target="_blank"
        >Nuxt 3</a
      >
      project which uses some free API data to fetch a list of users and display
      their information in a list.
    </p>

    <p>
      By clicking on one of the list's elements, you are redirected to the
      user's profile, which currently lacks a call to fetch user information.
    </p>

    <p>
      The website is intentionally minimal in styling—you do not need to work on
      this aspect.
    </p>

    <h2 class="challenge-subtitle">Tasks</h2>
    <ol>
      <li>
        <h3>Responsive:</h3>
        Change the current layout to add responsive behavior. Implement one
        approach, but consider alternatives.
      </li>

      <li>
        <h3>SSR vs SPA:</h3>
        Implement the call to fetch user data when navigating to the
        <a href="/user/:id">user profile</a> using a
        <a
          href="https://nuxt.com/docs/4.x/getting-started/data-fetching"
          target="_blank"
          >Nuxt built-in hook</a
        >. Use:
        <code>https://jsonplaceholder.typicode.com/users/{id}</code>
        <ul>
          <li>Display a few pieces of information (without extra styling).</li>
          <li>Change Nuxt config to SPA mode and compare with SSR mode.</li>
        </ul>
      </li>

      <li>
        <h3>Page Loading Performance:</h3>
        Navigate to the <a href="/gallery">Gallery page</a> (public page).
        <ol>
          <li>
            Suggest 2–3 simple recommendations for a small team to improve page
            loading. Include optional code ideas.
          </li>
          <li>
            What would *you* prioritize (top 3)? Implement some of them in code.
          </li>
        </ol>
      </li>

      <li>
        <h3>Architecture Reflection:</h3>
        The `/api/gallery` endpoint uses Nuxt API routes (BFF model).
        <ul>
          <li>
            Choose a simple first iteration architecture: keep BFF, go
            client-side, SSG, or other.
          </li>
          <li>
            (Bonus) Could Nuxt act as a full backend? What are pros and cons?
          </li>
        </ul>
      </li>

      <li>
        <strong>Accessibility (Bonus):</strong> Share thoughts on current
        accessibility. What improvements would you prioritize?
      </li>
    </ol>

    <h2 class="challenge-subtitle">Goal</h2>
    <p>
      The goal of the exercise is not to invest too much time to search or
      implement the perfect solution but rather to discuss the pros and cons of
      the different approaches on the different tasks.
    </p>
    <p>There are no right or wrong answers.</p>

    Therefore, please try to not:
    <ul>
      <li>Add too many extra elements</li>
      <li>Add too many extra styling</li>
    </ul>

    Feel free to ask any questions if anything is not clear!
  </div>
</template>

<script setup></script>
