<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">About my blog:</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt obcaecati ut sapiente. Eum dicta nihil beatae architecto quod explicabo nulla blanditiis vero sunt, cum, ad minus rem repellendus inventore iste?</p>
        <ClientOnly>
          <Intro title="Lorem ipsum dolor sit, amet" />
        </ClientOnly>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt obcaecati ut sapiente. Eum dicta nihil beatae architecto quod explicabo nulla blanditiis vero sunt, cum, ad minus rem repellendus inventore iste?</p>
        <img src="@/assets/img/about.jpg" alt="img">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt obcaecati ut sapiente. Eum dicta nihil beatae architecto quod explicabo nulla blanditiis vero sunt, cum, ad minus rem repellendus inventore iste?</p>
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped>
.about {
  text-align: center;
  p {
    margin-bottom: 10px;
  }
}
</style>