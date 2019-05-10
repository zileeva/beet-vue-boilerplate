<template>
  <ContentCard>
    <div class="about">
      <p>This website is part of the example collection to advertise and showcase the possibilities of Beet and the BitShares blockchain. Here is some more information on both</p>
    </div>
      <b-card-group deck>
      <b-card
          title="The BitShares Blockchain"
          img-src="https://github.com/bitshares/marketing/raw/master/media-kit/logo%2Btext.png"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
      >
          <b-card-text>
The BitShares Blockchain is an industrial-grade
decentralized platform built for high-performance financial
smart contracts. It represents the first decentralized autonomous community that lets its core token holder decide
on its future direction and products.
          </b-card-text>
          <b-button class="m-1" href="https://bitshares.org" variant="primary">Visit BitShares.org</b-button>
          <b-button href="https://www.bitshares.foundation/articles/2018-06-01-bitshareswhitepaper" variant="primary">Read Whitepaper</b-button>
      </b-card>
      <b-card
          title="Beet"
          img-src="https://imgp.whaleshares.io/0x0/https://img.whaleshares.io/wls-img/pixel/b49eabc8d6ef6a103bb2a2895acc10b7eee2e5a5.png"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
      >
          <b-card-text>
              Beet is a stand-alone key and identity manager and signing app for blockchains.
          </b-card-text>

          <b-button href="#" variant="primary">Get Beet now</b-button>
      </b-card>
      <b-card
          title="BitShares: Severely underrated?"
          img-src="https://github.com/bitshares/marketing/raw/master/publications/general/banner-bitshares-gokhshtein.png"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
      >
          <b-card-text>
              Why is #BitShares with its BTS token the best decentralized project that set the bar *very* high for standards? @kobratrading explains all you need to know in this article.
          </b-card-text>

          <b-button href="https://gokhshtein.com/product/bitshares-information/" variant="primary">Read full article</b-button>
      </b-card>
      </b-card-group>
  </ContentCard>
</template>
<script>
    import ContentCard from "../components/ContentCard";
    export default {
        components: {ContentCard}
    }
</script>
