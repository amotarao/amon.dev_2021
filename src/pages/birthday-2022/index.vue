<template>
  <div class="wrapper">
    <div class="top">
      <h1 class="title">あもんの誕生日2022</h1>
      <div class="image">
        <img
          src="~/assets/images/birthday-2022/icon.png"
          width="320"
          height="320"
          alt="あもんの画像 新潟県長岡の近くで"
        />
      </div>
      <div class="body">
        <p>2022年1月13日はあもんの26回目の誕生日！</p>
      </div>
    </div>
    <section class="kokorogamae-section">
      <div class="kokorogamae-body">
        <p>2021年、好き放題生きるようになりました</p>
        <p>
          こんなご時世にドイツに行く、休みの日に昼から酒を飲みまくる、仕事でやりたいことしかやらない、日本いっぱいめぐるなど
        </p>
        <p>また「多拠点生活」を始め、新しい環境でいろいろやり始めました</p>
        <p>家事、料理など</p>
        <p>2022年も、もっと楽しく過ごしていきます</p>
        <p>やりたいことがいっぱいあります</p>
        <p>九州・沖縄行く、ドイツ鉄道の駅放送の研究、いろいろ映像配信など</p>
        <p>みなさんも、こんなご時世ではありますが、あまり我慢せず楽しく過ごしていきましょう！</p>
        <p>今年もよろしくお願いいたします</p>
        <p>2022.1.13 さわむらあもん</p>
      </div>
    </section>
    <section class="hoshii-section">
      <h2 class="hoshii-head">ほしいもの！</h2>
      <div class="hoshii-links">
        <a
          class="hoshii-link"
          href="https://www.amazon.jp/hz/wishlist/ls/27ZCSIOWUNY5T?ref_=wl_share"
          target="_blank"
          rel="noopener"
          ><span>Amazon ほしい物リスト</span><span>ガジェット系</span></a
        >
        <a
          class="hoshii-link"
          href="https://www.amazon.jp/hz/wishlist/ls/27Z3RF755H2GO?ref_=wl_share"
          target="_blank"
          rel="noopener"
          ><span>Amazon ほしい物リスト</span><span>食べ物とか</span></a
        >
        <a
          class="hoshii-link steam"
          href="https://store.steampowered.com/wishlist/id/amotarao/#sort=order"
          target="_blank"
          rel="noopener"
          ><span>Steam ウィッシュリスト</span><span>ゲーム</span></a
        >
      </div>
      <p class="hoshii-yukukuru">
        <a href="/birthday-2022/yukukuru">ゆくくるユーザーには、ささやかですがお礼も用意しています 詳しくはこちら</a>
      </p>
    </section>
    <footer class="footer">
      <div class="footer-links">
        <a class="footer-link" href="https://amon.dev">amon.dev</a>
        <a class="footer-link" href="https://twitter.com/amotarao" target="_blank" rel="noopener">Twitter @amotarao</a>
        <a class="footer-link" href="https://github.com/amotarao" target="_blank" rel="noopener">GitHub @amotarao</a>
      </div>
      <p class="copyright">© 2022 Amon Sawamura</p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head() {
    return {
      title: 'あもんの誕生日2022',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { href: 'https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300;400;500&display=swap', rel: 'stylesheet' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
$green-100: #c8e6c9;
$blue-grey-100: #cfd8dc;
$blue-grey-900: #263238;

.wrapper {
  font-family: 'Kiwi Maru', serif;
  color: $blue-grey-900;
}

.top {
  position: relative;
  padding: 4rem 2rem;
  background-color: $green-100;
}

.title {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-align: center;
}

.image {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  overflow: hidden;
  border: 4px solid #fff;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
  }
}

.body {
  margin-top: 1rem;
  font-size: 0.9rem;
  text-align: center;
}

.kokorogamae-section {
  padding: 4rem 2rem;
}

.kokorogamae-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 480px;
  margin: 0 auto;
  font-size: 0.9rem;
  text-align: center;
}

.hoshii-section {
  padding: 4rem 2rem;
  border-top: 2px solid $blue-grey-900;
}

.hoshii-head {
  margin-bottom: 2rem;
  font-size: 1.5rem;
  text-align: center;
}

.hoshii-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.hoshii-link {
  display: block;
  padding: 0.5rem 2rem;
  font-weight: 500;
  color: #fff;
  text-align: center;
  background: #f90;
  border-radius: 4px;

  &.steam {
    background-color: #1b2838;
  }

  span {
    display: block;

    &:first-child {
      font-size: 0.7rem;
    }
  }
}

.hoshii-yukukuru {
  margin-top: 2rem;
  font-size: 0.9rem;
  text-align: center;

  a {
    text-decoration: underline;
  }
}

.footer {
  padding: 2rem 2rem;
  font-size: 0.9rem;
  background-color: $blue-grey-100;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  font-size: 0.9rem;
}

.footer-link {
  text-decoration: underline;
}

.copyright {
  margin-top: 1rem;
  font-size: 0.9rem;
  text-align: center;
}
</style>
