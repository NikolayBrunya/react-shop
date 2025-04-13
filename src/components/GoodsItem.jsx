function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price: { regularPrice },
    displayAssets: [{ full_background }],
    addToCart = Function.prototype,
  } = props;

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToCart({
              mainId,
              displayName,
              regularPrice,
            })
          }
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {regularPrice} руб.
        </span>
      </div>
    </div>
  );
}

/*
{
    "mainId": "Character_FishBowl",
            "displayName": "Yennefer of Vengerberg",
            "displayDescription": "Powerful sorceress who walks her own path.",
            "displayType": "Outfit",
            "mainType": "outfit",
            "offerId": "v2:/d7f18403375282c44fab9f72a72624303b137e24ed87c5047cf7ac281440e07b",
            "devName": "[VIRTUAL]1 x Yennefer of Vengerberg, 1 x Bird Skull for 1500 MtxCurrency",
            "webURL": "/item-shop/outfits/yennefer-of-vengerberg-cbec0e6f",
            "offerDates": {
                "in": "2025-03-07T00:00:00.000Z",
                "out": "2025-03-10T23:59:59.999Z"
            },
            "colors": {
                "color1": "#b83ff5",
                "color2": "#0B37AA",
                "color3": "#1e0635",
                "textBackgroundColor": "#1e0635"
            },
            "displayAssets": [
                {
                    "displayAsset": "DAv2_Character_FishBowl",
                    "materialInstance": "MI_0",
                    "primaryMode": "MAX",
                    "productTag": "Product.BR",
                    "url": "https://media.fortniteapi.io/images/displayAssets/v2/MAX/DAv2_Character_FishBowl/MI_0.png",
                    "flipbook": null,
                    "background_texture": null,
                    "background": "https://media.fortniteapi.io/images/shop/d7f18403375282c44fab9f72a72624303b137e24ed87c5047cf7ac281440e07b/v2/MI_0/background.png",
                    "full_background": "https://media.fortniteapi.io/images/shop/d7f18403375282c44fab9f72a72624303b137e24ed87c5047cf7ac281440e07b/v2/MI_0/info.en.png"
                }
            ],
}
*/
export { GoodsItem };
