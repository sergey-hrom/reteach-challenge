<template>
  <AwesomeSection>
    <details>
      <summary title="Click to view the challenge description">
        <strong>
          <a href="https://github.com/reteach/frontend-challenge/tree/main">README</a>
        </strong>
      </summary>
      <ChallengeDescription />
    </details>

    <img src="/img.png" alt="User avatar" class="responsive-img" />
  </AwesomeSection>
  <UsersList />
</template>

<style scoped>
/*
1. Responsiveness - basically it already works everywhere except "img.png" above, I don't think there are a lot of
options but just using various CSS styles
*/
.responsive-img {
  max-height: 300px;
  max-width: 100%;
}

/* quite an inflexible solution using media queries */

/*.responsive-img {*/
/*  height: 300px;*/
/*}*/
/*@media (max-width: 580px) {*/
/*  .responsive-img {*/
/*    height: 180px;*/
/*  }*/
/*}*/
</style>
