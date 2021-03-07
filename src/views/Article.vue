<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-8 mx-auto">
      <div class="relative bg-white sm:rounded-lg shadow pb-6 mb-4">
        <!-- Article image -->
        <img
          class="sm:rounded-t-lg object-cover w-full h-48"
          :src="article.image"
          style="background-size: cover; background-repeat: no-repeat; background-image: url({{ article.image }})"
        />

        <!-- Article header -->
        <div class="text-lg mx-auto mt-6 sm:rounded-lg p-8">
          <p class="text-sm font-medium leading-5 text-purple-800">
            <span>{{ article.category }}</span>
          </p>
          <h1
            class="text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 text-cool-gray-700"
          >
            {{ article.title }}
          </h1>
          <p
            class="text-justify font-semibold tracking-tight text-cool-gray-700"
          >
            {{ article.description }}
          </p>
          <div class="flex items-center place-content-between pt-4">
            <div class="flex items-center">
              <img
                class="inline-block h-12 w-12 rounded-full"
                :src="article.authorAvatar"
              />
              <div class="text-left ml-2">
                <p
                  class="text-base leading-6 font-semibold tracking-wide text-gray-700"
                >
                  {{ article.authorName }}
                </p>
                <p class="text-base text-sm text-gray-500">
                  {{ article.date }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Article content -->
        <div
          class="prose prose-lg mx-auto sm:rounded-lg p-8 pt-0 text-justify leading-7"
        >
          <p>{{ article.content }}</p>
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
    return {
      article: {},
    };
  },
  mounted() {
    const slug = this.$route.params.slug;
    this.article = this.articles.find((a) => a.slug === slug);
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
        date: "2020-01-09",
        description:
          "Ex duis aute ea cupidatat enim cupidatat occaecat anim eu nostrud mollit nulla aliqua.",
        content: `Laborum nostrud minim sint sint eu nulla dolore cupidatat anim commodo aliquip. Et ex aute aliquip et tempor duis eiusmod ut id anim officia. Laboris duis ullamco minim aliqua reprehenderit. Est enim amet ex id est. Pariatur ullamco culpa exercitation duis amet.

Cupidatat adipisicing dolore duis proident tempor minim nulla nulla cupidatat laboris ullamco proident tempor pariatur. Consequat velit nisi officia laboris commodo elit eiusmod aliqua duis magna consectetur ut ut. Irure adipisicing est incididunt aliqua duis irure esse ut qui velit esse aliquip. Dolor culpa tempor et proident aute irure deserunt enim nisi pariatur exercitation excepteur exercitation. Excepteur commodo eiusmod aliquip ad esse adipisicing sit. Minim esse anim eiusmod enim.`,
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
        date: "2020-01-09",
        description:
          "Ex duis aute ea cupidatat enim cupidatat occaecat anim eu nostrud mollit nulla aliqua.",
        content: `Dolore culpa ut cupidatat non fugiat incididunt ullamco. Veniam amet irure ex nisi anim amet esse. Dolor nulla elit nulla duis officia laboris laboris amet occaecat eu et. Aliqua dolor adipisicing esse nostrud minim id commodo ipsum voluptate anim sunt dolor minim sit. Velit est velit enim consequat. Ea excepteur deserunt ex minim consequat aliquip labore eiusmod amet enim deserunt magna.

Nisi Lorem Lorem culpa culpa dolore id id amet pariatur Lorem. Ut laborum labore labore sunt minim. Aute quis nostrud Lorem ea commodo aute nulla sint Lorem esse cillum. Sit dolore occaecat qui duis ex esse reprehenderit eiusmod eiusmod esse quis culpa sint. Labore fugiat fugiat nulla eiusmod labore ad voluptate. Magna sunt do eu ad esse consequat mollit culpa consectetur. Ullamco ullamco exercitation consequat non.

Veniam eiusmod ipsum sit excepteur laboris et minim reprehenderit id consequat culpa. Do ad nisi occaecat irure enim cillum sunt qui dolore irure sit sit incididunt. Eu cupidatat consequat consequat occaecat nostrud dolore in fugiat Lorem laborum. Enim anim quis incididunt occaecat consequat. Aute nisi pariatur adipisicing fugiat magna fugiat commodo amet adipisicing labore.`,
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
        date: "2020-01-09",
        description:
          "Ex duis aute ea cupidatat enim cupidatat occaecat anim eu nostrud mollit nulla aliqua.",
        content: `Magna nulla aliquip est excepteur enim. Anim deserunt magna irure commodo ullamco quis incididunt non sint aliquip. Id esse occaecat amet velit ut. Anim veniam consectetur aliqua cillum duis in proident elit non duis. Id id fugiat sit aliqua consectetur. Consectetur velit enim consequat mollit ex.

Irure esse aute id duis sint. Ipsum elit et laboris cillum aliqua Lorem enim id laboris adipisicing. Nulla irure amet dolore fugiat mollit commodo ex. Do cupidatat ut et proident aliqua. Amet tempor tempor ut esse deserunt ullamco.

Pariatur aliquip nostrud veniam amet eu. Magna aute cupidatat velit non tempor veniam Lorem tempor reprehenderit non ad elit dolor. Elit ullamco ipsum consectetur Lorem esse et amet velit. Ipsum pariatur Lorem proident sint tempor ex amet irure officia minim aute. Do velit pariatur irure consectetur aliquip magna dolor nostrud ut excepteur do aute. Quis cupidatat Lorem ut ut incididunt aliqua culpa.

Consequat qui ipsum anim cillum sint. Esse et ullamco veniam consequat veniam cillum enim culpa labore. Nisi non sint ullamco sint cillum sint anim velit voluptate qui veniam.`,
        views: 100,
        comments: 40,
      },
      {
        id: 4,
        authorName: "RutsuKun",
        authorAvatar:
          "https://cdn-dev.rainingdreams.to/avatars/8d16f82a-5a3b-4722-8711-3c2496d7d424",
        image: "https://wallpaperaccess.com/full/16084.jpg",
        category: "DEV",
        title: "Fourth article",
        slug: "fourth-article",
        date: "2020-01-09",
        description:
          "Ex duis aute ea cupidatat enim cupidatat occaecat anim eu nostrud mollit nulla aliqua.",
        content: `Laborum do elit minim officia excepteur est pariatur occaecat ex. Laboris incididunt duis ex sunt laborum dolor veniam consequat. Culpa quis ad dolore nostrud proident veniam et est Lorem cillum sunt sint.

Excepteur voluptate minim eu cupidatat culpa. Proident magna nulla magna ipsum laborum dolore. Id reprehenderit labore adipisicing exercitation sint cupidatat do. Ut cillum ut nulla proident ullamco aliquip eu anim do. Fugiat eiusmod nulla cupidatat in consequat occaecat qui sunt proident duis.

Tempor magna eu non enim voluptate dolore pariatur cillum irure occaecat dolore. Est adipisicing incididunt eu mollit ut amet. Elit magna dolor id quis. Nulla incididunt occaecat sunt duis Lorem sint ea proident eu. Ad sit reprehenderit pariatur est amet eu enim quis nisi voluptate consequat Lorem velit. Pariatur esse do ipsum esse. Duis tempor nisi sint sunt voluptate ad in dolore fugiat.

Quis nostrud adipisicing ex aute cupidatat voluptate ex fugiat eiusmod. Laboris proident ex dolor ullamco. Voluptate excepteur qui officia dolore exercitation deserunt esse occaecat nulla id. Culpa proident exercitation exercitation sint laboris commodo esse occaecat ipsum excepteur magna est culpa do. Sint tempor mollit et enim elit exercitation esse mollit in sint. Fugiat fugiat dolor excepteur minim reprehenderit id magna non ea. Ad eiusmod ipsum nulla fugiat dolor nisi sunt.

Cupidatat deserunt culpa tempor voluptate adipisicing anim enim aute reprehenderit magna aliqua tempor ullamco. Deserunt sit et ad irure reprehenderit non Lorem adipisicing officia consequat. Incididunt amet laboris id ex sint aute tempor adipisicing officia labore. Dolor do excepteur in dolor cillum culpa.`,
        views: 100,
        comments: 40,
      },
      {
        id: 5,
        authorName: "RutsuKun",
        authorAvatar:
          "https://cdn-dev.rainingdreams.to/avatars/8d16f82a-5a3b-4722-8711-3c2496d7d424",
        image: "https://wallpaperaccess.com/full/16085.jpg",
        category: "DEV",
        title: "Fifth article",
        slug: "fifth-article",
        date: "2020-01-09",
        description:
          "Ex duis aute ea cupidatat enim cupidatat occaecat anim eu nostrud mollit nulla aliqua.",
        content: `Est ullamco eu cupidatat irure sint est proident. Fugiat mollit anim aliquip in duis consectetur incididunt ex. Dolor tempor mollit dolore ad irure. Cillum sit fugiat anim fugiat veniam do in laboris nostrud excepteur do aliquip consequat exercitation. Proident cillum cupidatat anim culpa deserunt adipisicing officia anim eiusmod eiusmod minim. Labore enim qui ex eu aliqua culpa. Mollit minim Lorem tempor nostrud.

Cupidatat aliquip fugiat excepteur tempor ea aliqua do qui sunt adipisicing ad do. Id adipisicing aliqua qui consectetur tempor velit sunt excepteur esse eu sunt. Exercitation proident id minim duis deserunt ipsum sint consectetur cillum commodo ad ut mollit consectetur. Sint incididunt enim eiusmod officia dolore non Lorem.

Exercitation tempor ea veniam tempor commodo sint magna. Ex dolore voluptate exercitation cupidatat elit reprehenderit sunt labore consectetur. Et do irure velit nisi irure labore. Elit fugiat eu irure Lorem minim eu consectetur cillum non excepteur enim aute. Id amet eu Lorem pariatur exercitation.

Tempor esse ea nostrud incididunt est. Culpa proident proident ut esse deserunt. Laboris quis dolor veniam voluptate aliquip labore irure. Nulla enim mollit dolore qui non occaecat ex proident. Veniam eiusmod irure dolore laborum amet esse commodo commodo culpa. Aute velit cillum nisi mollit eu veniam ipsum.

Fugiat nisi culpa sint amet voluptate sunt consequat ipsum officia esse sunt aliquip ut. Est non ad commodo eiusmod mollit. Ullamco sunt consequat non eiusmod fugiat.

Aliquip incididunt et minim ad ad enim ipsum. Sint deserunt nisi mollit sint sit enim eu ullamco non do. Anim laboris nisi aliqua mollit. Est occaecat proident dolor ex incididunt ullamco officia do consectetur eu cupidatat mollit.`,
        views: 100,
        comments: 40,
      },
      {
        id: 6,
        authorName: "RutsuKun",
        authorAvatar:
          "https://cdn-dev.rainingdreams.to/avatars/8d16f82a-5a3b-4722-8711-3c2496d7d424",
        image: "https://wallpaperaccess.com/full/16086.jpg",
        category: "DEV",
        title: "Sixth article",
        slug: "sixth-article",
        date: "2020-01-09",
        description:
          "Ex duis aute ea cupidatat enim cupidatat occaecat anim eu nostrud mollit nulla aliqua.",
        content: `Consequat labore voluptate fugiat ullamco qui. Adipisicing esse non tempor est mollit. In consequat ipsum sint id commodo velit veniam excepteur aute ut deserunt est amet. Cupidatat mollit pariatur ea sint et ut cillum voluptate et nisi quis sint duis nulla. Et minim laborum excepteur eiusmod occaecat aliqua.

Culpa mollit labore nostrud consequat dolor amet et quis dolore cillum irure sint exercitation est. Elit elit id aliqua laborum ex labore velit. Mollit et reprehenderit aute dolor commodo.

In qui tempor velit reprehenderit velit cupidatat duis ullamco excepteur nostrud. Sit deserunt occaecat aliqua elit pariatur magna. Anim excepteur nisi nostrud elit culpa eu tempor aliqua eu Lorem qui. Amet labore consectetur pariatur ad. Incididunt ad id excepteur non quis tempor. Occaecat aute excepteur mollit aute velit nisi consequat duis ullamco aliqua.

Sit voluptate et eiusmod enim eiusmod ea occaecat non. Nisi eiusmod id esse voluptate id id enim deserunt est ex. Aute ex dolore ea do pariatur duis ad occaecat id non sint aliquip. Occaecat ad aute dolore cillum minim irure amet Lorem cillum. Laboris eiusmod occaecat aliquip deserunt aliquip anim excepteur ipsum sunt magna.

Aliqua aliquip magna laborum esse laborum in incididunt incididunt ut. Qui occaecat enim reprehenderit sint ea non incididunt enim voluptate nostrud. Sit ullamco cillum nostrud nulla ipsum aute exercitation reprehenderit commodo ullamco velit. Veniam labore consectetur velit pariatur laboris pariatur. Ea consequat exercitation cupidatat ullamco.

Laborum deserunt incididunt qui ex eiusmod excepteur in sint minim. Dolore consequat eiusmod voluptate sit incididunt est dolor amet ipsum velit velit. Minim id mollit velit tempor veniam dolore ea minim in et aute magna. Commodo est minim et sit eiusmod adipisicing magna nulla quis officia sit officia aliqua. Duis ut aliqua reprehenderit nisi irure magna consequat do occaecat quis. Magna pariatur ullamco nisi aliqua irure occaecat. Sint incididunt excepteur aliquip sint incididunt commodo exercitation ipsum officia fugiat velit nisi.`,
        views: 100,
        comments: 40,
      },
    ]);

    return { articles };
  },
};
</script>
