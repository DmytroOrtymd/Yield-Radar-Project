// config.js
// Safety Score factors (each 1–10):
//   longevity   — how long the platform has been operating
//   reserves    — transparency / proof of reserves
//   collateral  — whether deposits are backed/collateralised
//   audit       — security audits & track record
//   yieldGap    — how sustainable the APY is vs market rate
//   source      — clarity of where the yield comes from
//
// Weights applied in index.html:
//   longevity 15% · reserves 15% · collateral 20% · audit 15% · yieldGap 20% · source 15%

var platforms = [
{
“name”: “WhiteBIT”,
“apy”: 11.52,
“depositType”: “Flexible”,
“url”: “https://whitebit.com/referral/761864d2-aeb6-4a07-9543-7a65dd0eef8d”,
“factors”: {
“longevity”:   6,
“reserves”:    5,
“collateral”: 10,
“audit”:       5,
“yieldGap”:    3,
“source”:      9
}
},
{
“name”: “Neverless”,
“apy”: 2.42,
“depositType”: “Flexible”,
“url”: “https://neverless.com/referral?code=fortunecaptain/”,
“factors”: {
“longevity”:   2,
“reserves”:    1,
“collateral”: 10,
“audit”:       1,
“yieldGap”:    9,
“source”:      9
}
},
{
“name”: “Bybit”,
“apy”: 0.3,
“depositType”: “Flexible”,
“url”: “https://www.bybit.com/”,
“factors”: {
“longevity”:   7,
“reserves”:    9,
“collateral”: 10,
“audit”:       9,
“yieldGap”:    9,
“source”:      9
}
},
{
“name”: “Binance”,
“apy”: 0.04,
“depositType”: “Flexible / Fixed”,
“url”: “https://www.binance.com/”,
“factors”: {
“longevity”:   8,
“reserves”:    9,
“collateral”: 10,
“audit”:       6,
“yieldGap”:   10,
“source”:      9
}
}
];
