# 🌍 GET `/stock/:day`

## Response

```json
{
  "milk": 1104.48,
  "skins": 4
}
```

## Description

- Request param `day` must be a whole number
- In response data:
  - `milk`: its the amount of milk in litres after `day` day of all yaks
  - `skins`: its the number of shaves of all yaks after `day` day