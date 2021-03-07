<template>
  <header
    class="bg-white shadow max-w-7xl mx-auto py-6 px-3 sm:px-6 lg:px-8 w-full"
  >
    <div class="lg:flex lg:items-center lg:justify-between">
      <div class="flex-1 min-w-0">
        <h2
          class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
        >
          Latest articles
        </h2>
      </div>
      <div class="mt-5 flex lg:mt-0 lg:ml-4">
        <span class="sm:ml-3">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
          >
            <svg
              class="-ml-1 mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add article
          </button>
        </span>
      </div>
    </div>
  </header>

  <section class="text-gray-600 body-font mb-auto relative z-1">
    <div class="container px-5 py-8 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div v-for="article in articles" :key="article.id" class="p-4 md:w-1/3">
          <div
            class="flex flex-col overflow-hidden rounded-lg shadow hover:shadow-xl transition duration-150 ease-in-out"
          >
            <router-link
              :to="{ path: `/articles/${article.slug}` }"
              :href="`/articles/${article.slug}`"
            >
              <picture>
                <img
                  class="object-cover w-full h-48"
                  style="background-size: cover; background-repeat: no-repeat; background-image: url({{ article.image }})"
                  loading="lazy"
                  sizes="(max-width: 3720px) 100vw, 3720px"
                  srcset=""
                  :src="article.image"
                  alt="Article"
                />
              </picture>
            </router-link>

            <div class="flex flex-col justify-between flex-1 p-6 bg-white">
              <div class="flex-1">
                <p class="text-sm font-medium leading-5 text-purple-800">
                  <span>{{ article.category }}</span>
                </p>
                <router-link
                  :to="{ path: `/articles/${article.slug}` }"
                  :href="`/articles/${article.slug}`"
                >
                  <h3
                    class="mt-1 text-xl font-bold leading-7 text-gray-900 hover:underline"
                  >
                    {{ article.title }}
                  </h3></router-link
                >
              </div>
              <div class="flex items-center mt-6">
                <div class="flex-shrink-0">
                  <img
                    class="w-10 h-10 rounded-full"
                    :src="article.authorAvatar"
                    alt="Zdjęcie autora"
                    loading="lazy"
                  />
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium leading-5 text-gray-900">
                    <span>{{ article.authorName }}</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="p-6 hidden">
              <h2
                class="absolute top-0 left-0 tracking-widest text-xs title-font font-medium text-white mb-1 bg-purple-900 rounded p-1 m-2"
              >
                {{ article.category }}
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                {{ article.title }}
              </h1>
              <p class="leading-relaxed mb-3">{{ article.description }}</p>
              <div class="flex items-center flex-wrap ">
                <a
                  class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span
                  class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    ></path>
                    <circle cx="12" cy="12" r="3"></circle></svg
                  >{{ article.views }}
                </span>
                <span
                  class="text-gray-400 inline-flex items-center leading-none text-sm"
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                    ></path></svg
                  >{{ article.comments }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-4 mt-8">
        <!-- Medium icons - https://heroicons.com/ -->
        <div
          class="px-6 py-6 bg-gray-700 sm:rounded-lg md:py-12 md:px-12 lg:py-16 lg:x-16 xl:flex xl:items-center"
        >
          <div class="xl:w-0 xl:flex-1">
            <h2
              class="text-2xl font-extrabold leading-8 tracking-tight text-white sm:text-3xl sm:leading-9 flex items-start"
            >
              <svg
                class="w-8 h-8 inline-block"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path></svg
              ><span class="ml-2">Chcesz być na bieżąco?</span>
            </h2>
            <p
              class="max-w-3xl mt-3 text-lg leading-6 text-white"
              id="newsletter-headline"
            >
              <span>Zapisz się na newsletter.</span>
            </p>
          </div>
          <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <form
              class="sm:flex"
              aria-labelledby="newsletter-headline"
              id="mc-embedded-subscribe-form"
              method="post"
              name="mc-embedded-subscribe-form"
              action="/newsletter"
            >
              <input
                class="w-full min-w-0 px-5 py-3 mb-2 sm:mb-0 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white sm:border-r border-dashed rounded-md sm:rounded-r-none appearance-none focus:outline-none focus:placeholder-gray-400"
                aria-label="Imię"
                type="text"
                name="MERGE1"
                id="MERGE1"
                required="required"
                minlength="3"
                placeholder="Imię"
              /><input
                class="w-full min-w-0 px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md sm:rounded-l-none appearance-none focus:outline-none focus:placeholder-gray-400"
                aria-label="Adres e-mail"
                type="email"
                name="MERGE0"
                id="MERGE0"
                required="required"
                placeholder="E-mail"
              /><input
                class="hidden"
                type="checkbox"
                id="gdpr_25767"
                name="gdpr[25767]"
                value="Y"
                checked="checked"
              />
              <div
                class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0"
              >
                <button
                  class="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-500 border border-transparent rounded-md hover:bg-main-50 focus:outline-none focus:bg-main-50"
                >
                  Zapisz mnie
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Articles",
  data() {
    return {};
  },
  setup() {
    let articles = ref([
      {
        id: 1,
        authorName: "RutsuKun",
        authorAvatar:
          "https://cdn-dev.rainingdreams.to/avatars/8d16f82a-5a3b-4722-8711-3c2496d7d424",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80",
        category: "DEV",
        title: "First article",
        slug: "first-article",
        description:
          "Ex duis aute ea cupidatat enim cupidatat occaecat anim eu nostrud mollit nulla aliqua.",
        views: 20,
        comments: 11,
      },
      {
        id: 2,
        authorName: "RutsuKun",
        authorAvatar:
          "https://cdn-dev.rainingdreams.to/avatars/8d16f82a-5a3b-4722-8711-3c2496d7d424",
        image: "https://wallpaperaccess.com/full/16082.jpg",
        category: "NEWS",
        title: "Second article",
        slug: "second-article",
        description:
          "Ex duis aute ea cupidatat enim cupidatat occaecat anim eu nostrud mollit nulla aliqua.",
        views: 50,
        comments: 9,
      },
      {
        id: 3,
        authorName: "RutsuKun",
        authorAvatar:
          "https://cdn-dev.rainingdreams.to/avatars/8d16f82a-5a3b-4722-8711-3c2496d7d424",
        image: "https://wallpaperaccess.com/full/16083.jpg",
        category: "TEST",
        title: "Third article",
        slug: "third-article",
        description:
          "Ex duis aute ea cupidatat enim cupidatat occaecat anim eu nostrud mollit nulla aliqua.",
        views: 100,
        comments: 40,
      },
    ]);

    return { articles };
  },
};
</script>
