# 🌍 GET `/herd/:day`

## Response

```json
{
  "herd": [
    {
      "name": "Betty-1",
      "age": 4.13,
      "age-last-shaved": 4.12
    },
    {
      "name": "Betty-2",
      "age": 8.13,
      "age-last-shaved": 8
    },
    {
      "name": "Betty-3",
      "age": 9.63,
      "age-last-shaved": 9.5
    }
  ]
}
```

## Description

- Request param `day` must be a whole number
- In response data, in `herd` field elements:
  - `name`: the name of the yak
  - `age`: current yak age after `day` day
  - `age-last-shaved`: the age at which that yak was last shaved